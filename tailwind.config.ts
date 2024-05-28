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
          "50": "#f0f9f4",
          "100": "#daf1e4",
          "200": "#b8e2cc",
          "300": "#89ccad",
          "400": "#57b08a",
          "500": "#35946e",
          "600": "#28805f",
          "700": "#1e5e48",
          "800": "#1a4b3a",
          "900": "#163e31",
          "950": "#0b231b",
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
          primary: "#35946e",
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
