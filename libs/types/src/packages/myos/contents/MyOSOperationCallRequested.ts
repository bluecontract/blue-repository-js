export const MyOSOperationCallRequested: Record<string, unknown> = {
  description:
    'Request asking MyOS Admin to prepare an Operation Request for a target document. This request is not authority. Before delegated execution, MyOS must select and verify one exact active MyOS Agent Operation Mandate, and the target Timeline Entry must carry the corresponding Mandate Authority.\n',
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
