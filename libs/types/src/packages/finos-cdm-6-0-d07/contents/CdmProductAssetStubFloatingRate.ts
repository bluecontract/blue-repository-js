export const CdmProductAssetStubFloatingRate = {
  capRateSchedule: {
    description:
      'The cap rate or cap rate schedule, if any, which applies to the floating rate. The cap rate (strike) is only required where the floating rate on a swap stream is capped at a certain level. A cap rate schedule is expressed as explicit cap rates and dates and the step dates may be subject to adjustment in accordance with any adjustments specified in calculationPeriodDatesAdjustments. The cap rate is assumed to be exclusive of any spread and is a per annum rate, expressed as a decimal. A cap rate of 5% would be represented as 0.05.\n',
    itemType: {
      blueId: '6ktRd3DjxSYyCKanDCXymsiwCRfvE8Nmdg6Hr6nRsGLs',
    },
    schema: {
      minItems: {
        type: {
          blueId: '5WNMiV9Knz63B4dVY5JtMyh3FB4FSGqv7ceScvuapdE1',
        },
        value: 0,
      },
    },
    type: {
      blueId: '6aehfNAxHLC1PHHoDr3tYtFH3RWNbiWdFancJ1bypXEY',
    },
  },
  description: 'A class defining a floating rate.',
  floatingRateIndex: {
    description: 'The floating rate index.',
    schema: {
      required: {
        type: {
          blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
        },
        value: true,
      },
    },
    type: {
      blueId: 'AygoLHtsrgUkWFxjVtQsDYzEn5EbXUEt8avHzLQsUUVZ',
    },
  },
  floatingRateMultiplierSchedule: {
    description:
      'A rate multiplier or multiplier schedule to apply to the floating rate. A multiplier schedule is expressed as explicit multipliers and dates. In the case of a schedule, the step dates may be subject to adjustment in accordance with any adjustments specified in the calculationPeriodDatesAdjustments. The multiplier can be a positive or negative decimal. This element should only be included if the multiplier is not equal to 1 (one) for the term of the stream.\n',
    type: {
      blueId: '73UaBEmPjNZQT7mUS7Rdnxb9fLcnfsn84MCkvVALW3vw',
    },
  },
  floorRateSchedule: {
    description:
      'The floor rate or floor rate schedule, if any, which applies to the floating rate. The floor rate (strike) is only required where the floating rate on a swap stream is floored at a certain strike level. A floor rate schedule is expressed as explicit floor rates and dates and the step dates may be subject to adjustment in accordance with any adjustments specified in calculationPeriodDatesAdjustments. The floor rate is assumed to be exclusive of any spread and is a per annum rate, expressed as a decimal. A floor rate of 5% would be represented as 0.05.\n',
    itemType: {
      blueId: '6ktRd3DjxSYyCKanDCXymsiwCRfvE8Nmdg6Hr6nRsGLs',
    },
    schema: {
      minItems: {
        type: {
          blueId: '5WNMiV9Knz63B4dVY5JtMyh3FB4FSGqv7ceScvuapdE1',
        },
        value: 0,
      },
    },
    type: {
      blueId: '6aehfNAxHLC1PHHoDr3tYtFH3RWNbiWdFancJ1bypXEY',
    },
  },
  indexTenor: {
    description:
      'The ISDA Designated Maturity, i.e. the tenor of the floating rate.',
    type: {
      blueId: '5rdYwkwGdndCoYmQi9MNzw9SKQZsr68igDgyYFgvNzmh',
    },
  },
  name: 'cdm/product/asset/StubFloatingRate',
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
    itemType: {
      blueId: 'BB9KuWeeD17dQmZbr44QJkSjv1PV3rNCJgH848EEaCyJ',
    },
    schema: {
      minItems: {
        type: {
          blueId: '5WNMiV9Knz63B4dVY5JtMyh3FB4FSGqv7ceScvuapdE1',
        },
        value: 0,
      },
    },
    type: {
      blueId: '6aehfNAxHLC1PHHoDr3tYtFH3RWNbiWdFancJ1bypXEY',
    },
  },
} as const;
