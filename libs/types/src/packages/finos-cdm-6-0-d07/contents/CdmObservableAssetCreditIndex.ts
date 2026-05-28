export const CdmObservableAssetCreditIndex = {
  assetClass: {
    description: 'The Asset Class of the Index.',
    type: {
      blueId: '4gwWtTHkdAAdqikxU182Yp5LKQnusRffi5xWuWCEKVxK',
    },
  },
  description:
    'Specification of an index based on credit risk, typically composed using corporate debt instruments in a region or industry sector, e.g. the iTraxx indices.\n',
  exchange: {
    description:
      'If the Asset is listed, defines the public exchange of the listing.',
    type: {
      blueId: '6NmyTe5CqfuusJQg46VWDV5a5FXqiZnkQmXduwAjC73o',
    },
  },
  excludedReferenceEntity: {
    description: 'Excluded reference entity.',
    itemType: {
      blueId: 'HDWPv3g9U1KUdNNbF554aWveShvcV6UnPnH8HQGqtppM',
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
  indexAnnexDate: {
    description: 'A CDS index series annex date.',
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
  indexAnnexSource: {
    description: 'A CDS index series annex source.',
    type: {
      blueId: 'GknZ9cDpboEQXHMijEuoMgXTb2P8Gyu81nfwr5bBAP8B',
    },
  },
  indexAnnexVersion: {
    description: 'A CDS index series version identifier, e.g. 1, 2, 3 etc.',
    type: {
      blueId: '5WNMiV9Knz63B4dVY5JtMyh3FB4FSGqv7ceScvuapdE1',
    },
  },
  indexFactor: {
    description:
      'Index Factor is the index version factor or percent, expressed as an absolute decimal value between 0 and 1, that multiplied by the original notional amount yields the notional amount covered by the seller of protection.\n',
    type: {
      blueId: '7pwXmXYCJtWnd348c2JQGBkm9C4renmZRwxbfaypsx5y',
    },
  },
  indexSeries: {
    description: 'A CDS index series identifier, e.g. 1, 2, 3 etc.',
    type: {
      blueId: '5WNMiV9Knz63B4dVY5JtMyh3FB4FSGqv7ceScvuapdE1',
    },
  },
  isExchangeListed: {
    description: 'Defines whether the Asset is listed on a public exchange.',
    type: {
      blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
    },
  },
  name: 'cdm/observable/asset/CreditIndex',
  provider: {
    description: 'The organisation that creates or maintains the Index.',
    type: {
      blueId: '6NmyTe5CqfuusJQg46VWDV5a5FXqiZnkQmXduwAjC73o',
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
  seniority: {
    description: 'Seniority of debt instruments comprising the index.',
    type: {
      blueId: '9uDWp1q9YxCE1cTdRRJoNvBwAY8sF71RbqWxaA3Xiwh',
    },
  },
  settledEntityMatrix: {
    description:
      'Used to specify the Relevant Settled Entity Matrix when there are settled entities at the time of the trade.',
    type: {
      blueId: 'G6d8KNyxd48FEiAucE5KdoV7bwfdvPoygUV2xZVmPHeZ',
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
  tranche: {
    description: 'This element contains CDS tranche terms.',
    type: {
      blueId: 'AzjDeg6NcvxKrLxiwH4AdjVNhMtWHj2BHfTGYmY7NVrP',
    },
  },
} as const;
