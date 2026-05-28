export const CdmProductCollateralSubstitutionProvisions = {
  description:
    'Defines collateral substitution provisions such as how many and with how much notice are substitutions allowed.\n',
  name: 'cdm/product/collateral/SubstitutionProvisions',
  noticeDeadlineDateTime: {
    description: 'A specific date and time for the notice deadline',
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
  noticeDeadlinePeriod: {
    description: 'Defines the min period for notify of a substitution.',
    type: {
      blueId: '5rdYwkwGdndCoYmQi9MNzw9SKQZsr68igDgyYFgvNzmh',
    },
  },
  numberOfSubstitutionsAllowed: {
    description: 'Specifies if 1 or more substitutions are allowed.',
    type: {
      blueId: '5WNMiV9Knz63B4dVY5JtMyh3FB4FSGqv7ceScvuapdE1',
    },
  },
} as const;
