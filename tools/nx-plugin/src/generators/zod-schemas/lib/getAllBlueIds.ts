import * as fs from 'fs';
import * as path from 'path';

import { BlueIds, ModuleBlueIds } from './utils/blueTypes';
import { readYamlFile } from '../../../utils/readYamlFile';
import { readExtendsFile } from './utils/readExtendsFile';
import { getModulePath } from './utils/getModulePath';

/**
 * Recursively collects all Blue IDs from a module and its parent modules.
 * Blue IDs are collected from 'blue-ids.yaml' files in each module.
 * If a module extends another module, the parent module's Blue IDs are also collected.
 * Local module IDs take precedence over parent module IDs in case of conflicts.
 *
 * @param modulePath - Absolute path to the module directory
 * @param processedModules - Set of already processed module paths to prevent circular dependencies
 * @returns A mapping of Blue IDs to their type and module information
 */
export function getAllBlueIds(
  modulePath: string,
  processedModules = new Set<string>()
): ModuleBlueIds {
  // Prevent circular dependencies
  if (processedModules.has(modulePath)) {
    return {};
  }
  processedModules.add(modulePath);

  const moduleBlueIds: ModuleBlueIds = {};
  const currentModuleName = path.basename(modulePath);

  // Collect Blue IDs from the current module
  const moduleBlueIdsPath = path.join(modulePath, 'blue-ids.yaml');
  if (fs.existsSync(moduleBlueIdsPath)) {
    const moduleBlueIdsYaml = readYamlFile<BlueIds>(moduleBlueIdsPath);
    for (const [typeName, blueId] of Object.entries(moduleBlueIdsYaml)) {
      moduleBlueIds[blueId] = {
        typeName,
        moduleName: currentModuleName,
      };
    }
  }

  // Collect Blue IDs from the parent module if it exists
  const parentModuleName = readExtendsFile(modulePath);
  if (parentModuleName) {
    const parentModulePath = getModulePath(modulePath, parentModuleName);
    const parentModuleBlueIds = getAllBlueIds(
      parentModulePath,
      processedModules
    );

    // Add parent Blue IDs that don't conflict with local ones
    for (const [blueId, typeInfo] of Object.entries(parentModuleBlueIds)) {
      if (!moduleBlueIds[blueId]) {
        moduleBlueIds[blueId] = typeInfo;
      }
    }
  }

  return moduleBlueIds;
}
