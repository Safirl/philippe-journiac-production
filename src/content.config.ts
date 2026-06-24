import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const tableaux = defineCollection({
  loader: glob({ base: "./src/content/tableaux", pattern: "**/*.md" }),
  schema: z.object({
    title: z.string(),
    image: z.string(),
    dimensions: z.string(),
    for_sale: z.boolean(),
    price: z.number(),
    date_created: z.date(),
    published: z.boolean(),
  }),
});

const actualites = defineCollection({
  loader: glob({ base: "./src/content/actualites", pattern: "**/*.md" }),
  schema: z.object({
    title: z.string(),
    lede: z.string(),
    image: z.string(),
    publish_at: z.date(),
    published: z.boolean(),
  }),
});

const distinctions = defineCollection({
  loader: glob({ base: "./src/content/distinctions", pattern: "**/*.md" }),
  schema: z.object({
    type: z.string(),
    location: z.string(),
    received_at: z.date(),
  }),
});

export const collections = {
  actualites: actualites,
  tableaux: tableaux,
  distinctions: distinctions,
};
