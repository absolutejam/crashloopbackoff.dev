import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

import starlight from "@astrojs/starlight";
import { astroExpressiveCode } from "@astrojs/starlight/expressive-code";

const starlightIntegrations = [
  astroExpressiveCode({
    themes: ["one-dark-pro"],
  }),
  starlight({
    title: "📖 Docs",
    plugins: [],
    customCss: ["/src/styles/starlight.css"],
    disable404Route: true,
    expressiveCode: false,
    sidebar: [
      {
        label: "DevOps",
        autogenerate: { directory: "docs/devops" },
      },
      {
        label: "Dev",
        autogenerate: { directory: "docs/dev" },
      },
      {
        label: "Tooling",
        autogenerate: { directory: "docs/tooling" },
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
