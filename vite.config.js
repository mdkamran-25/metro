import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs'
import path from 'path'

// Fix module preload order - ensure vendor-react loads before everything

// Post-build plugin to defer CSS loading
const deferCSSPlugin = {
  name: 'defer-css',
  apply: 'build',
  enforce: 'post',
  generateBundle(options, bundle) {
    // Find HTML file and add media="print" to CSS link
    const htmlFile = bundle['index.html'];
    if (htmlFile && htmlFile.type === 'asset') {
      let html = htmlFile.source.toString();
      
      // Defer CSS by adding media="print" and onload callback
      // Match both self-closing and regular tags
      html = html.replace(
        /<link rel="stylesheet" crossorigin href="([^"]+\.css)"\s*\/?>/g,
        '<link rel="stylesheet" crossorigin href="$1" media="print" onload="this.media=\'all\'; this.onload=null;" />\n    <noscript><link rel="stylesheet" crossorigin href="$1" /></noscript>'
      );
      
      htmlFile.source = html;
    }
  }
};

export default defineConfig({
  plugins: [react(), deferCSSPlugin],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true,
      },
    },
  },
  build: {
    minify: 'esbuild',
    cssCodeSplit: true,  // Split CSS per chunk
    cssMinify: 'esbuild',
    target: 'es2020',  // More compatible target than esnext
    sourcemap: false,
    rollupOptions: {
      output: {
      manualChunks(id) {
  if (id.includes('node_modules')) {
    return 'vendor';
  }
}
      },
    },
  },
})