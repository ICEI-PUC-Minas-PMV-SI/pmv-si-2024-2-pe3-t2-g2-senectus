import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/components/**/*.{js,ts,jsx,tsx}"
  ],
  plugins: [
    nextui({
      themes: {
        default: {
          colors: {
            primary: {
              "900": "#7D4ED0",
              "800": "#8A60D5",
              "700": "#9773DA",
              "600": "#A485DF",
              "500": "#B198E4",
              "400": "#BFAAE8",
              "300": "#CCBDED",
              "200": "#D9CFF2",
              "100": "#E6E2F7",
              "50": "#F3F4FC",
              DEFAULT: "#7D4ED0",
              foreground: "#FDFDFD",
            },
            secondary: {
              "900": "#E59FF8",
              "800": "#E8A8F9",
              "700": "#EAB1FA",
              "600": "#EDBAFA",
              "500": "#EFC3FB",
              "400": "#F2CDFC",
              "300": "#F4D6FD",
              "200": "#F7DFFD",
              "100": "#F9E8FE",
              "50": "#FCF1FF",
              DEFAULT: "#E59FF8",
              foreground: "#FDFDFD",
            },
            focus: "#8C62D5",
            background: "#FDFDFD"
          },
        },
      },
    }),
  ],
};
export default config;
