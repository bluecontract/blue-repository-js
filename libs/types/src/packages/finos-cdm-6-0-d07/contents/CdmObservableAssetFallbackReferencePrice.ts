export const CdmObservableAssetFallbackReferencePrice: Record<string, unknown> =
  {
    calculationAgentDetermination: {
      description: 'The calculation agent will decide the rate.',
      type: {
        blueId: 'BmkE3R86Mi5VSgGXWARzCmJ1FbnwnZDnHtccZ6MSGnRQ',
      },
    },
    description:
      'The method, prioritised by the order it is listed in this element, to get a replacement rate for the disrupted settlement rate option.\n',
    fallBackSettlementRateOption: {
      description: 'This settlement rate option will be used in its place.',
      itemType: {
        blueId: '5zMhYAXcxtwbFXQeEYr3vWu78daHfMbFUrFgair7M7sf',
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
        blueId: 'BbM2nqKiVihnZtKM1sJKM3HK23io3UM784GeaXFmEKiY',
      },
    },
  };
