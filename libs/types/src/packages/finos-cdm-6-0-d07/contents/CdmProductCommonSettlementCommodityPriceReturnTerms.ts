export const CdmProductCommonSettlementCommodityPriceReturnTerms: Record<
  string,
  unknown
> = {
  conversionFactor: {
    description:
      'Defines the conversion applied if the quantity unit on contract is different from unit on referenced underlier.\n',
    type: {
      blueId: '9eWaHYz2vKrFofdHTHAizNNu8xP6QE3WQ5y7DGrGZvyJ',
    },
  },
  description: 'Defines parameters in which the commodity price is assessed.',
  name: 'cdm/product/common/settlement/CommodityPriceReturnTerms',
  rollFeature: {
    description:
      'Used in conjunction with an exchange-based pricing source. Identifies a way in which the futures contracts referenced will roll between periods.\n',
    type: {
      blueId: 'E2qUUo8XnSB9mMMhWkXkxcQEwJHg3ZJeuWY3g9JvNh6F',
    },
  },
  rounding: {
    description:
      'Defines rounding rules and precision to be used in the rounding of a number.',
    type: {
      blueId: '7fpTDBDMKH4SNXoiKP77e98Hh5vZkbVGXSEenFEztVuv',
    },
  },
  spread: {
    description: 'Defines a spread value for one or more defined dates.',
    type: {
      blueId: 'JBHbnTb3KK4imqfxRHkV1Hdv7p6d8fMSvkBKH5J4cQpv',
    },
  },
};
