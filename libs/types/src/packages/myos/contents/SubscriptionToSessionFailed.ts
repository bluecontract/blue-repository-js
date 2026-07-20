export const SubscriptionToSessionFailed: Record<string, unknown> = {
  description:
    'Indicates MyOS Admin rejected the subscription request before activation.',
  name: 'Subscription to Session Failed',
  reason: {
    description: 'Explanation why the subscription could not be established.',
    type: {
      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
    },
  },
  subscriptionId: {
    description: 'The subscription id that failed.',
    type: {
      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
    },
  },
  targetSessionId: {
    description: 'Session that was requested, if known.',
    type: {
      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
    },
  },
  type: {
    blueId: '4rExHc9dQ4h6gqTj343qg2teiFr8GDwWv1aDYPdV21QH',
  },
};
