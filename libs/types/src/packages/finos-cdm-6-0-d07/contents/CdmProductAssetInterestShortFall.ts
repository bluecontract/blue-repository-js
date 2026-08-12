export const CdmProductAssetInterestShortFall: Record<string, unknown> = {
  compounding: {
    schema: {
      required: true,
    },
    type: {
      blueId: 'AwvXD961fmnmqcSQhjMA7r15HpVh39cefb6ZTyUz2Fm2',
    },
  },
  description:
    'A class to specify the interest shortfall floating rate payment event.',
  interestShortfallCap: {
    description:
      'Specifies the nature of the interest Shortfall cap (i.e. Fixed Cap or Variable Cap) in the case where it is applicable. ISDA 2003 Term: Interest Shortfall Cap.\n',
    schema: {
      required: true,
    },
    type: {
      blueId: '5aFwMNtcxHkvhXwyS7CEusCyu9yHY9hNFVSzLxj2oNEr',
    },
  },
  name: 'cdm/product/asset/InterestShortFall',
  rateSource: {
    description: 'The rate source in the case of a variable cap.',
    type: {
      blueId: '9MWTLbKLsUSiaShABSSuHxaeJZ2aErzYPTqc28XefGr3',
    },
  },
};
