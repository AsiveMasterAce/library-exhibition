# Library Exhibition

A visually striking "Dark Academic" themed exhibition website built with Nuxt 3, Tailwind CSS, and SQLite (better-sqlite3).

## Features
- Hero poster section
- Gallery with modal preview
- Schedule section
- Attendee registration form
- Admin CSV export endpoint

## Stack
- Nuxt 3 (TypeScript)
- Tailwind CSS
- SQLite (better-sqlite3)
- Nitro server routes

## Setup

1. **Install dependencies:**
   ```sh
   npm install
   ```
2. **Set admin password:**
   - Copy `.env` and set `NUXT_ADMIN_PASSWORD`.
3. **Run in development:**
   ```sh
   npm run dev
   ```
4. **Build for production:**
   ```sh
   npm run build && npm run start
   ```

## Admin CSV Export
- Go to `/admin/export` and enter the admin password to download attendees as CSV.

## Database
- SQLite file: `database.db` (auto-created)
- Table: `attendees`

## Folder Structure
- See project tree for details.

## Security
- Admin password is never exposed to the frontend.
- All inputs are validated and sanitized.

---
Replace image assets in `assets/images/posters/` and `assets/images/gallery/` with your own.
