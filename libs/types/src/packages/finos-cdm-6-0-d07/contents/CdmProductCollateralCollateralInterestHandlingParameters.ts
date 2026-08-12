export const CdmProductCollateralCollateralInterestHandlingParameters: Record<
  string,
  unknown
> = {
  accrueInterestOnUnsettledInterest: {
    description:
      'Indicates whether interest accruing on unsettled interest amount is included (continues to be accrued) in the following period.\n',
    type: {
      blueId: 'AwvXD961fmnmqcSQhjMA7r15HpVh39cefb6ZTyUz2Fm2',
    },
  },
  alternativeProvision: {
    description:
      'Specifies an alternative to interest amount, when the alternative provision clause is specified.',
    type: {
      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
    },
  },
  alternativeToInterestAmount: {
    description: 'Specifies the alternative to interest amounts.',
    type: {
      blueId: '27kXvi2AJ8RczV2TDskdBvamTYjcpKsMvGaWEaK1MdzX',
    },
  },
  cutoffTime: {
    description:
      'Specifies the time of day that interest needs to be confirmed by.',
    type: {
      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
    },
  },
  description:
    'Represents parameters that describe how calculated interest amounts are handled, i.e. are they transferred/distributed, or is the collateral balance adjusted, is netting done, and any other special handling.\n',
  includeAccrualInMarginCalc: {
    description:
      'Indicates whether or not to include the open interest accrual in the margin calculation.',
    schema: {
      required: true,
    },
    type: {
      blueId: 'AwvXD961fmnmqcSQhjMA7r15HpVh39cefb6ZTyUz2Fm2',
    },
  },
  interestAmountApplication: {
    description:
      'The application of Interest Amount with respect to the Delivery Amount and the Return Amount.',
    type: {
      blueId: '8Gv1Qef23Mz4g1ohaQfw4qpqAEfyrSh8MP24i2eHPWCd',
    },
  },
  interestPaymentHandling: {
    description: 'Specifies how the collateral interest is to be handled.',
    schema: {
      required: true,
    },
    type: {
      blueId: 'EPzEEUE2z9dKyZzCmAW4y3RjMQoNyaTkCGiVYqTkpWfD',
    },
  },
  interestRolloverLimit: {
    description:
      'Specifies the level below which the interest will be rolled over.',
    type: {
      blueId: 'GNwk3nidjLwe1LhWBtBPRxoTtHf6cFhxWBE77ggP8XnL',
    },
  },
  name: 'cdm/product/collateral/CollateralInterestHandlingParameters',
  netInterestWithMarginCalls: {
    description:
      "Indicates whether the interest amount may be offset against any margin call deliver or return amounts?   (aka 'net payments' indicator).\n",
    schema: {
      required: true,
    },
    type: {
      blueId: 'AwvXD961fmnmqcSQhjMA7r15HpVh39cefb6ZTyUz2Fm2',
    },
  },
  netPostedAndHeldInterest: {
    description:
      'Indicates whether to net Held and Posted Interest Payments (i.e. whether interest payable for a period can be netted with interest receivable).\n',
    schema: {
      required: true,
    },
    type: {
      blueId: 'AwvXD961fmnmqcSQhjMA7r15HpVh39cefb6ZTyUz2Fm2',
    },
  },
  notification: {
    description: 'Specifies the terms describing notification requirements.',
    type: {
      blueId: '5Sp9FXHFVYw7frBuLN5R8FS9N9G51A8Qcr78z6DTZPnb',
    },
  },
  onFullReturn: {
    description:
      'Indicates the option that accrued interest should be calculated and distributed when a full return of collateral occurs.\n',
    schema: {
      required: true,
    },
    type: {
      blueId: 'AwvXD961fmnmqcSQhjMA7r15HpVh39cefb6ZTyUz2Fm2',
    },
  },
  onPartialReturn: {
    description:
      'Indicates the option that accrued interest should be calculated and distributed when a partial return collateral occurs.\n',
    schema: {
      required: true,
    },
    type: {
      blueId: 'AwvXD961fmnmqcSQhjMA7r15HpVh39cefb6ZTyUz2Fm2',
    },
  },
  paymentBusinessCenter: {
    description: 'Specifies applicable business centers for payments.',
    itemType: {
      blueId: 'Gpw3zDUDENr9thYruxb1S1firzfQSgHYJs5W3zaBbAzN',
    },
    schema: {
      minItems: 0,
    },
    type: {
      blueId: '8DSFoWG9MqRSUhStqoPLrwVQiYByRh18NWbDEarN8MKF',
    },
  },
  writeoffLimit: {
    description:
      'Specifies the level below which the interest will be written off; if omitted write-off is not applicable.',
    type: {
      blueId: 'GNwk3nidjLwe1LhWBtBPRxoTtHf6cFhxWBE77ggP8XnL',
    },
  },
};
