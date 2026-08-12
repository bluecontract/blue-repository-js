export const CdmProductCommonScheduleObservationDate: Record<string, unknown> =
  {
    adjustedDate: {
      description:
        'The date once the adjustment has been performed. (Note that this date may change if the business center holidays change).\n',
      type: {
        blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
      },
    },
    description:
      'Specifies a single date on which market observations take place and specifies optional associated weighting.',
    name: 'cdm/product/common/schedule/ObservationDate',
    observationReference: {
      description:
        'Specifies an identification key for the market observation. This attribute can be used as a reference to assign weights to a series of dates defined in a parametricSchedule.\n',
      type: {
        blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
      },
    },
    unadjustedDate: {
      description: 'A date subject to adjustment.',
      type: {
        blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
      },
    },
    weight: {
      description: 'Specifies the degree of importance of the observation.',
      type: {
        blueId: '9eWaHYz2vKrFofdHTHAizNNu8xP6QE3WQ5y7DGrGZvyJ',
      },
    },
  };
