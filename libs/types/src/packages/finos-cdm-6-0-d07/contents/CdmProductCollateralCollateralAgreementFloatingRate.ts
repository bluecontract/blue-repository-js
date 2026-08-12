export const CdmProductCollateralCollateralAgreementFloatingRate: Record<
  string,
  unknown
> = {
  capRateSchedule: {
    description:
      'The cap rate or cap rate schedule, if any, which applies to the floating rate. The cap rate (strike) is only required where the floating rate on a swap stream is capped at a certain level. A cap rate schedule is expressed as explicit cap rates and dates and the step dates may be subject to adjustment in accordance with any adjustments specified in calculationPeriodDatesAdjustments. The cap rate is assumed to be exclusive of any spread and is a per annum rate, expressed as a decimal. A cap rate of 5% would be represented as 0.05.\n',
    type: {
      blueId: 'C7hUCSca8bS53iPmTQyPXcvtDcSWgnHfzsFkzdRUQMW8',
    },
  },
  compressibleSpread: {
    description:
      'Specifies how spreads should be applied in a low/negative rate environment.  If true, spread is applied only if rate is positive.\n',
    schema: {
      required: true,
    },
    type: {
      blueId: 'AwvXD961fmnmqcSQhjMA7r15HpVh39cefb6ZTyUz2Fm2',
    },
  },
  description:
    'Represents the parameters needed to calculate the floating rate paid on collateral holdings.',
  floorRateSchedule: {
    description:
      'The floor rate or floor rate schedule, if any, which applies to the floating rate. The floor rate (strike) is only required where the floating rate on a swap stream is floored at a certain strike level. A floor rate schedule is expressed as explicit floor rates and dates and the step dates may be subject to adjustment in accordance with any adjustments specified in calculationPeriodDatesAdjustments. The floor rate is assumed to be exclusive of any spread and is a per annum rate, expressed as a decimal. A floor rate of 5% would be represented as 0.05.\n',
    type: {
      blueId: 'C7hUCSca8bS53iPmTQyPXcvtDcSWgnHfzsFkzdRUQMW8',
    },
  },
  name: 'cdm/product/collateral/CollateralAgreementFloatingRate',
  negativeInterest: {
    description:
      'Specifies how negative rates should be applied.  If rates go negative, should the payment be reversed (true) or zeroed out (false)?\n',
    schema: {
      required: true,
    },
    type: {
      blueId: 'AwvXD961fmnmqcSQhjMA7r15HpVh39cefb6ZTyUz2Fm2',
    },
  },
  rateOption: {
    type: {
      blueId: '4G54JBxkdxEwLZwmqaWCK5bKJB6A4GG18uBgBUKxJ4am',
    },
  },
  spreadSchedule: {
    description:
      'The ISDA Spread or a Spread schedule expressed as explicit spreads and dates. In the case of a schedule, the step dates may be subject to adjustment in accordance with any adjustments specified in calculationPeriodDatesAdjustments. The spread is a per annum rate, expressed as a decimal. For purposes of determining a calculation period amount, if positive the spread will be added to the floating rate and if negative the spread will be subtracted from the floating rate. A positive 10 basis point (0.1%) spread would be represented as 0.001.\n',
    type: {
      blueId: 'JBHbnTb3KK4imqfxRHkV1Hdv7p6d8fMSvkBKH5J4cQpv',
    },
  },
};
