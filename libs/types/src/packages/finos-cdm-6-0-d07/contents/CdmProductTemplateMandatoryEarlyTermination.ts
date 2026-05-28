export const CdmProductTemplateMandatoryEarlyTermination = {
  calculationAgent: {
    description:
      'The ISDA Calculation Agent responsible for performing duties associated with an optional early termination.',
    schema: {
      required: {
        type: {
          blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
        },
        value: true,
      },
    },
    type: {
      blueId: '5j3wvfjXc4HawVrDneYuxTD3C2At3QwdvEBK7LxSw24q',
    },
  },
  cashSettlement: {
    description:
      'If specified, this means that cash settlement is applicable to the transaction and defines the parameters associated with the cash settlement procedure. If not specified, then physical settlement is applicable.\n',
    schema: {
      required: {
        type: {
          blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
        },
        value: true,
      },
    },
    type: {
      blueId: '7zkmbj4175pTZ3exYCBnCyVdiSaAT2SEfkxhDTus8iLY',
    },
  },
  description:
    'A data to:  define an early termination provision for which exercise is mandatory.\n',
  mandatoryEarlyTerminationAdjustedDates: {
    description:
      'The adjusted dates associated with a mandatory early termination provision. These dates have been adjusted for any applicable business day convention.\n',
    type: {
      blueId: '5rLfe9XaZJN6C7Emyi4zRZrov1SdCdCb8wmVVLRNhwEo',
    },
  },
  mandatoryEarlyTerminationDate: {
    description:
      'The early termination date associated with a mandatory early termination of a swap.',
    schema: {
      required: {
        type: {
          blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
        },
        value: true,
      },
    },
    type: {
      blueId: '4Ro4tKrST2yaBWNytCjLJMhx3DMoAXwqU1W6HBKrnfRn',
    },
  },
  name: 'cdm/product/template/MandatoryEarlyTermination',
} as const;
