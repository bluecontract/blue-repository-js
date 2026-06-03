export const CdmEventCommonSecurityLendingInvoice: Record<string, unknown> = {
  billingEndDate: {
    description: 'The ending date of the period described by this invoice',
    schema: {
      required: true,
    },
    type: {
      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
    },
  },
  billingRecord: {
    description: 'The billing records contained within the invoice',
    itemType: {
      blueId: '2zMRqKefYonWQ8EuyFg2YU4i4zB7SE1Yph91R4PEy7WW',
    },
    schema: {
      minItems: 1,
    },
    type: {
      blueId: '8DSFoWG9MqRSUhStqoPLrwVQiYByRh18NWbDEarN8MKF',
    },
  },
  billingStartDate: {
    description: 'The starting date of the period described by this invoice',
    schema: {
      required: true,
    },
    type: {
      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
    },
  },
  billingSummary: {
    description: 'The billing summaries contained within the invoice',
    itemType: {
      blueId: 'hDUXATg8yvnWEPHNH63w5HzgAKwLoFeQGGn6JTqWHsw',
    },
    schema: {
      minItems: 1,
    },
    type: {
      blueId: '8DSFoWG9MqRSUhStqoPLrwVQiYByRh18NWbDEarN8MKF',
    },
  },
  description:
    'Specifies the information required for inclusion in a securities lending billing invoice.',
  name: 'cdm/event/common/SecurityLendingInvoice',
  receivingParty: {
    description: 'The party receiving the invoice',
    schema: {
      required: true,
    },
    type: {
      blueId: '3skPfLDtYJ59SZAAdcu2JDHySdtCEVu8FzTnUX8D5mfy',
    },
  },
  sendingParty: {
    description: 'The party issuing the invoice',
    schema: {
      required: true,
    },
    type: {
      blueId: '3skPfLDtYJ59SZAAdcu2JDHySdtCEVu8FzTnUX8D5mfy',
    },
  },
};
