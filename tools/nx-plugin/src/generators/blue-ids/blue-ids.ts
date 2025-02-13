import * as fs from 'fs';
import * as path from 'path';
import * as yaml from 'js-yaml';
import {
  Tree,
  formatFiles,
  generateFiles,
  readProjectConfiguration,
} from '@nx/devkit';
import { BlueIdsGeneratorSchema } from './schema';
import { pascal } from '../../utils/pascal';
import { getTypeModuleInformations } from './utils/typeModule';

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

  const { root: projectRoot, name: projectName } = readProjectConfiguration(
    tree,
    options.libraryName
  );

  try {
    const content = fs.readFileSync(blueIdsPath, 'utf8');
    const transformedContent = transformToModule(content);

    // Write as index.ts in the output directory
    const outputPath = path.join(projectRoot, 'src/blue-ids/index.ts');
    tree.write(outputPath, transformedContent);
  } catch (err) {
    console.error(`Error processing blue-ids.yaml:`, err);
    throw err;
  }

  const { typeModuleName, typeModuleBlueId } = getTypeModuleInformations(
    options.inputPath
  );

  generateFiles(
    tree,
    path.join(__dirname, '../../templates/readme'),
    projectRoot,
    {
      ...options,
      packageName: projectName,
      packageRoot: projectRoot,
      tmpl: '',
      typeModuleName,
      typeModuleBlueId,
    }
  );

  if (!options.skipFormat) {
    await formatFiles(tree);
  }

  return () => {
    console.log('blueIdsGenerator completed');
  };
}

export default blueIdsGenerator;
