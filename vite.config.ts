import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        tsconfigPaths(),
    ],
    define: {
        APP_VERSION: JSON.stringify(process.env.npm_package_version),
    },
    server: {
        host: true
    },
    build: {
        rollupOptions: {
            output: {
                chunkFileNames: 'chunks/[hash].chunk.js',
                assetFileNames: 'assets/[hash][extname]',
                entryFileNames: 'entries/[hash].index.js'
            }
        }
    }
});
