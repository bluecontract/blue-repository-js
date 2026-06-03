export const CdmProductTemplatePayout: Record<string, unknown> = {
  AssetPayout: {
    description:
      'Defines the assets and movements in a security financing transaction.',
    type: {
      blueId: 'CaDUz9AY1EXhFRYQN73HdC98mAe18bh4BxACMShr4JNB',
    },
  },
  CommodityPayout: {
    description: 'Defines the payout for the floating leg of a Commodity Swap.',
    type: {
      blueId: 'this#5',
    },
  },
  CreditDefaultPayout: {
    description:
      'The credit default payout, which provides the details necessary for determining when a credit payout will be triggered as well as the parameters for calculating the payout and the settlement terms.\n',
    type: {
      blueId: 'AgZcx5eJYcy6vzz9NejmvMBuMpzza4tjH2bEtMYNkMVD',
    },
  },
  description:
    'Represents the set of future cashflow methodologies in the form of specific payout data type(s) which result from the financial product.  Examples: a trade in a cash asset will use only a settlement payout; for derivatives, two interest rate payouts can be combined to specify an interest rate swap; one interest rate payout can be combined with a credit default payout to specify a credit default swap.\n',
  FixedPricePayout: {
    description:
      'Defines a payout in which one or more payouts are defined as a fixed price.',
    type: {
      blueId: 'HGZMKY1yoBjBujWhaTqwBYYsw3GkD4w8Wc9G6D6nrDaa',
    },
  },
  InterestRatePayout: {
    description:
      'All of the terms necessary to define and calculate a cash flow based on a fixed, a floating or an inflation index rate. The interest rate payout can be applied to interest rate swaps and FRA (which both have two associated interest rate payouts), credit default swaps (to represent the fee leg when subject to periodic payments) and equity swaps (to represent the funding leg).\n',
    type: {
      blueId: '6JEZ2eR6XbPr27we4enAnhEA3t33WcEUzQSnH1uFWQ5Q',
    },
  },
  name: 'cdm/product/template/Payout',
  OptionPayout: {
    description: 'The option payout.',
    type: {
      blueId: 'this#7',
    },
  },
  PerformancePayout: {
    description:
      'The performance payout, which encompasses the equity price returns, dividend returns, volatility return, variance return and correlation provisions.\n',
    type: {
      blueId: 'this#1',
    },
  },
  SettlementPayout: {
    description:
      "Represents a forward settling payout. The 'Underlier' attribute captures the underlying payout, which is settled according to the 'SettlementTerms' attribute. Both FX Spot and FX Forward should use this component.\n",
    type: {
      blueId: 'this#2',
    },
  },
};
