import * as fs from 'node:fs';
import * as path from 'node:path';

/**
 * Recursively gets all blue-ids.yaml files paths from a directory and its subdirectories
 */
export function getAllBlueIdsFilesPaths(dir: string): string[] {
  const files: string[] = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      files.push(...getAllBlueIdsFilesPaths(fullPath));
    } else if (entry.isFile() && entry.name === 'blue-ids.yaml') {
      files.push(fullPath);
    }
  }

  return files;
}
