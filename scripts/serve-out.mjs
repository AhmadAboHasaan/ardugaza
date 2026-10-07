import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { resolve, extname, sep } from 'node:path';
const root = resolve('out');
const port = Number(process.env.PORT || 3000);
const types = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.woff2': 'font/woff2',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.pdf': 'application/pdf',
  '.txt': 'text/plain',
  '.webmanifest': 'application/manifest+json',
  '.xml': 'application/xml',
};
createServer(async (req, res) => {
  let pathname = decodeURIComponent(
    new URL(req.url, 'http://localhost').pathname,
  );
  if (pathname.endsWith('/')) pathname += 'index.html';
  else if (!extname(pathname)) pathname += '.html';
  const file = resolve(root, '.' + pathname);
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
    try {
      const notFound = await readFile(resolve(root, '404.html'));
      res.writeHead(404, { 'Content-Type': types['.html'] }).end(notFound);
    } catch {
      res.writeHead(404, { 'Content-Type': types['.txt'] }).end('Not found');
    }
  }
}).listen(port, '127.0.0.1');
