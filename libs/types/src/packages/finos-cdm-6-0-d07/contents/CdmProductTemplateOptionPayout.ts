export const CdmProductTemplateOptionPayout: Record<string, unknown> = {
  buyerSeller: {
    schema: {
      required: true,
    },
    type: {
      blueId: 'FJAP5z7vAscmEbjahmsTGxsBhr4mK2GAQkcC8bjM6AEf',
    },
  },
  delivery: {
    description:
      'Contains the information relative to the delivery of the asset.',
    type: {
      blueId: 'ErtJ5jBytJJ7W2hSqXGSdmAd65mCExkRtBpifkecnhVT',
    },
  },
  description:
    'The option payout specification terms. The associated globalKey denotes the ability to associate a hash value to the respective OptionPayout instantiation for the purpose of model cross-referencing, in support of functionality such as the event effect and the lineage.\n',
  exerciseTerms: {
    description:
      'The terms for exercising the option, which include the option style (e.g. American style option), the exercise procedure (e.g. manual exercise) and the settlement terms (e.g. physical vs. cash).\n',
    schema: {
      required: true,
    },
    type: {
      blueId: '5gJQwLbmDRFr1hrMPaZEsHFgWih7ce9ciXS2YMUGt55A',
    },
  },
  feature: {
    description: 'The option feature, such as quanto, Asian, barrier, knock.',
    type: {
      blueId: '8NbBnoWUBC2RHr2XX7MrdT2qU4Nm4L5ZU4GHjeCXevBm',
    },
  },
  name: 'cdm/product/template/OptionPayout',
  observationTerms: {
    description:
      'Class containing terms that are associated with observing a price/benchmark/index across either single or multple observations. To be used for option contracts that reference a benchmark price.\n',
    type: {
      blueId: '5hoFwtCWywpjW2iVxqcevJ5qtXxE46qvSVAb8NxpJke',
    },
  },
  optionType: {
    description:
      'The type of option transaction. From a usage standpoint, put/call is the default option type, while payer/receiver indicator is used for options on index credit default swaps, consistently with the industry practice. Straddle is used for the case of straddle strategy, that combine a call and a put with the same strike.\n',
    type: {
      blueId: 'HNayhrMXPoix5Ra4zX7bVDNmVCGEAz1WAhVGbvtyHJTv',
    },
  },
  payerReceiver: {
    description:
      'Canonical representation of the payer and receiver parties applicable to each payout leg.',
    type: {
      blueId: 'JDAXkucJ2m4yHJZmHoTSjW5ZioDKLBu2dbM6gerfoyHn',
    },
  },
  priceQuantity: {
    description:
      "Each payout leg must implement the quantity concept as a 'resolvable' type, which allows for different payout legs to be linked to each other (e.g. in the case of cross-curreny products).\n",
    type: {
      blueId: '9H3s5nDTov6DTnnVBM5XaiAV2vZvPEep33DWccdc6mXq',
    },
  },
  principalPayment: {
    description:
      'The specification of the principal exchange. Optional as only applicable in the case of cross-currency or zero-coupon swaps with a final payment.\n',
    type: {
      blueId: '6ZdgPDgDd1WfACEQNiQTurhX1xdBtsoPkMNjRhDD9Myo',
    },
  },
  schedule: {
    description:
      'Allows the full representation of a payout by defining a set of schedule periods. It supports standard schedule customization by expressing all the dates, quantities, and pricing data in a non-parametric way.\n',
    type: {
      blueId: 'D9dLMq3bj6XLYoxFZUFfChf74VUAg1Lso4BteJXuB47B',
    },
  },
  settlementTerms: {
    description:
      'Each payout leg must specifies its settlement terms, including the delivery type (i.e. cash vs physical, and their respective terms), the transfer type (DvP etc.) and settlement date, if any.\n',
    type: {
      blueId: 'BRJ2J4zKmK8CLQta8gGcSboyer9Sby49nV8HopjaFM7g',
    },
  },
  strike: {
    description: 'Specifies the strike of the option',
    type: {
      blueId: '853fkTLxahq9EHHMikifwZEJBFuFzQ6cRXUnXBtQ6HPN',
    },
  },
  underlier: {
    description:
      'The financial product underlying the option, which can be of any type including an Asset, Basket, Index or a NonTransferableProduct.\n',
    schema: {
      required: true,
    },
    type: {
      blueId: 'this#2',
    },
  },
};
