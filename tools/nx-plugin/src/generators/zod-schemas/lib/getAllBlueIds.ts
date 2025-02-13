// getAllBlueIds.ts
import * as fs from 'fs';
import * as path from 'path';

import { BlueIds, ModuleBlueIds } from './utils/blueTypes';
import { readYamlFile } from '../../../utils/readYamlFile';
import { readExtendsFile } from './utils/readExtendsFile';
import { getModulePath } from './utils/getModulePath';

export function getAllBlueIds(
  modulePath: string,
  processedModules = new Set<string>()
): ModuleBlueIds {
  if (processedModules.has(modulePath)) {
    return {};
  }
  processedModules.add(modulePath);

  const blueIds: ModuleBlueIds = {};
  const currentModuleName = path.basename(modulePath);

  // read local blue-ids.yaml
  const blueIdsPath = path.join(modulePath, 'blue-ids.yaml');
  if (fs.existsSync(blueIdsPath)) {
    const idsYaml = readYamlFile<BlueIds>(blueIdsPath);
    for (const [typeName, blueId] of Object.entries(idsYaml)) {
      blueIds[blueId] = { typeName, moduleName: currentModuleName };
    }
  }

  // If there's a parent module, gather its IDs too
  const parentModule = readExtendsFile(modulePath);
  if (parentModule) {
    const parentPath = getModulePath(modulePath, parentModule);
    const parentBlueIds = getAllBlueIds(parentPath, processedModules);
    // Only add if not already in local
    for (const [blueId, info] of Object.entries(parentBlueIds)) {
      if (!blueIds[blueId]) {
        blueIds[blueId] = info;
      }
    }
  }

  return blueIds;
}
