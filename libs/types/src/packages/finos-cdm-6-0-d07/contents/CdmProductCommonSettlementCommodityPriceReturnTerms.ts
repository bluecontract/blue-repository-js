export const CdmProductCommonSettlementCommodityPriceReturnTerms = {
  conversionFactor: {
    description:
      'Defines the conversion applied if the quantity unit on contract is different from unit on referenced underlier.\n',
    type: {
      blueId: '7pwXmXYCJtWnd348c2JQGBkm9C4renmZRwxbfaypsx5y',
    },
  },
  description: 'Defines parameters in which the commodity price is assessed.',
  name: 'cdm/product/common/settlement/CommodityPriceReturnTerms',
  rollFeature: {
    description:
      'Used in conjunction with an exchange-based pricing source. Identifies a way in which the futures contracts referenced will roll between periods.\n',
    type: {
      blueId: 'FnPP6UpBmzGuofUSjyTEcZkfz1AefAVsm79a4yyozJZS',
    },
  },
  rounding: {
    description:
      'Defines rounding rules and precision to be used in the rounding of a number.',
    type: {
      blueId: 'ArfQ58kSzN4QkRNkhhMYbmgBrEGPrnnSSA4sgC1Stoho',
    },
  },
  spread: {
    description: 'Defines a spread value for one or more defined dates.',
    type: {
      blueId: 'BB9KuWeeD17dQmZbr44QJkSjv1PV3rNCJgH848EEaCyJ',
    },
  },
} as const;
