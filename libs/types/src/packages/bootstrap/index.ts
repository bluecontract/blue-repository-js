import meta from './meta';
import { contents } from './contents';
import { schemas } from './schemas';
import type { BlueRepositoryPackage } from '@blue-labs/repository-contract';

const packageDefinition = {
  ...meta,
  contents,
  schemas,
} as unknown as BlueRepositoryPackage;

export default packageDefinition;
export { meta, contents, schemas };
