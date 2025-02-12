// generateImportPath.ts
import { pascal } from '../../../utils/pascal';
import { transformToPackageName } from '../../../utils/transformToPackageName';
import { BlueIdInfo } from './utils/blueTypes';

export function generateImportPath(
  currentModule: string,
  typeInfo: BlueIdInfo
): string {
  if (typeInfo.moduleName === currentModule) {
    return `./${pascal(typeInfo.typeName)}`;
  }
  return `@blue-repository/${transformToPackageName(typeInfo.moduleName)}`;
}
