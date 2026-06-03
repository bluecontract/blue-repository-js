export const CdmBaseDatetimeAdjustableOrAdjustedDate: Record<string, unknown> =
  {
    adjustedDate: {
      description:
        'The date once the adjustment has been performed. (Note that this date may change if the business center holidays change).\n',
      type: {
        blueId: 'HTDqFgte5VF88dLHnCZMjvyetfxfTAKxf9r8ciErE7Vg',
      },
    },
    dateAdjustments: {
      description:
        'The business day convention and financial business centers used for adjusting the date if it would otherwise fall on a day that is not a business date in the specified business centers.\n',
      type: {
        blueId: '8ZhZC2EwhTqHnDvvcr2ZW4iwCBJM57NcLAqPCd8shypq',
      },
    },
    description:
      'A class for defining a date that shall be subject to adjustment if it would otherwise fall on a day that is not a business day in the specified business centers, together with the convention for adjusting the date.\n',
    name: 'cdm/base/datetime/AdjustableOrAdjustedDate',
    unadjustedDate: {
      description: 'A date subject to adjustment.',
      type: {
        blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
      },
    },
  };
