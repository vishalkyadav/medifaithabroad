# Site image replacement guide

Homepage paths: **`lib/content/home-images.ts`**. Contact and admission heroes: **`lib/content/site-images.ts`**. Country page heroes: **`lib/content/country-images.ts`** (or optional `heroImage` on each country module). Replace files under **`public/images/`** or update paths in those files—avoid scattering paths in components.

## How to swap an image (no code change)

1. Export your new image (JPG or PNG recommended).
2. Save it to `public/images/` using the **same filename** as the current asset (see table below).
3. Hard-refresh the browser (Ctrl+F5) or restart `npm run dev` if the old file is cached.

## How to use a new filename

1. Place the file in `public/images/` (or `public/images/flags/`, `public/images/services/`).
2. Open `lib/content/home-images.ts`.
3. Change the path string for that key (e.g. `hero: "/images/my-new-hero.jpg"`).
4. Run `npm run build` to confirm the path resolves.

---

## Homepage images

| Section | Map key | Current path | Where it appears | Aspect / size hint | Object fit |
|--------|---------|--------------|------------------|-------------------|------------|
| Hero background | `hero` | `/images/medical-team-corridor.png` | Full-width hero | ~16:9, min 1920×1080 | `cover`, focal left on mobile |
| About (split) | `about` | `/images/medical-team-corridor.png` | About band, right column | 4:3 frame | `cover` |
| Mission & vision | `missionVision` | `/images/mission-vision.jpg` | Left column graphic | 4:3–5:4 | **`contain`** (has text—do not crop) |
| Services — approach | `studentsAirport` | `/images/students-airport.png` | Below service icons | 4:3 | `cover` |
| Leadership portrait | `leadershipPortrait` | `/images/leadership-chairman.png` | Leadership section | 3:4 portrait | **`contain`** (PNG may have transparency) |
| Trust band background | `universityCampus` | `/images/university-campus-kazakhstan.png` | Full-width trust section | Wide landscape | `cover` |
| Admission process | `studentLounge` | `/images/student-lounge.jpg` | Process split image | 4:3 | `cover` |
| Journey / campus | `journeyCampus` | `/images/university-campus-kazakhstan.png` | Journey split image | 16:10 | `cover` |
| Final CTA background | `ctaBackground` | `/images/students-airport.png` | Bottom CTA | Wide | `cover` |

**Note:** `hero` and `about` currently share the same file. You can point them to different files in `home-images.ts` if you want distinct photos.

---

## Service showcase (homepage + `/services`)

Large row images: **`servicePhotos`**. Compact thumbnails beside titles: **`serviceThumbnails`**. Alt text: **`servicePhotoAlt`** / **`serviceThumbnailAlt`**. All in `lib/content/home-images.ts`.

### Large images (`servicePhotos`)

| Key | Path | Size | Service |
|-----|------|------|---------|
| `universitySelection` | `/images/University11.png` | 1538×1022 | University selection |
| `admissionAssistance` | `/images/services/Admissionsassistance.png` | 1536×1024 | Application assistance |
| `visaProcessing` | `/images/services/visa-processing.png` | 440×280 | Visa processing |
| `preDepartureSupport` | `/images/services/Airport Travel Assistance Consultation.png` | 1672×941 | Pre-departure support |
| `scholarshipGuidance` | `/images/services/Scholarship-guidance (2).png` | 1672×941 | Scholarship guidance |

Landscape photos work best; display uses **`object-cover`** in the alternating row layout.

### Thumbnails (`serviceThumbnails`)

| Key | Path | Notes |
|-----|------|--------|
| `universitySelection` | `/images/services/university-selectio.png` | Historic university building |
| `admissionAssistance` | `/images/services/University Application Assistance Office.png` | Counsellor + application form |
| `visaProcessing` | `/images/students-airport.png` | Airport travel (square 644×644) |
| `preDepartureSupport` | `/images/services/pre-departure-support.png` | Student accommodation |
| `scholarshipGuidance` | `/images/services/scholarship-guidance.png` | Tablet with scholarship charts |

