export const CdmProductCollateralCollateralInterestHandlingParameters = {
  accrueInterestOnUnsettledInterest: {
    description:
      'Indicates whether interest accruing on unsettled interest amount is included (continues to be accrued) in the following period.\n',
    type: {
      blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
    },
  },
  alternativeProvision: {
    description:
      'Specifies an alternative to interest amount, when the alternative provision clause is specified.',
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
  alternativeToInterestAmount: {
    description: 'Specifies the alternative to interest amounts.',
    type: {
      blueId: 'HwuWMb3tTYLKx27eGnZD5LB4TVdV6iz8fUGmWx1zqM21',
    },
  },
  cutoffTime: {
    description:
      'Specifies the time of day that interest needs to be confirmed by.',
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
  description:
    'Represents parameters that describe how calculated interest amounts are handled, i.e. are they transferred/distributed, or is the collateral balance adjusted, is netting done, and any other special handling.\n',
  includeAccrualInMarginCalc: {
    description:
      'Indicates whether or not to include the open interest accrual in the margin calculation.',
    schema: {
      required: {
        type: {
          blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
        },
        value: true,
      },
    },
    type: {
      blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
    },
  },
  interestAmountApplication: {
    description:
      'The application of Interest Amount with respect to the Delivery Amount and the Return Amount.',
    type: {
      blueId: '64gfjSEPVGo67KbDGZX2jznDz7yJ8jdjLU64hFY297xY',
    },
  },
  interestPaymentHandling: {
    description: 'Specifies how the collateral interest is to be handled.',
    schema: {
      required: {
        type: {
          blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
        },
        value: true,
      },
    },
    type: {
      blueId: '7fK6wnRWpFjqpe79nBuP5Y5x5DnXYGWkx1G6G3hmnf47',
    },
  },
  interestRolloverLimit: {
    description:
      'Specifies the level below which the interest will be rolled over.',
    type: {
      blueId: 'AT5JtWQz9LEbYiYD2utqkpNY5Kg4aUBGiVFJZ5Vuhj9S',
    },
  },
  name: 'cdm/product/collateral/CollateralInterestHandlingParameters',
  netInterestWithMarginCalls: {
    description:
      "Indicates whether the interest amount may be offset against any margin call deliver or return amounts?   (aka 'net payments' indicator).\n",
    schema: {
      required: {
        type: {
          blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
        },
        value: true,
      },
    },
    type: {
      blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
    },
  },
  netPostedAndHeldInterest: {
    description:
      'Indicates whether to net Held and Posted Interest Payments (i.e. whether interest payable for a period can be netted with interest receivable).\n',
    schema: {
      required: {
        type: {
          blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
        },
        value: true,
      },
    },
    type: {
      blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
    },
  },
  notification: {
    description: 'Specifies the terms describing notification requirements.',
    type: {
      blueId: 'Hu2GxR5c7eMm5dFy9t6mhrBCQP9G6EdyEPDUz7TUV7Co',
    },
  },
  onFullReturn: {
    description:
      'Indicates the option that accrued interest should be calculated and distributed when a full return of collateral occurs.\n',
    schema: {
      required: {
        type: {
          blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
        },
        value: true,
      },
    },
    type: {
      blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
    },
  },
  onPartialReturn: {
    description:
      'Indicates the option that accrued interest should be calculated and distributed when a partial return collateral occurs.\n',
    schema: {
      required: {
        type: {
          blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
        },
        value: true,
      },
    },
    type: {
      blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
    },
  },
  paymentBusinessCenter: {
    description: 'Specifies applicable business centers for payments.',
    itemType: {
      blueId: 'T68z84ntdBb19juBApDyMAndAVUzzmotTGUTuJnHV3D',
    },
    schema: {
      minItems: {
        type: {
          blueId: '5WNMiV9Knz63B4dVY5JtMyh3FB4FSGqv7ceScvuapdE1',
        },
        value: 0,
      },
    },
    type: {
      blueId: '6aehfNAxHLC1PHHoDr3tYtFH3RWNbiWdFancJ1bypXEY',
    },
  },
  writeoffLimit: {
    description:
      'Specifies the level below which the interest will be written off; if omitted write-off is not applicable.',
    type: {
      blueId: 'AT5JtWQz9LEbYiYD2utqkpNY5Kg4aUBGiVFJZ5Vuhj9S',
    },
  },
} as const;
