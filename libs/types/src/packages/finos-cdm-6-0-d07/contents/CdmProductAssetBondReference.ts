export const CdmProductAssetBondReference: Record<string, unknown> = {
  bond: {
    description: 'Reference to a bond underlier.',
    schema: {
      required: true,
    },
    type: {
      blueId: '5R9o4hMGFG6JsprSkPFoQuMmr2FvfKQchfGbxtSgy2JY',
    },
  },
  conditionPrecedentBond: {
    description:
      'To indicate whether the Condition Precedent Bond is applicable. The swap contract is only valid if the bond is issued and if there is any dispute over the terms of fixed stream then the bond terms would be used.\n',
    schema: {
      required: true,
    },
    type: {
      blueId: 'AwvXD961fmnmqcSQhjMA7r15HpVh39cefb6ZTyUz2Fm2',
    },
  },
  couponRate: {
    description:
      'Specifies the coupon rate (expressed in percentage) of a fixed income security or convertible bond.',
    type: {
      blueId: '9svusKr6LvCBhk7gV6JsbPAwwXWASiSTahN4JPrDC5rH',
    },
  },
  description:
    'Reference to a bond underlier to represent an asset swap or Condition Precedent Bond.',
  discrepancyClause: {
    description: 'To indicate whether the Discrepancy Clause is applicable.',
    type: {
      blueId: 'AwvXD961fmnmqcSQhjMA7r15HpVh39cefb6ZTyUz2Fm2',
    },
  },
  name: 'cdm/product/asset/BondReference',
};
