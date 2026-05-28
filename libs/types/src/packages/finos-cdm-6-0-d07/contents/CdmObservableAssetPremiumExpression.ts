export const CdmObservableAssetPremiumExpression = {
  description:
    'This class corresponds to the FpML Premium.model group for representing the option premium when expressed in a way other than an amount.\n',
  name: 'cdm/observable/asset/PremiumExpression',
  percentageOfNotional: {
    description:
      'The amount of premium to be paid expressed as a percentage of the notional value of the transaction. A percentage of 5% would be expressed as 0.05.\n',
    type: {
      blueId: '7pwXmXYCJtWnd348c2JQGBkm9C4renmZRwxbfaypsx5y',
    },
  },
  premiumType: {
    description: 'Forward start premium type',
    type: {
      blueId: 'V3Wp7L7rEDxbgbj92BVzYAqyLjSQQWBdwRqiyHtAuu9',
    },
  },
  pricePerOption: {
    description:
      'The amount of premium to be paid expressed as a function of the number of options.',
    type: {
      blueId: '5RCy7NwpdTs7j96evsc93hof8nESXDM5u4q3ykG6dXvE',
    },
  },
} as const;
