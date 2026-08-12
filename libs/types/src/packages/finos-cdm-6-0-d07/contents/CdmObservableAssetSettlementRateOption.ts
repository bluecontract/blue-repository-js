export const CdmObservableAssetSettlementRateOption: Record<string, unknown> = {
  description:
    'Defines the settlement rate option to use for fixing in case of cash settlement. Currently only applicable to foreign exchange fixing in case of cross-currency settlement.\n',
  name: 'cdm/observable/asset/SettlementRateOption',
  priceSourceDisruption: {
    description:
      'An attribute defining the parameters to get a new quote when a settlement rate option is disrupted.',
    type: {
      blueId: 'Ejzy8x4kUUXVeFecVHZeysJJ1Ee9MSw5S7sEmoUEycjd',
    },
  },
  settlementRateOption: {
    description:
      'The rate source for the conversion to the settlement currency. This source is specified through a scheme that reflects the terms of the Annex A to the 1998 FX and Currency Option Definitions.\n',
    schema: {
      required: true,
    },
    type: {
      blueId: '5zMhYAXcxtwbFXQeEYr3vWu78daHfMbFUrFgair7M7sf',
    },
  },
};
