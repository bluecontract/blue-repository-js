export const CdmProductCommonScheduleParametricDates: Record<string, unknown> =
  {
    businessCenters: {
      description: 'The enumerated values to specify the business centers.',
      schema: {
        required: true,
      },
      type: {
        blueId: 'H53mV1d8rMzhefLZH8WzGchozyQA28cbwNpBHGmVA9ti',
      },
    },
    dayDistribution: {
      description:
        'Denotes the method by which the pricing days are distributed across the pricing period.',
      type: {
        blueId: '7aBrcowDER57iJ1dKZQ3YqngDZfz6eNHJExw8Egww997',
      },
    },
    dayFrequency: {
      description:
        'Defines the occurrence of the dayOfWeek within the pricing period on which pricing will take place, e.g. the 3rd Friday within each Calculation Period. If omitted, every dayOfWeek will be a pricing day.\n',
      type: {
        blueId: '9eWaHYz2vKrFofdHTHAizNNu8xP6QE3WQ5y7DGrGZvyJ',
      },
    },
    dayOfWeek: {
      description:
        'Indicates the days of the week on which the price will be determined.',
      itemType: {
        blueId: 'AYNVNBQsDmS46NA7kfw7jh6eh8DBspyMyDd1bzyBmDG5',
      },
      schema: {
        maxItems: 7,
        minItems: 0,
      },
      type: {
        blueId: '8DSFoWG9MqRSUhStqoPLrwVQiYByRh18NWbDEarN8MKF',
      },
    },
    dayType: {
      description:
        'Denotes the enumerated values to specify the day type classification used in counting the number of days between two dates.\n',
      schema: {
        required: true,
      },
      type: {
        blueId: 'EPBWZ9jBx984Q99bnqB2NAqBTKrAr4mJWCYnwcFgnivq',
      },
    },
    description:
      'Defines rules for the dates on which the price will be determined.',
    lag: {
      description:
        'The pricing period per calculation period if the pricing days do not wholly fall within the respective calculation period.\n',
      type: {
        blueId: 'H52wAsRZktjp4tpCZgu6wnQMFaksvVT2T9gxSHdZjSbg',
      },
    },
    name: 'cdm/product/common/schedule/ParametricDates',
  };
