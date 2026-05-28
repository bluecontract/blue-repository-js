export const CdmObservableAssetFxSpotRateSource = {
  description:
    'A class defining the rate source and fixing time for an FX rate.',
  name: 'cdm/observable/asset/FxSpotRateSource',
  primarySource: {
    description:
      'The primary source for where the rate observation will occur. Will typically be either a page or a reference bank published rate.\n',
    schema: {
      required: {
        type: {
          blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
        },
        value: true,
      },
    },
    type: {
      blueId: '4ewTgKPXq5xDsrR3GStD5tHN6FnPdeZXUQ5JDo5tkqZc',
    },
  },
  secondarySource: {
    description:
      'An alternative, or secondary, source for where the rate observation will occur. Will typically be either a page or a reference bank published rate.\n',
    type: {
      blueId: '4ewTgKPXq5xDsrR3GStD5tHN6FnPdeZXUQ5JDo5tkqZc',
    },
  },
} as const;
