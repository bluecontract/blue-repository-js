export const CdmObservableAssetValuationDates = {
  description:
    'Defines how and when a performance type option or performance type swap is to be valued, including initial, interim and final valuation dates.\n',
  finalValuationDate: {
    description: 'Specifies the final valuation dates of the underlyer.',
    schema: {
      required: {
        type: {
          blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
        },
        value: true,
      },
    },
    type: {
      blueId: 'G7RBkCYuRGtWRTgXUrQzXRkYF1PaULGgHp8KeH6spT6k',
    },
  },
  initialValuationDate: {
    description: 'Specifies the initial valuation dates of the underlyer.',
    type: {
      blueId: 'G7RBkCYuRGtWRTgXUrQzXRkYF1PaULGgHp8KeH6spT6k',
    },
  },
  interimValuationDate: {
    description: 'Specifies the interim valuation dates of the underlyer.',
    type: {
      blueId: 'G7RBkCYuRGtWRTgXUrQzXRkYF1PaULGgHp8KeH6spT6k',
    },
  },
  name: 'cdm/observable/asset/ValuationDates',
} as const;
