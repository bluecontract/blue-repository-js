export const CdmProductCommonScheduleCalculationPeriod = {
  adjustedEndDate: {
    description:
      'The calculation period end date, adjusted according to any relevant business day convention.',
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
  adjustedStartDate: {
    description:
      'The calculation period start date, adjusted according to any relevant business day convention.',
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
  calculationPeriodNumberOfDays: {
    description:
      'The number of days from the adjusted effective / start date to the adjusted termination / end date calculated in accordance with the applicable day count fraction.\n',
    type: {
      blueId: '5WNMiV9Knz63B4dVY5JtMyh3FB4FSGqv7ceScvuapdE1',
    },
  },
  dayCountYearFraction: {
    description:
      'The year fraction value of the calculation period, result of applying the ISDA rules for day count fraction defined in the ISDA Annex.\n',
    type: {
      blueId: '7pwXmXYCJtWnd348c2JQGBkm9C4renmZRwxbfaypsx5y',
    },
  },
  description:
    'A data defining:  the parameters used in the calculation of a fixed or floating rate calculation period amount. This data forms:  part of cashflows representation of a swap stream.\n',
  fixedRate: {
    description:
      'The calculation period fixed rate. A per annum rate, expressed as a decimal. A fixed rate of 5% would be represented as 0.05.\n',
    type: {
      blueId: '7pwXmXYCJtWnd348c2JQGBkm9C4renmZRwxbfaypsx5y',
    },
  },
  floatingRateDefinition: {
    description:
      'The floating rate reset information for the calculation period.',
    type: {
      blueId: 'DZ3QQaSdFmgFJ78DH9tSdAoquu9tGTmUiKpyntACFVwX',
    },
  },
  forecastAmount: {
    description:
      'The amount representing the forecast of the accrued value of the calculation period. An intermediate value used to generate the forecastPaymentAmount in the PaymentCalculationPeriod.\n',
    type: {
      blueId: '5RCy7NwpdTs7j96evsc93hof8nESXDM5u4q3ykG6dXvE',
    },
  },
  forecastRate: {
    description:
      'A value representing the forecast rate used to calculate the forecast future value of the accrual period. This is a calculated rate determined based on averaging the rates in the rateObservation elements, and incorporates all of the rate treatment and averaging rules. A value of 1% should be represented as 0.01.\n',
    type: {
      blueId: '7pwXmXYCJtWnd348c2JQGBkm9C4renmZRwxbfaypsx5y',
    },
  },
  fxLinkedNotionalAmount: {
    description:
      'The amount that a cashflow will accrue interest on. This is the calculated amount of the FX linked - i.e. the other currency notional amount multiplied by the appropriate FX spot rate.\n',
    type: {
      blueId: '7HjksLDGh6YzfTHkRQ2USZ5teJDX6vUpijbCQZwrYeSN',
    },
  },
  name: 'cdm/product/common/schedule/CalculationPeriod',
  notionalAmount: {
    description: 'The amount that a cashflow will accrue interest on.',
    type: {
      blueId: '7pwXmXYCJtWnd348c2JQGBkm9C4renmZRwxbfaypsx5y',
    },
  },
  unadjustedEndDate: {
    description: 'The calculation end date, unadjusted.',
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
  unadjustedStartDate: {
    description: 'The calculation start date, unadjusted.',
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
} as const;
