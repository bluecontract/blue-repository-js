export const CdmEventCommonBillingSummaryInstruction = {
  description: 'Specifies the instructions for creation of a billing summary.',
  name: 'cdm/event/common/BillingSummaryInstruction',
  summaryAmountType: {
    description: 'The account level for the billing summary.',
    schema: {
      required: {
        type: {
          blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
        },
        value: true,
      },
    },
    type: {
      blueId: '4Wn9bRiHpqcy5PwHNSLRprPvX37tuFs1nCqq9WQfmLGF',
    },
  },
} as const;
