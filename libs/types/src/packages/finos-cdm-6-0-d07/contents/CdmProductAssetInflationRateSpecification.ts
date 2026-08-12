export const CdmProductAssetInflationRateSpecification: Record<
  string,
  unknown
> = {
  averagingMethod: {
    description:
      'If averaging is applicable, this component specifies whether a weighted or unweighted average method of calculation is to be used. The component must only be included when averaging applies.\n',
    type: {
      blueId: '6f9mS8kB4QzF8v95vULVoewQvA8tBCcP6GoaUJg45Lh2',
    },
  },
  calculationMethod: {
    description:
      'Indicates how to use the inflation index to calculate the payment (e.g. Ratio, Return, Spread). Added for Inflation Asset Swap\n',
    type: {
      blueId: 'Eqsc25Hb8Fk47LeCFqmKJcbN2i6cXLYmp8YFf7xNXG3F',
    },
  },
  calculationParameters: {
    description:
      'Support for modular calculated rates, such such as lockout compound calculations.',
    type: {
      blueId: '3uTDiwVssb1uKdurixoF5csTPYjeU3mp49GD4wEFQudb',
    },
  },
  calculationStyle: {
    description:
      'Indicates the style of how the inflation index calculates the payment (e.g. YearOnYear, ZeroCoupon).',
    type: {
      blueId: 'DBCzH1BnfUzDiN7Z6MamD49nsngVMUFxT6qpSFSrc18c',
    },
  },
  capRateSchedule: {
    description:
      'The cap rate or cap rate schedule, if any, which applies to the floating rate. The cap rate (strike) is only required where the floating rate on a swap stream is capped at a certain level. A cap rate schedule is expressed as explicit cap rates and dates and the step dates may be subject to adjustment in accordance with any adjustments specified in calculationPeriodDatesAdjustments. The cap rate is assumed to be exclusive of any spread and is a per annum rate, expressed as a decimal. A cap rate of 5% would be represented as 0.05.\n',
    type: {
      blueId: 'C7hUCSca8bS53iPmTQyPXcvtDcSWgnHfzsFkzdRUQMW8',
    },
  },
  description: 'A data to:  specify the inflation rate.\n',
  fallbackBondApplicable: {
    description:
      'The applicability of a fallback bond as defined in the 2006 ISDA Inflation Derivatives Definitions, sections 1.3 and 1.8.\n',
    schema: {
      required: true,
    },
    type: {
      blueId: 'AwvXD961fmnmqcSQhjMA7r15HpVh39cefb6ZTyUz2Fm2',
    },
  },
  fallbackRate: {
    description: 'Definition of any fallback rate that may be applicable.',
    type: {
      blueId: 'AfsZ9qKh4Qtrp72TzbuRFu1ZJNgDu14DGPa2Pyu7Twrn',
    },
  },
  finalPrincipalExchangeCalculation: {
    description:
      'To be specified only for products that embed a redemption payment.',
    type: {
      blueId: '9WJkDG3GLmcSQTauqgGz648k5tchPvZ5iHYUU49dsqn8',
    },
  },
  finalRateRounding: {
    description:
      'The rounding convention to apply to the final rate used in determination of a calculation period amount.',
    type: {
      blueId: '7fpTDBDMKH4SNXoiKP77e98Hh5vZkbVGXSEenFEztVuv',
    },
  },
  floatingRateMultiplierSchedule: {
    description:
      'A rate multiplier or multiplier schedule to apply to the floating rate. A multiplier schedule is expressed as explicit multipliers and dates. In the case of a schedule, the step dates may be subject to adjustment in accordance with any adjustments specified in the calculationPeriodDatesAdjustments. The multiplier can be a positive or negative decimal. This element should only be included if the multiplier is not equal to 1 (one) for the term of the stream.\n',
    type: {
      blueId: '7phCnc6jaEQE2YU1kKRsCj2JBQMaraQWKWjXBrdBVpvE',
    },
  },
  floorRateSchedule: {
    description:
      'The floor rate or floor rate schedule, if any, which applies to the floating rate. The floor rate (strike) is only required where the floating rate on a swap stream is floored at a certain strike level. A floor rate schedule is expressed as explicit floor rates and dates and the step dates may be subject to adjustment in accordance with any adjustments specified in calculationPeriodDatesAdjustments. The floor rate is assumed to be exclusive of any spread and is a per annum rate, expressed as a decimal. A floor rate of 5% would be represented as 0.05.\n',
    type: {
      blueId: 'C7hUCSca8bS53iPmTQyPXcvtDcSWgnHfzsFkzdRUQMW8',
    },
  },
  indexSource: {
    description:
      'The reference source such as Reuters or Bloomberg. FpML specifies indexSource to be of type rateSourcePageScheme, but without specifying actual values.\n',
    schema: {
      required: true,
    },
    type: {
      blueId: 'HvrBWWRL9WzJPU9bs48T3Uf9CcUgCfqtEszZPN3tYS3n',
    },
  },
  inflationLag: {
    description:
      'An off-setting period from the payment date which determines the reference period for which the inflation index is observed.\n',
    schema: {
      required: true,
    },
    type: {
      blueId: 'GWTMGPw1zgQW3M9NUS6RxNtce5jWU9defVNkm7sV6b8L',
    },
  },
  initialIndexLevel: {
    description: 'Initial known index level for the first calculation period.',
    type: {
      blueId: '9eWaHYz2vKrFofdHTHAizNNu8xP6QE3WQ5y7DGrGZvyJ',
    },
  },
  initialRate: {
    description:
      'The initial floating rate reset agreed between the principal parties involved in the trade. This is assumed to be the first required reset rate for the first regular calculation period. It should only be included when the rate is not equal to the rate published on the source implied by the floating rate index. An initial rate of 5% would be represented as 0.05.\n',
    type: {
      blueId: 'D6pT9tDvB6nnaNaPVHodxcm2djqTNykgt6VJoD2uDq4M',
    },
  },
  interpolationMethod: {
    description:
      'The method used when calculating the Inflation Index Level from multiple points. The most common is Linear.',
    schema: {
      required: true,
    },
    type: {
      blueId: 'H42GaqGDW5E4soD3FMoi2BiRLwzLugVQhzBiLfGaE5hm',
    },
  },
  mainPublication: {
    description:
      'The current main publication source such as relevant web site or a government body. FpML specifies mainPublication to be of type mainPublicationSource, but without specifying actual values.\n',
    schema: {
      required: true,
    },
    type: {
      blueId: 'HvrBWWRL9WzJPU9bs48T3Uf9CcUgCfqtEszZPN3tYS3n',
    },
  },
  name: 'cdm/product/asset/InflationRateSpecification',
  negativeInterestRateTreatment: {
    description:
      'The specification of any provisions for calculating payment obligations when a floating rate is negative (either due to a quoted negative floating rate or by operation of a spread that is subtracted from the floating rate).\n',
    type: {
      blueId: '3S9wGcwziECfCYxsx3JEzQGyA8pisBmmGB1dLPaF4Uz2',
    },
  },
  rateOption: {
    type: {
      blueId: '4G54JBxkdxEwLZwmqaWCK5bKJB6A4GG18uBgBUKxJ4am',
    },
  },
  rateTreatment: {
    description:
      'The specification of any rate conversion which needs to be applied to the observed rate before being used in any calculations. The two common conversions are for securities quoted on a bank discount basis which will need to be converted to either a Money Market Yield or Bond Equivalent Yield. See the Annex to the 2000 ISDA Definitions, Section 7.3. Certain General Definitions Relating to Floating Rate Options, paragraphs (g) and (h) for definitions of these terms.\n',
    type: {
      blueId: '4REjFYKmNm3htXXqQK6yYEKdqScJUTN8EYNZpDTYUzRp',
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
