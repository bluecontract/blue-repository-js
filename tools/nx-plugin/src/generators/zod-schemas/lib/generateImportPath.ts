import { pascal } from '../../../utils/pascal';
import { transformToPackageName } from '../../../utils/transformToPackageName';
import { BlueIdInfo } from './utils/blueTypes';

/**
 * Generates an import path for a Blue type schema based on its module location.
 * For types in the current module, generates a relative path.
 * For types in other modules, generates a package import path.
 *
 * @param currentModuleName - The name of the current module
 * @param typeInformation - Information about the type being imported
 * @returns An import path string
 *
 * @example
 * For a type in the current module:
 * generateImportPath('users', { moduleName: 'users', typeName: 'user' })
 * Returns: './User'
 *
 * For a type in another module:
 * generateImportPath('users', { moduleName: 'auth', typeName: 'token' })
 * Returns: '@blue-repository/auth'
 */
export function generateImportPath(
  currentModuleName: string,
  typeInformation: BlueIdInfo
): string {
  const isLocalType = typeInformation.moduleName === currentModuleName;

  if (isLocalType) {
    return `./${pascal(typeInformation.typeName)}`;
  }

  const externalPackageName = transformToPackageName(
    typeInformation.moduleName
  );
  return `@blue-repository/${externalPackageName}`;
}
