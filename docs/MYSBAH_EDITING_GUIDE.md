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

Before every development session and production build, the portfolio generator scans `public/videos` for `.mp4` and `.webm` files. It sorts filenames naturally and keeps every file visible in the same compact horizontal showcase and video viewer.

Recommended filename pattern:

```text
01-lifestyle-creator-intro.mp4
02-beauty-demo-routine.mp4
03-travel-nomad-story.mp4
04-wellness-testimonial-hook.mp4
05-skincare-texture-shot.mp4
06-unboxing-friend-rec-energy.mp4
07-brand-campaign-name.mp4
```

New filenames are converted into readable titles automatically. Configured filenames can also use custom titles from `data/portfolio-items.json`. Do not edit `data/generated-video-manifest.json`; Vercel refreshes it automatically during deployment.

## Poster Images

For the best client presentation, each video should have a clear poster JPG showing the product, creator, or result immediately.

The poster must use the same base filename:

```text
public/videos/07-brand-campaign-name.mp4
public/images/video-posters/07-brand-campaign-name.jpg
```

If a poster is missing, a branded cover is shown. The site does not preload every full video, so a growing library stays fast.

## Replace Profile Images

Use these exact paths:

| File | Website location |
| --- | --- |
| `public/images/00-main-profile-photo.jpeg` | Hero, social preview source, and main creator image |
| `public/images/00-travel-profile-photo.jpeg` | About and travel image |

Use portrait JPEG files and keep the same filenames.

## Edit Links And Copy

Main content and public profile links are in:

```text
app/page.tsx
data/site.ts
```

Portfolio labels for the original named slots are in:

```text
data/portfolio-items.json
```

## Safety

- Do not upload `.env.local`, passwords, API keys, or private briefs.
- Do not edit `.vercel`.
- Do not upload a client video without permission to display it publicly.
- GitHub blocks individual files above 100 MB.
- Keep web copies compressed so mobile visitors can start playback quickly.
