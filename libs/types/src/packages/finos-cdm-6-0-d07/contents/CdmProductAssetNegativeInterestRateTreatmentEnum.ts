export const CdmProductAssetNegativeInterestRateTreatmentEnum: Record<
  string,
  unknown
> = {
  description:
    'The enumerated values to specify the method of calculating payment obligations when a floating rate is negative (either due to a quoted negative floating rate or by operation of a spread that is subtracted from the floating rate).\n',
  name: 'cdm/product/asset/NegativeInterestRateTreatmentEnum',
  schema: {
    enum: [
      {
        type: {
          blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
        },
        value: 'NegativeInterestRateMethod',
      },
      {
        type: {
          blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
        },
        value: 'ZeroInterestRateExcludingSpreadMethod',
      },
      {
        type: {
          blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
        },
        value: 'ZeroInterestRateMethod',
      },
    ],
  },
  type: {
    blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
  },
};
