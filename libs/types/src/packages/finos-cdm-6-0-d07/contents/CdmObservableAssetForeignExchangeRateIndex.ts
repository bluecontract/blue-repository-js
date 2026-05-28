export const CdmObservableAssetForeignExchangeRateIndex = {
  assetClass: {
    description: 'The Asset Class of the Index.',
    type: {
      blueId: '4gwWtTHkdAAdqikxU182Yp5LKQnusRffi5xWuWCEKVxK',
    },
  },
  description:
    'Specification of a rate based on the exchange of a pair of cash assets in specific currencies, e.g. USD versus GBP.\n',
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
  name: 'cdm/observable/asset/ForeignExchangeRateIndex',
  primaryFxSpotRateSource: {
    description:
      'Specifies the primary source from which a rate should be observed.',
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
  provider: {
    description: 'The organisation that creates or maintains the Index.',
    type: {
      blueId: '6NmyTe5CqfuusJQg46VWDV5a5FXqiZnkQmXduwAjC73o',
    },
  },
  quotedCurrencyPair: {
    description:
      'Describes the composition of a rate that has been quoted or is to be quoted.',
    schema: {
      required: {
        type: {
          blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
        },
        value: true,
      },
    },
    type: {
      blueId: '2FZHZ5RzsW7awysoaorCfmAnZGtxLTf6BLoT23v3CUbx',
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
  secondaryFxSpotRateSource: {
    description:
      'Specifies an alternative, or secondary, source from which a rate should be observed.',
    type: {
      blueId: '4ewTgKPXq5xDsrR3GStD5tHN6FnPdeZXUQ5JDo5tkqZc',
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
