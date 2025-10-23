import type { BlueRepository } from '@blue-labs/language';
import { blueIds } from './blue-ids';
import * as schemas from './schema';
import { contents } from './contents';

export * from './schema';
export { blueIds } from './blue-ids';
export { contents } from './contents';
export const repository: BlueRepository = {
  blueIds,
  schemas: Object.values(schemas),
  contents,
};
