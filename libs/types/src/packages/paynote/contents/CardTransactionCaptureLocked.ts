export const CardTransactionCaptureLocked = {
  description:
    'Card transaction capture was locked. Any following card transaction capture requests will be rejected.',
  lockedAt: {
    description: 'Timestamp of when the card transaction capture was locked.',
    type: {
      blueId: 'GQaGqFxHDz64L1c9QkCbz52ths6bMVtpHnw4QDngzQYs',
    },
  },
  name: 'Card Transaction Capture Locked',
  type: {
    blueId: '7aeKdDTceCVYDtyYZRdK7eQ8UU6PWn6X26Uea3XrGZdX',
  },
} as const;
