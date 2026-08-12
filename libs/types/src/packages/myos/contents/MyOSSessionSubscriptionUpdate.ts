export const MyOSSessionSubscriptionUpdate: Record<string, unknown> = {
  description:
    'Provider-mediated subscription update for one logical source document. The same subscriptionId is used for the root source and derived linked-document streams. sourceInitialDocument identifies the logical document represented by this update.\n',
  document: {
    description:
      'Optional processed source-document snapshot selected by the filter.',
  },
  events: {
    description:
      'Matching emitted events for the delivered source epoch; may be empty.',
    schema: {
      required: true,
    },
    type: {
      blueId: '8DSFoWG9MqRSUhStqoPLrwVQiYByRh18NWbDEarN8MKF',
    },
  },
  name: 'MyOS Session Subscription Update',
  sourceInitialDocument: {
    description:
      'Initial document identifying the logical source of this update.',
    schema: {
      required: true,
    },
  },
  subscriptionId: {
    description: 'Stable identifier of the subscription stream.',
    schema: {
      required: true,
    },
    type: {
      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
    },
  },
  type: {
    blueId: '283zu1pu97gXBs4mquE3MSjwRYTzZSXZhnRSemCH8mZr',
  },
};
