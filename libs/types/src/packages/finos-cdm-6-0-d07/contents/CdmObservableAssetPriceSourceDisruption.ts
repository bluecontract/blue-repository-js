export const CdmObservableAssetPriceSourceDisruption: Record<string, unknown> =
  {
    description:
      'A data defining:  the parameters used to get a price quote to replace the settlement rate option that is disrupted.\n',
    fallbackReferencePrice: {
      description:
        'The method, prioritised by the order it is listed in this element, to get a replacement rate for the disrupted settlement rate option.\n',
      schema: {
        required: true,
      },
      type: {
        blueId: 'PDQLcykvwiGmnD7jw1DPqfEPB4qb9uEDGcwWVZLf7vv',
      },
    },
    name: 'cdm/observable/asset/PriceSourceDisruption',
  };
