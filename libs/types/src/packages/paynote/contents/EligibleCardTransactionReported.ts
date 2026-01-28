export const EligibleCardTransactionReported = {
  description: 'A reported card transaction was eligible for voucher cashback.',
  eligibleCashbackMinor: {
    description: 'Cashback amount eligible for this transaction.',
    type: {
      blueId: '5WNMiV9Knz63B4dVY5JtMyh3FB4FSGqv7ceScvuapdE1',
    },
  },
  name: 'Eligible Card Transaction Reported',
  report: {
    description: 'Report payload for the eligible transaction.',
    type: {
      blueId: 'CTbHBf2xvYzi2JzwbwSR1B2z5NP566dKDyb1TkBGHfYp',
    },
  },
  type: {
    blueId: '5Wz4G9qcnBJnntYRkz4dgLK5bSuoMpYJZj4j5M59z4we',
  },
} as const;
