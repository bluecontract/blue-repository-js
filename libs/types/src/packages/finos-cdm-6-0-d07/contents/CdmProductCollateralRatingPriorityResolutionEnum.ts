export const CdmProductCollateralRatingPriorityResolutionEnum: Record<
  string,
  unknown
> = {
  description:
    "Represents an enumeration list to identify which Collateral Criteria type should have priority over others. If set to 'Issuer', the rating in the \n  Issuer Criteria has priority or is used if there is no Asset criteria. If set to 'Asset', the rating in the Asset Criteria has priority or is used if there is no Issuer rating.\n",
  name: 'cdm/product/collateral/RatingPriorityResolutionEnum',
  schema: {
    enum: [
      {
        type: {
          blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
        },
        value: 'Asset',
      },
      {
        type: {
          blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
        },
        value: 'Average',
      },
      {
        type: {
          blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
        },
        value: 'Highest',
      },
      {
        type: {
          blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
        },
        value: 'Issuer',
      },
      {
        type: {
          blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
        },
        value: 'Lowest',
      },
    ],
  },
  type: {
    blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
  },
};
