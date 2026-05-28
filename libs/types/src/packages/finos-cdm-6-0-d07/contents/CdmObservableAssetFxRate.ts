export const CdmObservableAssetFxRate = {
  description:
    'A class describing the rate of a currency conversion: pair of currency, quotation mode and exchange rate.\n',
  name: 'cdm/observable/asset/FxRate',
  quotedCurrencyPair: {
    description:
      'Defines the two currencies for an FX trade and the quotation relationship between the two currencies.',
    schema: {
      required: {
        type: {
          blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
        },
        value: true,
      },
    },
    type: {
      blueId: 'CRDQNtXNJmEa2569YsarVn2w4uDdGJfuoMsGA37B3aci',
    },
  },
  rate: {
    description:
      'The rate of exchange between the two currencies of the leg of a deal. Must be specified with a quote basis.',
    type: {
      blueId: '7pwXmXYCJtWnd348c2JQGBkm9C4renmZRwxbfaypsx5y',
    },
  },
} as const;
