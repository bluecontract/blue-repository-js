export const CdmObservableAssetFallbackReferencePrice = {
  calculationAgentDetermination: {
    description: 'The calculation agent will decide the rate.',
    type: {
      blueId: '5j3wvfjXc4HawVrDneYuxTD3C2At3QwdvEBK7LxSw24q',
    },
  },
  description:
    'The method, prioritised by the order it is listed in this element, to get a replacement rate for the disrupted settlement rate option.\n',
  fallBackSettlementRateOption: {
    description: 'This settlement rate option will be used in its place.',
    itemType: {
      blueId: '2gfQWVQFHUKLQjAkfCvcbJNDyzFEQ8nZxo6gzLu3iBbF',
    },
    schema: {
      minItems: {
        type: {
          blueId: '5WNMiV9Knz63B4dVY5JtMyh3FB4FSGqv7ceScvuapdE1',
        },
        value: 0,
      },
    },
    type: {
      blueId: '6aehfNAxHLC1PHHoDr3tYtFH3RWNbiWdFancJ1bypXEY',
    },
  },
  fallbackSurveyValuationPostponement: {
    description:
      'Request rate quotes from the market. This element is set as type Empty in FpML. When present, the FpML synonym is mapped to a value True in the CDM.\n',
    type: {
      blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
    },
  },
  name: 'cdm/observable/asset/FallbackReferencePrice',
  valuationPostponement: {
    description:
      'Specifies how long to wait to get a quote from a settlement rate option upon a price source disruption.',
    type: {
      blueId: '4qEkQfDu8oCghp1oSzQpCCV54KiEzfWX7fbKB9doJUtM',
    },
  },
} as const;
