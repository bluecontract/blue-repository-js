export const CdmEventCommonTransferExpression: Record<string, unknown> = {
  description:
    'Specifies a transfer expression (cash price, performance amount, scheduled payment amount, etc.) to define the nature of the transfer amount and its source.\n',
  name: 'cdm/event/common/TransferExpression',
  priceTransfer: {
    description:
      'Specifies a transfer amount exchanged as a price or fee for entering into a Business Event, e.g. Premium, Termination fee, Novation fee.\n',
    type: {
      blueId: '8YbneMZREtyf98o78oZSMwLcZ4UyCjeQ14dkVVURpo8v',
    },
  },
  scheduledTransfer: {
    description:
      'Specifies a transfer created from a scheduled or contingent event on a contract, e.g. Exercise, Performance, Credit Event\n',
    type: {
      blueId: 'DDGWdZNUbv4CQBdgM1tHzWamM2ZykmVA4FewR1tqBYsm',
    },
  },
};
