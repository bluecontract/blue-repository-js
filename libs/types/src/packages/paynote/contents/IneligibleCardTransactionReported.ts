export const IneligibleCardTransactionReported = {
  description:
    'A reported card transaction was not eligible for voucher cashback.',
  name: 'Ineligible Card Transaction Reported',
  reason: {
    description: 'Reason the transaction was ineligible.',
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
  report: {
    description: 'Report payload for the ineligible transaction.',
    type: {
      blueId: 'CTbHBf2xvYzi2JzwbwSR1B2z5NP566dKDyb1TkBGHfYp',
    },
  },
  type: {
    blueId: '5Wz4G9qcnBJnntYRkz4dgLK5bSuoMpYJZj4j5M59z4we',
  },
} as const;
