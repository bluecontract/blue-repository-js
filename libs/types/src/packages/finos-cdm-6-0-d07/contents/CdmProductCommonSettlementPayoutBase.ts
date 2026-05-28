export const CdmProductCommonSettlementPayoutBase = {
  description:
    'A data type that contains the common attributes (e.g. payer and receiver parties) and validation conditions that apply across all payout types\n',
  name: 'cdm/product/common/settlement/PayoutBase',
  payerReceiver: {
    description:
      'Canonical representation of the payer and receiver parties applicable to each payout leg.',
    schema: {
      required: {
        type: {
          blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
        },
        value: true,
      },
    },
    type: {
      blueId: 'Cx2eHN58eqWKXnZwn6JDYBzAfG95QSEAWjQhbX1R5An3',
    },
  },
  priceQuantity: {
    description:
      "Each payout leg must implement the quantity concept as a 'resolvable' type, which allows for different payout legs to be linked to each other (e.g. in the case of cross-curreny products).\n",
    type: {
      blueId: 'F4ihqR7D44ZpGGutb98mpsdE6QNtkrVZM4oiK6Vuzcsy',
    },
  },
  principalPayment: {
    description:
      'The specification of the principal exchange. Optional as only applicable in the case of cross-currency or zero-coupon swaps with a final payment.\n',
    type: {
      blueId: '79fSZCgPXnnm5bsD9s4XCQXn5MaCb8UAVq6ybHFbLdpq',
    },
  },
  settlementTerms: {
    description:
      'Each payout leg must specifies its settlement terms, including the delivery type (i.e. cash vs physical, and their respective terms), the transfer type (DvP etc.) and settlement date, if any.\n',
    type: {
      blueId: '7zkmbj4175pTZ3exYCBnCyVdiSaAT2SEfkxhDTus8iLY',
    },
  },
} as const;
