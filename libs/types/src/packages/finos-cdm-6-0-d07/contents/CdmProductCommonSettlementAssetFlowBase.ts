export const CdmProductCommonSettlementAssetFlowBase = {
  asset: {
    description:
      'Represents the object that is subject to the transfer, it could be an asset or a reference.',
    schema: {
      required: {
        type: {
          blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
        },
        value: true,
      },
    },
    type: {
      blueId: 'B3bsNNAr8QJpJA8r84kgZrHLE5PZREBGxXWYJdtaDRJ7',
    },
  },
  description:
    'Defines the basic parameters of an asset transfer, e.g. a cashflow: what (the asset), how much (the quantity) and when (the settlement date).\n',
  name: 'cdm/product/common/settlement/AssetFlowBase',
  quantity: {
    description:
      'Represents the amount of the asset to be transferred. The cashflow amount is always a positive number, as the cashflow direction is implied by the payer/receiver attribute.\n',
    schema: {
      required: {
        type: {
          blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
        },
        value: true,
      },
    },
    type: {
      blueId: 'BbfKyr9mpdQ8cuNvCP78fS2o4Rc7gQZ1GdcbnyD6grzK',
    },
  },
  settlementDate: {
    description: 'Represents the date on which the transfer to due.',
    schema: {
      required: {
        type: {
          blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
        },
        value: true,
      },
    },
    type: {
      blueId: 'BwTCpPFhSqEbgjkUmssmzp1ig5hb3QSdGhqroiTDsJvJ',
    },
  },
} as const;
