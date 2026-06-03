export const CdmBaseDatetimeAdjustableDates: Record<string, unknown> = {
  adjustedDate: {
    description:
      'The date(s) once the adjustment has been performed. (Note that this date may change if the business center holidays change).\n',
    itemType: {
      blueId: 'HTDqFgte5VF88dLHnCZMjvyetfxfTAKxf9r8ciErE7Vg',
    },
    schema: {
      minItems: 0,
    },
    type: {
      blueId: '8DSFoWG9MqRSUhStqoPLrwVQiYByRh18NWbDEarN8MKF',
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
    'A class for defining a series of dates that shall be subject to adjustment if they would otherwise fall on a day that is not a business day in the specified business centers, together with the convention for adjusting the dates.\n',
  name: 'cdm/base/datetime/AdjustableDates',
  unadjustedDate: {
    description: 'A date subject to adjustment.',
    itemType: {
      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
    },
    schema: {
      minItems: 0,
    },
    type: {
      blueId: '8DSFoWG9MqRSUhStqoPLrwVQiYByRh18NWbDEarN8MKF',
    },
  },
};
