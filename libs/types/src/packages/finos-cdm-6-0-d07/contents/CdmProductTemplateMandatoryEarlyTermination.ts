export const CdmProductTemplateMandatoryEarlyTermination: Record<
  string,
  unknown
> = {
  calculationAgent: {
    description:
      'The ISDA Calculation Agent responsible for performing duties associated with an optional early termination.',
    schema: {
      required: true,
    },
    type: {
      blueId: 'FANsoqTgc5XxJH7orWbzRADwZ6drQjPzAbPN6YqvcYau',
    },
  },
  cashSettlement: {
    description:
      'If specified, this means that cash settlement is applicable to the transaction and defines the parameters associated with the cash settlement procedure. If not specified, then physical settlement is applicable.\n',
    schema: {
      required: true,
    },
    type: {
      blueId: '2qfdfn8VYJmiXxmTj9Vwfu1pB3jFJQK9WAShnf8n1r1m',
    },
  },
  description:
    'A data to:  define an early termination provision for which exercise is mandatory.\n',
  mandatoryEarlyTerminationAdjustedDates: {
    description:
      'The adjusted dates associated with a mandatory early termination provision. These dates have been adjusted for any applicable business day convention.\n',
    type: {
      blueId: 'ENSK1BSQZtUz73JC51Ww2axF9BMWqhkBEE9AzutJiqoH',
    },
  },
  mandatoryEarlyTerminationDate: {
    description:
      'The early termination date associated with a mandatory early termination of a swap.',
    schema: {
      required: true,
    },
    type: {
      blueId: 'GKy9ctegTJLwNAwxTMo1WX9xQCvWbzwntin4VStfEfDi',
    },
  },
  name: 'cdm/product/template/MandatoryEarlyTermination',
};
