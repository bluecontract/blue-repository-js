export const CdmObservableAssetBasketConstituent = {
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
      blueId: 'this#2',
    },
  },
  description: 'Identifies the constituents of the basket',
  finalValuationPrice: {
    description:
      'Specifies a final price schedule to be associated to an individual underlier that is a basket constituent. The multiple cardinality is aligned to the one of the PriceQuantity->price that this price is referencing.\n',
    itemType: {
      blueId: 'BwqVRaSdNEfKjjtV8yGLCFuEEKSyzFJGiBUyEEVkD25',
    },
    schema: {
      minItems: {
        type: {
          blueId: '5WNMiV9Knz63B4dVY5JtMyh3FB4FSGqv7ceScvuapdE1',
        },
        value: 0,
      },
    },
    type: {
      blueId: '6aehfNAxHLC1PHHoDr3tYtFH3RWNbiWdFancJ1bypXEY',
    },
  },
  Index: {
    description:
      'The object to be observed is an Index, ie an observable computed on the prices, rates or valuations of a number of assets.\n',
    type: {
      blueId: '9uQM3zoMTMLZFipKa1PU3Z1YndVH7avxgSGLXms3GVF3',
    },
  },
  initialValuationPrice: {
    description:
      'Specifies an initial price schedule to be associated to an individual underlier that is a basket constituent. The multiple cardinality is aligned to the one of the PriceQuantity->price that this price is referencing.\n',
    itemType: {
      blueId: 'BwqVRaSdNEfKjjtV8yGLCFuEEKSyzFJGiBUyEEVkD25',
    },
    schema: {
      minItems: {
        type: {
          blueId: '5WNMiV9Knz63B4dVY5JtMyh3FB4FSGqv7ceScvuapdE1',
        },
        value: 0,
      },
    },
    type: {
      blueId: '6aehfNAxHLC1PHHoDr3tYtFH3RWNbiWdFancJ1bypXEY',
    },
  },
  interimValuationPrice: {
    description:
      'Specifies an interim price schedule to be associated to an individual underlier that is a basket constituent. The multiple cardinality is aligned to the one of the PriceQuantity->price that this price is referencing.\n',
    itemType: {
      blueId: 'BwqVRaSdNEfKjjtV8yGLCFuEEKSyzFJGiBUyEEVkD25',
    },
    schema: {
      minItems: {
        type: {
          blueId: '5WNMiV9Knz63B4dVY5JtMyh3FB4FSGqv7ceScvuapdE1',
        },
        value: 0,
      },
    },
    type: {
      blueId: '6aehfNAxHLC1PHHoDr3tYtFH3RWNbiWdFancJ1bypXEY',
    },
  },
  name: 'cdm/observable/asset/BasketConstituent',
  quantity: {
    description:
      'Specifies a quantity schedule to be associated to an individual underlier that is a basket constituent. The multiple cardinality is aligned to the one of the PriceQuantity->quantity that this quantity is referencing.\n',
    itemType: {
      blueId: 'aox7Y6mfMBx71DQngCd45QQNaCFw5yiNGb7U3XJD7r2',
    },
    schema: {
      minItems: {
        type: {
          blueId: '5WNMiV9Knz63B4dVY5JtMyh3FB4FSGqv7ceScvuapdE1',
        },
        value: 0,
      },
    },
    type: {
      blueId: '6aehfNAxHLC1PHHoDr3tYtFH3RWNbiWdFancJ1bypXEY',
    },
  },
} as const;
