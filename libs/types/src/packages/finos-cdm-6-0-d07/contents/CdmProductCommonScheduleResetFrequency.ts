export const CdmProductCommonScheduleResetFrequency = {
  description:
    'A class defining the reset frequency. In the case of a weekly reset, also specifies the day of the week that the reset occurs. If the reset frequency is greater than the calculation period frequency the this implies that more or more reset dates is established for each calculation period and some form of rate averaging is applicable. The specific averaging method of calculation is specified in FloatingRateCalculation. In case the reset frequency is of value T (term), the period is defined by the swap/swapStream/calculationPerioDates/effectiveDate and the swap/swapStream/calculationPerioDates/terminationDate.\n',
  name: 'cdm/product/common/schedule/ResetFrequency',
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
  weeklyRollConvention: {
    description:
      'The day of the week on which a weekly reset date occurs. This element must be included if the reset frequency is defined as weekly and not otherwise.\n',
    type: {
      blueId: 'fSHW6Drrbqfcs6E2UTodamRcqyfSTBkYTsnXEqbno3m',
    },
  },
} as const;
