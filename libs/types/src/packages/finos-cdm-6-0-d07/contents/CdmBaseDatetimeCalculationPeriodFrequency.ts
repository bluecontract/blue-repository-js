export const CdmBaseDatetimeCalculationPeriodFrequency: Record<
  string,
  unknown
> = {
  balanceOfFirstPeriod: {
    description:
      'Indicates, when true, that that the first Calculation Period should run from the Effective Date to the end of the calendar period in which the Effective Date falls, e.g. Jan 15 - Jan 31 if the calculation periods are one month long and Effective Date is Jan 15. If false, the first Calculation Period should run from the Effective Date for one whole period, e.g. Jan 15 to Feb 14 if the calculation periods are one month long and Effective Date is Jan 15. Mostly used in Commmodity Swaps.\n',
    type: {
      blueId: 'AwvXD961fmnmqcSQhjMA7r15HpVh39cefb6ZTyUz2Fm2',
    },
  },
  description:
    'A class to specify the frequency at which calculation period end dates occur within the regular part of the calculation period schedule and their roll date convention.\n',
  name: 'cdm/base/datetime/CalculationPeriodFrequency',
  period: {
    description:
      'A time period, e.g. a day, week, month, year or term of the stream.',
    type: {
      blueId: 'BLwQ9sW7unThpYZC3TVs8YtMmiAoZ4NVGjVRppu4gm7x',
    },
  },
  periodMultiplier: {
    description:
      'A time period multiplier, e.g. 1, 2, or 3. If the period value is T (Term) then period multiplier must contain the value 1.\n',
    type: {
      blueId: 'E2LM6qgzWG9ttagq2xTmiZkgYEAgkYedFCmU9v7NnVEq',
    },
  },
  rollConvention: {
    description:
      'The roll convention specifies the period term as part of a periodic schedule, i.e. the calculation period end date within the regular part of the calculation period. The value could be a rule, e.g. IMM Settlement Dates, which is the 3rd Wednesday of the month, or it could be a specific day of the month, such as the first day of the applicable month. It is used in conjunction with a frequency and the regular period start date of a calculation period.\n',
    schema: {
      required: true,
    },
    type: {
      blueId: '5vi7aU3GvfLQ4xDo1Ud6tENVfH6eddFwtnAbqXHuxMfi',
    },
  },
};
