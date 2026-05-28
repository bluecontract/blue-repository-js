export const CdmProductCollateralConcentrationLimit = {
  concentrationLimitCriteria: {
    description:
      'Specifies a set of criteria to describe the assets that the concentration limits apply to.',
    type: {
      blueId: 'Ag7HvtBnwEeKkpZQ17isCMUnXuFik93kdftfxJN8ih6h',
    },
  },
  description:
    'Represents a class to describe concentration limits that may be applicable to eligible collateral criteria.',
  name: 'cdm/product/collateral/ConcentrationLimit',
  percentageLimit: {
    description:
      'Specifies the perecentage of collateral limit represented as a decimal number - example 25% is 0.25.',
    type: {
      blueId: 'HeV5hUrnbKo6ccs1jqoxC5k85Qng7uvpVxMGApHXK7nN',
    },
  },
  valueLimit: {
    description:
      'Specifies the value of collateral limit represented as a range.',
    type: {
      blueId: 'DKKgVj4h6rghgaMZrdFzPJpGQfNdR8YrcHenPgFkvjQ1',
    },
  },
} as const;
