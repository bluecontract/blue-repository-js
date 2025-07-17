import * as path from 'path';
import { Tree } from '@nx/devkit';
import { readYamlFile } from '../../../../utils/readYamlFile';

/**
 * Interface for content file data
 */
export interface ContentFileData {
  fileName: string;
  variableName: string;
  blueId: string;
  content: unknown;
}

/**
 * Read and parse a .blue file to extract content data
 */
export function parseBlueFile(
  filePath: string,
  blueFile: string,
  blueIds: Record<string, string>
): ContentFileData | null {
  try {
    const parsedContent = readYamlFile<unknown>(filePath);

    // Get the name from the parsed content or fallback to filename
    const name =
      typeof parsedContent === 'object' &&
      parsedContent !== null &&
      'name' in parsedContent
        ? (parsedContent.name as string)
        : path.basename(blueFile, '.blue');

    // Find the corresponding blueId
    const blueId = blueIds[name];

    if (!blueId) {
      console.warn(`No blueId found for ${name} in ${blueFile}`);
      return null;
    }

    return {
      fileName: name,
      variableName: name,
      blueId,
      content: parsedContent,
    };
  } catch (error) {
    console.error(`Error parsing ${blueFile}:`, error);
    return null;
  }
}

/**
 * Create an individual content TypeScript file
 */
export function createContentFile(
  tree: Tree,
  outputDir: string,
  fileName: string,
  variableName: string,
  content: unknown
): void {
  const contentFileContent = `export const ${variableName} = ${JSON.stringify(
    content,
    null,
    2
  )} as const;\n`;
  const contentFilePath = path.join(outputDir, `${fileName}.ts`);
  tree.write(contentFilePath, contentFileContent);
}
