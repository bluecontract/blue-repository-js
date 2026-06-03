export const CdmProductCollateralCollateralInterestParameters: Record<
  string,
  unknown
> = {
  currency: {
    description:
      'Specifies the currency for which the parameters are captured.',
    type: {
      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
    },
  },
  description:
    'Represents the floating interest calculation and distribution parameters for a single currency.',
  interestCalculationFrequency: {
    description: 'Represents how often and when interest is calculated.',
    type: {
      blueId: 'DgNkH6r165bjLKnYWiVE6o2FPj5mEztGpd21mfsiyDXA',
    },
  },
  interestCalculationParameters: {
    description: 'Represents the basic interest calculation parameters.',
    type: {
      blueId: 'ATaY9YDiFkKfTkbxTfZ7LyFzaz3P294UgpPFzLNMMNhE',
    },
  },
  interestHandlingParameters: {
    description:
      'Represents the parameters describing how and when interest transfer occurs.',
    type: {
      blueId: 'EcvzpLymGTG2HkooovYn4sPFjmSFWGF1uM1CeM6FfNgz',
    },
  },
  marginType: {
    description:
      'Specifies the type of margin for which interest is being calculated, if the parameters are different depending on type of margin (initial or variation).\n',
    type: {
      blueId: '9z1L9Ava1wYq6jxK5Q25w3DTwEhKhZHbY9XE9NZCutvJ',
    },
  },
  name: 'cdm/product/collateral/CollateralInterestParameters',
  postingParty: {
    description:
      'Represents the party to which these parameters apply (the applicable party).  In other words, if the parameters are different depending on which party is posting/holding the collateral, for which party to the Collateral Agreement (Party 1 or Party 2) that is posting the collateral do these parameters apply?\n',
    type: {
      blueId: '6RRexSdxduLUUJjoAGhNuhXszw24mwyTFrHtwAqU2SDG',
    },
  },
};
