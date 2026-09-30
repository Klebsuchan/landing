import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';
import { defineConfig, Plugin } from 'vite';

function videoUploadPlugin(): Plugin {
  return {
    name: 'video-upload-plugin',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        if (req.method === 'POST' && req.url === '/api/upload-video') {
          const publicTarget = path.resolve(__dirname, 'public/curso-trafego-2026-landpage.mp4');
          const srcTarget = path.resolve(__dirname, 'src/components/curso trafego 2026 landpage.mp4');
          const writeStream = fs.createWriteStream(publicTarget);
          req.pipe(writeStream);
          writeStream.on('finish', () => {
            try {
              fs.copyFileSync(publicTarget, srcTarget);
            } catch (e) {
              console.error('Error copying uploaded video to src:', e);
            }
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ success: true, url: '/curso-trafego-2026-landpage.mp4' }));
          });
          writeStream.on('error', (err) => {
            res.writeHead(500, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: err.message }));
          });
          return;
        }
        next();
      });
    },
  };
}

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss(), videoUploadPlugin()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      port: 3000,
      host: '0.0.0.0',
      hmr: process.env.DISABLE_HMR !== 'true',
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
