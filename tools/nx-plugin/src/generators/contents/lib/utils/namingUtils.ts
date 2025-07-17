import { pascal } from '../../../../utils/pascal';

/**
 * Convert a name to a camelCase variable name
 */
export function nameToVariableName(name: string): string {
  const pascalName = pascal(name);
  return pascalName.charAt(0).toLowerCase() + pascalName.slice(1);
}

/**
 * Convert a name to a valid TypeScript file name
 */
export function nameToFileName(name: string): string {
  return pascal(name);
}
