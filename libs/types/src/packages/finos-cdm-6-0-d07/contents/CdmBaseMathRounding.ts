export const CdmBaseMathRounding: Record<string, unknown> = {
  description:
    'Defines rounding rules and precision to be used in the rounding of a number.',
  name: 'cdm/base/math/Rounding',
  precision: {
    description:
      'Specifies the rounding precision in terms of a number of decimal places when the number is evaluated in decimal form (not percentage), e.g. 0.09876543 rounded to the nearest 5 decimal places is  0.0987654.\n',
    type: {
      blueId: 'E2LM6qgzWG9ttagq2xTmiZkgYEAgkYedFCmU9v7NnVEq',
    },
  },
  roundingDirection: {
    description:
      'Specifies the rounding rounding rule as up, down, or nearest.',
    schema: {
      required: true,
    },
    type: {
      blueId: 'H4FAiqzdtZUhJfTdaLDLQxZR4hvCAduUrJec1nziCJCX',
    },
  },
};
