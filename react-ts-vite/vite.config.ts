import { defineConfig } from 'vite';
import path from 'path';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/',
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  server: {
    port: 8888,
    open: true,
    proxy: {
      '/api': {
        target: '',
        changeOrigin: true,
        ws: false
      }
    }
  }
});
