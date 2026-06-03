export const CdmEventCommonCollateralPortfolio: Record<string, unknown> = {
  collateralBalance: {
    description:
      'Represents the populated or calculated collateral aggregate balance amount for the collateral portfolio.',
    itemType: {
      blueId: '8nANyRzbRdjuTq7qNZchzDJ4XYqZ8HWYinBX4dWM6NAV',
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
      blueId: '9Pn2rDgMph8R9xESVmd1HEN7zV1kPPCcUAMomnz2RDAT',
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
      blueId: '9tpFoqFu1yX5LZEATGF8CYsE5VSXhkQua9LMXwLEX2Pv',
    },
  },
};
