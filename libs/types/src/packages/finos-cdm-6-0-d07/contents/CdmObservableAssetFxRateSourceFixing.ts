export const CdmObservableAssetFxRateSourceFixing: Record<string, unknown> = {
  description:
    'Describes a rate source to be fixed and the date the fixing occurs',
  fixingDate: {
    description: 'The date on which the fixing is scheduled to occur.',
    schema: {
      required: true,
    },
    type: {
      blueId: 'GKy9ctegTJLwNAwxTMo1WX9xQCvWbzwntin4VStfEfDi',
    },
  },
  name: 'cdm/observable/asset/FxRateSourceFixing',
  settlementRateSource: {
    schema: {
      required: true,
    },
    type: {
      blueId: 'GVLFiYcKvhpQsRySPjAnN9GhoocdasLdpFcxrHBBs3SB',
    },
  },
};
