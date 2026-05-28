export const CdmProductCollateralIndependentAmount = {
  description:
    'A class specifying the Independent Amount as the combination of a payer/receiver, a payment amount, a payment date and an associated payment calculation rule.\n',
  name: 'cdm/product/collateral/IndependentAmount',
  payerAccountReference: {
    description:
      'A reference to the account responsible for making the payments defined by this structure.',
    type: {
      blueId: 'HQT4a6mn7V2UkpeZMUtsntaJUxLAPKdHrjNwJP4dzxQX',
    },
  },
  payerPartyReference: {
    description:
      'The party responsible for making the payments defined by this structure.',
    type: {
      blueId: 'GnY3garuhYiHPrATUwY5JKQmZJPACHzjobkgXbmNJCik',
    },
  },
  paymentDetail: {
    description:
      'An attribute that specifies a payment as the combination of a payment amount, a payment date and an associated payment calculation rule.\n',
    itemType: {
      blueId: '2iax3ewikmufx2SGAqv9teMyfvSypMUiCfrvrNVxSRwy',
    },
    schema: {
      minItems: {
        type: {
          blueId: '5WNMiV9Knz63B4dVY5JtMyh3FB4FSGqv7ceScvuapdE1',
        },
        value: 1,
      },
    },
    type: {
      blueId: '6aehfNAxHLC1PHHoDr3tYtFH3RWNbiWdFancJ1bypXEY',
    },
  },
  receiverAccountReference: {
    description:
      'A reference to the account that receives the payments corresponding to this structure.',
    type: {
      blueId: 'HQT4a6mn7V2UkpeZMUtsntaJUxLAPKdHrjNwJP4dzxQX',
    },
  },
  receiverPartyReference: {
    description:
      'The party that receives the payments corresponding to this structure.',
    type: {
      blueId: 'GnY3garuhYiHPrATUwY5JKQmZJPACHzjobkgXbmNJCik',
    },
  },
} as const;
