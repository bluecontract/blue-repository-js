import { writeFile } from './writeFile.js';
import { renderRootIndexFile } from './templateRenderer.js';

export function generateRootIndex(outDir: string) {
  const content = renderRootIndexFile();
  writeFile(outDir, 'index.ts', content);
}
