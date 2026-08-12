export const CdmProductTemplateExtendibleProvision: Record<string, unknown> = {
  buyer: {
    description:
      "Buyer party that can be resolved as one of the two principal parties to the transaction. The party that buys this instrument, i.e. pays for this instrument and receives the rights defined by it. ISDA 2002 Equity Definitions section 1.18: `Buyer` means the party specified as such in the related Confirmation. | ISDA 2006 Definitions article 12.1 (b)(i) relating to a Swaption: 'Buyer' means the party that will, on each Premium Payment Date, pay to Seller the Premium | ISDA 2006 Definitions article 12.1 (b)(ii) relating to Swap Transactions with applicable Early Termination: the party specified as such in the related Confirmation, or the Exercising Party if neither party is specified | ISDA 2006 Definitions article 12.1 (b)(iii) relating to any other Option Transaction: the party specified as such in the related Confirmation. | ISDA 2014 Credit Definition article 1.4: `Buyer` means the Fixed Rate Payer.\n",
    type: {
      blueId: '7qRfgFBAefYQ37ztmK2dW9i4twZzBjKcQiHPeHrcRtYw',
    },
  },
  callingParty: {
    type: {
      blueId: 'BApNNpkEWkpGYmRsjYdSM2AQSRDGM9rcMKnHxtvv7U79',
    },
  },
  description:
    'A data defining:  an option to extend an existing swap transaction on the specified exercise dates for a term ending on the specified new termination date. As a difference from FpML, it extends the BuyerSeller class, which represents the BuyerSeller.model.\n',
  exerciseNotice: {
    description:
      'Definition of the party to whom notice of exercise should be given.',
    type: {
      blueId: '87nUue1ru1iHhXaB5EjL62TAsMV9t3vSvVB3X7XvwPH6',
    },
  },
  exerciseTerms: {
    description:
      'The exercise terms associated with the extendible provision, including details such as exercise style, exercise fees, and any other relevant conditions or terms governing the extension of the swap transaction.\n',
    schema: {
      required: true,
    },
    type: {
      blueId: '5gJQwLbmDRFr1hrMPaZEsHFgWih7ce9ciXS2YMUGt55A',
    },
  },
  extendibleProvisionAdjustedDates: {
    description:
      'The adjusted dates associated with an extendible provision. These dates have been adjusted for any applicable business day convention.\n',
    type: {
      blueId: '87JCfLTHiaGc1oeMQ6XxXkgfa3BhFmbR6Qa6z1Pq12Ng',
    },
  },
  extensionPeriod: {
    description:
      'The period within which notice can be given that the contract will be extended.',
    type: {
      blueId: 'A5fbgqJ72K7pbNNCrmP9z1uJjRfJjx4z6Bav92ZY3iMs',
    },
  },
  extensionTerm: {
    description:
      'The length of each extension period relative to the effective date of the preceding contract.',
    type: {
      blueId: '9fGwsBbeyL5rQuLRmwyBtyjMjAcmhWfHf4bmyqAXmWtD',
    },
  },
  followUpConfirmation: {
    description:
      "A flag to indicate whether follow-up confirmation of exercise (written or electronic) is required following telephonic notice by the buyer to the seller or seller's agent.\n",
    type: {
      blueId: 'AwvXD961fmnmqcSQhjMA7r15HpVh39cefb6ZTyUz2Fm2',
    },
  },
  name: 'cdm/product/template/ExtendibleProvision',
  noticeDeadlineDateTime: {
    description: 'A specific date and time for the notice deadline',
    type: {
      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
    },
  },
  noticeDeadlinePeriod: {
    description:
      'Defines the minimum period before a contract is scheduled to terminate that notice can be given that it will terminate beyond the scheduled termination date.\n',
    type: {
      blueId: '9fGwsBbeyL5rQuLRmwyBtyjMjAcmhWfHf4bmyqAXmWtD',
    },
  },
  seller: {
    description:
      "Seller party that can be resolved as one of the two principal parties to the transaction. The party that sells ('writes') this instrument, i.e. that grants the rights defined by this instrument and in return receives a payment for it. ISDA 2002 Equity Definitions section 1.19: `Seller` means the party specified as such in the related Confirmation. | ISDA 2006 Definitions article 12.1 (a)(i) relating to a Swaption: 'Seller' means the party the party specified as such or as writer in the related Confirmation | ISDA 2006 Definitions article 12.1 (a)(ii) relating to Swap Transactions with applicable Early Termination: the party specified as such or as writer in the related Confirmation or, if neither party is specified as such, the Non-exercising Party | ISDA 2006 Definitions article 12.1 (a)(iii) relating to any other Option Transaction: the party specified as such in the related Confirmation. | ISDA 2014 Credit Definition article 1.4: `Seller` means the Floating Rate Payer.\n",
    type: {
      blueId: '7qRfgFBAefYQ37ztmK2dW9i4twZzBjKcQiHPeHrcRtYw',
    },
  },
  singlePartyOption: {
    description:
      'If the ability to extend the contract is not available to both parties then this component specifies the buyer and seller of the option.\n',
    type: {
      blueId: '6DrJREpu1Ms3M4U1q7jqGjM46V1o8vxq4K1i3X4dwMvz',
    },
  },
};
