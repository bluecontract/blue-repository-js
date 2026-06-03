export const CdmObservableAssetFxSpotRateSource: Record<string, unknown> = {
  description:
    'A class defining the rate source and fixing time for an FX rate.',
  name: 'cdm/observable/asset/FxSpotRateSource',
  primarySource: {
    description:
      'The primary source for where the rate observation will occur. Will typically be either a page or a reference bank published rate.\n',
    schema: {
      required: true,
    },
    type: {
      blueId: '5x9dr8ixBaX8QXWdiNGeuyFn1GS9wN5xkpfrxHhKLC2y',
    },
  },
  secondarySource: {
    description:
      'An alternative, or secondary, source for where the rate observation will occur. Will typically be either a page or a reference bank published rate.\n',
    type: {
      blueId: '5x9dr8ixBaX8QXWdiNGeuyFn1GS9wN5xkpfrxHhKLC2y',
    },
  },
};
