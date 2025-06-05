import {
  formatFiles,
  ProjectGraph,
  readCachedProjectGraph,
  Tree,
  readJson,
  DependencyType,
  ProjectGraphDependency,
} from '@nx/devkit';
import { SyncDepsGeneratorSchema } from './schema';
import { PackageJson } from 'nx/src/utils/package-json';
import { setDependenciesToPackageJson } from './utils/setDependenciesToPackageJson';

const mapToDependency = (
  dep: ProjectGraphDependency,
  projectGraph: ProjectGraph,
  tree: Tree
): { name: string; version: string; type: 'external' | 'local' } | null => {
  if (dep.type === DependencyType.implicit) {
    return null;
  }

  const externalNode = projectGraph.externalNodes?.[dep.target];
  if (externalNode) {
    return {
      name: externalNode.data.packageName,
      version: externalNode.data.version,
      type: 'external',
    };
  }

  const node = projectGraph.nodes[dep.target];
  if (node) {
    const packageJson = readJson<PackageJson>(
      tree,
      `${node.data.root}/package.json`
    );

    return {
      name: node.name,
      version: packageJson.version,
      type: 'local',
    };
  }

  return null;
};

const peerDependenciesNames = ['@blue-company/language', 'zod'];

export const syncDepsGenerator = async (
  tree: Tree,
  options: SyncDepsGeneratorSchema
) => {
  const projectGraph = readCachedProjectGraph();
  const workspacePackageJson = readJson<PackageJson>(tree, 'package.json');

  const projectNode = projectGraph.nodes[options.libraryName];
  const projectGraphDependencies =
    projectGraph.dependencies?.[options.libraryName];

  const dependencies = projectGraphDependencies.reduce((acc, dep) => {
    const dependency = mapToDependency(dep, projectGraph, tree);
    if (!dependency) {
      return acc;
    }
    const workspaceDependency =
      workspacePackageJson.dependencies?.[dependency.name];
    if (!workspaceDependency && dependency.type === 'external') {
      return acc;
    }

    acc.push([dependency.name, workspaceDependency ?? dependency.version]);
    return acc;
  }, [] as [string, string][]);

  const peerDependenciesToAdd = Object.fromEntries(
    dependencies.filter(([name]) => peerDependenciesNames.includes(name))
  );

  const dependenciesToAdd = Object.fromEntries(
    dependencies.filter(([name]) => !peerDependenciesNames.includes(name))
  );

  setDependenciesToPackageJson(tree, projectNode.data.root, {
    dependencies: dependenciesToAdd,
    peerDependencies: peerDependenciesToAdd,
  });

  if (!options.skipFormat) {
    await formatFiles(tree);
  }
};

export default syncDepsGenerator;
