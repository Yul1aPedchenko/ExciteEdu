import { defineConfig } from 'vite';
import glob from 'glob';
import injectHTML from 'vite-plugin-html-inject';
import FullReload from 'vite-plugin-full-reload';

const HOST_URL = process.env.HOST_URL || 'http://localhost';

export default defineConfig({
  define: {
    global: {},
    'process.env.HOST_URL': JSON.stringify(HOST_URL),
  },
  root: 'src',
  build: {
    rollupOptions: {
      input: glob.sync('./src/*.html'),
    },
    outDir: '../dist',
  },
  plugins: [injectHTML(), FullReload(['./src/**/**.html'])],
});
  
