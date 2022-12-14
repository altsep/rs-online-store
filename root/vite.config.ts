import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  build: {
    outDir: '../dist',
  },
  server: {
    open: false,
    port: 8000,
  },
  plugins: [tsconfigPaths()],
});
