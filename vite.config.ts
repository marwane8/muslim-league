import { vitePlugin as remix } from "@remix-run/dev";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [
    remix({
      ssr: false,
      future: {
        v3_fetcherPersist: true,
        v3_relativeSplatPath: true,
        v3_throwAbortReason: true,
      },
    }),
    tsconfigPaths(),
    {
      name: "markdown",
      transform(src, id) {
        if (id.endsWith(".md")) {
          return `export default ${JSON.stringify(src)}`;
        }
      },
    },
  ],
  assetsInclude: ["**/*.pdf"], // This line includes PDF files in the assets
});
