export const subscriptionToSessionFailed = {
  name: 'Subscription to Session Failed',
  description:
    'Indicates MyOS Admin rejected the subscription request before activation.',
  type: {
    blueId: '3gtD3i9bgfhDat3VB53vrQpchWFn1McYe2ngSc3YLjar',
  },
  reason: {
    description: 'Explanation why the subscription could not be established.',
    type: {
      blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
    },
  },
  targetSessionId: {
    description: 'Session that was requested, if known.',
    type: {
      blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
    },
  },
} as const;
