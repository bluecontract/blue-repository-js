import path from 'node:path';
import fs from 'node:fs';
interface BlueType {
  moduleName: string;
  moduleBlueId: string;
}

interface PackageJson {
  blueType?: BlueType;
}

export function getLibraryBlueId(libraryName: string): string | null {
  const packageJsonPath = path.join('libs', libraryName, 'package.json');
  if (!fs.existsSync(packageJsonPath)) {
    return null;
  }

  try {
    const packageJson: PackageJson = JSON.parse(
      fs.readFileSync(packageJsonPath, 'utf8')
    );
    return packageJson.blueType?.moduleBlueId || null;
  } catch (error) {
    console.error(`Error reading package.json for ${libraryName}:`, error);
    return null;
  }
}
