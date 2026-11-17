import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    // @repo/ui pins its own React version; make sure the app and the shared
    // components always share a single React instance.
    dedupe: ['react', 'react-dom'],
  },
})
