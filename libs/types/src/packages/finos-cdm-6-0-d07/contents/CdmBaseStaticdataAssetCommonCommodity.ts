export const CdmBaseStaticdataAssetCommonCommodity = {
  commodityProductDefinition: {
    description:
      'Specifies the commodity underlier in the event that no ISDA Commodity Reference Benchmark exists.',
    type: {
      blueId: 'Gos89VTGy6DvLCuG5yT2kFBYMxBpaCGwUTNsNWRo54yH',
    },
  },
  deliveryDateReference: {
    description:
      'Specifies the parameters for identifying the relevant contract date when the commodity reference price is a futures contract.\n',
    type: {
      blueId: '3DArzNi9wjXXGVfHSEMaFHEhe4PbD2PeV6vtuVM4PpMm',
    },
  },
  description:
    'Identifies a specific commodity by referencing a product identifier or by a product definition.',
  exchange: {
    description:
      'If the Asset is listed, defines the public exchange of the listing.',
    type: {
      blueId: '6NmyTe5CqfuusJQg46VWDV5a5FXqiZnkQmXduwAjC73o',
    },
  },
  identifier: {
    description:
      'Asset Identifiers are used to uniquely identify an Asset, using a specified Asset Identifier Type.',
    itemType: {
      blueId: 'EFYo6JAQMRJEAg6yzzafESRVFXGTiNSjmy9ehctCH3Y4',
    },
    schema: {
      minItems: {
        type: {
          blueId: '5WNMiV9Knz63B4dVY5JtMyh3FB4FSGqv7ceScvuapdE1',
        },
        value: 1,
      },
    },
    type: {
      blueId: '6aehfNAxHLC1PHHoDr3tYtFH3RWNbiWdFancJ1bypXEY',
    },
  },
  isExchangeListed: {
    description: 'Defines whether the Asset is listed on a public exchange.',
    type: {
      blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
    },
  },
  name: 'cdm/base/staticdata/asset/common/Commodity',
  priceQuoteType: {
    description:
      "Describes the required quote type of the underlying price that will be observed. Example values include 'Bid, 'Ask', 'Settlement' (for a futures contract) and 'WeightedAverage' (for some published prices and indices).\n",
    schema: {
      required: {
        type: {
          blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
        },
        value: true,
      },
    },
    type: {
      blueId: '8rvM94HuSxVEjNh7NmWuk8pKTjeiV7uTrwNqUX9zsDaU',
    },
  },
  relatedExchange: {
    description: 'Provides the related Exchanges, if applicable.',
    itemType: {
      blueId: '6NmyTe5CqfuusJQg46VWDV5a5FXqiZnkQmXduwAjC73o',
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
  taxonomy: {
    description:
      'Defines the taxonomy of an object by combining a taxonomy source (i.e. the rules to classify the object) and a value (i.e. the output of those rules on the object.\n',
    itemType: {
      blueId: '9iqdbfahQtNXNenCSE8hAFbq298MVvdACauLx1FZWRQt',
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
