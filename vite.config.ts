import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';

function copyFolderSync(from: string, to: string) {
  if (!fs.existsSync(from)) return;
  if (!fs.existsSync(to)) {
    fs.mkdirSync(to, { recursive: true });
  }
  fs.readdirSync(from).forEach(element => {
    const fromPath = path.join(from, element);
    const toPath = path.join(to, element);
    const stat = fs.lstatSync(fromPath);
    if (stat.isFile()) {
      fs.copyFileSync(fromPath, toPath);
    } else if (stat.isDirectory()) {
      copyFolderSync(fromPath, toPath);
    }
  });
}

function serveAssetsPlugin() {
  return {
    name: 'serve-external-assets',
    configureServer(server: any) {
      server.middlewares.use((req: any, res: any, next: any) => {
        if (req.url && req.url.startsWith('/assets/')) {
          const relativePath = decodeURIComponent(req.url.replace(/^\/assets\//, ''));
          const filePath = path.resolve(__dirname, '../assets', relativePath);
          if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
            const ext = path.extname(filePath).toLowerCase();
            let contentType = 'application/octet-stream';
            if (ext === '.jpg' || ext === '.jpeg') contentType = 'image/jpeg';
            else if (ext === '.png') contentType = 'image/png';
            else if (ext === '.webp') contentType = 'image/webp';
            else if (ext === '.svg') contentType = 'image/svg+xml';
            else if (ext === '.mp4') contentType = 'video/mp4';
            
            res.writeHead(200, { 'Content-Type': contentType });
            fs.createReadStream(filePath).pipe(res);
            return;
          }
        }
        next();
      });
    },
    closeBundle() {
      const distAssetsPath = path.resolve(__dirname, 'dist/assets');
      const srcAssetsPath = path.resolve(__dirname, '../assets');
      copyFolderSync(srcAssetsPath, distAssetsPath);
    }
  };
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), serveAssetsPlugin()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
