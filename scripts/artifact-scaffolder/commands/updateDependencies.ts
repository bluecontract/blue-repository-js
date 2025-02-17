import { execSync } from 'child_process';
import { LibraryConfig } from '../types';

export async function updateDependencies(libraryConfig: LibraryConfig) {
  try {
    console.log(`Updating dependencies for ${libraryConfig.name}`);
    execSync(
      `nx g @blue-repository/nx-plugin:sync-deps --libraryName="${libraryConfig.importPackageName}"`,
      {
        stdio: 'inherit',
      }
    );

    console.log(`Successfully updated dependencies for ${libraryConfig.name}`);
  } catch (error) {
    console.error(
      `Error updating dependencies for ${libraryConfig.name}:`,
      error
    );
  }
}
