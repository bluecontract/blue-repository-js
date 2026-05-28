export const CdmProductCommonScheduleObservationTerms = {
  calculationPeriodDates: {
    description:
      'Defines parameters used to generate the calculation period dates schedule, including the specification of any initial or final stub calculation periods. A calculation period schedule consists of an optional initial stub calculation period, one or more regular calculation periods and an optional final stub calculation period. In the absence of any initial or final stub calculation periods, the regular part of the calculation period schedule is assumed to be between the effective date and the termination date. No implicit stubs are allowed, i.e. stubs must be explicitly specified using an appropriate combination of firstPeriodStartDate, firstRegularPeriodStartDate and lastRegularPeriodEndDate.\n',
    type: {
      blueId: 'HNqe2eLHMNHdTJAqM3zJLo9SBP9LgZu1vfSbhQ9KX51v',
    },
  },
  description:
    'Class containing terms that are associated with observing a price/benchmark/index across either single or multiple observations.\n',
  informationSource: {
    description:
      'The information source where a published or displayed market rate will be obtained, e.g. Telerate Page 3750.',
    type: {
      blueId: 'HnwRAqr1R2aXWUnkBsKcZ8yNRHPCmQTAVm6griWqkRce',
    },
  },
  name: 'cdm/product/common/schedule/ObservationTerms',
  numberOfObservationDates: {
    description:
      'The number of observation dates between observation start date and observation end date.',
    type: {
      blueId: '5WNMiV9Knz63B4dVY5JtMyh3FB4FSGqv7ceScvuapdE1',
    },
  },
  observationDates: {
    description:
      'Describes date details for a set of observation dates in parametric or non-parametric form.',
    schema: {
      required: {
        type: {
          blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
        },
        value: true,
      },
    },
    type: {
      blueId: '3eEv8a1ur5GmtEdvqCS9sTFEgTzz1ffcWEvBcZfTMy2h',
    },
  },
  observationTime: {
    description:
      'Defines time in respect to a business calendar location that the price/benchmark/index is observed',
    type: {
      blueId: 'AYcPv3zXSTKojz4MpYi8KWL5Z9TVBuzNzHmzsZe3cYcC',
    },
  },
  observationTimeType: {
    description:
      'The enumerated values to specify points in the day when option exercise and valuation can occur.',
    type: {
      blueId: '5SHUer2m9Wrjeo45qpWiGeBoKwQ2Z66Waz5zaTwYcJUp',
    },
  },
  precision: {
    description:
      'Defines rounding rules and precision to be used in the rounding of observations.',
    type: {
      blueId: 'ArfQ58kSzN4QkRNkhhMYbmgBrEGPrnnSSA4sgC1Stoho',
    },
  },
} as const;
