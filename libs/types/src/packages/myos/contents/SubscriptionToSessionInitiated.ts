export const SubscriptionToSessionInitiated: Record<string, unknown> = {
  at: {
    description: 'ISO 8601 timestamp when the subscription became active.',
    type: {
      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
    },
  },
  description:
    'Confirms that MyOS Admin accepted the subscription request and will start forwarding updates.',
  document: {
    description:
      'The document state at the time the subscription became active.',
  },
  epoch: {
    description: 'The epoch number at which the subscription became active.',
    type: {
      blueId: 'E2LM6qgzWG9ttagq2xTmiZkgYEAgkYedFCmU9v7NnVEq',
    },
  },
  name: 'Subscription to Session Initiated',
  subscriptionId: {
    description: 'The subscription id that was initiated.',
    type: {
      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
    },
  },
  targetSessionId: {
    description: 'Session being observed.',
    type: {
      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
    },
  },
  type: {
    blueId: '4rExHc9dQ4h6gqTj343qg2teiFr8GDwWv1aDYPdV21QH',
  },
};
