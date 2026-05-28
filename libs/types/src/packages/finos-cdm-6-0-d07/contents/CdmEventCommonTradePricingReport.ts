export const CdmEventCommonTradePricingReport = {
  description:
    'The attributes that are specific for consensus based pricing reporting.',
  discountingIndex: {
    description:
      'It specifies the interest payable on collateral delivered under a CSA covering the trade.',
    type: {
      blueId: 'AygoLHtsrgUkWFxjVtQsDYzEn5EbXUEt8avHzLQsUUVZ',
    },
  },
  name: 'cdm/event/common/TradePricingReport',
  pricingTime: {
    description:
      'The regional exchange close time for the underlying contract,including time zone, at which the trades should be priced. This provides an indication for which regional snapshot should be used for pricing primarily for Global markets where there are multiple regional close times.\n',
    schema: {
      required: {
        type: {
          blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
        },
        value: true,
      },
    },
    type: {
      blueId: 'FTUwPbNf3h5HEXFU1GenFhKNQoZGkBe5zAWAf3ZnpvrK',
    },
  },
  trade: {
    description:
      'Represents the cosensus based pricing parameters on a trade basis.',
    schema: {
      required: {
        type: {
          blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
        },
        value: true,
      },
    },
    type: {
      blueId: 'DMPg8sNY4NvsU9grh9o2Bbqy9F7wFkLkA74Z5g8pwNNk',
    },
  },
} as const;
