/**
 * Transforms a directory name into a valid package name
 */
export const transformToPackageName = (dirName: string) => {
  // Remove version suffix if exists (e.g., "v0.4")
  const nameWithoutVersion = dirName.replace(/\sv[\d.]+$/i, '');

  return nameWithoutVersion
    .toLowerCase() // Convert to lowercase
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/[^a-z0-9-]/g, '') // Remove any characters that aren't letters, numbers, or hyphens
    .replace(/(\d+)/g, '-$1') // Add hyphen before numbers
    .replace(/-+/g, '-') // Replace multiple hyphens with single hyphen
    .replace(/^-|-$/g, ''); // Remove leading/trailing hyphens
};
