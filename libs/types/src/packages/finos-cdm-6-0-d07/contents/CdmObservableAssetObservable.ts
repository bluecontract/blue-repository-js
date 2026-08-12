export const CdmObservableAssetObservable: Record<string, unknown> = {
  Asset: {
    description:
      'The object to be observed is an Asset, ie something that can be owned and transferred in the financial markets.\n',
    type: {
      blueId: '8CTGmD55ifZ1AAAr4uYZHw9mUCiZ7foMLqYSEUbPVz3Q',
    },
  },
  Basket: {
    description:
      'The object to be observed is a Basket, ie a collection of Observables with an identifier and optional weightings.\n',
    type: {
      blueId: 'AzDkNPadueibCcw5Phd6BZ2rj8Zv78FyDnc4cAipUtUD#2',
    },
  },
  description:
    'Specifies the object to be observed for a price, it could be an asset or a reference.',
  Index: {
    description:
      'The object to be observed is an Index, ie an observable computed on the prices, rates or valuations of a number of assets.\n',
    type: {
      blueId: 'HPKV3jzahCUNNYc5hsHbEPeFhACtdGyBCmSNpJM4ioGi',
    },
  },
  name: 'cdm/observable/asset/Observable',
};
