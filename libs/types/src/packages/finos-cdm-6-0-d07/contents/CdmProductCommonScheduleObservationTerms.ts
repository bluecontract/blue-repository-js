export const CdmProductCommonScheduleObservationTerms: Record<string, unknown> =
  {
    calculationPeriodDates: {
      description:
        'Defines parameters used to generate the calculation period dates schedule, including the specification of any initial or final stub calculation periods. A calculation period schedule consists of an optional initial stub calculation period, one or more regular calculation periods and an optional final stub calculation period. In the absence of any initial or final stub calculation periods, the regular part of the calculation period schedule is assumed to be between the effective date and the termination date. No implicit stubs are allowed, i.e. stubs must be explicitly specified using an appropriate combination of firstPeriodStartDate, firstRegularPeriodStartDate and lastRegularPeriodEndDate.\n',
      type: {
        blueId: 'DfcGaXUQetcXghmMMauh7ikEza42JbwqRdRdyWcm1C6N',
      },
    },
    description:
      'Class containing terms that are associated with observing a price/benchmark/index across either single or multiple observations.\n',
    informationSource: {
      description:
        'The information source where a published or displayed market rate will be obtained, e.g. Telerate Page 3750.',
      type: {
        blueId: '4Jbze8eVmcTD1NE4zxdWWA7NuWrvuqjSc5a68zCAQD7h',
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
        blueId: 'G8BGDmT28hrybjeGtkHwYwXVcbPjYYasBgcNh8dzGSQ8',
      },
    },
    observationTime: {
      description:
        'Defines time in respect to a business calendar location that the price/benchmark/index is observed',
      type: {
        blueId: '4muK6BKTZZzEij2eR3Dg7sQxj224LzRoyzr5n7UcAR3X',
      },
    },
    observationTimeType: {
      description:
        'The enumerated values to specify points in the day when option exercise and valuation can occur.',
      type: {
        blueId: 'CPirifxyoZ3EheLcX6KW9muSEUsxpDaj7mJXu5zW6jsJ',
      },
    },
    precision: {
      description:
        'Defines rounding rules and precision to be used in the rounding of observations.',
      type: {
        blueId: '7fpTDBDMKH4SNXoiKP77e98Hh5vZkbVGXSEenFEztVuv',
      },
    },
  };
