export const CdmEventCommonMarginCallExposure = {
  agreementMinimumTransferAmount: {
    description:
      'Specifies the collateral legal agreement minimum transfer amount in base currency.',
    type: {
      blueId: '5RCy7NwpdTs7j96evsc93hof8nESXDM5u4q3ykG6dXvE',
    },
  },
  agreementRounding: {
    description:
      'Specifies the collateral legal agreement rounding in base currency.',
    type: {
      blueId: '5RCy7NwpdTs7j96evsc93hof8nESXDM5u4q3ykG6dXvE',
    },
  },
  agreementThreshold: {
    description:
      'Specifies the collateral legal agreement threshold amount in base currency.',
    type: {
      blueId: '5RCy7NwpdTs7j96evsc93hof8nESXDM5u4q3ykG6dXvE',
    },
  },
  baseCurrencyExposure: {
    description:
      'Represents the current mark to market value or IM calculation value of the trade portfolio as recorded by the principle (in base currency), to be referenced in a margin call.\n',
    type: {
      blueId: 'this#0',
    },
  },
  callAgreementType: {
    description:
      'Specifies the legal agreement type the margin call is generated from and governed by.',
    type: {
      blueId: 'F7fkku2HrNQ5jSPUdK2yWnWFShTMYUFJh1xqKudc3NLg',
    },
  },
  callIdentifier: {
    description:
      'Represents a unique Identifier for a margin call message, that can be referenced throughout all points of the process.\n',
    type: {
      blueId: '8eDineGwQr2VXBeVEPbnJZvEcNhDbLu8HtmubDT6RBoZ',
    },
  },
  clearingBroker: {
    description: 'Indicates the name of the Clearing Broker FCM/DCM.',
    type: {
      blueId: '694bqGLce4g9XrBubcFXs81gNNsvVTGK3msPSdNsj5jD',
    },
  },
  collateralPortfolio: {
    description:
      'Represents attributes to define the details of collateral assets within a collateral portfolio to be used in margin call messaging and contribute to collateral balances e.g securities in a collateral account recorded by the principal as held or posted.\n',
    type: {
      blueId: '9hmSFPZtTqFUhhBwuNHQvS49fmooEgKt1nnxJeNPUFY3',
    },
  },
  description:
    'Represents attributes required for mark to market value or IM calculation value of the trade portfolio as recorded by the principle (in base currency).\n',
  independentAmountBalance: {
    description:
      'Represents additional credit support amount over and above mark to market value.',
    type: {
      blueId: '9XXCYnAKStGGQJv82Q3iAt6L217E7QCFrotX9UUHC84P',
    },
  },
  instructionType: {
    description:
      'Identifies the enumeration values to specify the call notification type, direction, specific action type.',
    type: {
      blueId: 'CN1YqoktYc73VUJTbsBfBBFsVz5duttYrP8g2ME4Sfzp',
    },
  },
  name: 'cdm/event/common/MarginCallExposure',
  overallExposure: {
    description:
      'Represents the whole overall mark to market value or IM calculation value of the trade portfolio as recorded by the principle (in base currency).\n',
    schema: {
      required: {
        type: {
          blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
        },
        value: true,
      },
    },
    type: {
      blueId: 'CixZxDsRYNoZ2VQAdXvETFbZ3JHGQqFYi5Q5xdevtMKX',
    },
  },
  party: {
    description:
      'Represents the parties to the margin call. The cardinality is optional to address the case where both parties of the event are specified and a third party if applicable.\n',
    itemType: {
      blueId: '694bqGLce4g9XrBubcFXs81gNNsvVTGK3msPSdNsj5jD',
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
  partyRole: {
    description:
      'Represents the role each specified party takes in the margin call. further to the principal roles, payer and receiver.\n',
    itemType: {
      blueId: '8fXEqMXsnZAuwSFKfhiksmAPnV7yvaxSbmwgTbGrN75M',
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
  regIMRole: {
    description:
      'Indicates the role of the party in an regulatory initial margin call instruction (i.e Pledgor party or Secured party).\n',
    type: {
      blueId: '4uJVRvwwVNEj9rBzrw3MG5hDWu6VEQFjKX3TkVNmZtxQ',
    },
  },
  regMarginType: {
    description: 'Identifies margin type and if related regulatory mandate',
    type: {
      blueId: 'DLLoN3NFnWwpjGzEuobQDyZqPUSbRS8jddLaQZw9eq9B',
    },
  },
  scheduleGridIMExposure: {
    description:
      'Represents Initial Margin (IM) exposure derived from schedule or Grid calculation.',
    type: {
      blueId: 'CixZxDsRYNoZ2VQAdXvETFbZ3JHGQqFYi5Q5xdevtMKX',
    },
  },
  simmIMExposure: {
    description:
      'Represents Initial Margin (IM) exposure derived from ISDA SIMM calculation.',
    type: {
      blueId: 'CixZxDsRYNoZ2VQAdXvETFbZ3JHGQqFYi5Q5xdevtMKX',
    },
  },
} as const;
