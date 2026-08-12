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
      blueId: 'DBw7um9gNRcqAbnknhfeiUnCkzs6Q2yp3aFtBkKuZ8S5',
    },
  },
  secondarySource: {
    description:
      'An alternative, or secondary, source for where the rate observation will occur. Will typically be either a page or a reference bank published rate.\n',
    type: {
      blueId: 'DBw7um9gNRcqAbnknhfeiUnCkzs6Q2yp3aFtBkKuZ8S5',
    },
  },
};
