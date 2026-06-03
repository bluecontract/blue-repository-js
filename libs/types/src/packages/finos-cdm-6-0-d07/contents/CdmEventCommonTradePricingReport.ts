export const CdmEventCommonTradePricingReport: Record<string, unknown> = {
  description:
    'The attributes that are specific for consensus based pricing reporting.',
  discountingIndex: {
    description:
      'It specifies the interest payable on collateral delivered under a CSA covering the trade.',
    type: {
      blueId: 'Ffp3NGGHva1Wh7c62eqGBrQTxEzCeASMFJ6PAmoSuCXF',
    },
  },
  name: 'cdm/event/common/TradePricingReport',
  pricingTime: {
    description:
      'The regional exchange close time for the underlying contract,including time zone, at which the trades should be priced. This provides an indication for which regional snapshot should be used for pricing primarily for Global markets where there are multiple regional close times.\n',
    schema: {
      required: true,
    },
    type: {
      blueId: 'A5epowY7nXCnh1AWLF3H4Zv7YyXwwAFethePAEeyAQ92',
    },
  },
  trade: {
    description:
      'Represents the cosensus based pricing parameters on a trade basis.',
    schema: {
      required: true,
    },
    type: {
      blueId: 'GHKfcNGEW4jfWBhqCesd1ZbQ2ZJvDnS1YMm2UZ2ZZNZG',
    },
  },
};
