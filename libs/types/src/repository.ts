import common from './packages/common/index';
import conversation from './packages/conversation/index';
import core from './packages/core/index';
import myos from './packages/myos/index';
import paynote from './packages/paynote/index';
import { name, repositoryVersions } from './meta';
import type { BlueRepository } from '@blue-labs/repository-contract';

export const repository = {
  name,
  repositoryVersions,
  packages: {
    common: common,
    conversation: conversation,
    core: core,
    myos: myos,
    paynote: paynote,
  },
} as const satisfies BlueRepository;

export default repository;
