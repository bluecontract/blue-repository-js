export const CdmProductAssetFloatingRateSpecification: Record<string, unknown> =
  {
    averagingMethod: {
      description:
        'If averaging is applicable, this component specifies whether a weighted or unweighted average method of calculation is to be used. The component must only be included when averaging applies.\n',
      type: {
        blueId: '2Xm4KS94SVHHV9NjHpmazjMW6ALPBBv1ALbx2bE3B7K5',
      },
    },
    calculationParameters: {
      description:
        'Support for modular calculated rates, such such as lockout compound calculations.',
      type: {
        blueId: 'BzAmRPH81HKGy6cSBQMksdVVxBpKtdVhJKSbFqKiErQP',
      },
    },
    capRateSchedule: {
      description:
        'The cap rate or cap rate schedule, if any, which applies to the floating rate. The cap rate (strike) is only required where the floating rate on a swap stream is capped at a certain level. A cap rate schedule is expressed as explicit cap rates and dates and the step dates may be subject to adjustment in accordance with any adjustments specified in calculationPeriodDatesAdjustments. The cap rate is assumed to be exclusive of any spread and is a per annum rate, expressed as a decimal. A cap rate of 5% would be represented as 0.05.\n',
      type: {
        blueId: '6YLNUc4mUyAXJnpaEm2W4KAfb1HUCDcrXqv7KetjrbwH',
      },
    },
    description:
      'A class to specify the floating interest rate by extending the floating rate definition with a set of attributes that specify such rate: the initial value specified as part of the trade, the rounding convention, the averaging method and the negative interest rate treatment.\n',
    fallbackRate: {
      description: 'Definition of any fallback rate that may be applicable.',
      type: {
        blueId: '6KNQgESYt6L53eckR5BrECbH1phWdXFMzZATcAzK9NLy',
      },
    },
    finalRateRounding: {
      description:
        'The rounding convention to apply to the final rate used in determination of a calculation period amount.',
      type: {
        blueId: 'BYetgNwutc7xjHHx9g7ZhsdKgyGYMd1UR4jDoHHafJHj',
      },
    },
    floatingRateMultiplierSchedule: {
      description:
        'A rate multiplier or multiplier schedule to apply to the floating rate. A multiplier schedule is expressed as explicit multipliers and dates. In the case of a schedule, the step dates may be subject to adjustment in accordance with any adjustments specified in the calculationPeriodDatesAdjustments. The multiplier can be a positive or negative decimal. This element should only be included if the multiplier is not equal to 1 (one) for the term of the stream.\n',
      type: {
        blueId: '7EEvMt9emT8iceX5fpLkggKJmrok2qeWHbESwueZHstB',
      },
    },
    floorRateSchedule: {
      description:
        'The floor rate or floor rate schedule, if any, which applies to the floating rate. The floor rate (strike) is only required where the floating rate on a swap stream is floored at a certain strike level. A floor rate schedule is expressed as explicit floor rates and dates and the step dates may be subject to adjustment in accordance with any adjustments specified in calculationPeriodDatesAdjustments. The floor rate is assumed to be exclusive of any spread and is a per annum rate, expressed as a decimal. A floor rate of 5% would be represented as 0.05.\n',
      type: {
        blueId: '6YLNUc4mUyAXJnpaEm2W4KAfb1HUCDcrXqv7KetjrbwH',
      },
    },
    initialRate: {
      description:
        'The initial floating rate reset agreed between the principal parties involved in the trade. This is assumed to be the first required reset rate for the first regular calculation period. It should only be included when the rate is not equal to the rate published on the source implied by the floating rate index. An initial rate of 5% would be represented as 0.05.\n',
      type: {
        blueId: 'GLmQaa2vVZKjaht1sNMcUL55xfAgWQxpj5ENxwvVRvsm',
      },
    },
    name: 'cdm/product/asset/FloatingRateSpecification',
    negativeInterestRateTreatment: {
      description:
        'The specification of any provisions for calculating payment obligations when a floating rate is negative (either due to a quoted negative floating rate or by operation of a spread that is subtracted from the floating rate).\n',
      type: {
        blueId: 'BsWNiWBWBcPvxq7gbRKXCVo4xpJ1fYXPvWNafB7Bvxzt',
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
        blueId: '6vYpwpDGdaR6pbtzmJTTxmLwiWsbwBhhaiecmRbLMtix',
      },
    },
    spreadSchedule: {
      description:
        'The ISDA Spread or a Spread schedule expressed as explicit spreads and dates. In the case of a schedule, the step dates may be subject to adjustment in accordance with any adjustments specified in calculationPeriodDatesAdjustments. The spread is a per annum rate, expressed as a decimal. For purposes of determining a calculation period amount, if positive the spread will be added to the floating rate and if negative the spread will be subtracted from the floating rate. A positive 10 basis point (0.1%) spread would be represented as 0.001.\n',
      type: {
        blueId: 'BbmQzuzA7aBEkeWMx9NniHvZEqR3bPsBJzX8iyyokN7A',
      },
    },
  };
