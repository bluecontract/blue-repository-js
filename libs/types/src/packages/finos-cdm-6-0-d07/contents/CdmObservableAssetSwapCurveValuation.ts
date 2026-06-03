export const CdmObservableAssetSwapCurveValuation: Record<string, unknown> = {
  description:
    'A class to specify a valuation swap curve, which is used as part of the strike construct for the bond and convertible bond options.\n',
  floatingRateIndex: {
    schema: {
      required: true,
    },
    type: {
      blueId: 'Ffp3NGGHva1Wh7c62eqGBrQTxEzCeASMFJ6PAmoSuCXF',
    },
  },
  indexTenor: {
    description:
      'The ISDA Designated Maturity, i.e. the tenor of the floating rate.',
    type: {
      blueId: 'G5BwzTWEaA14NoPKn8iSwCnmwnWuQegPHZwrpgagS6kY',
    },
  },
  name: 'cdm/observable/asset/SwapCurveValuation',
  side: {
    description: 'The side (bid/mid/ask) of the measure.',
    type: {
      blueId: 'AH1BY9EazwZmuZ6LcxCKPZSzsejRaRpRinAqLmVsFTgc',
    },
  },
  spread: {
    description: 'Spread in basis points over the floating rate index.',
    schema: {
      required: true,
    },
    type: {
      blueId: '9eWaHYz2vKrFofdHTHAizNNu8xP6QE3WQ5y7DGrGZvyJ',
    },
  },
};
