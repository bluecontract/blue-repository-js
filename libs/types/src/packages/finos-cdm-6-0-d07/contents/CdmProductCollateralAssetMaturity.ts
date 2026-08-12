export const CdmProductCollateralAssetMaturity: Record<string, unknown> = {
  maturityRange: {
    description: 'Represents a filter based on the underlying asset maturity.',
    schema: {
      required: true,
    },
    type: {
      blueId: 'EUV3MXvt1cQxvRAWp3LAhhkTsfKr9aw5WA86WgqgWQZZ',
    },
  },
  maturityType: {
    description:
      'Specifies whether the maturity range is the remaining or original maturity.',
    schema: {
      required: true,
    },
    type: {
      blueId: 'CgKgs5vpdFaJFjy1u1TBDhrDdp4FwcSbgLFqy7arvU9d',
    },
  },
  name: 'cdm/product/collateral/AssetMaturity',
};
