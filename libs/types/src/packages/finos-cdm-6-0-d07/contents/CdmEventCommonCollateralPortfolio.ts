export const CdmEventCommonCollateralPortfolio: Record<string, unknown> = {
  collateralBalance: {
    description:
      'Represents the populated or calculated collateral aggregate balance amount for the collateral portfolio.',
    itemType: {
      blueId: 'EieQtheGsK5EDQsjN2wqUyWn5LaLYdtjXBotd8LVH7ZT',
    },
    schema: {
      minItems: 0,
    },
    type: {
      blueId: '8DSFoWG9MqRSUhStqoPLrwVQiYByRh18NWbDEarN8MKF',
    },
  },
  collateralPosition: {
    description:
      'Specifies the individual components of the collateral positions in the collateral portfolio.',
    itemType: {
      blueId: 'GtabA8b7typ1gjwtAYshA1eaECFCwLWHkBauTVQ8PMpV',
    },
    schema: {
      minItems: 0,
    },
    type: {
      blueId: '8DSFoWG9MqRSUhStqoPLrwVQiYByRh18NWbDEarN8MKF',
    },
  },
  description:
    'Represents common attributes to define the details of collateral assets, to be used in margin call messaging and contribute to collateral balances e.g securities in a collateral account.\n',
  legalAgreement: {
    description:
      'The specification of a legal agreement between two parties governing the collateral relationship such as Credit Support Agreement or Collateral Transfer Agreement etc. (NB: this can be provided by reference to a global key for each LegalAgreement object).\n',
    type: {
      blueId: '8d7t77eoZznGXdoKdpQK6QFJcZuzZrjj3VtBPGBQ4sUm',
    },
  },
  name: 'cdm/event/common/CollateralPortfolio',
  portfolioIdentifier: {
    description:
      'Specifies a unique identifier for a set of collateral positions in a portfolio.',
    type: {
      blueId: '2uYMDSb9jahYcE91VXzzWYsnUVct3k5thb1czx4jPYF7',
    },
  },
};
