export const CdmProductCollateralCollateralCriteria = {
  AllCriteria: {
    description:
      'Enables two or more Collateral Criteria to be combined using AND logic.',
    type: {
      blueId: 'this#2',
    },
  },
  AnyCriteria: {
    description:
      'Enables two or more Collateral Criteria to be combined using OR logic.',
    type: {
      blueId: 'this#3',
    },
  },
  AssetAgencyRating: {
    description: 'Criteria is the agency rating(s) of the collateral asset.',
    type: {
      blueId: '3Z7Qd4nvD5kznK6ReEW6jkdThhTmUXZjY8dXKEUBgqXx',
    },
  },
  AssetCountryOfOrigin: {
    description: 'Criteria is the collateral asset country of origin.',
    type: {
      blueId: 'Fdf7nwnsHtnk24Wpyw2jqDFq5rEd7WLR39X6EQnoWsmU',
    },
  },
  AssetMaturity: {
    description:
      'Criteria is the maturity characteristics of the collateral asset.',
    type: {
      blueId: '7xRHcjREGdk4hE9MrxxaotTFeaL3wGTBBs3Ez8K8o259',
    },
  },
  AssetType: {
    description: 'Criteria is the asset type of the collateral.',
    type: {
      blueId: 'DBnAMusnqCBb9qkA5usvmPTb27HNy5VzKi8JoTrgPoRV',
    },
  },
  CollateralIssuerType: {
    description: 'Criteria is the type of entity issuing the asset.',
    type: {
      blueId: 'DiuzkpaQqLNDsehNb5xLTrFkVqpEqS9ZGtqTJ2fBzhvm',
    },
  },
  CollateralTaxonomy: {
    description: 'Criteria is the taxonomy characteristics of an collateral.',
    type: {
      blueId: 'H4qZFJo3XTXtRYCdhTukmA5mA72cU1icWF7LyydKrfPT',
    },
  },
  CounterpartyOwnIssuePermitted: {
    description: 'Criteria includes collateral issued by the counterparty.',
    type: {
      blueId: 'EUQ9MJibMGwCC7weff1GEUA2cy4bvdFoqaAJx4ySahKL',
    },
  },
  CurrencyCodeEnum: {
    description: 'Criteria is the denominated currency of the collateral.',
    type: {
      blueId: '8BnAu36c4Gt6aVwBhawFckQGNkLaZsPodbBkQd7GpV8V',
    },
  },
  description:
    'The possible different terms that can be combined, using AND, OR and NOT logic, to define the issuers and/or assets that meet a given criteria for collateral.\n',
  DomesticCurrencyIssued: {
    description:
      'Criteria is that collateral must be denominated in the domestic currency of the issuer.',
    type: {
      blueId: 'H32BQcu8EWs2WztGEuCPiGD6VGEtRwNB7CPsoE8MX25p',
    },
  },
  Index: {
    description:
      'Criteria is that the collateral is a constituent of a specific index.',
    type: {
      blueId: '9uQM3zoMTMLZFipKa1PU3Z1YndVH7avxgSGLXms3GVF3',
    },
  },
  IssuerAgencyRating: {
    description: 'Criteria is the agency rating(s) of the issuer.',
    type: {
      blueId: 'HKeLnZoECFzBPxtPse5jEjzWuTQvvvURtKimZSBSdAzL',
    },
  },
  IssuerCountryOfOrigin: {
    description: 'Criteria is the issuing entity country of origin.',
    type: {
      blueId: '5vbt3yqCDAPHfDtrqySHEMgZbgECnD13NMCkT8ndvRME',
    },
  },
  IssuerName: {
    description: 'Criteria is a specific named issuer entity.',
    type: {
      blueId: 'B7KUAgvBkpwEWEYnisJG6iRRicpw2LC4MuxeYzxhMh9y',
    },
  },
  ListingExchange: {
    description:
      'Criteria is that the collateral is listed on a specific exchange.',
    type: {
      blueId: 'DBagP8NcuSpNGeJTMciJspmiVKhEvpxenhq1VwyxA9yu',
    },
  },
  ListingSector: {
    description: 'Criteria is the industry sector of the collateral asset.',
    type: {
      blueId: '7AfyjzzZ8Y9CSKTQ3jRNBeoosewUEsqKoK4tfANwmDuR',
    },
  },
  name: 'cdm/product/collateral/CollateralCriteria',
  NegativeCriteria: {
    description:
      'Enables a single Collateral Criteria to be excluded using NOT logic.',
    type: {
      blueId: 'this#1',
    },
  },
  SovereignAgencyRating: {
    description:
      'Criteria is the agency rating(s) of the country of the issuer.',
    type: {
      blueId: 'E3BwAcnw9Vo2sDe14rdt76sD8KTECTPFQHhFqUu5Weoe',
    },
  },
  SpecificAsset: {
    description: 'Criteria is a specifically identified asset',
    type: {
      blueId: 'EjBk15nz62KvMKiydMXvoDBt48tV6rBpEhuKBW5QABxM',
    },
  },
} as const;
