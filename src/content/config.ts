import { defineCollection, z } from "astro:content";
import { docsSchema } from "@astrojs/starlight/schema";

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    created_at: z.coerce.date(),
    updated_at: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]).optional(),
    image: z.object({
      src: z.string(),
      alt: z.string(),
    }),
  }),
});

const docs = defineCollection({ schema: docsSchema() });

export const collections = { blog, docs };
