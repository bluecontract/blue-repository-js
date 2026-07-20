export const ParticipantMapping: Record<string, unknown> = {
  accountId: {
    description:
      'Optional account identifier understood by the bootstrap provider.',
    type: {
      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
    },
  },
  channelName: {
    description: 'Abstract channel key in the target document.',
    schema: {
      required: true,
    },
    type: {
      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
    },
  },
  description:
    'Bootstrap input for one abstract channel in a target document. It identifies the participant whom the bootstrap provider should resolve or contact for that channel. The mapping intentionally contains only provider-neutral participant resolution hints.\n',
  email: {
    description:
      'Optional email address used to resolve or invite the participant.',
    type: {
      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
    },
  },
  name: 'Participant Mapping',
};
