# 🌌 Nebula Nook — Universal Hub

This version keeps the original front page aesthetic and turns the rest of the site into separate destinations.

## Pages

- `index.html` — home base / original UI
- `games.html` — larger arcade with Meteor Storm, Cosmic Boss, Memory Matrix, Star Runner
- `chat.html` — friend-station UI with local demo storage; ready to connect to a backend
- `videos.html` — YouTube video orbit with space + Stray Kids shelves
- `facts.html` — weird, oddly specific space/science archive
- `lab.html` — interactive toys

## GitHub Pages

Upload all files to the root of your repository. Keep `index.html` in the root.

Settings → Pages → Deploy from a branch → `main` → `/ (root)`.

## About the friend chat

A truly shared chat cannot be created with only static HTML/CSS/JS because GitHub Pages has no server/database. The included page is a local demo: messages persist in that browser via `localStorage`.

For a real friends chat, connect the page to a backend such as Firebase or Supabase with authentication and a private database. Never put service-account credentials or secret keys in this public repository.

## YouTube

The video page embeds YouTube players instead of copying/re-hosting videos. The included Stray Kids examples are from the official Stray Kids YouTube channel. Replace iframe video IDs to curate your own shelves.
