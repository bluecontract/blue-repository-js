// getModulePath.ts
import * as path from 'path';

export function getModulePath(baseDir: string, moduleName: string): string {
  return path.join(baseDir, '..', moduleName);
}
