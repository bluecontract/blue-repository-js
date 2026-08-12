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
      blueId: 'BmkE3R86Mi5VSgGXWARzCmJ1FbnwnZDnHtccZ6MSGnRQ',
    },
  },
  cashSettlement: {
    description:
      'If specified, this means that cash settlement is applicable to the transaction and defines the parameters associated with the cash settlement procedure. If not specified, then physical settlement is applicable.\n',
    schema: {
      required: true,
    },
    type: {
      blueId: 'BRJ2J4zKmK8CLQta8gGcSboyer9Sby49nV8HopjaFM7g',
    },
  },
  description:
    'A data to:  define an early termination provision for which exercise is mandatory.\n',
  mandatoryEarlyTerminationAdjustedDates: {
    description:
      'The adjusted dates associated with a mandatory early termination provision. These dates have been adjusted for any applicable business day convention.\n',
    type: {
      blueId: 'Acs6ukfV3eCU91sJGg35wtJYCmsZtHywzXgw7C4nVMV7',
    },
  },
  mandatoryEarlyTerminationDate: {
    description:
      'The early termination date associated with a mandatory early termination of a swap.',
    schema: {
      required: true,
    },
    type: {
      blueId: 'J1kGTdAb67L1bPgvuKZ86jTR9UZJomnkgA6hcnVfnwfD',
    },
  },
  name: 'cdm/product/template/MandatoryEarlyTermination',
};
