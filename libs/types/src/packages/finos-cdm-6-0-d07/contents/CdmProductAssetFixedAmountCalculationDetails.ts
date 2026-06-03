export const CdmProductAssetFixedAmountCalculationDetails: Record<
  string,
  unknown
> = {
  calculatedAmount: {
    description:
      'The amount of the cash flow that was computed, including any spreads and other processing.',
    schema: {
      required: true,
    },
    type: {
      blueId: '9eWaHYz2vKrFofdHTHAizNNu8xP6QE3WQ5y7DGrGZvyJ',
    },
  },
  calculationPeriod: {
    description:
      'The calculation period for which the floating calculation was performed.',
    schema: {
      required: true,
    },
    type: {
      blueId: 'HjEmRrvzUJGJ8GfKAGdbcnZbK68UnqsEfHnP7fQL2aXu',
    },
  },
  calculationPeriodNotionalAmount: {
    description: 'The notional in effect during the calculation period.',
    schema: {
      required: true,
    },
    type: {
      blueId: '7eyr2kXubNSHtLXpHJ9G8NqtmDXLfmDmHQZSkLa9qkyy',
    },
  },
  description:
    'Type for reporting the detailed results of calculating a cash flow for a calculation period.  This is enhanced relative to the FpML-based cashflows structure to allow more information to be returned about daily compounded rates.\n',
  fixedRate: {
    description: 'The value of the fixed rate that was used.',
    schema: {
      required: true,
    },
    type: {
      blueId: '9eWaHYz2vKrFofdHTHAizNNu8xP6QE3WQ5y7DGrGZvyJ',
    },
  },
  name: 'cdm/product/asset/FixedAmountCalculationDetails',
  yearFraction: {
    description:
      'The fraction of a year that this calculation represents, according to the day count fraction method.',
    schema: {
      required: true,
    },
    type: {
      blueId: '9eWaHYz2vKrFofdHTHAizNNu8xP6QE3WQ5y7DGrGZvyJ',
    },
  },
};
