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
      blueId: 'HTDqFgte5VF88dLHnCZMjvyetfxfTAKxf9r8ciErE7Vg',
    },
  },
  floatingRateIndex: {
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
  interpolationMethod: {
    description:
      'The type of interpolation method that the calculation agent reserves the right to use.',
    type: {
      blueId: '69SohrhYgsRTiHcPmh9GwadYoxt1kJgmJ3e2nrCajFHt',
    },
  },
  name: 'cdm/observable/asset/MakeWholeAmount',
  side: {
    description: 'The side (bid/mid/ask) of the measure.',
    type: {
      blueId: 'AH1BY9EazwZmuZ6LcxCKPZSzsejRaRpRinAqLmVsFTgc',
    },
  },
  spread: {
    description: 'Spread in basis points over the floating rate index.',
    type: {
      blueId: '9eWaHYz2vKrFofdHTHAizNNu8xP6QE3WQ5y7DGrGZvyJ',
    },
  },
};
