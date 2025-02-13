import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()], // <-- Add this
  build: {
    lib: {
      entry: './src/main.js',
      name: 'MyWebComponent',
      fileName: (format) => `my-web-component.${format}.js`,
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
});
