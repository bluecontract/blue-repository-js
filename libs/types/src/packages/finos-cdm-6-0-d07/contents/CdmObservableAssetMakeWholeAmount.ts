export const CdmObservableAssetMakeWholeAmount = {
  description:
    'A class to specify the amount to be paid by the buyer of the option if the option is exercised prior to the Early Call Date (typically applicable to the convertible bond options).\n',
  earlyCallDate: {
    description:
      'Date prior to which the option buyer will have to pay a Make Whole Amount to the option seller if he/she exercises the option.\n',
    schema: {
      required: {
        type: {
          blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
        },
        value: true,
      },
    },
    type: {
      blueId: 'F5GfdsSNcjLAm9anbfMQqxdxAFonErhU5UXFbQzq1zXY',
    },
  },
  floatingRateIndex: {
    type: {
      blueId: 'AygoLHtsrgUkWFxjVtQsDYzEn5EbXUEt8avHzLQsUUVZ',
    },
  },
  indexTenor: {
    description:
      'The ISDA Designated Maturity, i.e. the tenor of the floating rate.',
    type: {
      blueId: '5rdYwkwGdndCoYmQi9MNzw9SKQZsr68igDgyYFgvNzmh',
    },
  },
  interpolationMethod: {
    description:
      'The type of interpolation method that the calculation agent reserves the right to use.',
    type: {
      blueId: 'EZCcXSeu6Mk3Bc3Qcno1DBgEKRoJ1xsTQUDczkFSE6g8',
    },
  },
  name: 'cdm/observable/asset/MakeWholeAmount',
  side: {
    description: 'The side (bid/mid/ask) of the measure.',
    type: {
      blueId: '8rvM94HuSxVEjNh7NmWuk8pKTjeiV7uTrwNqUX9zsDaU',
    },
  },
  spread: {
    description: 'Spread in basis points over the floating rate index.',
    type: {
      blueId: '7pwXmXYCJtWnd348c2JQGBkm9C4renmZRwxbfaypsx5y',
    },
  },
} as const;