Thumbnails render at ~44–56px square with **`object-cover`**.

### Legacy icon map (`serviceIcons`)

Optional small PNGs under `/images/services/`; not used in `ServiceShowcase` after the photo-thumbnail update. Keep files if you reuse them elsewhere.

---

## Country flags

Defined in `countryFlagSrc` in `lib/content/home-images.ts`.

| Slug | Path |
|------|------|
| russia | `/images/flags/russia.png` |
| poland | `/images/flags/poland.png` |
| china | `/images/flags/china.png` |
| uzbekistan | `/images/flags/uzbekistan.png` |
| kazakhstan | `/images/flags/kazakhstan.png` |
| georgia | `/images/flags/georgia.png` |
| nepal | `/images/flags/nepal.png` |
| kyrgyzstan | `/images/flags/kyrgyzstan.png` |
| bangladesh | `/images/flags/bangladesh.png` |
| germany | `/images/flags/germany.png` |
| united-kingdom | *(none — SVG flag in code)* |

Replace a flag by overwriting the PNG in `public/images/flags/`. For UK, add a PNG and set `"united-kingdom": "/images/flags/united-kingdom.png"` in `countryFlagSrc`.

Circular crop is applied in CSS; use centered flag artwork.

---

## Contact page (`/contact`)

Defined in **`lib/content/site-images.ts`** (`siteImages`).

| Section | Map key | Current path | Where it appears | Aspect / size hint | Object fit |
|--------|---------|--------------|------------------|-------------------|------------|
| Hero | `contactHero` | `/images/students-airport.png` | Top photo hero | ~16:9, min 1920×1080 | `cover`, `object-center` |

Contact option icons use fixed paths in `components/contact/ContactOptions.tsx`: `/images/icons/phone.svg`, `/images/icons/email.svg` (`contain` at 40×40).

---

## Admission process (`/admission-process`)

Defined in **`lib/content/site-images.ts`**.

| Section | Map key | Current path | Where it appears | Aspect / size hint | Object fit |
|--------|---------|--------------|------------------|-------------------|------------|
| Hero | `admissionHero` | `/images/medical-team-corridor.png` | Top photo hero | Wide landscape | `cover`, `object-center` |

---

## Country pages (`/countries/[slug]`)

Hero image per slug in **`lib/content/country-images.ts`** (`countryHeroImages` / `getCountryHeroImage`). The living section reuses the same hero file for a side image.

| Slug | Map entry | Current path (default) |
|------|-----------|-------------------------|
| russia | `countryHeroImages.russia` | `/images/university-campus-kazakhstan.png` |
| kazakhstan | `kazakhstan` | `/images/university-campus-kazakhstan.png` |
| uzbekistan, kyrgyzstan | | `/images/university-campus-kazakhstan.png` (`journeyCampus`) |
| georgia | | `/images/student-lounge.jpg` |
| china, germany | | `/images/students-airport.png` |
| poland, bangladesh | | `/images/medical-team-corridor.png` |
| nepal | | `/images/medical-team-corridor.png` (`about` key) |
| united-kingdom | | `/images/university-campus-kazakhstan.png` |
| *(fallback)* | `getCountryHeroImage` default | `/images/medical-team-corridor.png` |

Germany currently overrides the generic country image mapping in `lib/content/countries/germany.ts`:

| Germany image role | Content key | Current local path | Display treatment |
|--------------------|-------------|--------------------|-------------------|
| Hero | `heroImage` → `homeImages.studentsLibrary` | `/images/high-angle-students-learning-library.png` | `PhotoHero`, cover crop; wide landscape source |
| Study-planning image | `competitiveEdge.image` → `homeImages.studentLounge` | `/images/student-lounge.jpg` | 4:3 frame, `object-cover`; keep the student in crop |

The old `/images/university-germany.png` depicts the Reichstag with “Germany” lettering, not a university. It is intentionally not used as a university/campus photograph. The replacement photos are generic student-study imagery, not representations of a specific German campus. A genuine German university/campus photo is still needed for a location-specific hero.

