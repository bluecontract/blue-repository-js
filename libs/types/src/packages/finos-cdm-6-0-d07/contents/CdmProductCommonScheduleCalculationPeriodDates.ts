export const CdmProductCommonScheduleCalculationPeriodDates = {
  calculationPeriodDatesAdjustments: {
    description:
      'The specification of the business day convention and financial business centers used for adjusting any calculation period date if it would otherwise fall on a day that is not a business day in the specified business center.\n',
    type: {
      blueId: 'FzKfYNd8fJo646njaxmU3TVbk5BD8txQXnt5NUm8V7sd',
    },
  },
  calculationPeriodFrequency: {
    description:
      'The frequency at which calculation period end dates occur with the regular part of the calculation period schedule and their roll date convention.\n',
    type: {
      blueId: 'DVb1fCp6T4qAajXVrhWU73Yx25sFe7MdqmytdKoz9LuJ',
    },
  },
  description:
    'A data for:  defining the parameters used to generate the calculation period dates schedule, including the specification of any initial or final stub calculation periods. A calculation period schedule consists of an optional initial stub calculation period, one or more regular calculation periods and an optional final stub calculation period. In the absence of any initial or final stub calculation periods, the regular part of the calculation period schedule is assumed to be between the effective date and the termination date. No implicit stubs are allowed, i.e. stubs must be explicitly specified using an appropriate combination of firstPeriodStartDate, firstRegularPeriodStartDate and lastRegularPeriodEndDate.\n',
  effectiveDate: {
    description:
      'The first day of the terms of the trade. This day may be subject to adjustment in accordance with a business day convention.\n',
    type: {
      blueId: '2tGygxV5BThuWavpJ3T6K3Atw5u4bJZT1Wb2Nxk798dd',
    },
  },
  firstCompoundingPeriodEndDate: {
    description:
      'The end date of the initial compounding period when compounding is applicable. It must only be specified when the compoundingMethod element is present and not equal to a value of None. This date may be subject to adjustment in accordance with any adjustments specified in calculationPeriodDatesAdjustments.\n',
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
  firstPeriodStartDate: {
    description:
      'The start date of the calculation period. FpML specifies that for interest rate swaps this date must only be specified if it is not equal to the effective date. It is always specified in the case of equity swaps and credit default swaps with periodic payments. This date may be subject to adjustment in accordance with a business day convention.\n',
    type: {
      blueId: '2tGygxV5BThuWavpJ3T6K3Atw5u4bJZT1Wb2Nxk798dd',
    },
  },
  firstRegularPeriodStartDate: {
    description:
      'The start date of the regular part of the calculation period schedule. It must only be specified if there is an initial stub calculation period. This day may be subject to adjustment in accordance with any adjustments specified in calculationPeriodDatesAdjustments.\n',
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
  lastRegularPeriodEndDate: {
    description:
      'The end date of the regular part of the calculation period schedule. It must only be specified if there is a final stub calculation period. This day may be subject to adjustment in accordance with any adjustments specified in calculationPeriodDatesAdjustments.\n',
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
  name: 'cdm/product/common/schedule/CalculationPeriodDates',
  stubPeriodType: {
    description:
      'Method to allocate any irregular period remaining after regular periods have been allocated between the effective and termination date.\n',
    type: {
      blueId: '6oofq5cEqVvBXkWwkQPGzgZJdGR1TRM7i29UzSnVFFVd',
    },
  },
  terminationDate: {
    description:
      'The last day of the terms of the trade. This date may be subject to adjustments in accordance with the business day convention. It can also be specified in relation to another scheduled date (e.g. the last payment date).\n',
    type: {
      blueId: '2tGygxV5BThuWavpJ3T6K3Atw5u4bJZT1Wb2Nxk798dd',
    },
  },
} as const;
