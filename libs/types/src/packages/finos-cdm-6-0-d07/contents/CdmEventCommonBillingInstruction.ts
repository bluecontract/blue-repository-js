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
      blueId: '6BEYjg3hgMPAoG6R5b4noEX1cgoYGnB5hP5TyUvAea9c',
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
      blueId: 'CYWyA3J6C6K1kYmq7XS3yn53zSDpjC9s1btA4kqasv99',
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
      blueId: 'DqdehuAibH9Q4aC2zYPJp37ysFFDSYwuUYRNYQCeevFd',
    },
  },
  sendingParty: {
    description: 'The party issuing the invoice',
    schema: {
      required: true,
    },
    type: {
      blueId: 'DqdehuAibH9Q4aC2zYPJp37ysFFDSYwuUYRNYQCeevFd',
    },
  },
};
