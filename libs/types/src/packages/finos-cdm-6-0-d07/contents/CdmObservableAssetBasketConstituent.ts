export const CdmObservableAssetBasketConstituent: Record<string, unknown> = {
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
      blueId: 'this#0',
    },
  },
  description: 'Identifies the constituents of the basket',
  finalValuationPrice: {
    description:
      'Specifies a final price schedule to be associated to an individual underlier that is a basket constituent. The multiple cardinality is aligned to the one of the PriceQuantity->price that this price is referencing.\n',
    itemType: {
      blueId: '2Uog2mdWokkHVaMVWG2ZhXCKPdQtauRk7oxemYRLn9hy',
    },
    schema: {
      minItems: 0,
    },
    type: {
      blueId: '8DSFoWG9MqRSUhStqoPLrwVQiYByRh18NWbDEarN8MKF',
    },
  },
  Index: {
    description:
      'The object to be observed is an Index, ie an observable computed on the prices, rates or valuations of a number of assets.\n',
    type: {
      blueId: 'FtoRYZujAAg27pRyk4p13wRUXC9JWtWMkcjiAZULxMWP',
    },
  },
  initialValuationPrice: {
    description:
      'Specifies an initial price schedule to be associated to an individual underlier that is a basket constituent. The multiple cardinality is aligned to the one of the PriceQuantity->price that this price is referencing.\n',
    itemType: {
      blueId: '2Uog2mdWokkHVaMVWG2ZhXCKPdQtauRk7oxemYRLn9hy',
    },
    schema: {
      minItems: 0,
    },
    type: {
      blueId: '8DSFoWG9MqRSUhStqoPLrwVQiYByRh18NWbDEarN8MKF',
    },
  },
  interimValuationPrice: {
    description:
      'Specifies an interim price schedule to be associated to an individual underlier that is a basket constituent. The multiple cardinality is aligned to the one of the PriceQuantity->price that this price is referencing.\n',
    itemType: {
      blueId: '2Uog2mdWokkHVaMVWG2ZhXCKPdQtauRk7oxemYRLn9hy',
    },
    schema: {
      minItems: 0,
    },
    type: {
      blueId: '8DSFoWG9MqRSUhStqoPLrwVQiYByRh18NWbDEarN8MKF',
    },
  },
  name: 'cdm/observable/asset/BasketConstituent',
  quantity: {
    description:
      'Specifies a quantity schedule to be associated to an individual underlier that is a basket constituent. The multiple cardinality is aligned to the one of the PriceQuantity->quantity that this quantity is referencing.\n',
    itemType: {
      blueId: '3QpANvMr6891ZuV6c8Yze7qcCyqbKRhy9zqwHuMkw8FP',
    },
    schema: {
      minItems: 0,
    },
    type: {
      blueId: '8DSFoWG9MqRSUhStqoPLrwVQiYByRh18NWbDEarN8MKF',
    },
  },
};
