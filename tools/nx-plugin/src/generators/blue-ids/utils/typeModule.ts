import * as path from 'path';
import { readYamlFile } from '../../../utils/readYamlFile';

export const getTypeModuleInformations = (inputPath: string) => {
  const typeModuleName = path.basename(inputPath);
  const rootBlueIdsPath = path.join(inputPath, '..', 'blue-ids.yaml');

  const blueIds = readYamlFile<Record<string, string>>(rootBlueIdsPath);

  const typeModuleBlueId = blueIds[typeModuleName];

  return {
    typeModuleName,
    typeModuleBlueId,
  };
};
