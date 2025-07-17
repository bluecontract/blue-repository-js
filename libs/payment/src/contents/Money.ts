export const money = {
  name: 'Money',
  description: 'Monetary amount with currency specification',
  amount: {
    description: 'ISO 4217 integer value compliant with minor units',
    type: {
      blueId: 'DHmxTkFbXePZHCHCYmQr2dSzcNLcryFVjXVHkdQrrZr8',
    },
  },
  currency: {
    description: 'ISO 4217 compliant alphabetic code',
    type: {
      blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
    },
  },
} as const;
