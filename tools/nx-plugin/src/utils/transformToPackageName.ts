/**
 * Transforms a directory name into a valid package name
 * Examples:
 * - "basic1" -> "basic-1"
 * - "TestingJS" -> "testing-js"
 * - "BlueContractsV0.4" -> "blue-contracts"
 */
export function transformToPackageName(dirName: string): string {
  return dirName
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/([A-Z])([A-Z][a-z])/g, '$1-$2')
    .replace(/V\d+(\.\d+)*$/g, '') // Remove version strings like V0.4, V1.0, etc.
    .toLowerCase()
    .replace(/[^a-z0-9.-]/g, '-')
    .replace(/-+$/g, ''); // Remove trailing hyphens
}
