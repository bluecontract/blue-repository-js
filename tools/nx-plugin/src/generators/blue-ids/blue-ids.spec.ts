import { createTreeWithEmptyWorkspace } from '@nx/devkit/testing';
import { Tree, readProjectConfiguration } from '@nx/devkit';

import { blueIdsGenerator } from './blue-ids';
import { BlueIdsGeneratorSchema } from './schema';

describe('blue-ids generator', () => {
  let tree: Tree;
  const options: BlueIdsGeneratorSchema = { name: 'test' };

  beforeEach(() => {
    tree = createTreeWithEmptyWorkspace();
  });

  it('should run successfully', async () => {
    await blueIdsGenerator(tree, options);
    const config = readProjectConfiguration(tree, 'test');
    expect(config).toBeDefined();
  });
});
