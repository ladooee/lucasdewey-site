import { defineConfig } from "astro/config";

const repository = process.env.GITHUB_REPOSITORY?.split("/")[1];
const base = process.env.BASE_PATH ?? (
  process.env.GITHUB_ACTIONS === "true" && repository ? `/${repository}` : "/"
);

export default defineConfig({
  site: "https://lucasdewey.com",
  base,
  output: "static",
  trailingSlash: "always"
});
