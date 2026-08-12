export const CdmProductAssetVolatilityCapFloor: Record<string, unknown> = {
  applicable: {
    description:
      "Indicates whether the volatility cap is applicable in accordance with the ISDA 2011 Equity Derivatives Definitions. Setting the element 'applicable' to 'False' - means No Volatility Cap and no 'totalVolatilityCap' or 'volatilityCapFactor' should be provided. Setting the element 'applicable' to 'True' - means Volatility Cap election, then 'totalVolatilityCap' or 'volatilityCapFactor' should be provided, otherwise it defaults to volatilityCapFactor=2.5.\n",
    schema: {
      required: true,
    },
    type: {
      blueId: 'AwvXD961fmnmqcSQhjMA7r15HpVh39cefb6ZTyUz2Fm2',
    },
  },
  description:
    'Contains volatility-based barriers. Volatility Cap needs to be specified in accordance with the ISDA 2011 Equity Derivatives Definitions.\n',
  name: 'cdm/product/asset/VolatilityCapFloor',
  totalVolatilityCap: {
    description:
      'Volatility Cap Amount in accordance with the ISDA 2011 Equity Derivatives Definitions. This means the Volatility Cap Amount election is a number.\n',
    type: {
      blueId: '9eWaHYz2vKrFofdHTHAizNNu8xP6QE3WQ5y7DGrGZvyJ',
    },
  },
  volatilityCapFactor: {
    description:
      'Volatility Cap Amount in accordance with the ISDA 2011 Equity Derivatives Definitions. The Calculated VolCapAmt can be optionally provided.\n',
    type: {
      blueId: '9eWaHYz2vKrFofdHTHAizNNu8xP6QE3WQ5y7DGrGZvyJ',
    },
  },
};
