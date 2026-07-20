export const MyOSOperationCallRequested: Record<string, unknown> = {
  description:
    'Request asking MyOS Admin to write an Operation Request into a target document. The request does not carry a mandate; MyOS Admin finds and verifies an active matching MyOS Document Operation Mandate.\n',
  name: 'MyOS Operation Call Requested',
  request: {
    description: 'Target operation payload.',
  },
  target: {
    channel: {
      description: 'Effective target channel.',
      schema: {
        required: true,
      },
      type: {
        blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
      },
    },
    document: {
      description:
        'Current target document state used as the basis for the call.',
      schema: {
        required: true,
      },
    },
    operation: {
      description: 'Target operation.',
      schema: {
        required: true,
      },
      type: {
        blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
      },
    },
    requireExactDocumentVersion: {
      description:
        'Whether the target Operation Request requires exact target-state equality.',
      type: {
        blueId: 'AwvXD961fmnmqcSQhjMA7r15HpVh39cefb6ZTyUz2Fm2',
      },
    },
  },
  type: {
    blueId: '6XYXgjV6ja1oLqLCs3TWy4RP5UwmpPZKcppBfwwXcckU',
  },
};
