import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { resolve, extname, sep } from 'node:path';
const root = resolve('storybook-static');
const types = {
  '.html': 'text/html',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.woff2': 'font/woff2',
  '.svg': 'image/svg+xml',
};
createServer(async (req, res) => {
  const file = resolve(
    root,
    '.' +
      decodeURIComponent(new URL(req.url, 'http://localhost').pathname).replace(
        /\/$/,
        '/index.html',
      ),
  );
  if (!file.startsWith(root + sep)) {
    res.writeHead(403).end();
    return;
  }
  try {
    const data = await readFile(file);
    res
      .writeHead(200, {
        'Content-Type': types[extname(file)] || 'application/octet-stream',
      })
      .end(data);
  } catch {
    res.writeHead(404).end();
  }
}).listen(6006, '127.0.0.1');
