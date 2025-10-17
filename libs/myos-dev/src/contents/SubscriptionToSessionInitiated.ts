export const subscriptionToSessionInitiated = {
  name: 'Subscription to Session Initiated',
  description:
    'Confirms that MyOS Admin accepted the subscription request and will start forwarding updates.',
  type: {
    blueId: '3gtD3i9bgfhDat3VB53vrQpchWFn1McYe2ngSc3YLjar',
  },
  targetSessionId: {
    description: 'Session being observed.',
    type: {
      blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
    },
  },
  at: {
    description: 'ISO 8601 timestamp when the subscription became active.',
    type: {
      blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
    },
  },
} as const;
