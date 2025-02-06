import { createTreeWithEmptyWorkspace } from '@nx/devkit/testing';
import { Tree, readProjectConfiguration } from '@nx/devkit';

import { zodSchemasGenerator } from './zod-schemas';
import { ZodSchemasGeneratorOptions } from './schema';

describe('zod schemas generator', () => {
  let tree: Tree;
  const options: ZodSchemasGeneratorOptions = { name: 'test' };

  beforeEach(() => {
    tree = createTreeWithEmptyWorkspace();
  });

  it('should run successfully', async () => {
    await zodSchemasGenerator(tree, options);
    const config = readProjectConfiguration(tree, 'test');
    expect(config).toBeDefined();
  });
});
