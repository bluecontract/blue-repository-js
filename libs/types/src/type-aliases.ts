import { Properties } from '@blue-labs/language';

import commonBlueIds from './packages/common/blue-ids';

import conversationBlueIds from './packages/conversation/blue-ids';

import coreBlueIds from './packages/core/blue-ids';

import myosBlueIds from './packages/myos/blue-ids';

import paynoteBlueIds from './packages/paynote/blue-ids';

const repositoryTypeAliases = {
  ...Properties.CORE_TYPE_NAME_TO_BLUE_ID_MAP,

  ...commonBlueIds,

  ...conversationBlueIds,

  ...coreBlueIds,

  ...myosBlueIds,

  ...paynoteBlueIds,
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
