export const CdmObservableAssetFallbackReferencePrice: Record<string, unknown> =
  {
    calculationAgentDetermination: {
      description: 'The calculation agent will decide the rate.',
      type: {
        blueId: 'FANsoqTgc5XxJH7orWbzRADwZ6drQjPzAbPN6YqvcYau',
      },
    },
    description:
      'The method, prioritised by the order it is listed in this element, to get a replacement rate for the disrupted settlement rate option.\n',
    fallBackSettlementRateOption: {
      description: 'This settlement rate option will be used in its place.',
      itemType: {
        blueId: '8iH51R45gmWCtNjqrR63GErLSs4TeUXk51R7D4ky3NDz',
      },
      schema: {
        minItems: 0,
      },
      type: {
        blueId: '8DSFoWG9MqRSUhStqoPLrwVQiYByRh18NWbDEarN8MKF',
      },
    },
    fallbackSurveyValuationPostponement: {
      description:
        'Request rate quotes from the market. This element is set as type Empty in FpML. When present, the FpML synonym is mapped to a value True in the CDM.\n',
      type: {
        blueId: 'AwvXD961fmnmqcSQhjMA7r15HpVh39cefb6ZTyUz2Fm2',
      },
    },
    name: 'cdm/observable/asset/FallbackReferencePrice',
    valuationPostponement: {
      description:
        'Specifies how long to wait to get a quote from a settlement rate option upon a price source disruption.',
      type: {
        blueId: 'FSNs7wPUozqjz5B6qRf7FwdstVC9R3vaMucjkk4PqKXW',
      },
    },
  };
