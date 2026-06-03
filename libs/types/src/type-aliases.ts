import { Properties } from '@blue-labs/language';

import commonBlueIds from './packages/common/blue-ids';

import coordinationBlueIds from './packages/coordination/blue-ids';

import finos_cdm_6_0_d07BlueIds from './packages/finos-cdm-6-0-d07/blue-ids';

import myosBlueIds from './packages/myos/blue-ids';

import paynoteBlueIds from './packages/paynote/blue-ids';

import workflowsBlueIds from './packages/workflows/blue-ids';

const repositoryTypeAliases = {
  ...Properties.DEFAULT_BLUE_TYPE_NAME_TO_BLUE_ID_MAP,

  ...commonBlueIds,

  ...coordinationBlueIds,

  ...finos_cdm_6_0_d07BlueIds,

  ...myosBlueIds,

  ...paynoteBlueIds,

  ...workflowsBlueIds,
} as const;

export const typeAliasesByBlueId: Record<string, string> = Object.fromEntries(
  Object.entries(repositoryTypeAliases).map(([alias, blueId]) => [
    blueId,
    alias,
  ])
);

export const getTypeAliasByBlueId = (
  blueId: string | null | undefined
): string | undefined => {
  if (!blueId) {
    return undefined;
  }
  return typeAliasesByBlueId[blueId];
};
