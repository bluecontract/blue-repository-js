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

export const updateViteConfig = (tree: Tree, viteConfigPath: string) => {
  const viteConfigContent = tree.read(viteConfigPath, 'utf-8');
  if (!viteConfigContent) {
    throw new Error(`Failed to read file at ${viteConfigPath}`);
  }

  const updatedConfig = addPassWithNoTestsToConfig(viteConfigContent);
  tree.write(viteConfigPath, updatedConfig);
};
