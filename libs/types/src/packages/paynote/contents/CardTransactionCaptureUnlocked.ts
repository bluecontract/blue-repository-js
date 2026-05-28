export const CardTransactionCaptureUnlocked = {
  description:
    'Card transaction capture was unlocked. Any following card transaction capture requests will be processed.',
  name: 'Card Transaction Capture Unlocked',
  type: {
    blueId: '7aeKdDTceCVYDtyYZRdK7eQ8UU6PWn6X26Uea3XrGZdX',
  },
  unlockedAt: {
    description: 'Timestamp of when the card transaction capture was unlocked.',
    type: {
      blueId: 'GQaGqFxHDz64L1c9QkCbz52ths6bMVtpHnw4QDngzQYs',
    },
  },
} as const;
