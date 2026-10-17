import { defineConfig } from "tsup";

export default defineConfig({
  entry: {
    index: "src/index.ts",
    styles: "src/styles/styles.css",
  },
  format: ["esm"],
  dts: { entry: "src/index.ts" },
  clean: true,
  sourcemap: true,
  target: "es2020",
  external: ["react", "react-dom", "react/jsx-runtime"],
});
