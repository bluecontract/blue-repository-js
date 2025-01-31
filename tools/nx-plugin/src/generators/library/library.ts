import {
  formatFiles,
  generateFiles,
  joinPathFragments,
  Tree,
} from '@nx/devkit';
import * as path from 'path';
import { LibraryGeneratorSchema } from './schema';
import { libraryGenerator as jsLibraryGenerator } from '@nx/js';
import { determineProjectNameAndRootOptions } from '@nx/devkit/src/generators/project-name-and-root-utils';
import { updateTsconfigFiles } from '@nx/js/src/utils/typescript/ts-solution-setup';

export async function libraryGenerator(
  tree: Tree,
  options: LibraryGeneratorSchema
) {
  const directory = `libs/${options.name}`;
  const importPath = `@blue-repository/${options.name}`;

  const { projectName, projectRoot } = await determineProjectNameAndRootOptions(
    tree,
    {
      name: options.name,
      projectType: 'library',
      directory,
      importPath,
    }
  );
  const projectConfigFile = joinPathFragments(projectRoot, 'project.json');

  if (tree.exists(projectConfigFile)) {
    throw new Error(
      `Cannot create new project ${projectName} at ${projectRoot}. A project already exists in this directory.`
    );
  }

  await jsLibraryGenerator(tree, {
    name: options.name,
    directory,
    bundler: 'vite',
    unitTestRunner: 'none',
    linter: 'eslint',
    importPath,
    skipFormat: true,
    publishable: true,
    strict: true,
  });

  tree.delete(`${projectRoot}/src/lib/${options.name}.ts`);

  updateTsconfigFiles(tree, projectRoot, 'tsconfig.lib.json', {
    module: 'ESNext',
    moduleResolution: 'bundler',
  });

  generateFiles(tree, path.join(__dirname, 'files'), projectRoot, options);

  await formatFiles(tree);
}

export default libraryGenerator;
