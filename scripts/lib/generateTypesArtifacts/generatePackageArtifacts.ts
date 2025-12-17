import * as path from 'node:path';
import { toIdentifier } from '../identifier.js';
import { canonicalizeValue } from './canonicalizeValue.js';
import { formatObject } from './formatObject.js';
import { generateBlueIds } from './generateBlueIds.js';
import { writeFile } from './writeFile.js';
import { renderPackageIndexFile, renderPackageMetaFile } from './templateRenderer.js';

export function generatePackageArtifacts(
  outDir: string,
  packageName: string,
  pkg: any,
  schemaFiles: Record<string, string>,
  schemaIndexTs: string,
  schemasTs: string,
) {
  const pkgDir = path.join('packages', packageName);
  const metaContent = renderPackageMetaFile({
    metaJson: formatObject({
      name: pkg.name,
      aliases: pkg.aliases,
      typesMeta: pkg.typesMeta,
    }),
  });
  writeFile(outDir, path.join(pkgDir, 'meta.ts'), metaContent);

  const contentEntries: Array<{ safe: string; blueId: string }> = [];
  const sortedContents = Object.entries(pkg.contents || {}).sort(([a], [b]) =>
    a.localeCompare(b),
  );
  for (const [blueId, content] of sortedContents) {
    const typeMeta = pkg.typesMeta?.[blueId];
    if (!typeMeta) {
      throw new Error(
        `Invalid repository package '${packageName}': missing typesMeta entry for blueId '${blueId}'`,
      );
    }
    const safe = toIdentifier(typeMeta.name, blueId);
    const fileContent = `export const ${safe} = ${formatObject(
      canonicalizeValue(content),
    )} as const;\n`;
    writeFile(outDir, path.join(pkgDir, 'contents', `${safe}.ts`), fileContent);
    contentEntries.push({ safe, blueId });
  }

  const sortedContentEntries = [...contentEntries].sort((a, b) =>
    a.blueId.localeCompare(b.blueId),
  );

  const contentsImports = sortedContentEntries
    .map((entry) => `import { ${entry.safe} } from './${entry.safe}';`)
    .join('\n');
  const contentsExports = sortedContentEntries
    .map((entry) => `export { ${entry.safe} } from './${entry.safe}';`)
    .join('\n');
  const contentsMapEntries = sortedContentEntries
    .map((e) => `  '${e.blueId}': ${e.safe}`)
    .join(',\n');
  const contentsIndex =
    `${contentsImports}\n\n${contentsExports}\n\n` +
    `export const contents = {\n${contentsMapEntries}\n} as const;\n`;
  writeFile(outDir, path.join(pkgDir, 'contents', 'index.ts'), contentsIndex);
  const contentsTs =
    `export * from './contents/index';\n` +
    `export { contents } from './contents/index';\n`;
  writeFile(outDir, path.join(pkgDir, 'contents.ts'), contentsTs);

  generateBlueIds(outDir, packageName, pkg);
  Object.entries(schemaFiles).forEach(([relPath, content]) => {
    writeFile(outDir, relPath, content);
  });
  writeFile(outDir, path.join(pkgDir, 'schemas', 'index.ts'), schemaIndexTs);
  writeFile(outDir, path.join(pkgDir, 'schemas.ts'), schemasTs);

  const indexContent = renderPackageIndexFile();
  writeFile(outDir, path.join(pkgDir, 'index.ts'), indexContent);
}