To override one country only, set `heroImage: "/images/your-file.jpg"` on that country’s module in `lib/content/countries/*.ts`.

---

## Global / layout (not in home-images.ts)

| Asset | Path | Notes |
|-------|------|--------|
| Logo | `/images/medifaith-logo.png` | Used as a compact mark beside the “Medifaith Abroad” text wordmark in `Header.tsx`; keep the image contained. |
| Consultation illustration | `/images/consultation.svg` | Optional legacy asset |

---

## Final audit (2026-03-21)

- **Branding:** Header uses the Medifaith logo mark from `/images/medifaith-logo.png` and a visible “Medifaith Abroad” text wordmark. The SVG at `/images/medifaith-abroad-logo.svg` renders the unrelated “Earthly Elegance” wordmark and must not be used.
- **Homepage services:** Large + thumbnail paths are defined in `servicePhotos` / `serviceThumbnails` in `home-images.ts` (see table below).
- **Repeatable checks:** `node scripts/final-audit.mjs` (requires Playwright; dev server on port 3000). Screenshots land in `qa-screenshots/final-audit/`.

### Service showcase mappings (`home-images.ts`)

| Service | Large photo | Thumbnail |
|---------|-------------|-----------|
| University selection | `university-campus-kazakhstan.png` | `services/university-selection.png` |
| Application assistance | `services/admission-assistance.png` | `student-lounge.jpg` |
| Visa processing | `hero-students-park.png` (1536×1024 large) | `hero-students-park.png` |
| Pre-departure support | `park.png` (1396×932 large) | `services/pre-departure-support.png` |
| Scholarship guidance | `services/scholarship-guidance.png` | `medical-team-corridor.png` |

## Assets to preserve aspect / content

- **`mission-vision.jpg`** — contains “Vision & Mission” text → always **`object-contain`**.
- **`medifaith-logo.png`** — Medifaith Abroad logo mark, displayed with a text wordmark in the header.
- **`medifaith-abroad-logo.svg`** — do not use; its outlined wordmark renders “Earthly Elegance”.
- **Leadership PNG** — often portrait with transparency → **`object-contain`**.
- **Service icons** — illustrative icons → **`object-contain`**.

---

## Image resolution audit (2026-10-22)

| Asset | Dimensions | ~Size | Notes |
|-------|------------|-------|--------|
| `hero-students-park.png` | 1536×1024 | 2.3 MB | Homepage hero, visa service large, several country/page heroes |
| `park.png` | 1396×932 | 2.1 MB | Pre-departure service large; China/Nepal country heroes |
| `university-campus-kazakhstan.png` | 1152×673 | 882 KB | University service large; Russia/Kazakhstan/UK heroes |
| `leadership-chairman.png` | 914×1308 | 1.1 MB | Leadership (unchanged) |
| `medical-team-corridor.png` | 933×622 | 986 KB | About bands, Poland/Bangladesh fallback |
| `students-airport.png` | 644×644 | 539 KB | Small — avoid large full-width use |
| `services/visa-processing.png` | 440×280 | 199 KB | Thumbnail/icon only — too small for large rows |
| `services/*.png` (others) | 586×329 | 187–365 KB | Service art + thumbnails |
| `student-lounge.jpg` | 640×959 | 80 KB | Services page hero |
| `mission-vision.jpg` | — | 88 KB | `object-contain` graphic |
| Flags | 100×100 | 2–10 KB | Country grid |

Run `node scripts/verify-image-paths.mjs` to confirm referenced `/images/*` paths exist.

## Unused / legacy files (safe to ignore)

- `public/images/testimonial-accent.png` — not wired on homepage.
- `public/images/bench.svg`, `consultation.svg` — legacy illustrations.

---

## Original WordPress source

Copies were taken from `public_html/wp-content/uploads/` (read-only archive). To re-copy an original, copy into `site/public/images/` without modifying `public_html`.
