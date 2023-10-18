import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  //base: "/agency_view/",
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 1000,
  },
});
