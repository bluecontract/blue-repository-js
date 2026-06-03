import common from './packages/common/index';
import coordination from './packages/coordination/index';
import finos_cdm_6_0_d07 from './packages/finos-cdm-6-0-d07/index';
import myos from './packages/myos/index';
import paynote from './packages/paynote/index';
import workflows from './packages/workflows/index';
import { name, repositoryVersions } from './meta';
import type { BlueRepository } from '@blue-labs/repository-contract';

export const repository = {
  name,
  repositoryVersions,
  packages: {
    common: common,
    coordination: coordination,
    'finos-cdm-6-0-d07': finos_cdm_6_0_d07,
    myos: myos,
    paynote: paynote,
    workflows: workflows,
  },
} as unknown as BlueRepository;

export default repository;
