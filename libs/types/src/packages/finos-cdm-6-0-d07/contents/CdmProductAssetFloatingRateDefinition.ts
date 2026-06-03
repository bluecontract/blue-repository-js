export const CdmProductAssetFloatingRateDefinition: Record<string, unknown> = {
  calculatedRate: {
    description:
      'The final calculated rate for a calculation period after any required averaging of rates A calculated rate of 5% would be represented as 0.05.\n',
    type: {
      blueId: '9eWaHYz2vKrFofdHTHAizNNu8xP6QE3WQ5y7DGrGZvyJ',
    },
  },
  capRate: {
    description:
      'The cap rate, if any, which applies to the floating rate for the calculation period. The cap rate (strike) is only required where the floating rate on a swap stream is capped at a certain strike level. The cap rate is assumed to be exclusive of any spread and is a per annum rate, expressed as a decimal. A cap rate of 5% would be represented as 0.05.\n',
    itemType: {
      blueId: 'H7eZouArq1oyXs52mV5ZcafixuEA7B8eTRVyaQZ6FDox',
    },
    schema: {
      minItems: 0,
    },
    type: {
      blueId: '8DSFoWG9MqRSUhStqoPLrwVQiYByRh18NWbDEarN8MKF',
    },
  },
  description:
    'A data defining:  parameters associated with a floating rate reset. This data forms:  part of the cashflows representation of a stream.\n',
  floatingRateMultiplier: {
    description:
      'A rate multiplier to apply to the floating rate. The multiplier can be a positive or negative decimal. This element should only be included if the multiplier is not equal to 1 (one).\n',
    type: {
      blueId: '9eWaHYz2vKrFofdHTHAizNNu8xP6QE3WQ5y7DGrGZvyJ',
    },
  },
  floorRate: {
    description:
      'The floor rate, if any, which applies to the floating rate for the calculation period. The floor rate (strike) is only required where the floating rate on a swap stream is floored at a certain strike level. The floor rate is assumed to be exclusive of any spread and is a per annum rate, expressed as a decimal. The floor rate of 5% would be represented as 0.05.\n',
    itemType: {
      blueId: 'H7eZouArq1oyXs52mV5ZcafixuEA7B8eTRVyaQZ6FDox',
    },
    schema: {
      minItems: 0,
    },
    type: {
      blueId: '8DSFoWG9MqRSUhStqoPLrwVQiYByRh18NWbDEarN8MKF',
    },
  },
  name: 'cdm/product/asset/FloatingRateDefinition',
  rateObservation: {
    description:
      'The details of a particular rate observation, including the fixing date and observed rate. A list of rate observation elements may be ordered in the document by ascending adjusted fixing date. An FpML document containing an unordered list of rate observations is still regarded as a conformant document.\n',
    itemType: {
      blueId: 'AxRtbapEBZySZ4EiPgeQy1TunP6re28X7ipk2brY6NJV',
    },
    schema: {
      minItems: 0,
    },
    type: {
      blueId: '8DSFoWG9MqRSUhStqoPLrwVQiYByRh18NWbDEarN8MKF',
    },
  },
  spread: {
    description:
      'The ISDA Spread, if any, which applies for the calculation period. The spread is a per annum rate, expressed as a decimal. For purposes of determining a calculation period amount, if positive the spread will be added to the floating rate and if negative the spread will be subtracted from the floating rate. A positive 10 basis point (0.1%) spread would be represented as 0.001.\n',
    type: {
      blueId: '9eWaHYz2vKrFofdHTHAizNNu8xP6QE3WQ5y7DGrGZvyJ',
    },
  },
};
