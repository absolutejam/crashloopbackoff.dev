import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

import starlight from "@astrojs/starlight";

const starlightIntegrations = [
  starlight({
    title: "📖 Docs",
    plugins: [],
    disable404Route: true,
    expressiveCode: false,
    sidebar: [
      {
        label: "DevOps",
        autogenerate: { directory: "docs/devops" },
      },
      {
        label: "Programming",
        autogenerate: { directory: "docs/programming" },
      },
    ],
    editLink: {
      baseUrl: "https://github.com/absolutejam/crashloopbackoff.dev/edit/main/",
    },
  }),
];

// https://astro.build/config
export default defineConfig({
  site: "https://crashloopbackoff.dev",
  integrations: [...starlightIntegrations, mdx(), sitemap(), tailwind()],
  markdown: {
    syntaxHighlight: "shiki",
    gfm: true,
    shikiConfig: {
      theme: "catppuccin-mocha",
    },
  },
  redirects: {
    "/": "/blog",
  },
});

