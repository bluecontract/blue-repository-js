import * as fs from 'fs';
import * as path from 'path';
import * as yaml from 'js-yaml';
import { Tree, formatFiles, readProjectConfiguration } from '@nx/devkit';
import { BlueIdsGeneratorSchema } from './schema';
import { pascal } from '../../utils/pascal';

/**
 * Transform YAML content to a JS module with camelCase keys
 */
function transformToModule(content: string): string {
  const data = yaml.load(content) as Record<string, unknown>;

  // Transform the keys to camelCase
  const transformedData = Object.fromEntries(
    Object.entries(data).map(([key, value]) => [pascal(key), value])
  );

  const jsonString = JSON.stringify(transformedData, null, 2);
  return `export const blueIds = ${jsonString} as const;\n`;
}

export async function blueIdsGenerator(
  tree: Tree,
  options: BlueIdsGeneratorSchema
) {
  const blueIdsPath = path.join(options.inputPath, 'blue-ids.yaml');

  if (!fs.existsSync(blueIdsPath)) {
    throw new Error(`blue-ids.yaml not found at: ${blueIdsPath}`);
  }

  try {
    const content = fs.readFileSync(blueIdsPath, 'utf8');
    const transformedContent = transformToModule(content);

    const projectConfig = readProjectConfiguration(tree, options.libraryName);

    // Write as index.ts in the output directory
    const outputPath = path.join(projectConfig.root, 'src/blue-ids/index.ts');
    tree.write(outputPath, transformedContent);
  } catch (err) {
    console.error(`Error processing blue-ids.yaml:`, err);
    throw err;
  }

  if (!options.skipFormat) {
    await formatFiles(tree);
  }

  return () => {
    console.log('blueIdsGenerator completed');
  };
}

export default blueIdsGenerator;
