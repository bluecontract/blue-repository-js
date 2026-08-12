export const CdmEventCommonTrade: Record<string, unknown> = {
  account: {
    description:
      "Represents a party's granular account information, which may be used in subsequent internal processing.",
    itemType: {
      blueId: 'Ci7ty5zffGzjgsQdhnezMazESuasmjVRABXcDJanwgLf',
    },
    schema: {
      minItems: 0,
    },
    type: {
      blueId: '8DSFoWG9MqRSUhStqoPLrwVQiYByRh18NWbDEarN8MKF',
    },
  },
  adjustment: {
    description:
      'Specifies the conditions that govern the adjustment to the quantity of a product being traded: e.g. execution, portfolio rebalancing etc. It is typically used in the context of Equity Swaps.\n',
    type: {
      blueId: 'JDTKqVSFgAW8D49b5dnvsCk1uam8HJqLTHTDgrFTMBA5',
    },
  },
  ancillaryParty: {
    description:
      'Specifies the parties with ancillary roles in the transaction. The product is agnostic to the actual parties involved in the transaction, with the party references abstracted away from the product definition and replaced by the AncillaryRoleEnum. The AncillaryRoleEnum can then be positioned in the product and this AncillaryParty type, which is positioned outside of the product definition, allows the AncillaryRoleEnum to be associated with an actual party reference.\n',
    itemType: {
      blueId: '4iPHY4aygMFyDNb5teEsJeb7EyeK3CitfuP7DqfgnT1w',
    },
    schema: {
      minItems: 0,
    },
    type: {
      blueId: '8DSFoWG9MqRSUhStqoPLrwVQiYByRh18NWbDEarN8MKF',
    },
  },
  clearedDate: {
    description:
      'Specifies the date on which a trade is cleared (novated) through a central counterparty clearing service.',
    type: {
      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
    },
  },
  collateral: {
    description: 'Represents the collateral obligations of a party.',
    type: {
      blueId: 'CMbZdR1wHnpwviTkU9fmf4tki9sWinxrSZWks1aEdhJu',
    },
  },
  contractDetails: {
    description:
      'Represents information specific to trades involving contractual products.',
    type: {
      blueId: 'BXgG7tSKyVPTPd3ka1B5M5ZoyxvrmzK9sqFZJ5MXrvUk',
    },
  },
  counterparty: {
    description:
      'Specifies the parties which are the two counterparties to the transaction.  The product is agnostic to the actual parties to the transaction, with the party references abstracted away from the product definition and replaced by the counterparty enum (e.g. CounterpartyEnum values Party1 or Party2). The counterparty enum can then be positioned in the product (e.g. to specify which counterparty is the payer, receiver etc) and this counterparties attribute, which is positioned outside of the product definition, allows the counterparty enum to be associated with an actual party reference.\n',
    itemType: {
      blueId: '57Lwnif22McYRjgDzSyRZTsqY1Ac9LMSJcJ9KRXKiE6w',
    },
    schema: {
      maxItems: 2,
      minItems: 2,
    },
    type: {
      blueId: '8DSFoWG9MqRSUhStqoPLrwVQiYByRh18NWbDEarN8MKF',
    },
  },
  description:
    'Defines the output of a financial transaction between parties - a Business Event. A Trade impacts the financial position (i.e. the balance sheet) of involved parties.\n',
  executionDetails: {
    description:
      'Represents information specific to trades that arose from executions.',
    type: {
      blueId: 'GXAR1SUGjpvZsUZvh3feCdkEXnfGS76pgRRAwtrV4BAA',
    },
  },
  name: 'cdm/event/common/Trade',
  party: {
    description:
      'Represents the parties to the trade. The cardinality is optional to address the case where the trade is defined within a BusinessEvent data type, in which case the party is specified in BusinessEvent.\n',
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
      'Represents the role each specified party takes in the trade. further to the principal roles, payer and receiver.\n',
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
  product: {
    description:
      'The underlying product to be included in a contract or execution.',
    type: {
      blueId: '52zbUBnH8375AE19gNSXRU7GgGs5tcoUhR84LVdMrBWi#5',
    },
  },
  tradeDate: {
    description: 'Specifies the date which the trade was agreed.',
    schema: {
      required: true,
    },
    type: {
      blueId: 'HvrBWWRL9WzJPU9bs48T3Uf9CcUgCfqtEszZPN3tYS3n',
    },
  },
  tradeIdentifier: {
    description:
      'Represents the identifier(s) that uniquely identify a trade for an identity issuer. A trade can include multiple identifiers, for example a trade that is reportable to both the CFTC and ESMA, and then has an associated USI (Unique Swap Identifier) UTI (Unique Trade Identifier).\n',
    itemType: {
      blueId: 'FGujWvfXdExA7nDNwp6iHf3hWYRL3g9JS9EZfYhS7N2y',
    },
    schema: {
      minItems: 1,
    },
    type: {
      blueId: '8DSFoWG9MqRSUhStqoPLrwVQiYByRh18NWbDEarN8MKF',
    },
  },
  tradeLot: {
    description:
      'Specifies the price, quantity and effective date of each trade lot, when the same product may be traded multiple times in different lots with the same counterparty. In a trade increase, a new trade lot is added to the list, with the corresponding effective date. In a trade decrease, the existing trade lot(s) are decreased of the corresponding quantity (and an unwind fee may have to be settled). The multiple cardinality and the ability to increase existing trades is used for Equity Swaps in particular.\n',
    itemType: {
      blueId: 'HwkEbgYkrYCDgT4YrxJHmaJVigftQBmkyttz9NLVtre6',
    },
    schema: {
      minItems: 1,
    },
    type: {
      blueId: '8DSFoWG9MqRSUhStqoPLrwVQiYByRh18NWbDEarN8MKF',
    },
  },
  tradeTime: {
    description:
      'Denotes the trade time and timezone as agreed by the parties to the trade.',
    type: {
      blueId: '6XsZzNy8iHgmk7eDnmTPs7QFCthawsNg96517G4uThjP',
    },
  },
};
