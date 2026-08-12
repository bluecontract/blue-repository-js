export const CdmProductCollateralIndependentAmount: Record<string, unknown> = {
  description:
    'A class specifying the Independent Amount as the combination of a payer/receiver, a payment amount, a payment date and an associated payment calculation rule.\n',
  name: 'cdm/product/collateral/IndependentAmount',
  payerAccountReference: {
    description:
      'A reference to the account responsible for making the payments defined by this structure.',
    type: {
      blueId: 'HtZnJJw9C1Sg3ZZnEs8UKM65tyQLQcsMEQcVGZJx34Hi',
    },
  },
  payerPartyReference: {
    description:
      'The party responsible for making the payments defined by this structure.',
    type: {
      blueId: 'Doqu2fdYiHUWbSaMDHL5YoyEeuzbTrSjqbT1ZLqmB1Cr',
    },
  },
  paymentDetail: {
    description:
      'An attribute that specifies a payment as the combination of a payment amount, a payment date and an associated payment calculation rule.\n',
    itemType: {
      blueId: '71KycHWxsPTM5KKe67Bja1yPxhGo1n6v5vLCiyhTcJLV',
    },
    schema: {
      minItems: 1,
    },
    type: {
      blueId: '8DSFoWG9MqRSUhStqoPLrwVQiYByRh18NWbDEarN8MKF',
    },
  },
  receiverAccountReference: {
    description:
      'A reference to the account that receives the payments corresponding to this structure.',
    type: {
      blueId: 'HtZnJJw9C1Sg3ZZnEs8UKM65tyQLQcsMEQcVGZJx34Hi',
    },
  },
  receiverPartyReference: {
    description:
      'The party that receives the payments corresponding to this structure.',
    type: {
      blueId: 'Doqu2fdYiHUWbSaMDHL5YoyEeuzbTrSjqbT1ZLqmB1Cr',
    },
  },
};
