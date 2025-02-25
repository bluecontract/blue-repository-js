import path from 'node:path';
import fs from 'node:fs';
import { PackageJson } from '../../types';

export function getLibraryBlueId(libraryName: string): string | null {
  const packageJsonPath = path.join('libs', libraryName, 'package.json');
  if (!fs.existsSync(packageJsonPath)) {
    return null;
  }

  try {
    const packageJson = JSON.parse(
      fs.readFileSync(packageJsonPath, 'utf8')
    ) as PackageJson;
    return packageJson.blueType?.moduleBlueId || null;
  } catch (error) {
    console.error(`Error reading package.json for ${libraryName}:`, error);
    return null;
  }
}
