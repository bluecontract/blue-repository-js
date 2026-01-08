import { toPackageIdentifier } from '../identifier.js';
import { renderTypeAliasesFile } from './templateRenderer.js';
import { writeFile } from './writeFile.js';

export function generateTypeAliases(outDir: string, packageNames: string[]) {
  const packages = packageNames.map((slug) => ({
    slug,
    identifier: toPackageIdentifier(slug),
  }));
  writeFile(outDir, 'type-aliases.ts', renderTypeAliasesFile({ packages }));
}
