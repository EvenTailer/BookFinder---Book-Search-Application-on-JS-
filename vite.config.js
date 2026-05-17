import { defineConfig } from 'vite';

export default defineConfig({
  base: './',   // относительные пути
  build: {
    rollupOptions: {
      input: 'index.html',   // входной HTML
      output: {
        entryFileNames: 'assets/[name].js',
        assetFileNames: 'assets/[name].[ext]'
      }
    },
    cssCodeSplit: false,
    minify: 'esbuild'
  }
});