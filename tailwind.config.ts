import type { Config } from "tailwindcss";

import colors from "tailwindcss/colors";
import defaultTheme from "tailwindcss/defaultTheme"

const config: Config = {
  content: [
    "./themes/**/*.{html,js,ts,jsx,tsx,md,mdx}",
    "./templates/**/*.{html,js,ts,jsx,tsx,md,mdx}",
    "./content/**/*.{html,js,ts,jsx,tsx,md,mdx}",
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
      'body': ["Inter", ...defaultTheme.fontFamily.sans],
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
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            '--tw-format-body': 'var(--format-body)',
            '--tw-format-headings': 'var(--format-header)',
          },
        },
      }),
    },
  },
  plugins: [
    require('flowbite/plugin'),
    require("@tailwind-plugin/expose-colors")({
      extract: ["gray"],
    }),
    require("flowbite-typography"),
  ],
};
export default config;
