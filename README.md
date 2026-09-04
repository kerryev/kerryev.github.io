# Evan Kerr — Portfolio Site

A clean, minimalist portfolio site (static HTML/CSS/JS, no build step). Dark
"blueprint" theme in JetBrains Mono, blue/grey palette, card-based project
gallery, work experience timeline, and individual project detail pages with
multiple content layouts.

## Running it

No server or build step needed. Just open `index.html` in a browser.
(Double-click the file, or right-click → Open With → your browser.)

If you want a local server (sometimes nicer for testing, and needed for the
resume PDF viewer to load correctly), and you have Python installed:

```
cd path/to/New Portfolio
python -m http.server 8000
```

then visit `http://localhost:8000`.

## File map

```
index.html              Home / about page
portfolio.html          Project gallery
project-detail.html     Individual project pages (multiple layout "formats")
experience.html         Work experience timeline
resume.html             Resume PDF viewer
css/style.css           All styling — CSS variables at the top
js/data.js              ← THE ONLY FILE YOU NEED FOR CONTENT UPDATES
js/render.js            Renders data.js into HTML — shouldn't need edits
images/                 Photos and renders, one subfolder per project
pdf/                    Resume + project reports/drawings
```

## Adding a project (the common case)

Open `js/data.js`, find the `projects` array, and copy the `PROJECT_TEMPLATE`
block near the bottom of that array into it:

```js
{
  id: "your-project-slug",
  icon: "",
  title: "Project Title",
  image: "",                 // path under images/, or leave blank for a placeholder
  tags: ["Tag1", "Tag2"],
  summary: "One sentence summary.",
  details: "Longer description of what you did, why, and the outcome.",
  link: "",                  // optional — link to a repo or write-up
},
```

Save the file, refresh the browser. That's it — no HTML to touch. The
project will appear in the gallery and get its own detail page, accessible
by clicking the card.

- **New tags just work.** If you use a tag that isn't in `TAG_COLORS`
  (further down in `data.js`), it automatically gets a color from the
  fallback palette. To pick a specific color, add an entry to `TAG_COLORS`.
- **Real renders/photos:** drop the image file under `images/<Project Name>/`
  and set `image: "images/<Project Name>/yourfile.png"`.
- **Richer detail pages:** set `format: "format1"` and add a `format1`
  object with a `sections` array for the full narrative layout used by the
  existing projects — see any current project entry as a reference.

## Adding a work experience entry

Open `js/data.js`, find the `experience` array, and copy the
`EXPERIENCE_TEMPLATE`-style block in (most recent job first):

```js
{
  dateRange: "Month Year – Month Year",
  company: "Company Name",
  role: "Role Title",
  skills: ["Tool 1", "Tool 2"],
  bullets: [
    "Bullet one.",
    "Bullet two.",
  ],
},
```

## Updating the about / skills section

Same file, `js/data.js`:

- `SITE.about` — intro line, photo, photo caption, the "about me" bullets,
  and the "fun facts" bullets.
- `SITE.skills` — an array of skill groups (title + lines). Each line can
  have a `label` (the bold prefix like "CAD:") and an optional nested `sub`
  line (like the "PLM:" sub-bullet under CAD).

## Swapping your photo

Update `SITE.about.photo` in `data.js` to point at the image file (currently
`images/Home Page/evimage.jpg`). If the file fails to load, the page shows
a small placeholder box so nothing looks broken.

## Updating nav links / last-updated date

`SITE.meta` at the very top of `data.js` — name, role, resume link,
LinkedIn URL, email, and the "Last Updated" date shown on every page.

## Notes on the design

- Font is JetBrains Mono throughout (loaded from Google Fonts) — chosen
  to read as technical/drafting rather than a generic sans-serif.
- Colors all live as CSS variables at the top of `css/style.css` if you
  want to retheme later.
