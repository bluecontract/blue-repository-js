import { Tree, updateJson } from '@nx/devkit';
import * as path from 'path';

export const setDependenciesToPackageJson = (
  tree: Tree,
  projectRoot: string,
  dependencies?: {
    dependencies?: Record<string, string>;
    devDependencies?: Record<string, string>;
    peerDependencies?: Record<string, string>;
  }
) => {
  const {
    dependencies: dependenciesToAdd,
    devDependencies: devDependenciesToAdd,
    peerDependencies: peerDependenciesToAdd,
  } = dependencies ?? {};
  return updateJson(tree, path.join(projectRoot, 'package.json'), (json) => {
    json.dependencies = dependenciesToAdd;
    json.devDependencies = devDependenciesToAdd;
    json.peerDependencies = peerDependenciesToAdd;
    return json;
  });
};
