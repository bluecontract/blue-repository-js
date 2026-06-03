export const CdmObservableAssetObservable: Record<string, unknown> = {
  Asset: {
    description:
      'The object to be observed is an Asset, ie something that can be owned and transferred in the financial markets.\n',
    type: {
      blueId: '5UGws2rghMXJPsBC2YMTqJQgztQ8nTZm1XTaGkvxheXo',
    },
  },
  Basket: {
    description:
      'The object to be observed is a Basket, ie a collection of Observables with an identifier and optional weightings.\n',
    type: {
      blueId: '6PMgqftTq3a4SNfZQb4xXg2MUd6m8xZRWGy9aGWS9W8C#0',
    },
  },
  description:
    'Specifies the object to be observed for a price, it could be an asset or a reference.',
  Index: {
    description:
      'The object to be observed is an Index, ie an observable computed on the prices, rates or valuations of a number of assets.\n',
    type: {
      blueId: 'FtoRYZujAAg27pRyk4p13wRUXC9JWtWMkcjiAZULxMWP',
    },
  },
  name: 'cdm/observable/asset/Observable',
};
