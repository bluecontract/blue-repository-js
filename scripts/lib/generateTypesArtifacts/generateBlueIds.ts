import * as path from 'node:path';
import { formatObject } from './formatObject.js';
import { renderBlueIdsFile } from './templateRenderer.js';
import { writeFile } from './writeFile.js';

export function generateBlueIds(
  outDir: string,
  packageName: string,
  pkg: {
    name: string;
    typesMeta: Record<string, { name: string }>;
    aliases?: Record<string, string>;
  },
) {
  const blueIds: Record<string, string> = { ...(pkg.aliases || {}) };
  Object.entries(pkg.typesMeta).forEach(([currentBlueId, meta]) => {
    const alias = `${pkg.name}/${meta.name}`;
    blueIds[alias] = currentBlueId;
  });

  const content = renderBlueIdsFile({ blueIdsJson: formatObject(blueIds) });
  writeFile(outDir, path.join('packages', packageName, 'blue-ids.ts'), content);
}
