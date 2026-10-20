import { access, readFile, readdir, writeFile } from "node:fs/promises";
import { extname, join, parse } from "node:path";

const root = process.cwd();
const videoDirectory = join(root, "public", "videos");
const posterDirectory = join(root, "public", "images", "video-posters");
const captionDirectory = join(root, "public", "captions");
const categoriesPath = join(root, "data", "categories.json");
const metadataPath = join(root, "data", "portfolio-items.json");
const outputPath = join(root, "data", "generated-video-manifest.json");
const videoExtensions = new Set([".mp4", ".webm"]);
const posterExtensions = [".jpg", ".jpeg", ".webp", ".png", ".avif"];
const fallbackCategory = "lifestyle";

// "09-Olaplex - Hair routine.mp4" -> label "Olaplex", format "Hair routine"
function labelsFromFilename(filename) {
  const name = parse(filename)
    .name.replace(/^\d+[\s_-]*/, "")
    .trim();
  const [label, ...rest] = name.split(/\s+-\s+/);
  const tidy = (text) =>
    text
      .replace(/[_-]+/g, " ")
      .replace(/\s+/g, " ")
      .trim()
      .replace(/\b\w/g, (character) => character.toUpperCase());

  return {
    label: tidy(label),
    format: rest.length > 0 ? tidy(rest.join(" - ")) : undefined,
  };
}

async function fileExists(path) {
  try {
    await access(path);
    return true;
  } catch {
    return false;
  }
}

async function readJson(path, fallback) {
  try {
    return JSON.parse(await readFile(path, "utf8"));
  } catch (error) {
    if (error && typeof error === "object" && error.code === "ENOENT") {
      return fallback;
    }

    throw error;
  }
}

async function listVideos(directory) {
  const entries = await readdir(directory, { withFileTypes: true }).catch(
    (error) => {
      if (error && typeof error === "object" && error.code === "ENOENT") {
        return [];
      }

      throw error;
    },
  );

  return entries
    .filter(
      (entry) =>
        entry.isFile() &&
        videoExtensions.has(extname(entry.name).toLowerCase()),
    )
    .map((entry) => entry.name)
    .sort((first, second) =>
      first.localeCompare(second, undefined, {
        numeric: true,
        sensitivity: "base",
      }),
    );
}

async function findPoster(id) {
  for (const extension of posterExtensions) {
    const filename = `${id}${extension}`;

    if (await fileExists(join(posterDirectory, filename))) {
      return `/images/video-posters/${filename}`;
    }
  }

  return undefined;
}

async function findCaptions(id) {
  const filename = `${id}.en.vtt`;

  return (await fileExists(join(captionDirectory, filename)))
    ? `/captions/${filename}`
    : undefined;
}

const categories = await readJson(categoriesPath, []);
const metadata = await readJson(metadataPath, []);
const ids = new Set();
const samples = [];

async function addSample(filename, categoryId, urlFolder) {
  const id = parse(filename).name;

  if (ids.has(id)) {
    throw new Error(`Duplicate portfolio video id: ${id}`);
  }

  ids.add(id);
  const configured = metadata.find((item) => item.id === id);
  const fromName = labelsFromFilename(filename);
  const posterSrc = await findPoster(id);
  const captionSrc = await findCaptions(id);

  samples.push({
    id,
    category: categoryId,
    label: configured?.label ?? fromName.label,
    format: configured?.format ?? fromName.format ?? "Short-form UGC",
    videoSrc: `/videos/${urlFolder}${filename}`,
    ...(posterSrc ? { posterSrc } : {}),
    ...(captionSrc ? { captionSrc } : {}),
  });
}

for (const category of categories) {
  for (const filename of await listVideos(join(videoDirectory, category.id))) {
    await addSample(filename, category.id, `${category.id}/`);
  }
}

// Videos uploaded straight into public/videos still appear, under Lifestyle.
for (const filename of await listVideos(videoDirectory)) {
  console.warn(
    `Note: ${filename} is not inside a category folder, so it is shown under ${fallbackCategory}.`,
  );
  await addSample(filename, fallbackCategory, "");
}

await writeFile(outputPath, `${JSON.stringify(samples, null, 2)}\n`, "utf8");
console.log(`Generated ${samples.length} portfolio video entries.`);
