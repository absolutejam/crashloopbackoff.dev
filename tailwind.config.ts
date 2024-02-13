import type { Config } from "tailwindcss";

import colors from "tailwindcss/colors";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./src/**/*.{html,astro,js,ts,jsx,tsx,md,mdx}",
    "./node_modules/flowbite/**/*.js",
    "./node_modules/lucide/**/*.js",
  ],
  darkMode: "class",
  theme: {
    container: {
      padding: "2rem",
      screens: {
        "2xl": "1200px",
      },
    },
    fontFamily: {
      body: ["Inter", ...defaultTheme.fontFamily.sans],
      mono: ["JetBrains Mono", ...defaultTheme.fontFamily.mono],
    },
    extend: {
      colors: {
        primary: colors.fuchsia,
        foreground: "var(--foreground)",
        background: "var(--background)",
        "background-alt": "var(--background-alt)",
        border: "var(--border)",
        "forminput-bg": "var(--forminput-bg)",
        "forminput-border": "var(--forminput-border)",
      },
      typography: () => ({
        DEFAULT: {
          css: {
            "--tw-format-body": "var(--format-body)",
            "--tw-format-headings": "var(--format-header)",
            blockquote: {
              "font-style": "normal",
            },
            "blockquote::before": {
              display: "inline-block",
              "margin-top": "0 !important",
              float: "left",
              width: "50px",
            },
            "blockquote p:first-of-type::before": {
              content: "none",
            },
            "blockquote p:first-of-type::after": {
              content: "none",
            },
          },
        },
      }),
    },
  },
  plugins: [
    require("flowbite/plugin"),
    require("@tailwind-plugin/expose-colors")({
      extract: ["gray"],
    }),
    require("flowbite-typography"),
  ],
};
export default config;
