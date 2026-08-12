export const CdmObservableAssetValuationDates: Record<string, unknown> = {
  description:
    'Defines how and when a performance type option or performance type swap is to be valued, including initial, interim and final valuation dates.\n',
  finalValuationDate: {
    description: 'Specifies the final valuation dates of the underlyer.',
    schema: {
      required: true,
    },
    type: {
      blueId: 'BSEHE4W4SiFBFxz2pZFUYLZkWbx5TpsRfxn2aVJSizYd',
    },
  },
  initialValuationDate: {
    description: 'Specifies the initial valuation dates of the underlyer.',
    type: {
      blueId: 'BSEHE4W4SiFBFxz2pZFUYLZkWbx5TpsRfxn2aVJSizYd',
    },
  },
  interimValuationDate: {
    description: 'Specifies the interim valuation dates of the underlyer.',
    type: {
      blueId: 'BSEHE4W4SiFBFxz2pZFUYLZkWbx5TpsRfxn2aVJSizYd',
    },
  },
  name: 'cdm/observable/asset/ValuationDates',
};
