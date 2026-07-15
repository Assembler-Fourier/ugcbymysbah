# UGC by Mysbah

Production-ready UGC creator portfolio for Mysbah Ahmad. Built with Next.js, TypeScript, Tailwind CSS, and Vercel.

Production URL:

```text
https://ugcbymysbah.com
```

Repository:

```text
https://github.com/Assembler-Fourier/ugcbymysbah
```

## Features

- Responsive, conversion-focused creator landing page
- Custom pink, sage, charcoal, and white visual system
- Automatic portfolio discovery from `public/videos`
- Lightweight poster-based cards with one-at-a-time video playback
- Horizontal portfolio rail that stays compact as more videos are added
- Brand carousel and public Upwork proof
- Correct Instagram, TikTok, LinkedIn, Upwork, and email links
- SEO metadata for UGC creator searches in Pakistan
- Person, service, website, and FAQ structured data
- Dynamic Open Graph image, sitemap, robots, and web manifest
- Canonical custom-domain redirects
- No database, paid service, or environment variable required

## Local Setup

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

On Windows PowerShell, use `npm.cmd` if script execution policy blocks `npm`.

## Production Build

```bash
npm run lint
npm run build
npm run start
```

## Docker

```bash
docker build -t ugcbymysbah .
docker run --rm -p 3000:3000 ugcbymysbah
```

The Docker image uses Next.js standalone output.

## Vercel Deployment

The GitHub `main` branch is connected to the Vercel project `ugcbymysbah`. Each commit to `main` deploys automatically.

For a fresh Vercel import:

1. Import `Assembler-Fourier/ugcbymysbah` in Vercel.
2. Keep the detected framework as Next.js.
3. Use `npm install` and `npm run build`.
4. Leave the output directory at its default.
5. Set `main` as the production branch.
6. Add `ugcbymysbah.com` and `www.ugcbymysbah.com` to the project domains.

## Add Videos

Upload any `.mp4` or `.webm` to:

```text
public/videos
```

Numbered filenames control portfolio order:

```text
07-product-demo.mp4
08-travel-story.mp4
09-skincare-testimonial.mp4
```

Every file appears automatically. The entire library remains available without making the page longer.

For an optional thumbnail, upload a JPG with the same base name:

```text
public/images/video-posters/07-product-demo.jpg
```

See `MYSBAH_START_HERE.md` for the shortest editor workflow and `docs/MYSBAH_EDITING_GUIDE.md` for full instructions.

## Public Contact Links

- Instagram: `https://www.instagram.com/mysbahdoingugc__/`
- TikTok: `https://www.tiktok.com/@mysbah_ugc`
- LinkedIn: `https://www.linkedin.com/in/misbah-ahmad-401076214/`
- Upwork: `https://www.upwork.com/freelancers/~010ac3ca797266679e`
- Email: `misbahugcwork@gmail.com`

No phone number or WhatsApp link is published.
