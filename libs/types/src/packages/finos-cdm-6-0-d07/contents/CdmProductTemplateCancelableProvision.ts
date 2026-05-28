export const CdmProductTemplateCancelableProvision = {
  buyer: {
    description:
      "Buyer party that can be resolved as one of the two principal parties to the transaction. The party that buys this instrument, i.e. pays for this instrument and receives the rights defined by it. ISDA 2002 Equity Definitions section 1.18: `Buyer` means the party specified as such in the related Confirmation. | ISDA 2006 Definitions article 12.1 (b)(i) relating to a Swaption: 'Buyer' means the party that will, on each Premium Payment Date, pay to Seller the Premium | ISDA 2006 Definitions article 12.1 (b)(ii) relating to Swap Transactions with applicable Early Termination: the party specified as such in the related Confirmation, or the Exercising Party if neither party is specified | ISDA 2006 Definitions article 12.1 (b)(iii) relating to any other Option Transaction: the party specified as such in the related Confirmation. | ISDA 2014 Credit Definition article 1.4: `Buyer` means the Fixed Rate Payer.\n",
    type: {
      blueId: '6x12g8enT8MoRfSx5A65GDeBhgNsaewRCdXG5hsioGmL',
    },
  },
  callingParty: {
    description:
      'The party with right to exercise a cancellation. Allows for buyer, seller or either.',
    type: {
      blueId: '7JgCzWgxDq22P8AyrrUkykevhpTvXY5s46gDXHG4aBwP',
    },
  },
  cancelableProvisionAdjustedDates: {
    description:
      'The adjusted dates associated with a cancelable provision. These dates have been adjusted for any applicable business day convention.\n',
    type: {
      blueId: '5bwTE9f1nJUBqj4vqvFo7c4i18afULFEC5FeQM5nzXkr',
    },
  },
  description:
    "A data defining:  the right of a party to cancel a swap transaction on the specified exercise dates. The provision is for 'walk-away' cancellation (i.e. the fair value of the swap is not paid). A fee payable on exercise can be specified. As a difference from the FpML construct, the canonical model extends the BuyerSeller class.\n",
  earliestCancellationTime: {
    description:
      'The earliest time in a business day that notice of cancelation can be given.',
    type: {
      blueId: 'AYcPv3zXSTKojz4MpYi8KWL5Z9TVBuzNzHmzsZe3cYcC',
    },
  },
  earliestDate: {
    description:
      'The first day when cancelation is permitted to take effect. A party may give notice prior to this date and taken together with the effective period would be necessary to cancel on this date.\n',
    type: {
      blueId: '2tGygxV5BThuWavpJ3T6K3Atw5u4bJZT1Wb2Nxk798dd',
    },
  },
  effectiveDate: {
    description:
      'The effective date if cancelation is invoked otherwise the cancellation period defines the cancellation date.',
    type: {
      blueId: '8PKDuaLpjNXiaiuAt3sN69jDVCEBaEXv2LsUjsa8MMZS',
    },
  },
  effectivePeriod: {
    description:
      'Effective period for cancelation when notice is given. This is the period after notice is given that cancellation becomes effecticve.\n',
    type: {
      blueId: '5rdYwkwGdndCoYmQi9MNzw9SKQZsr68igDgyYFgvNzmh',
    },
  },
  exerciseNotice: {
    description:
      'Definition of the party to whom notice of exercise should be given.',
    type: {
      blueId: 'DRzHnd5fFvvt3FAGunPM7qFcwB1KgFPJn8D7zyBankMz',
    },
  },
  exerciseTerms: {
    description:
      'The exercise terms associated with the cancelable provision, including details such as exercise style, exercise fees, and any other relevant conditions or terms governing the cancellation of the swap transaction.\n',
    schema: {
      required: {
        type: {
          blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
        },
        value: true,
      },
    },
    type: {
      blueId: 'Chheuq1dPEWCj7bsdGkRo52qY4nscUb7oURn3FKrqFtS',
    },
  },
  expirationDate: {
    description:
      'The last day within the term of the contract that cancelation is allowed.',
    type: {
      blueId: '2tGygxV5BThuWavpJ3T6K3Atw5u4bJZT1Wb2Nxk798dd',
    },
  },
  finalCalculationPeriodDateAdjustment: {
    description:
      "Business date convention adjustment to final payment period per leg (swapStream) upon exercise event. The adjustments can be made in-line with leg level BDC's or they can be specified separately.\n",
    itemType: {
      blueId: 'CwVqcagqRU8u2uYQ7UX2DhBEktwSuwCNdvLc92FdhUm6',
    },
    schema: {
      minItems: {
        type: {
          blueId: '5WNMiV9Knz63B4dVY5JtMyh3FB4FSGqv7ceScvuapdE1',
        },
        value: 0,
      },
    },
    type: {
      blueId: '6aehfNAxHLC1PHHoDr3tYtFH3RWNbiWdFancJ1bypXEY',
    },
  },
  followUpConfirmation: {
    description:
      "A flag to indicate whether follow-up confirmation of exercise (written or electronic) is required following telephonic notice by the buyer to the seller or seller's agent.\n",
    schema: {
      required: {
        type: {
          blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
        },
        value: true,
      },
    },
    type: {
      blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
    },
  },
  initialFee: {
    description: 'An initial fee for the cancelable option.',
    type: {
      blueId: '98eFnr7F52GRnD9gADRtEuqZMPpuZCmesaDMrQ7wS8Xk',
    },
  },
  latestCancelationTime: {
    description: 'The latest time at which notice of cancelation can be given.',
    type: {
      blueId: 'AYcPv3zXSTKojz4MpYi8KWL5Z9TVBuzNzHmzsZe3cYcC',
    },
  },
  name: 'cdm/product/template/CancelableProvision',
  seller: {
    description:
      "Seller party that can be resolved as one of the two principal parties to the transaction. The party that sells ('writes') this instrument, i.e. that grants the rights defined by this instrument and in return receives a payment for it. ISDA 2002 Equity Definitions section 1.19: `Seller` means the party specified as such in the related Confirmation. | ISDA 2006 Definitions article 12.1 (a)(i) relating to a Swaption: 'Seller' means the party the party specified as such or as writer in the related Confirmation | ISDA 2006 Definitions article 12.1 (a)(ii) relating to Swap Transactions with applicable Early Termination: the party specified as such or as writer in the related Confirmation or, if neither party is specified as such, the Non-exercising Party | ISDA 2006 Definitions article 12.1 (a)(iii) relating to any other Option Transaction: the party specified as such in the related Confirmation. | ISDA 2014 Credit Definition article 1.4: `Seller` means the Floating Rate Payer.\n",
    type: {
      blueId: '6x12g8enT8MoRfSx5A65GDeBhgNsaewRCdXG5hsioGmL',
    },
  },
} as const;
