import { formatObject } from './formatObject.js';
import { writeFile } from './writeFile.js';
import { renderRootMetaFile } from './templateRenderer.js';

export function generateMeta(outDir: string, meta: { name: string; repositoryVersions: any }) {
  const content = renderRootMetaFile({
    nameJson: JSON.stringify(meta.name),
    repositoryVersionsJson: formatObject(meta.repositoryVersions),
  });
  writeFile(outDir, 'meta.ts', content);
}
