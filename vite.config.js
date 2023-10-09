import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    VitePWA({
      manifest: {
        name: 'Biscard',
        short_name: 'Biscard',
        description: 'Biscard made possible for you to create your amazing profile for you or your business. Share it like you never did before.',
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#3498db',
        icons: [
          {
            src: '/vite.svg',
            sizes: '800x800',
            type: 'image/svg+xml',
          },
        ],
      },
    }),
    // ...other plugins
  ],
  base: '/',
  build: {
    outDir: 'dist',
    rollupOptions: {
      output: {
        assetFileNames: '[name].[ext]',
      },
    },
    emptyOutDir: true,
  },
  server: {
    open: true,
  },
});
