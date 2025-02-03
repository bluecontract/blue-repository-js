import {
  GeneratorCallback,
  Tree,
  formatFiles,
  runTasksInSerial,
} from '@nx/devkit';
import { SyncCodeGeneratorSchema } from './schema';
import { blueIdsGenerator } from '../blue-ids/blue-ids';

const normalizeOptions = (options: SyncCodeGeneratorSchema) => {
  return {
    ...options,
    generateSchemas: options.generateSchemas ?? true,
    generateBlueIds: options.generateBlueIds ?? true,
  };
};

export default async function (tree: Tree, schema: SyncCodeGeneratorSchema) {
  const tasks: GeneratorCallback[] = [];
  const options = normalizeOptions(schema);

  if (options.generateBlueIds) {
    const callback = await blueIdsGenerator(tree, {
      inputPath: options.inputPath,
      libraryName: options.libraryName,
      skipFormat: true,
    });
    tasks.push(callback);
  }

  // Format generated files
  await formatFiles(tree);

  return runTasksInSerial(...tasks);
}
