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
      blueId: 'GtGzeeGr59oZMBK4qT628HxyPEj3ux2JxtFjbU8GTbuN',
    },
  },
  name: 'cdm/product/asset/InterestShortFall',
  rateSource: {
    description: 'The rate source in the case of a variable cap.',
    type: {
      blueId: '2qVsAJiDNKtcYeoPmttQzFLH44MsczpvMvQ9ZQvwUW6Z',
    },
  },
};
