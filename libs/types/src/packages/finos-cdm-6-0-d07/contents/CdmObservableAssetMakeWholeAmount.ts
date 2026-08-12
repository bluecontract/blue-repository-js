export const CdmObservableAssetMakeWholeAmount: Record<string, unknown> = {
  description:
    'A class to specify the amount to be paid by the buyer of the option if the option is exercised prior to the Early Call Date (typically applicable to the convertible bond options).\n',
  earlyCallDate: {
    description:
      'Date prior to which the option buyer will have to pay a Make Whole Amount to the option seller if he/she exercises the option.\n',
    schema: {
      required: true,
    },
    type: {
      blueId: 'HvrBWWRL9WzJPU9bs48T3Uf9CcUgCfqtEszZPN3tYS3n',
    },
  },
  floatingRateIndex: {
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
  interpolationMethod: {
    description:
      'The type of interpolation method that the calculation agent reserves the right to use.',
    type: {
      blueId: '3h1NHQxSYTh9JS13UUBSTJesbdm5xcKkz7jHUTjG4s6f',
    },
  },
  name: 'cdm/observable/asset/MakeWholeAmount',
  side: {
    description: 'The side (bid/mid/ask) of the measure.',
    type: {
      blueId: '3dNvpLuUvkiJo6AQdCKYx1WFEVMKmojVB5NmUQQQmyDq',
    },
  },
  spread: {
    description: 'Spread in basis points over the floating rate index.',
    type: {
      blueId: '9eWaHYz2vKrFofdHTHAizNNu8xP6QE3WQ5y7DGrGZvyJ',
    },
  },
};
