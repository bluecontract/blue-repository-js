import { createTreeWithEmptyWorkspace } from '@nx/devkit/testing';
import { Tree, readProjectConfiguration } from '@nx/devkit';

import { syncDepsGenerator } from './sync-deps';
import { SyncDepsGeneratorSchema } from './schema';

describe('sync-deps generator', () => {
  let tree: Tree;
  const options: SyncDepsGeneratorSchema = { name: 'test' };

  beforeEach(() => {
    tree = createTreeWithEmptyWorkspace();
  });

  it('should run successfully', async () => {
    await syncDepsGenerator(tree, options);
    const config = readProjectConfiguration(tree, 'test');
    expect(config).toBeDefined();
  });
});
