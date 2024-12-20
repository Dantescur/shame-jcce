import { createDirectus, rest } from "@directus/sdk";
import type { CustomDirectusTypes } from "../interfaces/types";

// Global schema for shared information (e.g., site-wide settings)
type Global = {
  title: string;
  description: string;
};

// Author schema to reflect a one-to-many relationship with posts
type Author = {
  id: number; // Use auto-incremented or UUID for primary key
  name: string;
  posts: Post[]; // Relation: One author can have many posts
};

// Page schema for static content
type Page = {
  title: string;
  content: string;
  slug: string;
};

type Post = {
  id: number;
  image: string;
  title: string;
  author: Author | number;
  content: string;
  published_date: string;
  slug: string;
};

type Schema = {
  posts: Post[];
  global: Global;
  pages: Page[];
  authors: Author[];
};

const directus = createDirectus<CustomDirectusTypes>(
  "https://mature-specially-monster.ngrok-free.app"
).with(rest());

export default directus;
