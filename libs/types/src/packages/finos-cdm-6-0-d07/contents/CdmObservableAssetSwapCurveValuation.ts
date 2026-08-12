export const CdmObservableAssetSwapCurveValuation: Record<string, unknown> = {
  description:
    'A class to specify a valuation swap curve, which is used as part of the strike construct for the bond and convertible bond options.\n',
  floatingRateIndex: {
    schema: {
      required: true,
    },
    type: {
      blueId: 'vMjyu6sbtgT7FA6GScxrp32Njg3k9oW6KxuXLU9RYHx',
    },
  },
  indexTenor: {
    description:
      'The ISDA Designated Maturity, i.e. the tenor of the floating rate.',
    type: {
      blueId: '2eRPMxKZ8upfUGCDqNY6xXko7GTGvozudp1i9wznQmXL',
    },
  },
  name: 'cdm/observable/asset/SwapCurveValuation',
  side: {
    description: 'The side (bid/mid/ask) of the measure.',
    type: {
      blueId: '3dNvpLuUvkiJo6AQdCKYx1WFEVMKmojVB5NmUQQQmyDq',
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
