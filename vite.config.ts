// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

const isGitHubPages = process.env["GITHUB_PAGES"] === "true";
const basepath = isGitHubPages ? "/portafolio" : "/";
const projectPages = [
  "fierro-punta",
  "teranet",
  "hause-acai-menu",
  "tercera-avenida-traslados",
  "am-asesoria-consultoria",
  "wiipand",
  "nandekuete-barberia",
].map((slug) => ({ path: `/proyectos/${slug}` }));

export default defineConfig({
  vite: {
    base: `${basepath.replace(/\/$/, "")}/`,
  },
  ...(isGitHubPages
    ? {
        nitro: false,
      }
    : {}),
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    router: { basepath },
    server: { entry: "server" },
    pages: isGitHubPages ? projectPages : [],
    prerender: {
      enabled: isGitHubPages,
      crawlLinks: true,
      failOnError: true,
      // Never prerender static assets (PDF, images): the prerenderer would
      // rewrite them as text and corrupt the binary output.
      filter: ({ path }: { path: string }) => !/\.(pdf|png|jpe?g|webp|svg|ico|mp4)$/i.test(path),
    },
  },
});
