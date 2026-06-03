export const CdmObservableAssetValuationDates: Record<string, unknown> = {
  description:
    'Defines how and when a performance type option or performance type swap is to be valued, including initial, interim and final valuation dates.\n',
  finalValuationDate: {
    description: 'Specifies the final valuation dates of the underlyer.',
    schema: {
      required: true,
    },
    type: {
      blueId: 'BZobD5YfuAeLKVVVDLWAMyVf4sWsCqN3MMAc39mMQMHx',
    },
  },
  initialValuationDate: {
    description: 'Specifies the initial valuation dates of the underlyer.',
    type: {
      blueId: 'BZobD5YfuAeLKVVVDLWAMyVf4sWsCqN3MMAc39mMQMHx',
    },
  },
  interimValuationDate: {
    description: 'Specifies the interim valuation dates of the underlyer.',
    type: {
      blueId: 'BZobD5YfuAeLKVVVDLWAMyVf4sWsCqN3MMAc39mMQMHx',
    },
  },
  name: 'cdm/observable/asset/ValuationDates',
};
