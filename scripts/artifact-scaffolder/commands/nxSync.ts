import { execSync } from 'child_process';

/**
 * Runs Nx Sync for all libraries
 */
export function nxSync() {
  try {
    console.log(`Run Nx Sync`);
    execSync(`nx sync`, {
      stdio: 'inherit',
    });

    console.log(`Successfully Nx Sync`);
  } catch (error) {
    console.error(`Error running Nx Sync`, error);
  }
}
