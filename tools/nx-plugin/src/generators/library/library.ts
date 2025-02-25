import {
  formatFiles,
  generateFiles,
  joinPathFragments,
  Tree,
  updateNxJson,
  NxJsonConfiguration,
  readNxJson,
  updateJson,
} from '@nx/devkit';
import * as path from 'path';
import { LibraryGeneratorSchema } from './schema';
import { libraryGenerator as jsLibraryGenerator } from '@nx/js';
import { determineProjectNameAndRootOptions } from '@nx/devkit/src/generators/project-name-and-root-utils';
import { updateTsconfigFiles } from '@nx/js/src/utils/typescript/ts-solution-setup';
import { updateViteConfig } from './utils/updateViteConfig';

const ensureTargetDefaultsTestDependsOnOneBuild = (
  nxJson: NxJsonConfiguration
) => {
  if (
    !nxJson.targetDefaults?.test?.dependsOn ||
    nxJson.targetDefaults?.test?.dependsOn?.length === 1
  ) {
    return;
  }

  const filteredDependsOn = nxJson.targetDefaults?.test?.dependsOn?.filter(
    (d) => d !== '^build'
  );

  nxJson.targetDefaults.test.dependsOn = [...filteredDependsOn, '^build'];
};

export const libraryGenerator = async (
  tree: Tree,
  options: LibraryGeneratorSchema
) => {
  const directory = `libs/${options.name}`;
  const packageName = `@blue-repository/${options.name}`;

  const { projectName, projectRoot } = await determineProjectNameAndRootOptions(
    tree,
    {
      name: options.name,
      projectType: 'library',
      directory,
      importPath: packageName,
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
    unitTestRunner: 'vitest',
    linter: 'eslint',
    importPath: packageName,
    skipFormat: true,
    publishable: true,
    strict: true,
  });

  tree.delete(`${projectRoot}/src/lib/${options.name}.ts`);
  tree.delete(`${projectRoot}/src/lib/${options.name}.spec.ts`);

  updateTsconfigFiles(tree, projectRoot, 'tsconfig.lib.json', {
    module: 'ESNext',
    moduleResolution: 'bundler',
  });

  const viteConfigPath = `${projectRoot}/vite.config.ts`;
  if (tree.exists(viteConfigPath)) {
    updateViteConfig(tree, viteConfigPath);
  }

  generateFiles(tree, path.join(__dirname, 'files'), projectRoot, {
    ...options,
    packageName,
    projectRoot,
    tmpl: '',
  });

  generateFiles(
    tree,
    path.join(__dirname, '../../templates/readme'),
    projectRoot,
    {
      ...options,
      packageName,
      packageRoot: projectRoot,
      tmpl: '',
      typeModuleName: false,
      typeModuleBlueId: false,
    }
  );

  updateJson(tree, path.join(projectRoot, 'package.json'), (json) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { type, ...rest } = json;

    return {
      ...rest,
      module: './dist/index.mjs',
      exports: {
        ...rest?.exports,
        '.': {
          types: './dist/index.d.ts',
          import: './dist/index.mjs',
          require: './dist/index.js',
        },
      },
      license: 'MIT',
      publishConfig: {
        access: 'public',
      },
      repository: {
        type: 'git',
        url: 'https://github.com/bluecontract/blue-repository-js.git',
      },
    };
  });

  const nxJson = readNxJson(tree);
  if (nxJson) {
    ensureTargetDefaultsTestDependsOnOneBuild(nxJson);
    updateNxJson(tree, nxJson);
  }

  await formatFiles(tree);
};

export default libraryGenerator;
