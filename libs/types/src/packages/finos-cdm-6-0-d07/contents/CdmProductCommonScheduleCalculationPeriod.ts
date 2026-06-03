export const CdmProductCommonScheduleCalculationPeriod: Record<
  string,
  unknown
> = {
  adjustedEndDate: {
    description:
      'The calculation period end date, adjusted according to any relevant business day convention.',
    type: {
      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
    },
  },
  adjustedStartDate: {
    description:
      'The calculation period start date, adjusted according to any relevant business day convention.',
    type: {
      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
    },
  },
  calculationPeriodNumberOfDays: {
    description:
      'The number of days from the adjusted effective / start date to the adjusted termination / end date calculated in accordance with the applicable day count fraction.\n',
    type: {
      blueId: 'E2LM6qgzWG9ttagq2xTmiZkgYEAgkYedFCmU9v7NnVEq',
    },
  },
  dayCountYearFraction: {
    description:
      'The year fraction value of the calculation period, result of applying the ISDA rules for day count fraction defined in the ISDA Annex.\n',
    type: {
      blueId: '9eWaHYz2vKrFofdHTHAizNNu8xP6QE3WQ5y7DGrGZvyJ',
    },
  },
  description:
    'A data defining:  the parameters used in the calculation of a fixed or floating rate calculation period amount. This data forms:  part of cashflows representation of a swap stream.\n',
  fixedRate: {
    description:
      'The calculation period fixed rate. A per annum rate, expressed as a decimal. A fixed rate of 5% would be represented as 0.05.\n',
    type: {
      blueId: '9eWaHYz2vKrFofdHTHAizNNu8xP6QE3WQ5y7DGrGZvyJ',
    },
  },
  floatingRateDefinition: {
    description:
      'The floating rate reset information for the calculation period.',
    type: {
      blueId: '4oxb1sguUNq2AqF4ycCwRJPs6eJL47WfUqhjsxJXRZNa',
    },
  },
  forecastAmount: {
    description:
      'The amount representing the forecast of the accrued value of the calculation period. An intermediate value used to generate the forecastPaymentAmount in the PaymentCalculationPeriod.\n',
    type: {
      blueId: '7eyr2kXubNSHtLXpHJ9G8NqtmDXLfmDmHQZSkLa9qkyy',
    },
  },
  forecastRate: {
    description:
      'A value representing the forecast rate used to calculate the forecast future value of the accrual period. This is a calculated rate determined based on averaging the rates in the rateObservation elements, and incorporates all of the rate treatment and averaging rules. A value of 1% should be represented as 0.01.\n',
    type: {
      blueId: '9eWaHYz2vKrFofdHTHAizNNu8xP6QE3WQ5y7DGrGZvyJ',
    },
  },
  fxLinkedNotionalAmount: {
    description:
      'The amount that a cashflow will accrue interest on. This is the calculated amount of the FX linked - i.e. the other currency notional amount multiplied by the appropriate FX spot rate.\n',
    type: {
      blueId: 'J1E3aP2gHFG6xXmDZbkh3v4aXuN62czNKzQgw9T41sdB',
    },
  },
  name: 'cdm/product/common/schedule/CalculationPeriod',
  notionalAmount: {
    description: 'The amount that a cashflow will accrue interest on.',
    type: {
      blueId: '9eWaHYz2vKrFofdHTHAizNNu8xP6QE3WQ5y7DGrGZvyJ',
    },
  },
  unadjustedEndDate: {
    description: 'The calculation end date, unadjusted.',
    type: {
      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
    },
  },
  unadjustedStartDate: {
    description: 'The calculation start date, unadjusted.',
    type: {
      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
    },
  },
};
