export const CdmEventCommonCollateralPortfolio = {
  collateralBalance: {
    description:
      'Represents the populated or calculated collateral aggregate balance amount for the collateral portfolio.',
    itemType: {
      blueId: '9XXCYnAKStGGQJv82Q3iAt6L217E7QCFrotX9UUHC84P',
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
  collateralPosition: {
    description:
      'Specifies the individual components of the collateral positions in the collateral portfolio.',
    itemType: {
      blueId: 'RkQ9hssWBiUyn4LiaktzsRVjx76PDv5qNq4T8YionjL',
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
  description:
    'Represents common attributes to define the details of collateral assets, to be used in margin call messaging and contribute to collateral balances e.g securities in a collateral account.\n',
  legalAgreement: {
    description:
      'The specification of a legal agreement between two parties governing the collateral relationship such as Credit Support Agreement or Collateral Transfer Agreement etc. (NB: this can be provided by reference to a global key for each LegalAgreement object).\n',
    type: {
      blueId: '9Sgsf7rKtkk3txxbTriyWaPPryyctCqx4hxMCFPS8AyU',
    },
  },
  name: 'cdm/event/common/CollateralPortfolio',
  portfolioIdentifier: {
    description:
      'Specifies a unique identifier for a set of collateral positions in a portfolio.',
    type: {
      blueId: '8eDineGwQr2VXBeVEPbnJZvEcNhDbLu8HtmubDT6RBoZ',
    },
  },
} as const;
