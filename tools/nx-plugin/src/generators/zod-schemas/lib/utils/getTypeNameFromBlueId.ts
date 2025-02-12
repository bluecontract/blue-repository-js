// getTypeNameFromBlueId.ts
import { BlueIdInfo, ModuleBlueIds } from './blueTypes';

export function getTypeNameFromBlueId(
  blueIds: ModuleBlueIds,
  typeId: string
): BlueIdInfo | undefined {
  return blueIds[typeId];
}
