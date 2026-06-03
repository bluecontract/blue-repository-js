export const CdmProductAssetFloatingrateFloatingRateSettingDetails: Record<
  string,
  unknown
> = {
  calculationDetails: {
    description:
      'Calculated rate details (observation dates, values, and weights).',
    type: {
      blueId: '3xtXK1YdVmKnwdTBo6WKzcZ4cthkLD6Cotrd9TGebUpn',
    },
  },
  description:
    'Type for reporting the raw (untreated) observed or calculated rate for a calculation period.  If this is a calculated rate, it allows details of the observations and the resulting rate to be returned.\n',
  floatingRate: {
    description: 'The resulting rate that was observed or calculated.',
    schema: {
      required: true,
    },
    type: {
      blueId: '9eWaHYz2vKrFofdHTHAizNNu8xP6QE3WQ5y7DGrGZvyJ',
    },
  },
  name: 'cdm/product/asset/floatingrate/FloatingRateSettingDetails',
  observationDate: {
    description: 'The day upon which the rate was observed (for term rates).',
    type: {
      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
    },
  },
  resetDate: {
    description:
      'The day for which the rate is needed (e.g. period beginning or end date).',
    type: {
      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
    },
  },
};
