import { Tree } from '@nx/devkit';
import { tsquery } from '@phenomnomnominal/tsquery';

const addPassWithNoTestsToConfig = (content: string) => {
  return tsquery.replace(
    content,
    `PropertyAssignment:has(Identifier[name=test]) > ObjectLiteralExpression`,
    (node) => {
      const text = node.getText();
      if (text.includes('passWithNoTests')) {
        return text;
      }
      return text.replace(/\s*\}$/, ', passWithNoTests: true }');
    }
  );
};

const addPackageJsonRequire = (content: string) => {
  return tsquery.replace(
    content,
    `ImportDeclaration:first-child`,
    (node) =>
      `const packageJson = require('./package.json');\n\n${node.getText()};\n\n`
  );
};
const updateBuildFormats = (content: string) => {
  return tsquery.replace(
    content,
    `PropertyAssignment:has(Identifier[name=formats]) > ArrayLiteralExpression`,
    (node) => {
      const text = node.getText();
      if (text.includes('cjs')) return text;
      return text.replace(/'es'\]/, "'es', 'cjs']");
    }
  );
};

const updateRollupExternal = (content: string) => {
  return tsquery.replace(
    content,
    `PropertyAssignment:has(Identifier[name=build]) PropertyAssignment:has(Identifier[name=rollupOptions]) PropertyAssignment:has(Identifier[name=external])`,
    () => {
      return `external: (id: string) => {
  const dependencies = Object.keys(packageJson.dependencies);
  const peerDependencies = Object.keys(packageJson.peerDependencies);
  return (
    dependencies.some((dependency) => id === dependency) ||
    peerDependencies.some((dependency) => id === dependency)
  );
}`;
    }
  );
};

export const updateViteConfig = (tree: Tree, viteConfigPath: string) => {
  const viteConfigContent = tree.read(viteConfigPath, 'utf-8');
  if (!viteConfigContent) {
    throw new Error(`Failed to read file at ${viteConfigPath}`);
  }

  let updatedConfig = addPackageJsonRequire(viteConfigContent);
  updatedConfig = updateBuildFormats(updatedConfig);
  updatedConfig = updateRollupExternal(updatedConfig);
  updatedConfig = addPassWithNoTestsToConfig(updatedConfig);

  tree.write(viteConfigPath, updatedConfig);
};
