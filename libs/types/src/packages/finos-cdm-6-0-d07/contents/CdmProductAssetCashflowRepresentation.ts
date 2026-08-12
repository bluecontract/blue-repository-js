export const CdmProductAssetCashflowRepresentation: Record<string, unknown> = {
  cashflowsMatchParameters: {
    description:
      'A true/false flag to indicate whether the cashflows match the parametric definition of the stream, i.e. whether the cashflows could be regenerated from the parameters without loss of information.\n',
    schema: {
      required: true,
    },
    type: {
      blueId: 'AwvXD961fmnmqcSQhjMA7r15HpVh39cefb6ZTyUz2Fm2',
    },
  },
  description:
    'A data defining:  the cashflow representation of a swap trade.\n',
  name: 'cdm/product/asset/CashflowRepresentation',
  paymentCalculationPeriod: {
    description:
      'The adjusted payment date and associated calculation period parameters required to calculate the actual or projected payment amount. A list of payment calculation period elements may be ordered in the document by ascending adjusted payment date. An FpML document containing an unordered list of payment calculation periods is still regarded as a conformant document.\n',
    itemType: {
      blueId: 'AmMckQK6D6qnYkcaZ6whw5wA5uRbeevDC2UYCXTM2aN2',
    },
    schema: {
      minItems: 0,
    },
    type: {
      blueId: '8DSFoWG9MqRSUhStqoPLrwVQiYByRh18NWbDEarN8MKF',
    },
  },
};
