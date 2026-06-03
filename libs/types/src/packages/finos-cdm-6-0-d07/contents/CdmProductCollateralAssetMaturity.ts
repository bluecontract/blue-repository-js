export const CdmProductCollateralAssetMaturity: Record<string, unknown> = {
  maturityRange: {
    description: 'Represents a filter based on the underlying asset maturity.',
    schema: {
      required: true,
    },
    type: {
      blueId: 'Gnv2JatHomC6ZL7YnSSsr5b8Qx1hWWGYFQocqArJgJCj',
    },
  },
  maturityType: {
    description:
      'Specifies whether the maturity range is the remaining or original maturity.',
    schema: {
      required: true,
    },
    type: {
      blueId: '4M9RAThHXP4VWteUq2nq2RyirfHaGCinAVabk8gf2AYC',
    },
  },
  name: 'cdm/product/collateral/AssetMaturity',
};
