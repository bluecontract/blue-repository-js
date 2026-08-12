export const CdmProductTemplateOptionalEarlyTermination: Record<
  string,
  unknown
> = {
  calculationAgent: {
    description:
      'The ISDA Calculation Agent responsible for performing duties associated with an optional early termination.',
    type: {
      blueId: 'BmkE3R86Mi5VSgGXWARzCmJ1FbnwnZDnHtccZ6MSGnRQ',
    },
  },
  cashSettlement: {
    description:
      'If specified, this means that cash settlement is applicable to the transaction and defines the parameters associated with the cash settlement procedure. If not specified, then physical settlement is applicable.\n',
    type: {
      blueId: 'BRJ2J4zKmK8CLQta8gGcSboyer9Sby49nV8HopjaFM7g',
    },
  },
  description:
    'A data defining:  an early termination provision where either or both parties have the right to exercise.\n',
  exerciseNotice: {
    description:
      'Definition of the party to whom notice of exercise should be given.',
    itemType: {
      blueId: '87nUue1ru1iHhXaB5EjL62TAsMV9t3vSvVB3X7XvwPH6',
    },
    schema: {
      minItems: 0,
    },
    type: {
      blueId: '8DSFoWG9MqRSUhStqoPLrwVQiYByRh18NWbDEarN8MKF',
    },
  },
  exerciseTerms: {
    description:
      'The exercise terms associated with the optional early termination, including details such as exercise style, exercise fees, and any other relevant conditions or terms.\n',
    schema: {
      required: true,
    },
    type: {
      blueId: '5gJQwLbmDRFr1hrMPaZEsHFgWih7ce9ciXS2YMUGt55A',
    },
  },
  followUpConfirmation: {
    description:
      "A flag to indicate whether follow-up confirmation of exercise (written or electronic) is required following telephonic notice by the buyer to the seller or seller's agent.\n",
    type: {
      blueId: 'AwvXD961fmnmqcSQhjMA7r15HpVh39cefb6ZTyUz2Fm2',
    },
  },
  mutualEarlyTermination: {
    description:
      'Used for specifying whether the Mutual Early Termination Right that is detailed in the Master Confirmation will apply.\n',
    type: {
      blueId: 'AwvXD961fmnmqcSQhjMA7r15HpVh39cefb6ZTyUz2Fm2',
    },
  },
  name: 'cdm/product/template/OptionalEarlyTermination',
  optionalEarlyTerminationAdjustedDates: {
    description:
      'An early termination provision to terminate the trade at fair value where one or both parties have the right to decide on termination.\n',
    type: {
      blueId: 'E9tgtxzW2aKM5cXBuZ4HZEsYRbKqjQQpVyxRWYXeF6UU',
    },
  },
  singlePartyOption: {
    description:
      'If optional early termination is not available to both parties then this component specifies the buyer and seller of the option. In FpML, this attribute is of type SinglePsrtyOption, which actually consists of the BuyerSeller.model.\n',
    type: {
      blueId: 'FJAP5z7vAscmEbjahmsTGxsBhr4mK2GAQkcC8bjM6AEf',
    },
  },
};
