import { defineCollection, z } from "astro:content";

const postsCollection = defineCollection({
  // Astro can understand if we use image as a type
  schema: ({ image }) =>
    z.object({
      author: z.string(),
      date: z.string(),
      image: image(),
      title: z.string(),
    }),
});

// Posts must match with the directory where content is in

export const collections = {
  posts: postsCollection,
};
