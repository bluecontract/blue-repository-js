export const CdmEventPositionPortfolio: Record<string, unknown> = {
  aggregationParameters: {
    description:
      'Describes the portfolio by describing how to aggregate all its relevant Events.',
    schema: {
      required: true,
    },
    type: {
      blueId: '2AjMswvvUFa65tb2E1fgtkxxgJ7ReLj17xorwjbb8wAb',
    },
  },
  description:
    'A Portfolio represents an aggregation of multiple Positions, by describing the parameters that this Portfolio should be aggregated based on. The resulting PortfolioState is calculated using these aggregation parameters as inputs, by aggregating all the Events that are relevant to this Portfolio. The concept of Portfolio works at all levels in the model: from the highest for a given LegalEntity for instance, to the lowest to account for security substitutions in a secutity financing transaction. As such, Portfolio can be used either above or below the Contract level.\n',
  name: 'cdm/event/position/Portfolio',
  portfolioState: {
    description:
      'Describes the state of the Portfolio as a list of Positions resulting from the aggregation.',
    schema: {
      required: true,
    },
    type: {
      blueId: '5rZCg68iGGiKxNzqKGrKhdGvwvL65GzoawTiePj97t9T',
    },
  },
};
