import { defineConfig } from 'vite'

// Serve only the built static SPA; no application server is needed.
export default defineConfig({ build: { outDir: 'dist/client' } })
