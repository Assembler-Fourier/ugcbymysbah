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

1. Open `public/videos` in GitHub.
2. Click **Add file**, then **Upload files**.
3. Name the new video with the next number, for example:

```text
07-new-product-demo.mp4
08-travel-hotel-story.mp4
09-skincare-testimonial.mp4
```

4. Click **Commit changes** and commit to `main`.
5. Wait a few minutes for Vercel.

That is all. Every MP4 or WebM in the folder appears automatically. Adding more videos does not make the page longer because the portfolio stays in one horizontal showcase.

## Add A Video Thumbnail

This is optional, but it makes the portfolio look strongest.

1. Save a clear vertical frame as a JPG.
2. Give it the exact same base name as the video.
3. Upload it to `public/images/video-posters`.

Example:

```text
public/videos/07-new-product-demo.mp4
public/images/video-posters/07-new-product-demo.jpg
```

Without a JPG, the website uses a branded Mysbah cover.

## Change The Main Picture

Replace this file with another JPEG using the exact same name:

```text
public/images/00-main-profile-photo.jpeg
```

## Change The Travel Picture

Replace:

```text
public/images/00-travel-profile-photo.jpeg
```

## Remember

- Add new videos. Do not delete older ones unless they should leave the portfolio.
- Use MP4 or WebM for videos and JPG for thumbnails.
- Number filenames to control their order.
- Keep each video below GitHub's 100 MB per-file limit.
- Commit to `main` to publish.
- Never upload passwords, `.env.local`, or private client files.
