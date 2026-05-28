export const CdmObservableAssetObservable = {
  Asset: {
    description:
      'The object to be observed is an Asset, ie something that can be owned and transferred in the financial markets.\n',
    type: {
      blueId: 'B3bsNNAr8QJpJA8r84kgZrHLE5PZREBGxXWYJdtaDRJ7',
    },
  },
  Basket: {
    description:
      'The object to be observed is a Basket, ie a collection of Observables with an identifier and optional weightings.\n',
    type: {
      blueId: 'AkAb6u8YnWb99n5t6qK9FdajYM7ggv4DnbqMgxevFWm8#2',
    },
  },
  description:
    'Specifies the object to be observed for a price, it could be an asset or a reference.',
  Index: {
    description:
      'The object to be observed is an Index, ie an observable computed on the prices, rates or valuations of a number of assets.\n',
    type: {
      blueId: '9uQM3zoMTMLZFipKa1PU3Z1YndVH7avxgSGLXms3GVF3',
    },
  },
  name: 'cdm/observable/asset/Observable',
} as const;
