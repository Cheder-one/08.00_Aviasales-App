import path from 'path';

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@/styles': path.resolve(__dirname, './src/styles'),
      '@/reducers': path.resolve(
        __dirname,
        './src/app/store/reducers'
      ),
    },
  },
});
