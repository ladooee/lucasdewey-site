import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const home = defineCollection({
  loader: glob({
    pattern: "home.md",
    base: "./src/content"
  }),
  schema: z.object({
    eyebrow: z.string(),
    subtitle: z.string(),
    intro: z.string(),
    timelineEyebrow: z.string(),
    timelineHeading: z.string(),
    focusLabel: z.string(),
    focusText: z.string(),
    locationLabel: z.string(),
    locationText: z.string(),
    structureLabel: z.string(),
    structureText: z.string(),
    contentsEyebrow: z.string(),
    contentsHeading: z.string(),
    contentsLinkText: z.string(),
    workflowEyebrow: z.string(),
    workflowSteps: z.array(z.string()).min(1),
    notesEyebrow: z.string(),
    notesText: z.string()
  })
});

const experiences = defineCollection({
  loader: glob({
    pattern: "**/*.md",
    base: "./src/content/experiences"
  }),
  schema: z.object({
    // This schema matches src/content/experience-template.md.
    // Add new experience pages by copying that file into src/content/experiences/.
    company: z.string(),
    logoText: z.string().optional(),
    logoImage: z.string().optional(),
    summary: z.string(),
    order: z.number(),
    featured: z.boolean().default(false),
    role: z.string(),
    years: z.string(),
    location: z.string(),
    heroImage: z.string(),
    highlights: z.array(z.string()).min(1),
    publicRecognition: z.object({
      summary: z.string(),
      excerpt: z.string().optional(),
      image: z.string().optional(),
      sourceLabel: z.string(),
      sourceUrl: z.string().url()
    }).optional(),
    tools: z.array(z.string()).min(1),
    projects: z.array(
      z.object({
        title: z.string(),
        summary: z.string(),
        contribution: z.array(z.string()).min(1),
        result: z.string(),
        images: z.array(z.string()).optional()
      })
    ).min(1)
  })
});

export const collections = { home, experiences };
