export const CdmEventPositionPosition: Record<string, unknown> = {
  cashBalance: {
    description: 'The aggregate cost of proceeds',
    type: {
      blueId: '7eyr2kXubNSHtLXpHJ9G8NqtmDXLfmDmHQZSkLa9qkyy',
    },
  },
  description:
    'A Position describes how much of a given Product is being held and constitutes the atomic element of a Portfolio.\n',
  name: 'cdm/event/position/Position',
  priceQuantity: {
    description: 'Position with many price quantities.',
    itemType: {
      blueId: '2C9DbWa8E4D3cXHSXuDyYmWwrs1ySFopMnyA3XWWesm8',
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
      blueId: '8uQuzNQKBLC5kpFy4UH3BU7PPtpbRZEfLQ2ftrsgLHbm#0',
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
