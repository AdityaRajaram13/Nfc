// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   base: '/',
// })


// import react from '@vitejs/plugin-react';
// import { defineConfig } from 'vite';

// export default defineConfig({
//   plugins: [react()],
//   base: '/',
//   build: {
//     outDir: 'dist', // Change to your preferred output directory
//   },
//   server: {
//     open: true,
//   },
//   // Add other configuration options as needed
// });

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    outDir: 'dist', // Change to your preferred output directory
    rollupOptions: {
      output: {
        assetFileNames: '[name].[ext]', // Copy files with their original names and extensions
      },
    },
  },
  server: {
    open: true,
  },
  // Add other configuration options as needed
});



