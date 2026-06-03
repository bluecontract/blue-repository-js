export const CdmProductTemplateCancelableProvision: Record<string, unknown> = {
  buyer: {
    description:
      "Buyer party that can be resolved as one of the two principal parties to the transaction. The party that buys this instrument, i.e. pays for this instrument and receives the rights defined by it. ISDA 2002 Equity Definitions section 1.18: `Buyer` means the party specified as such in the related Confirmation. | ISDA 2006 Definitions article 12.1 (b)(i) relating to a Swaption: 'Buyer' means the party that will, on each Premium Payment Date, pay to Seller the Premium | ISDA 2006 Definitions article 12.1 (b)(ii) relating to Swap Transactions with applicable Early Termination: the party specified as such in the related Confirmation, or the Exercising Party if neither party is specified | ISDA 2006 Definitions article 12.1 (b)(iii) relating to any other Option Transaction: the party specified as such in the related Confirmation. | ISDA 2014 Credit Definition article 1.4: `Buyer` means the Fixed Rate Payer.\n",
    type: {
      blueId: '6RRexSdxduLUUJjoAGhNuhXszw24mwyTFrHtwAqU2SDG',
    },
  },
  callingParty: {
    description:
      'The party with right to exercise a cancellation. Allows for buyer, seller or either.',
    type: {
      blueId: 'HvCMubnrJNvp3fupXZTsjTSXTE6Hx1m47cYMbRkQVWRQ',
    },
  },
  cancelableProvisionAdjustedDates: {
    description:
      'The adjusted dates associated with a cancelable provision. These dates have been adjusted for any applicable business day convention.\n',
    type: {
      blueId: 'CDsiMFyUmtAL1XNKLh9LcCjvCTRpiHNkgWZs3PvwAQYZ',
    },
  },
  description:
    "A data defining:  the right of a party to cancel a swap transaction on the specified exercise dates. The provision is for 'walk-away' cancellation (i.e. the fair value of the swap is not paid). A fee payable on exercise can be specified. As a difference from the FpML construct, the canonical model extends the BuyerSeller class.\n",
  earliestCancellationTime: {
    description:
      'The earliest time in a business day that notice of cancelation can be given.',
    type: {
      blueId: '4Mi73c2rJbGTBeaTVi4xUgW33QBxsUyxSSV6ELoqnP4j',
    },
  },
  earliestDate: {
    description:
      'The first day when cancelation is permitted to take effect. A party may give notice prior to this date and taken together with the effective period would be necessary to cancel on this date.\n',
    type: {
      blueId: '2Dr79mc7tDo84pCgLDhmSAuay1naC42UUovCTcaMjY5R',
    },
  },
  effectiveDate: {
    description:
      'The effective date if cancelation is invoked otherwise the cancellation period defines the cancellation date.',
    type: {
      blueId: 'AiYMNnHZT7DJNXi1wScVgJSGHkgj5i6eH6jUgQoxX9Bw',
    },
  },
  effectivePeriod: {
    description:
      'Effective period for cancelation when notice is given. This is the period after notice is given that cancellation becomes effecticve.\n',
    type: {
      blueId: 'G5BwzTWEaA14NoPKn8iSwCnmwnWuQegPHZwrpgagS6kY',
    },
  },
  exerciseNotice: {
    description:
      'Definition of the party to whom notice of exercise should be given.',
    type: {
      blueId: 'JC1AzddnU2E4ioTzwsgW9ohgnrfpQQusp6hRq412YjUZ',
    },
  },
  exerciseTerms: {
    description:
      'The exercise terms associated with the cancelable provision, including details such as exercise style, exercise fees, and any other relevant conditions or terms governing the cancellation of the swap transaction.\n',
    schema: {
      required: true,
    },
    type: {
      blueId: 'J1G2hQLDGZ1gu2re4Z6NCNRA3Ze9S9LM51pbnxyzozLq',
    },
  },
  expirationDate: {
    description:
      'The last day within the term of the contract that cancelation is allowed.',
    type: {
      blueId: '2Dr79mc7tDo84pCgLDhmSAuay1naC42UUovCTcaMjY5R',
    },
  },
  finalCalculationPeriodDateAdjustment: {
    description:
      "Business date convention adjustment to final payment period per leg (swapStream) upon exercise event. The adjustments can be made in-line with leg level BDC's or they can be specified separately.\n",
    itemType: {
      blueId: 'FLLBtJA3uBehX7mffS1DNAvuAgzQmL3tLBCtQL9xQRBY',
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
      blueId: 'Huf4W2NzpakJVTTdkhKJriEVabT1NBezmnyTJB9Wt2Vs',
    },
  },
  latestCancelationTime: {
    description: 'The latest time at which notice of cancelation can be given.',
    type: {
      blueId: '4Mi73c2rJbGTBeaTVi4xUgW33QBxsUyxSSV6ELoqnP4j',
    },
  },
  name: 'cdm/product/template/CancelableProvision',
  seller: {
    description:
      "Seller party that can be resolved as one of the two principal parties to the transaction. The party that sells ('writes') this instrument, i.e. that grants the rights defined by this instrument and in return receives a payment for it. ISDA 2002 Equity Definitions section 1.19: `Seller` means the party specified as such in the related Confirmation. | ISDA 2006 Definitions article 12.1 (a)(i) relating to a Swaption: 'Seller' means the party the party specified as such or as writer in the related Confirmation | ISDA 2006 Definitions article 12.1 (a)(ii) relating to Swap Transactions with applicable Early Termination: the party specified as such or as writer in the related Confirmation or, if neither party is specified as such, the Non-exercising Party | ISDA 2006 Definitions article 12.1 (a)(iii) relating to any other Option Transaction: the party specified as such in the related Confirmation. | ISDA 2014 Credit Definition article 1.4: `Seller` means the Floating Rate Payer.\n",
    type: {
      blueId: '6RRexSdxduLUUJjoAGhNuhXszw24mwyTFrHtwAqU2SDG',
    },
  },
};
