export const CdmProductAssetFloatingRateSpecification = {
  averagingMethod: {
    description:
      'If averaging is applicable, this component specifies whether a weighted or unweighted average method of calculation is to be used. The component must only be included when averaging applies.\n',
    type: {
      blueId: 'FEzG5SmK13XNnh3kh51FRzCSuQLhC7M8Cugva3kwKFkG',
    },
  },
  calculationParameters: {
    description:
      'Support for modular calculated rates, such such as lockout compound calculations.',
    type: {
      blueId: 'B7KJroezbBh48oEcEjQn6jGLYdXUKPwEMnSuKkCujhV8',
    },
  },
  capRateSchedule: {
    description:
      'The cap rate or cap rate schedule, if any, which applies to the floating rate. The cap rate (strike) is only required where the floating rate on a swap stream is capped at a certain level. A cap rate schedule is expressed as explicit cap rates and dates and the step dates may be subject to adjustment in accordance with any adjustments specified in calculationPeriodDatesAdjustments. The cap rate is assumed to be exclusive of any spread and is a per annum rate, expressed as a decimal. A cap rate of 5% would be represented as 0.05.\n',
    type: {
      blueId: '6ktRd3DjxSYyCKanDCXymsiwCRfvE8Nmdg6Hr6nRsGLs',
    },
  },
  description:
    'A class to specify the floating interest rate by extending the floating rate definition with a set of attributes that specify such rate: the initial value specified as part of the trade, the rounding convention, the averaging method and the negative interest rate treatment.\n',
  fallbackRate: {
    description: 'Definition of any fallback rate that may be applicable.',
    type: {
      blueId: '8ewDoZepMSiSGwyUFm3RC7ALebYhyNao67da6AsyiLFA',
    },
  },
  finalRateRounding: {
    description:
      'The rounding convention to apply to the final rate used in determination of a calculation period amount.',
    type: {
      blueId: 'ArfQ58kSzN4QkRNkhhMYbmgBrEGPrnnSSA4sgC1Stoho',
    },
  },
  floatingRateMultiplierSchedule: {
    description:
      'A rate multiplier or multiplier schedule to apply to the floating rate. A multiplier schedule is expressed as explicit multipliers and dates. In the case of a schedule, the step dates may be subject to adjustment in accordance with any adjustments specified in the calculationPeriodDatesAdjustments. The multiplier can be a positive or negative decimal. This element should only be included if the multiplier is not equal to 1 (one) for the term of the stream.\n',
    type: {
      blueId: '3ScAWMceSndUiR2vHtzZGzPGccvuNjx7L5TmQVXQ9AYf',
    },
  },
  floorRateSchedule: {
    description:
      'The floor rate or floor rate schedule, if any, which applies to the floating rate. The floor rate (strike) is only required where the floating rate on a swap stream is floored at a certain strike level. A floor rate schedule is expressed as explicit floor rates and dates and the step dates may be subject to adjustment in accordance with any adjustments specified in calculationPeriodDatesAdjustments. The floor rate is assumed to be exclusive of any spread and is a per annum rate, expressed as a decimal. A floor rate of 5% would be represented as 0.05.\n',
    type: {
      blueId: '6ktRd3DjxSYyCKanDCXymsiwCRfvE8Nmdg6Hr6nRsGLs',
    },
  },
  initialRate: {
    description:
      'The initial floating rate reset agreed between the principal parties involved in the trade. This is assumed to be the first required reset rate for the first regular calculation period. It should only be included when the rate is not equal to the rate published on the source implied by the floating rate index. An initial rate of 5% would be represented as 0.05.\n',
    type: {
      blueId: 'wuC3RHpv6ahucWwxTgdeQyeUP8ecWQQqgMvSpx3Z543',
    },
  },
  name: 'cdm/product/asset/FloatingRateSpecification',
  negativeInterestRateTreatment: {
    description:
      'The specification of any provisions for calculating payment obligations when a floating rate is negative (either due to a quoted negative floating rate or by operation of a spread that is subtracted from the floating rate).\n',
    type: {
      blueId: 'CyvEqKQpGL1tCK33KuVNmoqqfPY41YR2zXaxhgsjDER2',
    },
  },
  rateOption: {
    type: {
      blueId: 'CwpYZPmQdRGD5hBExM6HNqoCwdcXsK3bbUFxDHPbYjFs',
    },
  },
  rateTreatment: {
    description:
      'The specification of any rate conversion which needs to be applied to the observed rate before being used in any calculations. The two common conversions are for securities quoted on a bank discount basis which will need to be converted to either a Money Market Yield or Bond Equivalent Yield. See the Annex to the 2000 ISDA Definitions, Section 7.3. Certain General Definitions Relating to Floating Rate Options, paragraphs (g) and (h) for definitions of these terms.\n',
    type: {
      blueId: '8GhAUMM1Z2VZSQY9oufxMtUgDuQ5iTuBVYEYrjnYQBBt',
    },
  },
  spreadSchedule: {
    description:
      'The ISDA Spread or a Spread schedule expressed as explicit spreads and dates. In the case of a schedule, the step dates may be subject to adjustment in accordance with any adjustments specified in calculationPeriodDatesAdjustments. The spread is a per annum rate, expressed as a decimal. For purposes of determining a calculation period amount, if positive the spread will be added to the floating rate and if negative the spread will be subtracted from the floating rate. A positive 10 basis point (0.1%) spread would be represented as 0.001.\n',
    type: {
      blueId: 'BB9KuWeeD17dQmZbr44QJkSjv1PV3rNCJgH848EEaCyJ',
    },
  },
} as const;
