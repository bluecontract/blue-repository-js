import { execSync } from 'child_process';
import { LibraryConfig } from '../types';

/**
 * Generates an NX library for the given YAML file
 */
export async function generateLibrary(libraryConfig: LibraryConfig) {
  const { parentDir, name } = libraryConfig;

  // Skip if it's the root blue-ids.yaml
  if (parentDir === '.') {
    return;
  }

  try {
    console.log(`Generating library: ${name}`);
    execSync(`nx g @blue-repository/nx-plugin:library ${name}`, {
      stdio: 'inherit',
    });

    console.log(`Successfully generated library: ${name}`);
  } catch (error) {
    console.error(`Error generating library ${name}:`, error);
  }
}
