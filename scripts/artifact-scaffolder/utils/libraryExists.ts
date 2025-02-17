import * as fs from 'node:fs';

/**
 * Checks if a library already exists
 */
export function libraryExists(name: string): boolean {
  const projectPath = `libs/${name}/project.json`;
  return fs.existsSync(projectPath);
}
