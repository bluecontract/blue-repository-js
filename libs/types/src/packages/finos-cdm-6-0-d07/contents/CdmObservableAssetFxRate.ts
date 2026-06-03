export const CdmObservableAssetFxRate: Record<string, unknown> = {
  description:
    'A class describing the rate of a currency conversion: pair of currency, quotation mode and exchange rate.\n',
  name: 'cdm/observable/asset/FxRate',
  quotedCurrencyPair: {
    description:
      'Defines the two currencies for an FX trade and the quotation relationship between the two currencies.',
    schema: {
      required: true,
    },
    type: {
      blueId: 'Fh47tZBtYn2vAYUQFPhW9yfe2PQ2jNgj4jqnT8kVqWGm',
    },
  },
  rate: {
    description:
      'The rate of exchange between the two currencies of the leg of a deal. Must be specified with a quote basis.',
    type: {
      blueId: '9eWaHYz2vKrFofdHTHAizNNu8xP6QE3WQ5y7DGrGZvyJ',
    },
  },
};
