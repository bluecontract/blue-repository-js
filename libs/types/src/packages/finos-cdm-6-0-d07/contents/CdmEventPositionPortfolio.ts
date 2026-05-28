export const CdmEventPositionPortfolio = {
  aggregationParameters: {
    description:
      'Describes the portfolio by describing how to aggregate all its relevant Events.',
    schema: {
      required: {
        type: {
          blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
        },
        value: true,
      },
    },
    type: {
      blueId: '79YpRF1QvMBEWLGAWkLqBGPQXzuJpz5nxGxrBNrJ7bAY',
    },
  },
  description:
    'A Portfolio represents an aggregation of multiple Positions, by describing the parameters that this Portfolio should be aggregated based on. The resulting PortfolioState is calculated using these aggregation parameters as inputs, by aggregating all the Events that are relevant to this Portfolio. The concept of Portfolio works at all levels in the model: from the highest for a given LegalEntity for instance, to the lowest to account for security substitutions in a secutity financing transaction. As such, Portfolio can be used either above or below the Contract level.\n',
  name: 'cdm/event/position/Portfolio',
  portfolioState: {
    description:
      'Describes the state of the Portfolio as a list of Positions resulting from the aggregation.',
    schema: {
      required: {
        type: {
          blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
        },
        value: true,
      },
    },
    type: {
      blueId: '96TUPsr1vKCN1d5SygGFrJqPYHxmvcL3JLE7RqaakpTg',
    },
  },
} as const;
