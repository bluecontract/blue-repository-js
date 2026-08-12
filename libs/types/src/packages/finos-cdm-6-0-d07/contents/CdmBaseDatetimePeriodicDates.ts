export const CdmBaseDatetimePeriodicDates: Record<string, unknown> = {
  dayType: {
    description:
      'Denotes the enumerated values to specify the day type classification used in counting the number of days between two dates.\n',
    type: {
      blueId: '7SsDfFvRbfxrm8vS98NZ5Vq9nqD3CFNGWsLr6dc738LJ',
    },
  },
  description: 'A class for specifying a calculation period schedule.',
  endDate: {
    description:
      'The end date of the calculation period. FpML specifies that for interest rate swaps this date must only be specified if it is not equal to the termination date. It is always specified in the case of equity swaps with periodic payments. This date may be subject to adjustment in accordance with a business day convention.\n',
    type: {
      blueId: 'GW4fUG5i4g68v2eQEznuefGCSUPiwaHXpoVmU4ASwx29',
    },
  },
  name: 'cdm/base/datetime/PeriodicDates',
  periodDatesAdjustments: {
    description:
      'The specification of the business day convention and financial business centers used for adjusting any calculation period date if it would otherwise fall on a day that is not a business day in the specified business center.\n',
    type: {
      blueId: 'AKAczd79wtoD2Vt7VjdFdnWeacw86mQTVeLcyS9SWFZz',
    },
  },
  periodFrequency: {
    description:
      'The frequency at which calculation period end dates occur with the regular part of the calculation period schedule and their roll date convention.\n',
    type: {
      blueId: '9F3YEUELa9MSY4ykUnh7PrK9r3EBLoFcHS5v18N9rRrb',
    },
  },
  startDate: {
    description:
      'The start date of the calculation period. FpML specifies that for interest rate swaps this date must only be specified if it is not equal to the effective date. It is always specified in the case of equity swaps and credit default swaps with periodic payments. This date may be subject to adjustment in accordance with a business day convention.\n',
    type: {
      blueId: 'GW4fUG5i4g68v2eQEznuefGCSUPiwaHXpoVmU4ASwx29',
    },
  },
};
