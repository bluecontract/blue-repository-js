import { execSync } from 'child_process';
import { LibraryConfig } from '../types';

/**
 * Syncs the code for a library
 */
export async function syncCode(libraryConfig: LibraryConfig) {
  const { parentDir, name, importPackageName } = libraryConfig;

  // Skip if it's the root blue-ids.yaml
  if (parentDir === '.') {
    return;
  }

  try {
    console.log(`Syncing code for ${name}`);
    execSync(
      `nx g @blue-repository/nx-plugin:sync-code --inputPath="${parentDir}" --libraryName="${importPackageName}"`,
      {
        stdio: 'inherit',
      }
    );

    console.log(`Successfully synced code for ${name}`);
  } catch (error) {
    console.error(`Error syncing code for ${name}:`, error);
  }
}
