export const CdmProductAssetFutureValueAmount: Record<string, unknown> = {
  calculationPeriodNumberOfDays: {
    description:
      'The number of days from the adjusted calculation period start date to the adjusted value date, calculated in accordance with the applicable day count fraction.\n',
    schema: {
      required: true,
    },
    type: {
      blueId: 'E2LM6qgzWG9ttagq2xTmiZkgYEAgkYedFCmU9v7NnVEq',
    },
  },
  currency: {
    description:
      'The currency in which the an amount is denominated. The list of valid currencies is not presently positioned as an enumeration as part of the CDM because that scope is limited to the values specified by ISDA and FpML. As a result, implementers have to make reference to the relevant standard, such as the ISO 4217 standard for currency codes.\n',
    schema: {
      required: true,
    },
    type: {
      blueId: 'HvrBWWRL9WzJPU9bs48T3Uf9CcUgCfqtEszZPN3tYS3n',
    },
  },
  description: 'A class defining a currency and a future value date.',
  name: 'cdm/product/asset/FutureValueAmount',
  quantity: {
    type: {
      blueId: '3QpANvMr6891ZuV6c8Yze7qcCyqbKRhy9zqwHuMkw8FP',
    },
  },
  valueDate: {
    description: 'Adjusted value date of the future value amount.',
    schema: {
      required: true,
    },
    type: {
      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
    },
  },
};
