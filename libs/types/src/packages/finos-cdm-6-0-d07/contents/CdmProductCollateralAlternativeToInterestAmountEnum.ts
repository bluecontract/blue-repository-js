export const CdmProductCollateralAlternativeToInterestAmountEnum: Record<
  string,
  unknown
> = {
  description:
    'If there is an alternative to interest amounts, how is it specified?',
  name: 'cdm/product/collateral/AlternativeToInterestAmountEnum',
  schema: {
    enum: [
      {
        type: {
          blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
        },
        value: 'ActualAmountReceived',
      },
      {
        type: {
          blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
        },
        value: 'Other',
      },
      {
        type: {
          blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
        },
        value: 'Standard',
      },
      {
        type: {
          blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
        },
        value: 'TransferIfDeliveryAmountBelowMTA',
      },
    ],
  },
  type: {
    blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
  },
};
