export const CdmProductAssetCreditDefaultPayout: Record<string, unknown> = {
  description:
    'The credit default payout specification provides the details necessary for determining when a credit payout will be triggered as well as the parameters for calculating the payout and the settlement terms. The associated globalKey denotes the ability to associate a hash value to the CreditDefaultPayout instantiations for the purpose of model cross-referencing, in support of functionality such as the event effect and the lineage.\n',
  generalTerms: {
    description:
      'The specification of the non-monetary terms for the Credit Derivative Transaction, including the buyer and seller and selected items from the ISDA 2014 Credit Definition article II, such as the reference obligation and related terms.\n',
    schema: {
      required: true,
    },
    type: {
      blueId: '3DSVTtZYj7KKPwr2oTs7ERknxwH4pXMvk9G1H7LkPkyr',
    },
  },
  name: 'cdm/product/asset/CreditDefaultPayout',
  payerReceiver: {
    description:
      'Canonical representation of the payer and receiver parties applicable to each payout leg.',
    type: {
      blueId: '3xPof2WJyFXisFtvaxpSGddTxHyGioazbsMJjuUucbzT',
    },
  },
  priceQuantity: {
    description:
      "Each payout leg must implement the quantity concept as a 'resolvable' type, which allows for different payout legs to be linked to each other (e.g. in the case of cross-curreny products).\n",
    type: {
      blueId: '7nSxNdghnPkGBbyqzqUELC5UcBMNfLdrCr4oXbav2d3J',
    },
  },
  principalPayment: {
    description:
      'The specification of the principal exchange. Optional as only applicable in the case of cross-currency or zero-coupon swaps with a final payment.\n',
    type: {
      blueId: '8VsQE5PSzyWWApw5Ykfum97vLPNoa36BemLUMHimzMb5',
    },
  },
  protectionTerms: {
    description:
      'Specifies the terms for calculating a payout to protect the buyer of the swap in the case of a qualified credit event. These terms include the applicable credit events, the reference obligation, and in the case of a CDS on mortgage-backed securities, the floatingAmountEvents.\n',
    itemType: {
      blueId: '6p917qiqhcPsLDv4c6fcokZDb38SkP1i69kThgdzHgBY',
    },
    schema: {
      minItems: 0,
    },
    type: {
      blueId: '8DSFoWG9MqRSUhStqoPLrwVQiYByRh18NWbDEarN8MKF',
    },
  },
  settlementTerms: {
    description:
      'Each payout leg must specifies its settlement terms, including the delivery type (i.e. cash vs physical, and their respective terms), the transfer type (DvP etc.) and settlement date, if any.\n',
    type: {
      blueId: '2qfdfn8VYJmiXxmTj9Vwfu1pB3jFJQK9WAShnf8n1r1m',
    },
  },
  transactedPrice: {
    description:
      'The qualification of the price at which the contract has been transacted, in terms of market fixed rate, initial points, market price and/or quotation style. In FpML, those attributes are positioned as part of the fee leg.\n',
    type: {
      blueId: '2VoGuVXkABhTyi7xKubFr6JzJfGRVE4L71H1o3KouEtk',
    },
  },
};
