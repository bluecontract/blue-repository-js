import conversation from './packages/conversation/index';
import core from './packages/core/index';
import myos from './packages/myos/index';
import paynote from './packages/paynote/index';
import { name, repositoryVersions } from './meta';
export const repository = {
  name,
  repositoryVersions,
  packages: {
    'conversation': conversation,
    'core': core,
    'myos': myos,
    'paynote': paynote,
  },
} as const;
export default repository;
