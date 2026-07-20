export const MyOSSessionSubscriptionEnded: Record<string, unknown> = {
  description:
    'Response indicating that a root or linked-document subscription stream has ended. No further updates for this sourceInitialDocument are delivered under the identified subscription unless a future reinitiation protocol creates a new active stream.\n',
  name: 'MyOS Session Subscription Ended',
  reason: {
    description:
      'End reason, such as Requested, MandateTerminated, SourceUnavailable, Unlinked, or ProviderStopped.\n',
    type: {
      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
    },
  },
  sourceInitialDocument: {
    description:
      'Initial document identifying the ended root or linked-document stream.',
    schema: {
      required: true,
    },
  },
  subscriptionId: {
    description: 'Subscription stream that ended.',
    schema: {
      required: true,
    },
    type: {
      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
    },
  },
  type: {
    blueId: '4rExHc9dQ4h6gqTj343qg2teiFr8GDwWv1aDYPdV21QH',
  },
};
