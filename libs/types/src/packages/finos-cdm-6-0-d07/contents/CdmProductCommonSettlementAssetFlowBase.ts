export const CdmProductCommonSettlementAssetFlowBase: Record<string, unknown> =
  {
    asset: {
      description:
        'Represents the object that is subject to the transfer, it could be an asset or a reference.',
      schema: {
        required: true,
      },
      type: {
        blueId: '5UGws2rghMXJPsBC2YMTqJQgztQ8nTZm1XTaGkvxheXo',
      },
    },
    description:
      'Defines the basic parameters of an asset transfer, e.g. a cashflow: what (the asset), how much (the quantity) and when (the settlement date).\n',
    name: 'cdm/product/common/settlement/AssetFlowBase',
    quantity: {
      description:
        'Represents the amount of the asset to be transferred. The cashflow amount is always a positive number, as the cashflow direction is implied by the payer/receiver attribute.\n',
      schema: {
        required: true,
      },
      type: {
        blueId: 'BoLMyAuLAegX9RWR7trQbdmp7pB2tAfkPhDoTzbu8acd',
      },
    },
    settlementDate: {
      description: 'Represents the date on which the transfer to due.',
      schema: {
        required: true,
      },
      type: {
        blueId: '8VijgDyT9t9CiNbNQYVbdE1whbL9Q9DTRMZpCocVhSxF',
      },
    },
  };
