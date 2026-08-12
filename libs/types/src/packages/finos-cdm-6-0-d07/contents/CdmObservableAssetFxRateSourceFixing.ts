export const CdmObservableAssetFxRateSourceFixing: Record<string, unknown> = {
  description:
    'Describes a rate source to be fixed and the date the fixing occurs',
  fixingDate: {
    description: 'The date on which the fixing is scheduled to occur.',
    schema: {
      required: true,
    },
    type: {
      blueId: 'J1kGTdAb67L1bPgvuKZ86jTR9UZJomnkgA6hcnVfnwfD',
    },
  },
  name: 'cdm/observable/asset/FxRateSourceFixing',
  settlementRateSource: {
    schema: {
      required: true,
    },
    type: {
      blueId: 'AFE5zRAhERAL2eMayj5EaEugVUL8M72A5RqLeabreFGf',
    },
  },
};
