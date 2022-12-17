import { defineConfig } from "vite";

// https://vitejs.dev/config/
// export default defineConfig({
//     build: {
//         lib: {
//             entry: "src/my-app.js",
//             formats: ["es"],
//         },
//         rollupOptions: {
//             external: /^lit/,
//         },
//     },
// });

export default defineConfig(({ command, mode }) => {
  return {
    build: {
      lib: {
        entry: "src/my-app.js",
        formats: ["es"],
      },
      rollupOptions: {
        external: mode === "production" ? "" : /^lit/,
      },
    },
  };
});
