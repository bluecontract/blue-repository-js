import * as fs from 'fs';
import * as path from 'path';
import { Tree, formatFiles, readProjectConfiguration } from '@nx/devkit';
import { ContentsGeneratorSchema } from './schema';
import { readYamlFile } from '../../utils/readYamlFile';
import { createContentsFiles } from './lib/createContentsFiles';

/**
 * Generates individual content files from Blue type definitions.
 * This generator creates TypeScript files for each .blue file and an index file
 * that exports them as a record with blueId as keys.
 *
 * @param tree - The Nx file system tree
 * @param options - Configuration options for the generator
 * @returns A function that logs completion message
 */
export async function contentsGenerator(
  tree: Tree,
  options: ContentsGeneratorSchema
): Promise<() => void> {
  const blueIdsPath = path.join(options.inputPath, 'blue-ids.yaml');

  if (!fs.existsSync(blueIdsPath)) {
    throw new Error(`blue-ids.yaml not found at: ${blueIdsPath}`);
  }

  const { root: projectRoot } = readProjectConfiguration(
    tree,
    options.libraryName
  );

  try {
    // Read the blue-ids.yaml file to get the mapping
    const blueIds = readYamlFile<Record<string, string>>(blueIdsPath);

    // Create individual content files and index
    const outputDir = path.join(projectRoot, 'src/contents');
    createContentsFiles(tree, options.inputPath, blueIds, outputDir);
  } catch (err) {
    console.error(`Error processing contents:`, err);
    throw err;
  }

  if (!options.skipFormat) {
    await formatFiles(tree);
  }

  return () => {
    console.log('contentsGenerator completed');
  };
}

export default contentsGenerator;
