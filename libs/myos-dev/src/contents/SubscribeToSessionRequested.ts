export const subscribeToSessionRequested = {
  description:
    'Document asks MyOS Admin to mediate a subscription to a target session it can READ.',
  events: {
    description: 'Optional allow-list of emitted event types to forward.',
    itemType: {
      blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
    },
    type: {
      blueId: 'G8wmfjEqugPEEXByMYWJXiEdbLToPRWNQEekNxrxfQWB',
    },
  },
  name: 'Subscribe to Session Requested',
  targetSessionId: {
    description: 'Session to subscribe to.',
    type: {
      blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
    },
  },
  type: {
    blueId: '3gtD3i9bgfhDat3VB53vrQpchWFn1McYe2ngSc3YLjar',
  },
} as const;
