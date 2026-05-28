export const CdmBaseMathRounding = {
  description:
    'Defines rounding rules and precision to be used in the rounding of a number.',
  name: 'cdm/base/math/Rounding',
  precision: {
    description:
      'Specifies the rounding precision in terms of a number of decimal places when the number is evaluated in decimal form (not percentage), e.g. 0.09876543 rounded to the nearest 5 decimal places is  0.0987654.\n',
    type: {
      blueId: '5WNMiV9Knz63B4dVY5JtMyh3FB4FSGqv7ceScvuapdE1',
    },
  },
  roundingDirection: {
    description:
      'Specifies the rounding rounding rule as up, down, or nearest.',
    schema: {
      required: {
        type: {
          blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
        },
        value: true,
      },
    },
    type: {
      blueId: 'GiWBNc37iwwMQdVLNNuNgT9Sz81v1zvwUB1G98aPvqa4',
    },
  },
} as const;
