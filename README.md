# Lucas Dewey Portfolio

Minimal Astro portfolio for `lucasdewey.com`, built around company experience pages generated from Markdown content files.

## Quick start

```bash
npm install
npm run dev
```

## Edit the homepage

The homepage content now lives in one Markdown file:

- `src/content/home.md`

That file controls:
- the hero eyebrow and intro
- the editable subtitle under your name
- the right-side summary labels and text
- the `Contents` section heading/link text
- the workflow and notes text near the bottom of the homepage

## Add a new experience

The site is organized by company, not by standalone project.
Each company gets one Markdown file, and the projects at that company live inside that file.

### Fast path

1. Create an image folder:
   - `public/images/experiences/my-company/`
2. Add your images:
   - `hero.jpg`
   - `project-1.jpg`
   - `project-2.jpg`
   - add more if you want
3. Copy the template file:
   - `src/content/experience-template.md`
   - paste the copy into `src/content/experiences/my-company.md`
4. Replace the placeholder text, company info, and nested project list
5. Save the file

That is enough to make the experience appear automatically:
- on the homepage if `featured: true`
- on `/experience/`
- on its own page at `/experience/my-company/`

### Recommended naming

- Markdown filename becomes the URL slug
- Example:
  - file: `src/content/experiences/brightdrop.md`
  - URL: `/experience/brightdrop/`

### Image path pattern

If your folder is `public/images/experiences/my-company/`, your Markdown should point to images like:

```md
heroImage: /images/experiences/my-company/hero.jpg
projects:
  - title: Project One
    images:
      - /images/experiences/my-company/project-1.jpg
  - title: Project Two
    images:
      - /images/experiences/my-company/project-2.jpg
```

### Fields to edit in every experience file

- `company`: company name shown on cards and company page
- `logoText`: short wordmark or initials shown in the contents cards
- `logoImage`: optional square logo file used in the card and company header
- `order`: sort order, lower numbers appear first
- `featured`: `true` shows on homepage, `false` keeps it off the homepage
- `role`: your job title at that company
- `years`: date range for that experience
- `location`: company location
- `summary`: short blurb for the homepage and experience grid
- `heroImage`: main card and company hero image
- `highlights`: top-level bullets about the experience
- `publicRecognition`: optional compact recognition block with a source link
- `tools`: core tools or methods used during that experience
- `projects`: nested list of projects from that company
- `projects[].images`: optional project image list

### Easiest way to duplicate an existing experience

```bash
cp src/content/experience-template.md src/content/experiences/my-company.md
```

Then open `src/content/experiences/my-company.md` and replace every placeholder.

The homepage contents section and the `/experience/` index are both generated automatically from the Markdown collection.

## Deploy

The repo includes a GitHub Pages workflow in `.github/workflows/deploy.yml`.
