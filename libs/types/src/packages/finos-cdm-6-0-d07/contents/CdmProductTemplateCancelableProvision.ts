export const CdmProductTemplateCancelableProvision: Record<string, unknown> = {
  buyer: {
    description:
      "Buyer party that can be resolved as one of the two principal parties to the transaction. The party that buys this instrument, i.e. pays for this instrument and receives the rights defined by it. ISDA 2002 Equity Definitions section 1.18: `Buyer` means the party specified as such in the related Confirmation. | ISDA 2006 Definitions article 12.1 (b)(i) relating to a Swaption: 'Buyer' means the party that will, on each Premium Payment Date, pay to Seller the Premium | ISDA 2006 Definitions article 12.1 (b)(ii) relating to Swap Transactions with applicable Early Termination: the party specified as such in the related Confirmation, or the Exercising Party if neither party is specified | ISDA 2006 Definitions article 12.1 (b)(iii) relating to any other Option Transaction: the party specified as such in the related Confirmation. | ISDA 2014 Credit Definition article 1.4: `Buyer` means the Fixed Rate Payer.\n",
    type: {
      blueId: '7qRfgFBAefYQ37ztmK2dW9i4twZzBjKcQiHPeHrcRtYw',
    },
  },
  callingParty: {
    description:
      'The party with right to exercise a cancellation. Allows for buyer, seller or either.',
    type: {
      blueId: 'BApNNpkEWkpGYmRsjYdSM2AQSRDGM9rcMKnHxtvv7U79',
    },
  },
  cancelableProvisionAdjustedDates: {
    description:
      'The adjusted dates associated with a cancelable provision. These dates have been adjusted for any applicable business day convention.\n',
    type: {
      blueId: '71bRWBYtvfdtP8AxwkZMtMfJ2yr1QSyPJtEEsQYoyuit',
    },
  },
  description:
    "A data defining:  the right of a party to cancel a swap transaction on the specified exercise dates. The provision is for 'walk-away' cancellation (i.e. the fair value of the swap is not paid). A fee payable on exercise can be specified. As a difference from the FpML construct, the canonical model extends the BuyerSeller class.\n",
  earliestCancellationTime: {
    description:
      'The earliest time in a business day that notice of cancelation can be given.',
    type: {
      blueId: '4muK6BKTZZzEij2eR3Dg7sQxj224LzRoyzr5n7UcAR3X',
    },
  },
  earliestDate: {
    description:
      'The first day when cancelation is permitted to take effect. A party may give notice prior to this date and taken together with the effective period would be necessary to cancel on this date.\n',
    type: {
      blueId: 'GW4fUG5i4g68v2eQEznuefGCSUPiwaHXpoVmU4ASwx29',
    },
  },
  effectiveDate: {
    description:
      'The effective date if cancelation is invoked otherwise the cancellation period defines the cancellation date.',
    type: {
      blueId: '9V8dVXLUmzyBUtMoSeANJ5YvW4XpFBRyrLAUa8aaKbtu',
    },
  },
  effectivePeriod: {
    description:
      'Effective period for cancelation when notice is given. This is the period after notice is given that cancellation becomes effecticve.\n',
    type: {
      blueId: '2eRPMxKZ8upfUGCDqNY6xXko7GTGvozudp1i9wznQmXL',
    },
  },
  exerciseNotice: {
    description:
      'Definition of the party to whom notice of exercise should be given.',
    type: {
      blueId: '87nUue1ru1iHhXaB5EjL62TAsMV9t3vSvVB3X7XvwPH6',
    },
  },
  exerciseTerms: {
    description:
      'The exercise terms associated with the cancelable provision, including details such as exercise style, exercise fees, and any other relevant conditions or terms governing the cancellation of the swap transaction.\n',
    schema: {
      required: true,
    },
    type: {
      blueId: '5gJQwLbmDRFr1hrMPaZEsHFgWih7ce9ciXS2YMUGt55A',
    },
  },
  expirationDate: {
    description:
      'The last day within the term of the contract that cancelation is allowed.',
    type: {
      blueId: 'GW4fUG5i4g68v2eQEznuefGCSUPiwaHXpoVmU4ASwx29',
    },
  },
  finalCalculationPeriodDateAdjustment: {
    description:
      "Business date convention adjustment to final payment period per leg (swapStream) upon exercise event. The adjustments can be made in-line with leg level BDC's or they can be specified separately.\n",
    itemType: {
      blueId: '7Kho8N3YbG3eYyAjjUVNmpPq1xASqj3bfY7hNtffTMiQ',
    },
    schema: {
      minItems: 0,
    },
    type: {
      blueId: '8DSFoWG9MqRSUhStqoPLrwVQiYByRh18NWbDEarN8MKF',
    },
  },
  followUpConfirmation: {
    description:
      "A flag to indicate whether follow-up confirmation of exercise (written or electronic) is required following telephonic notice by the buyer to the seller or seller's agent.\n",
    schema: {
      required: true,
    },
    type: {
      blueId: 'AwvXD961fmnmqcSQhjMA7r15HpVh39cefb6ZTyUz2Fm2',
    },
  },
  initialFee: {
    description: 'An initial fee for the cancelable option.',
    type: {
      blueId: 'D5TDQT9MAD6sFuVDC3EEoupfJghS4ZKw8J27kLnBJM3e',
    },
  },
  latestCancelationTime: {
    description: 'The latest time at which notice of cancelation can be given.',
    type: {
      blueId: '4muK6BKTZZzEij2eR3Dg7sQxj224LzRoyzr5n7UcAR3X',
    },
  },
  name: 'cdm/product/template/CancelableProvision',
  seller: {
    description:
      "Seller party that can be resolved as one of the two principal parties to the transaction. The party that sells ('writes') this instrument, i.e. that grants the rights defined by this instrument and in return receives a payment for it. ISDA 2002 Equity Definitions section 1.19: `Seller` means the party specified as such in the related Confirmation. | ISDA 2006 Definitions article 12.1 (a)(i) relating to a Swaption: 'Seller' means the party the party specified as such or as writer in the related Confirmation | ISDA 2006 Definitions article 12.1 (a)(ii) relating to Swap Transactions with applicable Early Termination: the party specified as such or as writer in the related Confirmation or, if neither party is specified as such, the Non-exercising Party | ISDA 2006 Definitions article 12.1 (a)(iii) relating to any other Option Transaction: the party specified as such in the related Confirmation. | ISDA 2014 Credit Definition article 1.4: `Seller` means the Floating Rate Payer.\n",
    type: {
      blueId: '7qRfgFBAefYQ37ztmK2dW9i4twZzBjKcQiHPeHrcRtYw',
    },
  },
};
