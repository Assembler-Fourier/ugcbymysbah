import { access, readFile, readdir, writeFile } from "node:fs/promises";
import { extname, join, parse } from "node:path";

const root = process.cwd();
const videoDirectory = join(root, "public", "videos");
const posterDirectory = join(root, "public", "images", "video-posters");
const metadataPath = join(root, "data", "portfolio-items.json");
const outputPath = join(root, "data", "generated-video-manifest.json");
const videoExtensions = new Set([".mp4", ".webm"]);
const posterExtensions = [".jpg", ".jpeg", ".webp", ".png", ".avif"];

function titleFromFilename(filename) {
  return parse(filename)
    .name.replace(/^\d+[\s_-]*/, "")
    .replace(/[\s_-]+/g, " ")
    .replace(/\b\w/g, (character) => character.toUpperCase());
}

async function fileExists(path) {
  try {
    await access(path);
    return true;
  } catch {
    return false;
  }
}

async function readMetadata() {
  try {
    return JSON.parse(await readFile(metadataPath, "utf8"));
  } catch (error) {
    if (error && typeof error === "object" && error.code === "ENOENT") {
      return [];
    }

    throw error;
  }
}

async function findPoster(id, configuredPoster) {
  for (const extension of posterExtensions) {
    const filename = `${id}${extension}`;

    if (await fileExists(join(posterDirectory, filename))) {
      return `/images/video-posters/${filename}`;
    }
  }

  if (
    typeof configuredPoster === "string" &&
    (await fileExists(join(root, "public", configuredPoster.replace(/^\//, ""))))
  ) {
    return configuredPoster;
  }

  return undefined;
}

const metadata = await readMetadata();
const entries = await readdir(videoDirectory, { withFileTypes: true }).catch(
  (error) => {
    if (error && typeof error === "object" && error.code === "ENOENT") {
      return [];
    }

    throw error;
  },
);

const filenames = entries
  .filter(
    (entry) =>
      entry.isFile() && videoExtensions.has(extname(entry.name).toLowerCase()),
  )
  .map((entry) => entry.name)
  .sort((first, second) =>
    first.localeCompare(second, undefined, {
      numeric: true,
      sensitivity: "base",
    }),
  );

const ids = new Set();
const samples = [];

for (const filename of filenames) {
  const id = parse(filename).name;

  if (ids.has(id)) {
    throw new Error(`Duplicate portfolio video id: ${id}`);
  }

  ids.add(id);
  const videoSrc = `/videos/${filename}`;
  const configured = metadata.find((item) => item.videoSrc === videoSrc);
  const posterSrc = await findPoster(id, configured?.imageSrc);

  samples.push({
    id,
    title: configured?.title ?? titleFromFilename(filename),
    type: configured?.type ?? "Short-form UGC sample",
    videoSrc,
    ...(posterSrc ? { posterSrc } : {}),
  });
}

await writeFile(outputPath, `${JSON.stringify(samples, null, 2)}\n`, "utf8");
console.log(`Generated ${samples.length} portfolio video entries.`);
