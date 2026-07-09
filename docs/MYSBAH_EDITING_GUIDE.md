# Mysbah Editing Guide

This is the easiest no-extra-service workflow:

1. Mysbah uploads images or videos in GitHub.
2. If she uses the fixed video slot names, she does not need to edit code.
3. GitHub saves the change.
4. Vercel automatically redeploys the website.

For the shortest version, use:

```text
MYSBAH_START_HERE.md
```

## Give Mysbah Access To Edit

Do this from your GitHub account:

1. Open the repo:

```text
https://github.com/Assembler-Fourier/ugcbymysbah
```

2. Click **Settings**.
3. Click **Collaborators & teams** in the left sidebar.
4. Click **Add people**.
5. Search her GitHub username or email.
6. Give her **Write** access.
7. Send the invite.

She needs to accept the invite before she can upload files or commit changes.

## Change Profile Pictures

Use these exact image names:

| File name | Where it appears |
| --- | --- |
| `public/images/00-main-profile-photo.jpeg` | Top hero photo, social preview image, Lifestyle card |
| `public/images/00-travel-profile-photo.jpeg` | Travel portfolio card |

To replace one, upload a new JPEG with the exact same name. If GitHub says the file already exists, delete the old one first, then upload the new one.

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

This is already connected for `ugcbymysbah`. Every push/commit to `main` should publish the live website.

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
4. Upload the video with one of these exact names:

```text
01-lifestyle-creator-intro.mp4
02-beauty-demo-routine.mp4
03-travel-nomad-story.mp4
04-wellness-testimonial-hook.mp4
05-skincare-texture-shot.mp4
06-unboxing-friend-rec-energy.mp4
```

5. Commit the upload to `main`.
6. Vercel will redeploy automatically.

The website already knows where each of those files belongs. If the file exists, the matching card becomes a video. If it does not exist, the card stays as a designed placeholder.

## Video Slot Map

| Upload this file | Goes into this card |
| --- | --- |
| `01-lifestyle-creator-intro.mp4` | Lifestyle / Creator intro |
| `02-beauty-demo-routine.mp4` | Beauty / Demo routine |
| `03-travel-nomad-story.mp4` | Travel / Nomad story |
| `04-wellness-testimonial-hook.mp4` | Wellness / Testimonial hook |
| `05-skincare-texture-shot.mp4` | Skincare / Texture shot |
| `06-unboxing-friend-rec-energy.mp4` | Unboxing / Friend-rec energy |

There are matching `.placeholder.txt` files inside `public/videos` so she can see the slots in GitHub.

## Add A Poster Image

If the video needs a thumbnail/poster:

1. Upload the image to:

```text
public/images
```

2. Open:

```text
data/portfolio-items.json
```

3. Add or change `imageSrc` beside the matching `videoSrc`:

```json
{
  "title": "Skincare",
  "type": "Texture shot",
  "color": "from-[#b54868] to-[#f6c453]",
  "imageSrc": "/images/skincare-poster.jpeg",
  "videoSrc": "/videos/05-skincare-texture-shot.mp4"
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
