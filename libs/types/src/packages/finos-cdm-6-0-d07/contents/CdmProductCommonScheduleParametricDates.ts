export const CdmProductCommonScheduleParametricDates: Record<string, unknown> =
  {
    businessCenters: {
      description: 'The enumerated values to specify the business centers.',
      schema: {
        required: true,
      },
      type: {
        blueId: 'Ds5a9bChKossVgHEM7Z2TQTCxDXdB2SZhtM9v9Y3mYmM',
      },
    },
    dayDistribution: {
      description:
        'Denotes the method by which the pricing days are distributed across the pricing period.',
      type: {
        blueId: 'hQr5MwUS6CucReoCUdM1bToeUnZNuEiqWL4aadinx9h',
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
        blueId: 'DmhfCUUAaa5kZ8Qsom8VwEsMN3qmGWaJX1pGtUCfbqRQ',
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
        blueId: '7SsDfFvRbfxrm8vS98NZ5Vq9nqD3CFNGWsLr6dc738LJ',
      },
    },
    description:
      'Defines rules for the dates on which the price will be determined.',
    lag: {
      description:
        'The pricing period per calculation period if the pricing days do not wholly fall within the respective calculation period.\n',
      type: {
        blueId: '9dUxAKwefutKuBfGuYNrjooNVQNxzQHdyCXdCzhcU2fe',
      },
    },
    name: 'cdm/product/common/schedule/ParametricDates',
  };
