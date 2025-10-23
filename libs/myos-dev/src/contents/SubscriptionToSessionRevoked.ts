export const subscriptionToSessionRevoked = {
  description:
    'Indicates MyOS Admin stopped forwarding updates for the subscription.',
  name: 'Subscription to Session Revoked',
  reason: {
    description: 'Optional explanation for the revocation.',
    type: {
      blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
    },
  },
  targetSessionId: {
    description: 'Session that is no longer being forwarded.',
    type: {
      blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
    },
  },
  type: {
    blueId: '3gtD3i9bgfhDat3VB53vrQpchWFn1McYe2ngSc3YLjar',
  },
} as const;
