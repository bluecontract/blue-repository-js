export const CdmEventCommonTransfer: Record<string, unknown> = {
  asset: {
    description:
      'Represents the object that is subject to the transfer, it could be an asset or a reference.',
    type: {
      blueId: '5UGws2rghMXJPsBC2YMTqJQgztQ8nTZm1XTaGkvxheXo',
    },
  },
  description:
    'Defines the movement of an Asset (eg cash, securities or commodities) between two parties on a date.',
  identifier: {
    description: 'Represents a unique reference to the transfer.',
    itemType: {
      blueId: '4PPUed4wa5yh6Po87HFZQNZmaedjsuVfFRs2XCHbzciY',
    },
    schema: {
      minItems: 0,
    },
    type: {
      blueId: '8DSFoWG9MqRSUhStqoPLrwVQiYByRh18NWbDEarN8MKF',
    },
  },
  name: 'cdm/event/common/Transfer',
  payerReceiver: {
    description: 'Represents the parties to the transfer and their role.',
    schema: {
      required: true,
    },
    type: {
      blueId: '2LmejohDGLXaXF2jDmkccaa7GSQbnbp8iBMKmrxifhWs',
    },
  },
  quantity: {
    description:
      'Represents the amount of the asset to be transferred. The cashflow amount is always a positive number, as the cashflow direction is implied by the payer/receiver attribute.\n',
    type: {
      blueId: 'BoLMyAuLAegX9RWR7trQbdmp7pB2tAfkPhDoTzbu8acd',
    },
  },
  resetOrigin: {
    description:
      'Represents the reset and observation values that were used to determine the transfer amount.',
    type: {
      blueId: 'C2cq6aR7yoFg7jn9vV3wrTukUrevaRzkBo4PeSWP5die',
    },
  },
  settlementDate: {
    description: 'Represents the date on which the transfer to due.',
    type: {
      blueId: '8VijgDyT9t9CiNbNQYVbdE1whbL9Q9DTRMZpCocVhSxF',
    },
  },
  settlementOrigin: {
    description:
      'Represents the origin to the transfer as a reference for lineage purposes, whether it originated from trade level settlement terms or from payment terms on an economic payout.\n',
    type: {
      blueId: 'B5Jakr9Bd7eaMZzThRtLAaP1ZnjC3yngwZjL4GXVZW7P',
    },
  },
  transferExpression: {
    description:
      'Specifies a transfer expression (cash price, performance amount, scheduled payment amount, etc.) to define the nature of the transfer amount and its source.\n',
    schema: {
      required: true,
    },
    type: {
      blueId: '28K8jWekKx6AFsw5haFZg81uADTmzkkgCKQErSng8jXd',
    },
  },
};
