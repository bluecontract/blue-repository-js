import { toPackageIdentifier } from '../identifier.js';
import { writeFile } from './writeFile.js';
import { renderPackagesIndexFile, renderRepositoryFile } from './templateRenderer.js';

export function generateRepository(outDir: string, packageNames: string[]) {
  const packages = packageNames.map((slug) => ({
    slug,
    identifier: toPackageIdentifier(slug),
  }));

  writeFile(outDir, 'repository.ts', renderRepositoryFile({ packages }));
  writeFile(outDir, 'packages/index.ts', renderPackagesIndexFile({ packages }));
}
