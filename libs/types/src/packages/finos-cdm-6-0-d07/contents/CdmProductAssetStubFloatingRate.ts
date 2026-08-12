export const CdmProductAssetStubFloatingRate: Record<string, unknown> = {
  capRateSchedule: {
    description:
      'The cap rate or cap rate schedule, if any, which applies to the floating rate. The cap rate (strike) is only required where the floating rate on a swap stream is capped at a certain level. A cap rate schedule is expressed as explicit cap rates and dates and the step dates may be subject to adjustment in accordance with any adjustments specified in calculationPeriodDatesAdjustments. The cap rate is assumed to be exclusive of any spread and is a per annum rate, expressed as a decimal. A cap rate of 5% would be represented as 0.05.\n',
    itemType: {
      blueId: 'C7hUCSca8bS53iPmTQyPXcvtDcSWgnHfzsFkzdRUQMW8',
    },
    schema: {
      minItems: 0,
    },
    type: {
      blueId: '8DSFoWG9MqRSUhStqoPLrwVQiYByRh18NWbDEarN8MKF',
    },
  },
  description: 'A class defining a floating rate.',
  floatingRateIndex: {
    description: 'The floating rate index.',
    schema: {
      required: true,
    },
    type: {
      blueId: 'vMjyu6sbtgT7FA6GScxrp32Njg3k9oW6KxuXLU9RYHx',
    },
  },
  floatingRateMultiplierSchedule: {
    description:
      'A rate multiplier or multiplier schedule to apply to the floating rate. A multiplier schedule is expressed as explicit multipliers and dates. In the case of a schedule, the step dates may be subject to adjustment in accordance with any adjustments specified in the calculationPeriodDatesAdjustments. The multiplier can be a positive or negative decimal. This element should only be included if the multiplier is not equal to 1 (one) for the term of the stream.\n',
    type: {
      blueId: '8swA6F2F6KHLgYRCBDKkg2HyrhQ2D7iumy7C99QJfKLy',
    },
  },
  floorRateSchedule: {
    description:
      'The floor rate or floor rate schedule, if any, which applies to the floating rate. The floor rate (strike) is only required where the floating rate on a swap stream is floored at a certain strike level. A floor rate schedule is expressed as explicit floor rates and dates and the step dates may be subject to adjustment in accordance with any adjustments specified in calculationPeriodDatesAdjustments. The floor rate is assumed to be exclusive of any spread and is a per annum rate, expressed as a decimal. A floor rate of 5% would be represented as 0.05.\n',
    itemType: {
      blueId: 'C7hUCSca8bS53iPmTQyPXcvtDcSWgnHfzsFkzdRUQMW8',
    },
    schema: {
      minItems: 0,
    },
    type: {
      blueId: '8DSFoWG9MqRSUhStqoPLrwVQiYByRh18NWbDEarN8MKF',
    },
  },
  indexTenor: {
    description:
      'The ISDA Designated Maturity, i.e. the tenor of the floating rate.',
    type: {
      blueId: '2eRPMxKZ8upfUGCDqNY6xXko7GTGvozudp1i9wznQmXL',
    },
  },
  name: 'cdm/product/asset/StubFloatingRate',
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
    itemType: {
      blueId: 'JBHbnTb3KK4imqfxRHkV1Hdv7p6d8fMSvkBKH5J4cQpv',
    },
    schema: {
      minItems: 0,
    },
    type: {
      blueId: '8DSFoWG9MqRSUhStqoPLrwVQiYByRh18NWbDEarN8MKF',
    },
  },
};
