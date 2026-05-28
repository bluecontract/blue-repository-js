export const CdmObservableAssetSettlementRateOption = {
  description:
    'Defines the settlement rate option to use for fixing in case of cash settlement. Currently only applicable to foreign exchange fixing in case of cross-currency settlement.\n',
  name: 'cdm/observable/asset/SettlementRateOption',
  priceSourceDisruption: {
    description:
      'An attribute defining the parameters to get a new quote when a settlement rate option is disrupted.',
    type: {
      blueId: 'HXr8kdL38en5pwXowLj5Q3Zm1ZazRrhbNVRosgr5VrV9',
    },
  },
  settlementRateOption: {
    description:
      'The rate source for the conversion to the settlement currency. This source is specified through a scheme that reflects the terms of the Annex A to the 1998 FX and Currency Option Definitions.\n',
    schema: {
      required: {
        type: {
          blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
        },
        value: true,
      },
    },
    type: {
      blueId: '2gfQWVQFHUKLQjAkfCvcbJNDyzFEQ8nZxo6gzLu3iBbF',
    },
  },
} as const;
