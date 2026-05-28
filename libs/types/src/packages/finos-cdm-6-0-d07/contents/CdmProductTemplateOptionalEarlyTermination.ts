export const CdmProductTemplateOptionalEarlyTermination = {
  calculationAgent: {
    description:
      'The ISDA Calculation Agent responsible for performing duties associated with an optional early termination.',
    type: {
      blueId: '5j3wvfjXc4HawVrDneYuxTD3C2At3QwdvEBK7LxSw24q',
    },
  },
  cashSettlement: {
    description:
      'If specified, this means that cash settlement is applicable to the transaction and defines the parameters associated with the cash settlement procedure. If not specified, then physical settlement is applicable.\n',
    type: {
      blueId: '7zkmbj4175pTZ3exYCBnCyVdiSaAT2SEfkxhDTus8iLY',
    },
  },
  description:
    'A data defining:  an early termination provision where either or both parties have the right to exercise.\n',
  exerciseNotice: {
    description:
      'Definition of the party to whom notice of exercise should be given.',
    itemType: {
      blueId: 'DRzHnd5fFvvt3FAGunPM7qFcwB1KgFPJn8D7zyBankMz',
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
  exerciseTerms: {
    description:
      'The exercise terms associated with the optional early termination, including details such as exercise style, exercise fees, and any other relevant conditions or terms.\n',
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
  followUpConfirmation: {
    description:
      "A flag to indicate whether follow-up confirmation of exercise (written or electronic) is required following telephonic notice by the buyer to the seller or seller's agent.\n",
    type: {
      blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
    },
  },
  mutualEarlyTermination: {
    description:
      'Used for specifying whether the Mutual Early Termination Right that is detailed in the Master Confirmation will apply.\n',
    type: {
      blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
    },
  },
  name: 'cdm/product/template/OptionalEarlyTermination',
  optionalEarlyTerminationAdjustedDates: {
    description:
      'An early termination provision to terminate the trade at fair value where one or both parties have the right to decide on termination.\n',
    type: {
      blueId: '3pSmHpeb9yUjkpUmFmAS4nUVy9QvuKFFwPLxuN8Yjv7W',
    },
  },
  singlePartyOption: {
    description:
      'If optional early termination is not available to both parties then this component specifies the buyer and seller of the option. In FpML, this attribute is of type SinglePsrtyOption, which actually consists of the BuyerSeller.model.\n',
    type: {
      blueId: 'ATD4mngyB7ULwUSU6DbEMVcLMyFeZxXRKDJrTsFAJ1dx',
    },
  },
} as const;
