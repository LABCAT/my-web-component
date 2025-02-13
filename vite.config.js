export default defineConfig({
  build: {
    lib: {
      entry: './src/main.js', // Your Web Component entry
      name: 'MyWebComponent',
      fileName: (format) => `my-web-component.${format}.js`,
    },
    rollupOptions: {
      external: ['vue'], // Exclude Vue from the bundle
      output: {
        globals: {
          vue: 'Vue', // Vue is expected to be available globally
        },
      },
    },
  },
});
