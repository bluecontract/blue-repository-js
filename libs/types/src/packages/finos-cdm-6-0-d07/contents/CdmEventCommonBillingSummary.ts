export const CdmEventCommonBillingSummary: Record<string, unknown> = {
  description: 'Specifies individual summaries within a billing invoice.',
  name: 'cdm/event/common/BillingSummary',
  summaryAmountType: {
    description: 'The account level for the billing summary.',
    schema: {
      required: true,
    },
    type: {
      blueId: '5pVuoN3kB2p1FWPd8ss7zpA872YxL81sDYtL3SKEx1x8',
    },
  },
  summaryTransfer: {
    description: 'The settlement terms for the billing summary',
    type: {
      blueId: 'D5TDQT9MAD6sFuVDC3EEoupfJghS4ZKw8J27kLnBJM3e',
    },
  },
};
