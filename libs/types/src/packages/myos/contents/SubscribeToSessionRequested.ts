export const SubscribeToSessionRequested: Record<string, unknown> = {
  description:
    'Document asks MyOS Admin to mediate a subscription to a target session it can READ.',
  name: 'Subscribe to Session Requested',
  subscription: {
    events: {
      description: 'Optional allow-list of emitted event patterns to forward.',
      type: {
        blueId: '8DSFoWG9MqRSUhStqoPLrwVQiYByRh18NWbDEarN8MKF',
      },
    },
    id: {
      description: 'Optional client correlation id.',
      type: {
        blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
      },
    },
  },
  targetSessionId: {
    description: 'Session to subscribe to.',
    type: {
      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
    },
  },
  type: {
    blueId: '6XYXgjV6ja1oLqLCs3TWy4RP5UwmpPZKcppBfwwXcckU',
  },
};
