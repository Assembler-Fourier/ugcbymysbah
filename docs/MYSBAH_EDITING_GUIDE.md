# Mysbah Website Editing Guide

## Give Mysbah GitHub Access

From the repository owner account:

1. Open `https://github.com/Assembler-Fourier/ugcbymysbah`.
2. Open **Settings**.
3. Open **Collaborators & teams**.
4. Choose **Add people**.
5. Enter her GitHub username or email.
6. Give her **Write** access.
7. Ask her to accept the GitHub invitation.

## Automatic Publishing

The GitHub repository is connected to the Vercel project `ugcbymysbah`.

Every commit to the `main` branch triggers a production deployment. There is no separate upload step and no environment variable is required.

## Portfolio System

Before every development session and production build, the portfolio generator scans the category folders in `public/videos` (`beauty`, `skincare`, `haircare`, `wellness`, `lifestyle`, listed in `data/categories.json`) for `.mp4` and `.webm` files. Each folder becomes one portfolio section, in that order, with videos in rows that flow down the page. Empty sections are hidden.

Recommended filename pattern, `number-Brand - Format.mp4`:

```text
public/videos/beauty/07-Rare Beauty ASMR.mp4
public/videos/haircare/09-Olaplex - Hair routine.mp4
```

The part before ` - ` becomes the pink brand label and the part after it becomes the format line. Labels for existing videos can also be set by id in `data/portfolio-items.json`. Videos placed directly in `public/videos` still appear, under Lifestyle. Do not edit `data/generated-video-manifest.json`; Vercel refreshes it automatically during deployment.

## Poster Images

For the best client presentation, each video should have a clear poster JPG showing the product, creator, or result immediately.

The poster must use the same base filename:

```text
public/videos/haircare/09-Olaplex - Hair routine.mp4
public/images/video-posters/09-Olaplex - Hair routine.jpg
```

If a poster is missing, a branded cover is shown. The site does not preload every full video, so a growing library stays fast.

## Replace Profile Images

Use these exact paths:

| File | Website location |
| --- | --- |
| `public/images/00-main-profile-photo.jpeg` | Hero, social preview source, and main creator image |
| `public/images/00-travel-profile-photo.jpeg` | About section image |

Use portrait JPEG files and keep the same filenames.

## Edit Links And Copy

Main content and public profile links are in:

```text
app/page.tsx
data/site.ts
```

Portfolio sections and labels are in:

```text
data/categories.json
data/portfolio-items.json
```

## Safety

- Do not upload `.env.local`, passwords, API keys, or private briefs.
- Do not edit `.vercel`.
- Do not upload a client video without permission to display it publicly.
- GitHub blocks individual files above 100 MB.
- Keep web copies compressed so mobile visitors can start playback quickly.
