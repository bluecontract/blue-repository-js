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
      blueId: '4F94gXYj4FFU12dFg6mKFxiAkiH6xjK8Fidg91K3kXaS',
    },
  },
  interestCalculationParameters: {
    description: 'Represents the basic interest calculation parameters.',
    type: {
      blueId: '47uMoNppS2Hcq6BdaKkWyCoHHwjZx6ZeqqbRY2cgCi4r',
    },
  },
  interestHandlingParameters: {
    description:
      'Represents the parameters describing how and when interest transfer occurs.',
    type: {
      blueId: 'Bjr7Yos67MUWjEZWrkWS2tEvEBnExqpWmM5cjKov61uA',
    },
  },
  marginType: {
    description:
      'Specifies the type of margin for which interest is being calculated, if the parameters are different depending on type of margin (initial or variation).\n',
    type: {
      blueId: 'Ce3ciQcLKDEJNBNLKJ7ZQ1woFjqogy7nsbLP99TxETXf',
    },
  },
  name: 'cdm/product/collateral/CollateralInterestParameters',
  postingParty: {
    description:
      'Represents the party to which these parameters apply (the applicable party).  In other words, if the parameters are different depending on which party is posting/holding the collateral, for which party to the Collateral Agreement (Party 1 or Party 2) that is posting the collateral do these parameters apply?\n',
    type: {
      blueId: '7qRfgFBAefYQ37ztmK2dW9i4twZzBjKcQiHPeHrcRtYw',
    },
  },
};
