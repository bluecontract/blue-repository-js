export const CdmBaseDatetimeAdjustableDate: Record<string, unknown> = {
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
  dateAdjustmentsReference: {
    description:
      'A pointer style reference to date adjustments defined elsewhere in the document.',
    type: {
      blueId: '8ob5XfEjggmQWCgVGZrrfihRpPpUr2yZ4MepyJHJvZ4C',
    },
  },
  description:
    'A class for defining a date that shall be subject to adjustment if it would otherwise fall on a day that is not a business day in the specified business centers, together with the convention for adjusting the date.\n',
  name: 'cdm/base/datetime/AdjustableDate',
  unadjustedDate: {
    description:
      'A date subject to adjustment. While in FpML this date is required, this cardinality constraint has been relaxed as part of the CDM in order to support the FRA representation, which effective and termination dates are specified in FpML as adjusted dates.\n',
    type: {
      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
    },
  },
};
