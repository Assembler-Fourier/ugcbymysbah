# Portfolio Videos

Videos live in one folder per portfolio section:

```text
public/videos/beauty
public/videos/skincare
public/videos/haircare
public/videos/wellness     (shown as "Health & Wellness")
public/videos/lifestyle
```

Every `.mp4` or `.webm` file inside one of these folders appears automatically in that section of the website. A section with no videos is hidden until you add one.

## Add A New Video

1. Open the right category folder in GitHub, for example `public/videos/haircare`.
2. Click **Add file**, then **Upload files**.
3. Name the file like this: `number-Brand - Format.mp4`

```text
09-Olaplex - Hair routine.mp4
```

appears with the pink label **Olaplex** and the small text **Hair routine**.
The number controls the order inside the section.

4. Commit the upload to `main`. Vercel publishes it automatically.

## Add A Thumbnail

Upload a JPG with exactly the same name (without `.mp4`) to:

```text
public/images/video-posters
```

Example:

```text
Video:  public/videos/haircare/09-Olaplex - Hair routine.mp4
Poster: public/images/video-posters/09-Olaplex - Hair routine.jpg
```

Without a thumbnail, the website shows a branded Mysbah cover.

## File Tips

- Use portrait 9:16 MP4 videos.
- Keep each video small (about 3 to 10 MB). Big 4K files make the site slow on phones.
- GitHub rejects individual files larger than 100 MB.
- Every video name must be unique across all folders.
