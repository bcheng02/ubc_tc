/* Simple SPA fallback: copy index.html to 404.html in build output */
import { copyFile, access } from 'node:fs/promises';
import { constants } from 'node:fs';
import { resolve } from 'node:path';

const outDir = resolve(process.cwd(), 'dist', 'tc-website', 'browser');
const indexFile = resolve(outDir, 'index.html');
const notFoundFile = resolve(outDir, '404.html');

try {
    await access(indexFile, constants.F_OK);
    await copyFile(indexFile, notFoundFile);
    console.log('[prepare-spa-404] Created 404.html from index.html');
} catch (err) {
    console.warn('[prepare-spa-404] Skipped: build output not found or copy failed.', err?.message || err);
}
