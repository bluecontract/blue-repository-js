export const CdmProductCommonScheduleObservationTerms: Record<string, unknown> =
  {
    calculationPeriodDates: {
      description:
        'Defines parameters used to generate the calculation period dates schedule, including the specification of any initial or final stub calculation periods. A calculation period schedule consists of an optional initial stub calculation period, one or more regular calculation periods and an optional final stub calculation period. In the absence of any initial or final stub calculation periods, the regular part of the calculation period schedule is assumed to be between the effective date and the termination date. No implicit stubs are allowed, i.e. stubs must be explicitly specified using an appropriate combination of firstPeriodStartDate, firstRegularPeriodStartDate and lastRegularPeriodEndDate.\n',
      type: {
        blueId: '7dK86pbyNfhuuigQR5bQueaqH68Sqze66Qwad2m64rxg',
      },
    },
    description:
      'Class containing terms that are associated with observing a price/benchmark/index across either single or multiple observations.\n',
    informationSource: {
      description:
        'The information source where a published or displayed market rate will be obtained, e.g. Telerate Page 3750.',
      type: {
        blueId: 'AxAyn6UgyoJj9YDT4soz7eYpmhL8U6kEzFxGMonZgxcg',
      },
    },
    name: 'cdm/product/common/schedule/ObservationTerms',
    numberOfObservationDates: {
      description:
        'The number of observation dates between observation start date and observation end date.',
      type: {
        blueId: 'E2LM6qgzWG9ttagq2xTmiZkgYEAgkYedFCmU9v7NnVEq',
      },
    },
    observationDates: {
      description:
        'Describes date details for a set of observation dates in parametric or non-parametric form.',
      schema: {
        required: true,
      },
      type: {
        blueId: '93jNg58r6VkSD6oX2SzTDJrVHFDWVgDA28zPR4rQJS4F',
      },
    },
    observationTime: {
      description:
        'Defines time in respect to a business calendar location that the price/benchmark/index is observed',
      type: {
        blueId: '4Mi73c2rJbGTBeaTVi4xUgW33QBxsUyxSSV6ELoqnP4j',
      },
    },
    observationTimeType: {
      description:
        'The enumerated values to specify points in the day when option exercise and valuation can occur.',
      type: {
        blueId: '4h5N1XJhikomVgESoUQkDUs2Qfx1RK39JWGgd8HQXgEv',
      },
    },
    precision: {
      description:
        'Defines rounding rules and precision to be used in the rounding of observations.',
      type: {
        blueId: 'BYetgNwutc7xjHHx9g7ZhsdKgyGYMd1UR4jDoHHafJHj',
      },
    },
  };
