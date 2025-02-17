import { execSync } from 'child_process';

/**
 * Runs Nx Sync for all libraries
 */
export function nxReset() {
  try {
    console.log(`Run Nx Reset`);
    execSync(`nx reset`, {
      stdio: 'inherit',
    });

    console.log(`Successfully Nx Reset`);
  } catch (error) {
    console.error(`Error running Nx Reset:`, error);
  }
}
