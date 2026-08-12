export const CdmProductCommonSettlementAssetFlowBase: Record<string, unknown> =
  {
    asset: {
      description:
        'Represents the object that is subject to the transfer, it could be an asset or a reference.',
      schema: {
        required: true,
      },
      type: {
        blueId: '8CTGmD55ifZ1AAAr4uYZHw9mUCiZ7foMLqYSEUbPVz3Q',
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
        blueId: '6jhJaMEanZrm8mpgb8YxWqCNs2c2UY9AoQigsG7hoNgw',
      },
    },
    settlementDate: {
      description: 'Represents the date on which the transfer to due.',
      schema: {
        required: true,
      },
      type: {
        blueId: 'EsGmKpSwEv5rrzVy75nUtg6sXKYHCmZRDzkGMYyQ7zhX',
      },
    },
  };
