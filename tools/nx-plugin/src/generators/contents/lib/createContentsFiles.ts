import * as fs from 'fs';
import * as path from 'path';
import { Tree } from '@nx/devkit';
import { nameToFileName, nameToVariableName } from './utils/namingUtils';
import {
  parseBlueFile,
  createContentFile,
  ContentFileData,
} from './utils/contentFileUtils';
import { generateIndexFile } from './generateIndexFile';

/**
 * Create individual content files and an index that imports them
 */
export function createContentsFiles(
  tree: Tree,
  inputPath: string,
  blueIds: Record<string, string>,
  outputDir: string
): void {
  const contentFiles: ContentFileData[] = [];

  // Read all .blue files in the input directory
  const blueFiles = fs
    .readdirSync(inputPath)
    .filter((file) => file.endsWith('.blue'));

  for (const blueFile of blueFiles) {
    const filePath = path.join(inputPath, blueFile);

    const contentData = parseBlueFile(filePath, blueFile, blueIds);
    if (contentData) {
      // Apply proper naming conventions
      const fileName = nameToFileName(contentData.fileName);
      const variableName = nameToVariableName(contentData.variableName);

      // Create individual content file
      createContentFile(
        tree,
        outputDir,
        fileName,
        variableName,
        contentData.content
      );

      // Store the processed content data for index generation
      contentFiles.push({
        ...contentData,
        fileName,
        variableName,
      });
    }
  }

  // Generate the index file
  generateIndexFile(tree, outputDir, contentFiles);
}
