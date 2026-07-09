# Mysbah Editing Guide

This is the easiest no-extra-service workflow:

1. Mysbah uploads images or videos in GitHub.
2. She edits one JSON file.
3. GitHub saves the change.
4. Vercel automatically redeploys the website.

## One-Time Vercel Auto-Deploy Setup

Do this once in Vercel:

1. Open the Vercel dashboard.
2. Open the `ugcbymysbah` project.
3. Go to **Settings** -> **Git**.
4. Connect the GitHub repository:

```text
Assembler-Fourier/ugcbymysbah
```

5. If Vercel asks for permission, install/authorize the Vercel GitHub integration.
6. Set the production branch to:

```text
main
```

After this, every push/commit to `main` will publish the live website.

## Add A Portfolio Video

Use small compressed MP4 files. Keep videos under 50 MB when possible. GitHub has a hard 100 MB file limit.

1. Go to the GitHub repo:

```text
https://github.com/Assembler-Fourier/ugcbymysbah
```

2. Open:

```text
public/videos
```

3. Click **Add file** -> **Upload files**.
4. Upload the video.
5. Name files with lowercase letters and hyphens, for example:

```text
skincare-demo.mp4
travel-hotel-review.mp4
beauty-unboxing.mp4
```

6. Commit the upload.

## Put The Video On The Website

1. Open:

```text
data/portfolio-items.json
```

2. Click the pencil/edit button.
3. Add a `videoSrc` line to the card you want to replace:

```json
{
  "title": "Skincare",
  "type": "Texture shot",
  "color": "from-[#b54868] to-[#f6c453]",
  "videoSrc": "/videos/skincare-demo.mp4"
}
```

4. Commit the change.
5. Wait for Vercel to redeploy.

## Add A Poster Image

If the video needs a thumbnail/poster:

1. Upload the image to:

```text
public/images
```

2. Add `imageSrc` beside `videoSrc`:

```json
{
  "title": "Skincare",
  "type": "Texture shot",
  "color": "from-[#b54868] to-[#f6c453]",
  "imageSrc": "/images/skincare-poster.jpeg",
  "videoSrc": "/videos/skincare-demo.mp4"
}
```

## Change Card Text

Edit only these fields:

```json
"title": "Beauty",
"type": "Demo / routine"
```

Keep punctuation, quotes, and commas exactly like the other cards.

## Important

- Do not upload `.env.local`.
- Do not edit `.vercel`.
- Do not upload huge raw phone videos.
- Compress videos before uploading.
- If the site will have many videos, use Cloudinary, YouTube, TikTok, or Instagram embeds instead of storing every video in GitHub.
