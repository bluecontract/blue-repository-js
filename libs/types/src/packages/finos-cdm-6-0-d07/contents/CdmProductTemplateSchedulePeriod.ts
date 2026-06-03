export const CdmProductTemplateSchedulePeriod: Record<string, unknown> = {
  calculationPeriod: {
    description: 'Period for which the payment is generated.',
    schema: {
      required: true,
    },
    type: {
      blueId: 'ArGvahFJrYAsyvSVWtuLJVsoGkZsS1n9aTjxhikFUxJM',
    },
  },
  deliveryPeriod: {
    description: 'Period and time profile over which the delivery takes place.',
    type: {
      blueId: '4VSDgMR93vRjmusHhPRNXjdGuVnxrN3FBojT35y2b6cd',
    },
  },
  description:
    'A class that defines the period of a schedule. The period contains a set of start and end dates, quantities, fixing, and pricing data.\n',
  fixingPeriod: {
    description: 'Period over which the underlying price is observed.',
    schema: {
      required: true,
    },
    type: {
      blueId: 'ArGvahFJrYAsyvSVWtuLJVsoGkZsS1n9aTjxhikFUxJM',
    },
  },
  name: 'cdm/product/template/SchedulePeriod',
  paymentDate: {
    description: 'Adjusted payment date.',
    schema: {
      required: true,
    },
    type: {
      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
    },
  },
};
