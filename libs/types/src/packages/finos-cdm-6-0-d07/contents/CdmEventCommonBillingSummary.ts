export const CdmEventCommonBillingSummary = {
  description: 'Specifies individual summaries within a billing invoice.',
  name: 'cdm/event/common/BillingSummary',
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
  summaryTransfer: {
    description: 'The settlement terms for the billing summary',
    type: {
      blueId: '98eFnr7F52GRnD9gADRtEuqZMPpuZCmesaDMrQ7wS8Xk',
    },
  },
} as const;
