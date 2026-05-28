export const CdmBaseDatetimeCalculationPeriodFrequency = {
  balanceOfFirstPeriod: {
    description:
      'Indicates, when true, that that the first Calculation Period should run from the Effective Date to the end of the calendar period in which the Effective Date falls, e.g. Jan 15 - Jan 31 if the calculation periods are one month long and Effective Date is Jan 15. If false, the first Calculation Period should run from the Effective Date for one whole period, e.g. Jan 15 to Feb 14 if the calculation periods are one month long and Effective Date is Jan 15. Mostly used in Commmodity Swaps.\n',
    type: {
      blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
    },
  },
  description:
    'A class to specify the frequency at which calculation period end dates occur within the regular part of the calculation period schedule and their roll date convention.\n',
  name: 'cdm/base/datetime/CalculationPeriodFrequency',
  period: {
    description:
      'A time period, e.g. a day, week, month, year or term of the stream.',
    type: {
      blueId: '8JrXfrP1RKiRgkbKoCnDi4yAzTEQHNJTFGXAwiNB1Rov',
    },
  },
  periodMultiplier: {
    description:
      'A time period multiplier, e.g. 1, 2, or 3. If the period value is T (Term) then period multiplier must contain the value 1.\n',
    type: {
      blueId: '5WNMiV9Knz63B4dVY5JtMyh3FB4FSGqv7ceScvuapdE1',
    },
  },
  rollConvention: {
    description:
      'The roll convention specifies the period term as part of a periodic schedule, i.e. the calculation period end date within the regular part of the calculation period. The value could be a rule, e.g. IMM Settlement Dates, which is the 3rd Wednesday of the month, or it could be a specific day of the month, such as the first day of the applicable month. It is used in conjunction with a frequency and the regular period start date of a calculation period.\n',
    schema: {
      required: {
        type: {
          blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
        },
        value: true,
      },
    },
    type: {
      blueId: 'GuCCvmuEa9YVo21GL55jX27P3w1AYG7GA6XRTzThccjb',
    },
  },
} as const;
