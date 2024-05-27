import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      height: {
        "screen-dvh": "100dvh",
        "screen-svh": "100svh",
        "screen-lvh": "100lvh",
      },
      colors: {
        prime: {
          "50": "#eef2ff",
          "100": "#dfe6ff",
          "200": "#c6d0ff",
          "300": "#a3b1fe",
          "400": "#7f87fa",
          "500": "#6060f4",
          "600": "#594ce9",
          "700": "#4535cd",
          "800": "#382ea5",
          "900": "#322c83",
          "950": "#1e1a4c",
        },
      },
    },
  },
  daisyui: {
    themes: [
      {
        nord: {
          // eslint-disable-next-line @typescript-eslint/no-var-requires
          ...require("daisyui/src/theming/themes")["nord"],
          primary: "#6060f4",
          secondary: "#7e87fb",
          accent: "#72b2c5",
          info: "#dfe6ff",
          warning: "#FFC857",

          ".btn-primary": {
            color: "#FAFAFA",
          },
          ".btn-accent": {
            color: "#fcfcfc",
          },
          ".alert-info": {
            borderColor: "#6060f4",
            color: "#312c83",
          },

          ".btn-secondary": {
            color: "#FAFAFA",
          },
          ".label-text": {
            margin: "0.25rem 0.25rem",
          },

          ".text-secondary-content": {
            color: "#9ca3af",
          },
        },
      },
    ],
  },
  plugins: [require("daisyui")],
} satisfies Config;
