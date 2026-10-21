# Mysbah Start Here

You only need GitHub. Every change committed to `main` is published by Vercel automatically.

Repository:

```text
https://github.com/Assembler-Fourier/ugcbymysbah
```

Live website:

```text
https://ugcbymysbah.com
```

## Add A Portfolio Video

1. Open the folder for the right section in GitHub:

```text
public/videos/skincare
public/videos/beauty
public/videos/asmr       (ASMR & Product: ASMR, B-roll, app and product videos)
```

2. Click **Add file**, then **Upload files**.
3. Name the video `number-Brand - Format.mp4`, for example:

```text
05-CeraVe - Texture demo.mp4
06-Essence - Unboxing.mp4
```

The brand appears in the pink label under the video, and the format appears underneath it.

4. Click **Commit changes** and commit to `main`.
5. Wait a few minutes for Vercel.

Videos flow down the page in rows, so adding more never needs arrows or swiping. A section with no videos stays hidden until you add one.

Vercel creates the website's video list during deployment. Do not edit `data/generated-video-manifest.json`; it is refreshed automatically from the files you upload.

## Add A Video Thumbnail

This is optional, but it makes the portfolio look strongest.

1. Save a clear vertical frame as a JPG.
2. Give it the exact same name as the video (without `.mp4`).
3. Upload it to `public/images/video-posters`.

Example:

```text
public/videos/skincare/05-CeraVe - Texture demo.mp4
public/images/video-posters/05-CeraVe - Texture demo.jpg
```

Without a JPG, the website uses a branded Mysbah cover.

## Change The Main Picture

Replace this file with another JPEG using the exact same name:

```text
public/images/00-main-profile-photo.jpeg
```

## Change The Other Pictures

Replace any of these with a JPEG using the exact same name:

```text
public/images/hero-wink.jpg        small polaroid at the top
public/images/about-beach-cutout.png   beach cutout next to the reviews (transparent PNG)
public/images/about-working.jpg        headphones polaroid next to the reviews
```

## Change The Brand Logos

Logos live in `public/logos`. The list of brands is near the top of `app/page.tsx`.

## Remember

- Use MP4 or WebM for videos and JPG for thumbnails.
- Keep videos small (about 3 to 10 MB each) so the site loads fast on phones.
- Number filenames to control their order.
- Keep each video below GitHub's 100 MB per-file limit.
- Commit to `main` to publish.
- Never upload passwords, `.env.local`, or private client files.
