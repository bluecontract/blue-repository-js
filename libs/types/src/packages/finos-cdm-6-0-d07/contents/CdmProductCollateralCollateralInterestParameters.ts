export const CdmProductCollateralCollateralInterestParameters = {
  currency: {
    description:
      'Specifies the currency for which the parameters are captured.',
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
  description:
    'Represents the floating interest calculation and distribution parameters for a single currency.',
  interestCalculationFrequency: {
    description: 'Represents how often and when interest is calculated.',
    type: {
      blueId: 'BTY81xfhqyEEMs1ZiVvEnaRbfLvALxLiEYU9aNdedseZ',
    },
  },
  interestCalculationParameters: {
    description: 'Represents the basic interest calculation parameters.',
    type: {
      blueId: 'GwW6uGFK3Akqa3zGHwGsdS5Ejo1HHYia3YVdNX9wxpAU',
    },
  },
  interestHandlingParameters: {
    description:
      'Represents the parameters describing how and when interest transfer occurs.',
    type: {
      blueId: 'DFfVKuUpQ3nKk6osGBkvUZ2FSvR8myNQj2QHsn5GFzo4',
    },
  },
  marginType: {
    description:
      'Specifies the type of margin for which interest is being calculated, if the parameters are different depending on type of margin (initial or variation).\n',
    type: {
      blueId: 'S4kLcw9up81q3TNVMZRCthznJz71LuEpiPLPWh1MJ87',
    },
  },
  name: 'cdm/product/collateral/CollateralInterestParameters',
  postingParty: {
    description:
      'Represents the party to which these parameters apply (the applicable party).  In other words, if the parameters are different depending on which party is posting/holding the collateral, for which party to the Collateral Agreement (Party 1 or Party 2) that is posting the collateral do these parameters apply?\n',
    type: {
      blueId: '6x12g8enT8MoRfSx5A65GDeBhgNsaewRCdXG5hsioGmL',
    },
  },
} as const;
