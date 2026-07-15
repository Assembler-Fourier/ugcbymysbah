# Portfolio Videos

Every `.mp4` or `.webm` file in this folder appears automatically in the website portfolio.

## Add A New Video

1. Give the file the next number, such as `07-product-demo.mp4`.
2. Upload it to this folder.
3. Commit the upload to `main`.
4. Vercel publishes the update automatically.

The number controls the order. The rest of the filename becomes the title, so:

```text
07-pepsi-lifestyle-hook.mp4
```

appears as `Pepsi Lifestyle Hook`.

All videos remain in the portfolio. The website keeps them in a fixed-height horizontal showcase, and clients can move through every sample in the full-screen player.

## Add A Thumbnail

Upload a JPG with the same base name to:

```text
public/images/video-posters
```

Example:

```text
Video:  public/videos/07-pepsi-lifestyle-hook.mp4
Poster: public/images/video-posters/07-pepsi-lifestyle-hook.jpg
```

The poster is optional. If it is missing, the website creates a branded cover and still plays the video normally.

## File Tips

- Use portrait 9:16 MP4 where possible.
- Keep the original file name after it is published so old links keep working.
- Keep each web video reasonably compressed for faster client playback.
- GitHub rejects individual files larger than 100 MB.
- Do not delete the existing videos when adding new ones.

For a very large future library, the same gallery can be connected to a video CDN. No change is needed for the current portfolio.
