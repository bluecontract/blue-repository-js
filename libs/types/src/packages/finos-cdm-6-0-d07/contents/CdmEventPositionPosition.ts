export const CdmEventPositionPosition: Record<string, unknown> = {
  cashBalance: {
    description: 'The aggregate cost of proceeds',
    type: {
      blueId: 'A6JZXX4Rug3aj7cJh48V6FeziSECwFQzyrJ1xUwd9kii',
    },
  },
  description:
    'A Position describes how much of a given Product is being held and constitutes the atomic element of a Portfolio.\n',
  name: 'cdm/event/position/Position',
  priceQuantity: {
    description: 'Position with many price quantities.',
    itemType: {
      blueId: '4XEYGgCSfXx2tFwmQjMsXhuwaCjsNZ42jtKAcr8itiqe',
    },
    schema: {
      minItems: 1,
    },
    type: {
      blueId: '8DSFoWG9MqRSUhStqoPLrwVQiYByRh18NWbDEarN8MKF',
    },
  },
  product: {
    description: 'The product underlying the position.',
    schema: {
      required: true,
    },
    type: {
      blueId: '52zbUBnH8375AE19gNSXRU7GgGs5tcoUhR84LVdMrBWi#0',
    },
  },
  tradeReference: {
    description:
      'Reference to the Contract, in case product is contractual and the contract has been formed',
    type: {
      blueId: 'EQ41UGrPkUeaUNXD9QmELA1aEoVBtx9tVzgQZ5Tp1rMT',
    },
  },
};
