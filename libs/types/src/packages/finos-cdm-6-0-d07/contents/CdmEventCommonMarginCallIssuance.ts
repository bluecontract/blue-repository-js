export const CdmEventCommonMarginCallIssuance: Record<string, unknown> = {
  agreementMinimumTransferAmount: {
    description:
      'Specifies the collateral legal agreement minimum transfer amount in base currency.',
    type: {
      blueId: 'A6JZXX4Rug3aj7cJh48V6FeziSECwFQzyrJ1xUwd9kii',
    },
  },
  agreementRounding: {
    description:
      'Specifies the collateral legal agreement rounding in base currency.',
    type: {
      blueId: 'A6JZXX4Rug3aj7cJh48V6FeziSECwFQzyrJ1xUwd9kii',
    },
  },
  agreementThreshold: {
    description:
      'Specifies the collateral legal agreement threshold amount in base currency.',
    type: {
      blueId: 'A6JZXX4Rug3aj7cJh48V6FeziSECwFQzyrJ1xUwd9kii',
    },
  },
  baseCurrencyExposure: {
    description:
      'Represents the current mark to market value or IM calculation value of the trade portfolio as recorded by the principle (in base currency), to be referenced in a margin call.\n',
    type: {
      blueId: '8F5tzDJeHVMjn1AsyLLfL6a8zuQzwzNmqCwPSk6ympdk#0',
    },
  },
  callAgreementType: {
    description:
      'Specifies the legal agreement type the margin call is generated from and governed by.',
    type: {
      blueId: 'GtNBAyAynbg5ak9tonuCZjYhuWCYH91kN9bCBbHYAsop',
    },
  },
  callAmountInBaseCurrency: {
    description:
      'Specifies the amount of margin being called for which accounts for margin calculation inclusive of exposure, independent amount,threshold,collateral balance, MTA, rounding increments (in base currency detailed in supporting collateral agreement).\n',
    schema: {
      required: true,
    },
    type: {
      blueId: 'A6JZXX4Rug3aj7cJh48V6FeziSECwFQzyrJ1xUwd9kii',
    },
  },
  callIdentifier: {
    description:
      'Represents a unique Identifier for a margin call message, that can be referenced throughout all points of the process.\n',
    type: {
      blueId: '2uYMDSb9jahYcE91VXzzWYsnUVct3k5thb1czx4jPYF7',
    },
  },
  clearingBroker: {
    description: 'Indicates the name of the Clearing Broker FCM/DCM.',
    type: {
      blueId: 'DqdehuAibH9Q4aC2zYPJp37ysFFDSYwuUYRNYQCeevFd',
    },
  },
  collateralPortfolio: {
    description:
      'Represents attributes to define the details of collateral assets within a collateral portfolio to be used in margin call messaging and contribute to collateral balances e.g securities in a collateral account recorded by the principal as held or posted.\n',
    type: {
      blueId: '4BrXNc4oFsUfnFzm3uWTqNmgivGhZJRmaoxvb8kK9xiw',
    },
  },
  description:
    'Represents common attributes required for a Margin Call Issuance under a legal agreement such as a credit support document or equivalent.\n',
  independentAmountBalance: {
    description:
      'Represents additional credit support amount over and above mark to market value.',
    type: {
      blueId: 'EieQtheGsK5EDQsjN2wqUyWn5LaLYdtjXBotd8LVH7ZT',
    },
  },
  instructionType: {
    description:
      'Identifies the enumeration values to specify the call notification type, direction, specific action type.',
    type: {
      blueId: 'BoD1aVcLzZLbF13ZcGFdGwQdbaBQxKHCXkwvjjecaGH6',
    },
  },
  name: 'cdm/event/common/MarginCallIssuance',
  party: {
    description:
      'Represents the parties to the margin call. The cardinality is optional to address the case where both parties of the event are specified and a third party if applicable.\n',
    itemType: {
      blueId: 'DqdehuAibH9Q4aC2zYPJp37ysFFDSYwuUYRNYQCeevFd',
    },
    schema: {
      minItems: 0,
    },
    type: {
      blueId: '8DSFoWG9MqRSUhStqoPLrwVQiYByRh18NWbDEarN8MKF',
    },
  },
  partyRole: {
    description:
      'Represents the role each specified party takes in the margin call. further to the principal roles, payer and receiver.\n',
    itemType: {
      blueId: '6DrJREpu1Ms3M4U1q7jqGjM46V1o8vxq4K1i3X4dwMvz',
    },
    schema: {
      minItems: 0,
    },
    type: {
      blueId: '8DSFoWG9MqRSUhStqoPLrwVQiYByRh18NWbDEarN8MKF',
    },
  },
  recallNonCashCollateralDescription: {
    description:
      'Specifies the details to describe or identify non-cash collateral eligible assets for recall purposes.',
    itemType: {
      blueId: 'Dd4QK5kmBzsGcmhcqxkLLPiH2fBmE3acTHCBGWUW5Buq',
    },
    schema: {
      minItems: 0,
    },
    type: {
      blueId: '8DSFoWG9MqRSUhStqoPLrwVQiYByRh18NWbDEarN8MKF',
    },
  },
  regIMRole: {
    description:
      'Indicates the role of the party in an regulatory initial margin call instruction (i.e Pledgor party or Secured party).\n',
    type: {
      blueId: '9zurDYn2PLmvAbQogpSypC9EdXX3kDMH8MEGkVW1iqFi',
    },
  },
  regMarginType: {
    description: 'Identifies margin type and if related regulatory mandate',
    type: {
      blueId: 'Fec1mDF7uoGM3Kz9ebXHJbHx47s9ug8hXgjx2VcY5suN',
    },
  },
};
