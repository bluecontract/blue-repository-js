export const CdmEventCommonBillingSummary: Record<string, unknown> = {
  description: 'Specifies individual summaries within a billing invoice.',
  name: 'cdm/event/common/BillingSummary',
  summaryAmountType: {
    description: 'The account level for the billing summary.',
    schema: {
      required: true,
    },
    type: {
      blueId: 'AnFR5nwdiQukWW9YeZRmgTparyPvgRKghypvgvUWqU1c',
    },
  },
  summaryTransfer: {
    description: 'The settlement terms for the billing summary',
    type: {
      blueId: 'Huf4W2NzpakJVTTdkhKJriEVabT1NBezmnyTJB9Wt2Vs',
    },
  },
};
