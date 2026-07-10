# UGC by Mysbah

A short, creative, conversion-focused UGC landing page for **Mysbah**. Built with Next.js, TypeScript, and Tailwind CSS for free deployment on Vercel.

Live production URLs:

```text
https://ugcbymysbah.vercel.app
https://ugcbymisbah.vercel.app
https://misbahugc.vercel.app
https://mysbahbutt.vercel.app
https://misbahahmad.vercel.app
https://workwithmisbah.vercel.app
```

## What This Site Includes

- Static-first Next.js App Router website
- Responsive mobile-first layout
- SEO metadata and Open Graph metadata
- Compact hero, animated logo ticker, portfolio samples, services, proof/reviews, CTA, and contact sections
- Direct email booking and collaboration CTAs
- TikTok profile link for `@mysbah_ugc`
- Clean edit-friendly content in `app/page.tsx`
- Placeholder media slots ready for real UGC videos/images

## Local Setup

```bash
npm install
npm run dev
```

On Windows PowerShell, if script execution policy blocks `npm`, use `npm.cmd install`, `npm.cmd run dev`, and `npm.cmd run build`.

Open the local URL shown in your terminal, usually:

```bash
http://localhost:3000
```

## Build

```bash
npm run build
```

Optional production preview:

```bash
npm run start
```

## Docker

Build the production image:

```bash
docker build -t ugcbymysbah .
```

Run it locally:

```bash
docker run --rm -p 3000:3000 ugcbymysbah
```

Then open:

```bash
http://localhost:3000
```

The Docker build uses Next.js standalone output, so the runtime image only copies the production server, static assets, and public files.

## Deploy Free on Vercel

Recommended clean Vercel project/link options:

- `https://ugcbymysbah.vercel.app`
- `https://ugcbymisbah.vercel.app`
- `https://misbahugc.vercel.app`
- `https://mysbahbutt.vercel.app`
- `https://misbahahmad.vercel.app`
- `https://workwithmisbah.vercel.app`

1. Push this project to a GitHub repository.
2. Go to [Vercel](https://vercel.com/).
3. Choose **Add New Project**.
4. Import the repository.
5. Keep the default framework setting as **Next.js**.
6. Use these build settings:
   - Install command: `npm install`
   - Build command: `npm run build`
   - Output directory: leave blank/default
7. Deploy on the free Hobby plan.

No database, paid service, or environment variables are required.

## Replacing Placeholder Media

The current build uses `public/images/00-main-profile-photo.jpeg` for the main creator image and `public/images/00-travel-profile-photo.jpeg` for the travel image. Designed portfolio placeholders are ready for future UGC work.

For the easiest editing workflow, use:

```text
MYSBAH_START_HERE.md
docs/MYSBAH_EDITING_GUIDE.md
```

To add real media later:

1. Add images or short video thumbnails to `public/images/`.
2. Add portfolio videos to the fixed slots in `public/videos/`.
3. Edit portfolio text or paths in `data/portfolio-items.json`.
4. Keep image and video files compressed for performance. For heavier videos, host them externally and link or embed them carefully.

Helpful code comments are already included near the relevant media sections.

## Editing Copy and Links

Most visible landing page content lives in:

```text
app/page.tsx
```

Update this file to change:

- Navigation labels
- Email, TikTok, LinkedIn, and Upwork links
- Services
- Brand logo ticker items
- Portfolio cards and proof/review cards

## Contact CTA

The main collaboration button uses:

```text
mailto:misbahugcwork@gmail.com?subject=UGC%20Collaboration%20Inquiry
```

## Notes

- The public landing page uses the client-provided display name **Mysbah**.
- TikTok uses `https://www.tiktok.com/@mysbah_ugc`.
- No phone number or WhatsApp link is published on the website.
- Brand logo ticker wording reflects client-provided content references.
- Testimonials/proof copy uses public Upwork profile signals and avoids inventing client quotes.
