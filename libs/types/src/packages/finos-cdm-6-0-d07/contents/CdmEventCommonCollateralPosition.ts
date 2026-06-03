export const CdmEventCommonCollateralPosition: Record<string, unknown> = {
  cashBalance: {
    description: 'The aggregate cost of proceeds',
    type: {
      blueId: '7eyr2kXubNSHtLXpHJ9G8NqtmDXLfmDmHQZSkLa9qkyy',
    },
  },
  collateralPositionStatus: {
    description: 'Indicates the collateral positions settlement status.',
    type: {
      blueId: 'ScqKZW3m5Vk4Ht3xpASxxv9euZM32FQPYjE6PbCZEHc',
    },
  },
  description: 'Specifies the individual components of collateral positions.',
  name: 'cdm/event/common/CollateralPosition',
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
  treatment: {
    description:
      'Specifies if there is any treatment to be applied to collateral, such as percentage discount which will impact collateral value.\n',
    type: {
      blueId: '3J8QUqU5781wEZ91F9Y7a1CUz2EihFL2b3SWBCB1FBth',
    },
  },
};
