export const CdmProductCollateralConcentrationLimit: Record<string, unknown> = {
  concentrationLimitCriteria: {
    description:
      'Specifies a set of criteria to describe the assets that the concentration limits apply to.',
    type: {
      blueId: '39Lcut1tfx7H123gK9RhKe6u8q4N86cmBQMRivmHTo5y',
    },
  },
  description:
    'Represents a class to describe concentration limits that may be applicable to eligible collateral criteria.',
  name: 'cdm/product/collateral/ConcentrationLimit',
  percentageLimit: {
    description:
      'Specifies the perecentage of collateral limit represented as a decimal number - example 25% is 0.25.',
    type: {
      blueId: '9tDrYvj29RS5Aj9BBJaXuZoNwTtiuZ5wRRCX8QwC3Q3i',
    },
  },
  valueLimit: {
    description:
      'Specifies the value of collateral limit represented as a range.',
    type: {
      blueId: '6WetAg7Ko4txMKh764i61AvQ2oLaKaE6jziPc41xnwk',
    },
  },
};
