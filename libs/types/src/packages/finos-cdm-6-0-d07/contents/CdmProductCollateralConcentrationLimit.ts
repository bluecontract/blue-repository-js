export const CdmProductCollateralConcentrationLimit: Record<string, unknown> = {
  concentrationLimitCriteria: {
    description:
      'Specifies a set of criteria to describe the assets that the concentration limits apply to.',
    type: {
      blueId: '7YP39rZ8BWEkzLnifnowdqDWusgdTtoaAQADyndrMtvU',
    },
  },
  description:
    'Represents a class to describe concentration limits that may be applicable to eligible collateral criteria.',
  name: 'cdm/product/collateral/ConcentrationLimit',
  percentageLimit: {
    description:
      'Specifies the perecentage of collateral limit represented as a decimal number - example 25% is 0.25.',
    type: {
      blueId: '6YPBFzb6J5zZWUx1H7SSeJNLQWwAzYsVjRxgdkFZMVrn',
    },
  },
  valueLimit: {
    description:
      'Specifies the value of collateral limit represented as a range.',
    type: {
      blueId: '4NGaBXKBS6QDTeN9ZdQEgWHvYg1Kd3Dqr86Xs9BpVh7A',
    },
  },
};
