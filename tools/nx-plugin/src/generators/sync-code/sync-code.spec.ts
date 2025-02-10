import { createTreeWithEmptyWorkspace } from '@nx/devkit/testing';
import { Tree, readProjectConfiguration } from '@nx/devkit';

import { syncCodeGenerator } from './sync-code';
import { SyncCodeGeneratorSchema } from './schema';

describe('sync-code generator', () => {
  let tree: Tree;
  const options: SyncCodeGeneratorSchema = {
    inputPath: 'data/blue-preprocessed',
    libraryName: 'test',
  };

  beforeEach(() => {
    tree = createTreeWithEmptyWorkspace();
  });

  it('should run successfully', async () => {
    await syncCodeGenerator(tree, options);
    const config = readProjectConfiguration(tree, 'test');
    expect(config).toBeDefined();
  });
});
