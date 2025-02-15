import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    outDir: 'dist',
    lib: {
      entry: 'src/main.js',
      formats: ['es'],
      fileName: 'my-web-component'
    }
  }
});