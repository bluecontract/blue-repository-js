export const CdmObservableAssetCashCollateralValuationMethod: Record<
  string,
  unknown
> = {
  agreedDiscountRate: {
    description:
      'This may be used to indicate the discount rate to be used for cash collateral for cash settlement purposes.',
    type: {
      blueId: 'HvrBWWRL9WzJPU9bs48T3Uf9CcUgCfqtEszZPN3tYS3n',
    },
  },
  applicableCsa: {
    description:
      'This may be used to specify what type of CSA (credit support annex/agreement) is to be used for cash settlement purposes.\n',
    type: {
      blueId: '6faGvMJmNJkEEBfWDqeXBsiAuAGT9TXjqMU7NnT55GD8',
    },
  },
  cashCollateralCurrency: {
    description:
      'This may be used to indicate the currency of cash collateral for cash settlement purposes.',
    type: {
      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
    },
  },
  cashCollateralInterestRate: {
    description:
      'This may be used to indicate the interest rate to be used for cash collateral for cash settlement purposes.',
    type: {
      blueId: 'HvrBWWRL9WzJPU9bs48T3Uf9CcUgCfqtEszZPN3tYS3n',
    },
  },
  description:
    'This type is a generic structure that can represent the parameters of several mid-market valuation and replacement value methods described in the 2021 ISDA Definitions.\n',
  name: 'cdm/observable/asset/CashCollateralValuationMethod',
  prescribedDocumentationAdjustment: {
    description:
      "This may be used to indicate that 'prescribed documentation adjustment' is applicable.",
    type: {
      blueId: 'AwvXD961fmnmqcSQhjMA7r15HpVh39cefb6ZTyUz2Fm2',
    },
  },
  protectedParty: {
    description:
      'This may be used to specify which party is protected (e.g. under Replacement Value cash settlement methods).',
    itemType: {
      blueId: 'EvKQ9LCRpPx5iXbQcQZv7T7vLFUBLS7RB9geFcYuGEw6',
    },
    schema: {
      maxItems: 2,
      minItems: 0,
    },
    type: {
      blueId: '8DSFoWG9MqRSUhStqoPLrwVQiYByRh18NWbDEarN8MKF',
    },
  },
};
