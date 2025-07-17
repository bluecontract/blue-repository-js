import * as path from 'path';
import { Tree } from '@nx/devkit';
import { ContentFileData } from './utils/contentFileUtils';

/**
 * Generate the index.ts file that imports all content files and exports them as a record
 */
export function generateIndexFile(
  tree: Tree,
  outputDir: string,
  contentFiles: ContentFileData[]
): void {
  // Sort content files by blueId to ensure consistent ordering
  const sortedContentFiles = contentFiles.sort((a, b) =>
    a.blueId.localeCompare(b.blueId)
  );

  const imports: string[] = [];
  const exports: string[] = [];

  for (const contentFile of sortedContentFiles) {
    imports.push(
      `import { ${contentFile.variableName} } from './${contentFile.fileName}';`
    );
    exports.push(`  '${contentFile.blueId}': ${contentFile.variableName},`);
  }

  // Create index file
  const indexContent = `${imports.join(
    '\n'
  )}\n\nexport const contents = {\n${exports.join('\n')}\n} as const;\n`;
  const indexPath = path.join(outputDir, 'index.ts');
  tree.write(indexPath, indexContent);
}
