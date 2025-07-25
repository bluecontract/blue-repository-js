import {
  GeneratorCallback,
  Tree,
  formatFiles,
  runTasksInSerial,
} from '@nx/devkit';
import { SyncCodeGeneratorSchema } from './schema';
import { blueIdsGenerator } from '../blue-ids/blue-ids';
import { zodSchemasGenerator } from '../zod-schemas/zod-schemas';
import { contentsGenerator } from '../contents/contents';

const normalizeOptions = (options: SyncCodeGeneratorSchema) => {
  return {
    ...options,
    generateSchemas: options.generateSchemas ?? true,
    generateBlueIds: options.generateBlueIds ?? true,
    generateContents: options.generateContents ?? true,
  };
};

export const syncCodeGenerator = async (
  tree: Tree,
  schema: SyncCodeGeneratorSchema
) => {
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

  if (options.generateSchemas) {
    const callback = await zodSchemasGenerator(tree, {
      inputPath: options.inputPath,
      libraryName: options.libraryName,
      skipFormat: true,
    });
    tasks.push(callback);
  }

  if (options.generateContents) {
    const callback = await contentsGenerator(tree, {
      inputPath: options.inputPath,
      libraryName: options.libraryName,
      skipFormat: true,
    });
    tasks.push(callback);
  }

  await formatFiles(tree);

  return runTasksInSerial(...tasks);
};

export default syncCodeGenerator;
