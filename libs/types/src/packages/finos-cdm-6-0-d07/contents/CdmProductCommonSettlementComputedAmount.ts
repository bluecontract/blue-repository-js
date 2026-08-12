export const CdmProductCommonSettlementComputedAmount: Record<string, unknown> =
  {
    amount: {
      schema: {
        required: true,
      },
      type: {
        blueId: '9eWaHYz2vKrFofdHTHAizNNu8xP6QE3WQ5y7DGrGZvyJ',
      },
    },
    callFunction: {
      schema: {
        required: true,
      },
      type: {
        blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
      },
    },
    currency: {
      description:
        'The currency in which the computed amount is denominated. The list of valid currencies is not presently positioned as an enumeration as part of the CDM because that scope is limited to the values specified by ISDA and FpML. As a result, implementers have to make reference to the relevant standard, such as the ISO 4217 standard for currency codes.\n',
      type: {
        blueId: 'HvrBWWRL9WzJPU9bs48T3Uf9CcUgCfqtEszZPN3tYS3n',
      },
    },
    description:
      'A class to specify the outcome of a computed amount, for testing purposes.',
    name: 'cdm/product/common/settlement/ComputedAmount',
  };
