export const CdmEventCommonMarginCallResponse: Record<string, unknown> = {
  agreedAmountBaseCurrency: {
    description:
      'Indicates the amount that posting entity agrees to remit in response to margin call (in base currency).',
    schema: {
      required: true,
    },
    type: {
      blueId: '7eyr2kXubNSHtLXpHJ9G8NqtmDXLfmDmHQZSkLa9qkyy',
    },
  },
  agreementMinimumTransferAmount: {
    description:
      'Specifies the collateral legal agreement minimum transfer amount in base currency.',
    type: {
      blueId: '7eyr2kXubNSHtLXpHJ9G8NqtmDXLfmDmHQZSkLa9qkyy',
    },
  },
  agreementRounding: {
    description:
      'Specifies the collateral legal agreement rounding in base currency.',
    type: {
      blueId: '7eyr2kXubNSHtLXpHJ9G8NqtmDXLfmDmHQZSkLa9qkyy',
    },
  },
  agreementThreshold: {
    description:
      'Specifies the collateral legal agreement threshold amount in base currency.',
    type: {
      blueId: '7eyr2kXubNSHtLXpHJ9G8NqtmDXLfmDmHQZSkLa9qkyy',
    },
  },
  baseCurrencyExposure: {
    description:
      'Represents the current mark to market value or IM calculation value of the trade portfolio as recorded by the principle (in base currency), to be referenced in a margin call.\n',
    type: {
      blueId: '8nEcYjH4ixVg7JfABg3dqYi9nqpHYwCrdcXfWzfmtnkd#0',
    },
  },
  callAgreementType: {
    description:
      'Specifies the legal agreement type the margin call is generated from and governed by.',
    type: {
      blueId: 'BU5zwrVyY7wwfteRD7Vdaj9pWLX2CSnscAydsqWAUXjk',
    },
  },
  callIdentifier: {
    description:
      'Represents a unique Identifier for a margin call message, that can be referenced throughout all points of the process.\n',
    type: {
      blueId: '9tpFoqFu1yX5LZEATGF8CYsE5VSXhkQua9LMXwLEX2Pv',
    },
  },
  clearingBroker: {
    description: 'Indicates the name of the Clearing Broker FCM/DCM.',
    type: {
      blueId: '3skPfLDtYJ59SZAAdcu2JDHySdtCEVu8FzTnUX8D5mfy',
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
    'Represents common attributes required for a Margin Call Response under a legal agreement such as a credit support document or equivalent.\n',
  independentAmountBalance: {
    description:
      'Represents additional credit support amount over and above mark to market value.',
    type: {
      blueId: '8nANyRzbRdjuTq7qNZchzDJ4XYqZ8HWYinBX4dWM6NAV',
    },
  },
  instructionType: {
    description:
      'Identifies the enumeration values to specify the call notification type, direction, specific action type.',
    type: {
      blueId: '7LjiKLT6mqi1aN28PDZP7RC1BCddoDdaZRX5HQSggkHK',
    },
  },
  marginCallResponseAction: {
    description:
      'Specifies the margin call action details, including collateral to be moved and direction.',
    itemType: {
      blueId: '7D3ayms1ts4uASMX9CDoM8rNqDQe4wV1tFypq41nC7Pd',
    },
    schema: {
      minItems: 1,
    },
    type: {
      blueId: '8DSFoWG9MqRSUhStqoPLrwVQiYByRh18NWbDEarN8MKF',
    },
  },
  marginResponseType: {
    description:
      "Indicates the response type, such as, is the margin call response a 'full' 'part' agreement or 'dispute'.",
    schema: {
      required: true,
    },
    type: {
      blueId: 'DCBUG67sRjRXZ7Yi8KP7GaYSeAqW5NamG77yzUifTiX5',
    },
  },
  name: 'cdm/event/common/MarginCallResponse',
  party: {
    description:
      'Represents the parties to the margin call. The cardinality is optional to address the case where both parties of the event are specified and a third party if applicable.\n',
    itemType: {
      blueId: '3skPfLDtYJ59SZAAdcu2JDHySdtCEVu8FzTnUX8D5mfy',
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
      blueId: 'Hrt2EoYJokASG9J62NMKWt8UZbQN6BwtESp7hVDVQYvm',
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
      blueId: 'DbDuU56mMCeHMmfAJPu7gVNzKPqsoCbfKMA4B2f7KJob',
    },
  },
  regMarginType: {
    description: 'Identifies margin type and if related regulatory mandate',
    type: {
      blueId: 'C9KJZWTduUXk4iocTB63NwBs7xirNjChn9pPZsyhbhHL',
    },
  },
};
