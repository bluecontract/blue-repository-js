export const CdmEventCommonBillingInstruction: Record<string, unknown> = {
  billingEndDate: {
    description: 'The ending date of the period described by this invoice',
    schema: {
      required: true,
    },
    type: {
      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
    },
  },
  billingRecordInstruction: {
    description:
      'Instructions for creating the billing records contained within the invoice',
    itemType: {
      blueId: 'DsCUffxSDY6GA5gzndifSLMQRghvnkjFraENE8pUUmzA',
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
      blueId: 'GzR7cbwzNiQXhjYVBoCoZjjS5gQuW2pqty2pX2zHCkJ7',
    },
    schema: {
      minItems: 0,
    },
    type: {
      blueId: '8DSFoWG9MqRSUhStqoPLrwVQiYByRh18NWbDEarN8MKF',
    },
  },
  description:
    'Specifies the instructions for creation of a Security Lending billing invoice.',
  name: 'cdm/event/common/BillingInstruction',
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
