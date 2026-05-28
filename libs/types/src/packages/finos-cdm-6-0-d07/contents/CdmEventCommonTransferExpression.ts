export const CdmEventCommonTransferExpression = {
  description:
    'Specifies a transfer expression (cash price, performance amount, scheduled payment amount, etc.) to define the nature of the transfer amount and its source.\n',
  name: 'cdm/event/common/TransferExpression',
  priceTransfer: {
    description:
      'Specifies a transfer amount exchanged as a price or fee for entering into a Business Event, e.g. Premium, Termination fee, Novation fee.\n',
    type: {
      blueId: 'CEYV9kEtFbGQ1TN5ZdT4jXMZfSQUVyhphKVVYFHwQ1uq',
    },
  },
  scheduledTransfer: {
    description:
      'Specifies a transfer created from a scheduled or contingent event on a contract, e.g. Exercise, Performance, Credit Event\n',
    type: {
      blueId: '6u2SSYbiL1wde49f5mpDzE76eiZkyF3yeZ7WL3j6RnBZ',
    },
  },
} as const;
