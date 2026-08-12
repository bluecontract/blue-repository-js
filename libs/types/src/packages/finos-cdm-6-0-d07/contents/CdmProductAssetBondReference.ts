export const CdmProductAssetBondReference: Record<string, unknown> = {
  bond: {
    description: 'Reference to a bond underlier.',
    schema: {
      required: true,
    },
    type: {
      blueId: 'GRccc39hoCxirVd5AgYHyNZT6TtiBJj8USkFUA6nQcfG',
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
      blueId: 'EGYqbJxyubwqpMiSD4GyaqjF8JLLc2R5X7drZoPxyc1k',
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
