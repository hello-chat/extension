import { crx, defineManifest } from '@crxjs/vite-plugin';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

import manifest from './manifest.json';

// Define the manifest
const manifestConfig = defineManifest({
  ...manifest,
  content_scripts: [
    {
      matches: ['https://github.com/*'],
      js: ['./src/content/index.tsx'],
    },
  ],
  background: {
    service_worker: './src/background/index.ts',
    type: 'module',
  },
});

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), crx({ manifest: manifestConfig })],
});
