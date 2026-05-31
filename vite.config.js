import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs'
import path from 'path'
import process from 'process'

// Custom plugin to handle saving world data locally
function saveWorldDataPlugin() {
  return {
    name: 'save-world-data',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        if (req.url === '/api/world-data' && req.method === 'POST') {
          let body = '';
          req.on('data', chunk => {
            body += chunk.toString();
          });
          req.on('end', () => {
            try {
              // Ensure we are saving valid JSON
              const data = JSON.parse(body);
              const filePath = path.resolve(process.cwd(), 'src/data/world_data.json');
              fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
              
              res.statusCode = 200;
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ success: true, message: 'World data saved successfully' }));
            } catch (err) {
              res.statusCode = 500;
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ success: false, error: err.message }));
            }
          });
        } else if (req.url === '/api/upload-image' && req.method === 'POST') {
          let body = '';
          req.on('data', chunk => {
            body += chunk.toString();
          });
          req.on('end', () => {
            try {
              const { filename, image, category } = JSON.parse(body);
              if (!filename || !image) throw new Error('Missing filename or image data');

              // Extract base64 data (strip data:image/png;base64, prefix if present)
              const base64Data = image.replace(/^data:image\/\w+;base64,/, '');
              const buffer = Buffer.from(base64Data, 'base64');

              // Create directory
              const targetDir = path.resolve(process.cwd(), 'public/images', category || 'misc');
              if (!fs.existsSync(targetDir)) {
                fs.mkdirSync(targetDir, { recursive: true });
              }

              // Handle duplicates by appending a number
              let finalName = filename;
              let filePath = path.join(targetDir, finalName);
              let counter = 1;
              const ext = path.extname(filename);
              const basename = path.basename(filename, ext);
              
              while (fs.existsSync(filePath)) {
                finalName = `${basename}(${counter})${ext}`;
                filePath = path.join(targetDir, finalName);
                counter++;
              }

              fs.writeFileSync(filePath, buffer);
              
              const publicUrl = `/images/${category || 'misc'}/${finalName}`;
              
              res.statusCode = 200;
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ success: true, url: publicUrl }));
            } catch (err) {
              res.statusCode = 500;
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ success: false, error: err.message }));
            }
          });
        } else if (req.url === '/api/delete-image' && req.method === 'POST') {
          let body = '';
          req.on('data', chunk => {
            body += chunk.toString();
          });
          req.on('end', () => {
            try {
              const { url } = JSON.parse(body);
              if (!url) throw new Error('Missing url');
              
              // Only allow deleting from public/images
              if (!url.startsWith('/images/')) throw new Error('Invalid path');
              
              const filePath = path.resolve(process.cwd(), 'public', url.substring(1));
              
              if (fs.existsSync(filePath)) {
                fs.unlinkSync(filePath);
              }
              
              res.statusCode = 200;
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ success: true }));
            } catch (err) {
              res.statusCode = 500;
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ success: false, error: err.message }));
            }
          });
        } else {
          next();
        }
      });
    }
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), saveWorldDataPlugin()],
})
