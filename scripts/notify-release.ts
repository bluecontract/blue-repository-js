import fs from 'fs';
import path from 'path';
import axios from 'axios';
import { PackageJson } from './types';

const API_BASE_URL = process.env.API_BASE_URL || 'https://api.repo.blue';

async function notifyRelease(fullPackageName: string) {
  try {
    const packageName = fullPackageName.replace(
      /^.*\/(?:@blue-repository\/)?/,
      ''
    );

    // Construct path to package.json
    const packageJsonPath = path.join(
      process.cwd(),
      'libs',
      packageName,
      'package.json'
    );

    const packageJsonContent = fs.readFileSync(packageJsonPath, 'utf-8');
    const packageJson: PackageJson = JSON.parse(packageJsonContent);

    if (!packageJson.blueType) {
      throw new Error(`No blueType found in package.json for ${packageName}`);
    }

    const response = await axios.post(
      `${API_BASE_URL}/${packageJson.blueType.moduleBlueId}/sdks`,
      {
        type: 'js',
        package: fullPackageName,
        version: packageJson.version,
      }
    );

    console.log(
      `Successfully notified API about release of ${fullPackageName} v${packageJson.version}`
    );
    return response.data;
  } catch (error) {
    console.error('Error notifying release:', error);
    process.exit(1);
  }
}

// Get package name from command line argument
const packageArg = process.argv[2];
if (!packageArg) {
  console.error('Please provide package name as an argument');
  process.exit(1);
}

notifyRelease(packageArg);
