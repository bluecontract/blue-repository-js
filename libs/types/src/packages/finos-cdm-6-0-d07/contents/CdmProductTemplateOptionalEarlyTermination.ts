export const CdmProductTemplateOptionalEarlyTermination: Record<
  string,
  unknown
> = {
  calculationAgent: {
    description:
      'The ISDA Calculation Agent responsible for performing duties associated with an optional early termination.',
    type: {
      blueId: 'FANsoqTgc5XxJH7orWbzRADwZ6drQjPzAbPN6YqvcYau',
    },
  },
  cashSettlement: {
    description:
      'If specified, this means that cash settlement is applicable to the transaction and defines the parameters associated with the cash settlement procedure. If not specified, then physical settlement is applicable.\n',
    type: {
      blueId: '2qfdfn8VYJmiXxmTj9Vwfu1pB3jFJQK9WAShnf8n1r1m',
    },
  },
  description:
    'A data defining:  an early termination provision where either or both parties have the right to exercise.\n',
  exerciseNotice: {
    description:
      'Definition of the party to whom notice of exercise should be given.',
    itemType: {
      blueId: 'JC1AzddnU2E4ioTzwsgW9ohgnrfpQQusp6hRq412YjUZ',
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
      blueId: 'J1G2hQLDGZ1gu2re4Z6NCNRA3Ze9S9LM51pbnxyzozLq',
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
      blueId: 'GjM8odwxuvdr9Y58M4jULKzxi93AmZuKSFfkTFsJ7cYx',
    },
  },
  singlePartyOption: {
    description:
      'If optional early termination is not available to both parties then this component specifies the buyer and seller of the option. In FpML, this attribute is of type SinglePsrtyOption, which actually consists of the BuyerSeller.model.\n',
    type: {
      blueId: 'HA8fmtXcNJxs3hXa88H9PHchDg6hgAFvto4VVdW1aZmf',
    },
  },
};
