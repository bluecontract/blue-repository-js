export const CdmEventCommonTradePricingReport: Record<string, unknown> = {
  description:
    'The attributes that are specific for consensus based pricing reporting.',
  discountingIndex: {
    description:
      'It specifies the interest payable on collateral delivered under a CSA covering the trade.',
    type: {
      blueId: 'vMjyu6sbtgT7FA6GScxrp32Njg3k9oW6KxuXLU9RYHx',
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
      blueId: '3jiEy2e5MqwFVX3zkALqRNFaBpD4DawUCg1iYwfFzeca',
    },
  },
  trade: {
    description:
      'Represents the cosensus based pricing parameters on a trade basis.',
    schema: {
      required: true,
    },
    type: {
      blueId: 'Gm86NetLQn7WB75RP28UxDg7WZvhyUm1usBgfAPjFkdM',
    },
  },
};
