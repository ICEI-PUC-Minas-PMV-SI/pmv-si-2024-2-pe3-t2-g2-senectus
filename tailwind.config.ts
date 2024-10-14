import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/components/(pagination|checkbox|button).js"
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
            focus: "#8C62D5",
            background: "#FDFDFD"
          },
        },
      },
    }),
  ],
};
export default config;
