export const CdmProductAssetFloatingrateFloatingAmountCalculationDetails: Record<
  string,
  unknown
> = {
  appliedRate: {
    description:
      'The rate that was actually applied, after all calculations and treatments.',
    schema: {
      required: true,
    },
    type: {
      blueId: '9eWaHYz2vKrFofdHTHAizNNu8xP6QE3WQ5y7DGrGZvyJ',
    },
  },
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
      blueId: 'A6JZXX4Rug3aj7cJh48V6FeziSECwFQzyrJ1xUwd9kii',
    },
  },
  description:
    'Type for reporting the detailed results of calculating a cash flow for a calculation period.  This is enhanced relative to the FpML-based cashflows structure to allow more information to be returned about daily compounded rates.\n',
  floatingRate: {
    description:
      'The details of the floating rate setting.  (If it is a calculated rate, details of that calculation will be inside that.\n',
    type: {
      blueId: 'EJonoYUoi7VKe4AowYFBKKL6ZCn4FmgqpsuFaGQDoGux',
    },
  },
  name: 'cdm/product/asset/floatingrate/FloatingAmountCalculationDetails',
  processingDetails: {
    description:
      'Details fo the floating rate treatment after the rate is observed or calculated.  This will include details of things like multipliers, spreads, caps and floors, and the raw and treated rates.\n',
    type: {
      blueId: 'F43xUs35uiAv2MqzAfnxeuEJZqrrCnvJVmnRhFJnqtRh',
    },
  },
  spreadExclusiveCalculatedAMount: {
    description:
      'The amount of the cash flow excluding any spread, for subsequent processing.',
    schema: {
      required: true,
    },
    type: {
      blueId: '9eWaHYz2vKrFofdHTHAizNNu8xP6QE3WQ5y7DGrGZvyJ',
    },
  },
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
