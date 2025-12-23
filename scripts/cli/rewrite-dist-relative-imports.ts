import * as fs from 'node:fs';
import * as path from 'node:path';
import { fileURLToPath } from 'node:url';
import { rewriteDistRelativeImportsToJsExtensions } from '../lib/rewriteDistRelativeImports.js';

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(scriptDir, '..', '..');

function main() {
  const targetDir = process.argv[2] ?? path.resolve(repoRoot, 'libs/types/dist');

  if (!fs.existsSync(targetDir)) {
    throw new Error(`Target dist directory not found: ${targetDir}`);
  }

  rewriteDistRelativeImportsToJsExtensions(targetDir);
}

main();

