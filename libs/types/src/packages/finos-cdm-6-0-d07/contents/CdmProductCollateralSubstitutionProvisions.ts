export const CdmProductCollateralSubstitutionProvisions: Record<
  string,
  unknown
> = {
  description:
    'Defines collateral substitution provisions such as how many and with how much notice are substitutions allowed.\n',
  name: 'cdm/product/collateral/SubstitutionProvisions',
  noticeDeadlineDateTime: {
    description: 'A specific date and time for the notice deadline',
    type: {
      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
    },
  },
  noticeDeadlinePeriod: {
    description: 'Defines the min period for notify of a substitution.',
    type: {
      blueId: 'G5BwzTWEaA14NoPKn8iSwCnmwnWuQegPHZwrpgagS6kY',
    },
  },
  numberOfSubstitutionsAllowed: {
    description: 'Specifies if 1 or more substitutions are allowed.',
    type: {
      blueId: 'E2LM6qgzWG9ttagq2xTmiZkgYEAgkYedFCmU9v7NnVEq',
    },
  },
};
