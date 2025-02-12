// ensureDirectoryExists.ts
import { Tree } from '@nx/devkit';

export function ensureDirectoryExists(tree: Tree, dirPath: string): void {
  if (!tree.exists(dirPath)) {
    tree.write(dirPath + '/.gitkeep', '');
  }
}
