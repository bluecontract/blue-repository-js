export const CdmObservableAssetPriceSourceDisruption = {
  description:
    'A data defining:  the parameters used to get a price quote to replace the settlement rate option that is disrupted.\n',
  fallbackReferencePrice: {
    description:
      'The method, prioritised by the order it is listed in this element, to get a replacement rate for the disrupted settlement rate option.\n',
    schema: {
      required: {
        type: {
          blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
        },
        value: true,
      },
    },
    type: {
      blueId: '8u75ZsfFENxuuWeFUM4VVj4pAdSd8NHQ4HucWy2U6LrX',
    },
  },
  name: 'cdm/observable/asset/PriceSourceDisruption',
} as const;
