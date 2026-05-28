export const CdmProductAssetFloatingrateFloatingAmountCalculationDetails = {
  appliedRate: {
    description:
      'The rate that was actually applied, after all calculations and treatments.',
    schema: {
      required: {
        type: {
          blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
        },
        value: true,
      },
    },
    type: {
      blueId: '7pwXmXYCJtWnd348c2JQGBkm9C4renmZRwxbfaypsx5y',
    },
  },
  calculatedAmount: {
    description:
      'The amount of the cash flow that was computed, including any spreads and other processing.',
    schema: {
      required: {
        type: {
          blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
        },
        value: true,
      },
    },
    type: {
      blueId: '7pwXmXYCJtWnd348c2JQGBkm9C4renmZRwxbfaypsx5y',
    },
  },
  calculationPeriod: {
    description:
      'The calculation period for which the floating calculation was performed.',
    schema: {
      required: {
        type: {
          blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
        },
        value: true,
      },
    },
    type: {
      blueId: '3VwhGwLL7XV8qQMng9XQDytu3E4oEQBmpePGJqopB4yb',
    },
  },
  calculationPeriodNotionalAmount: {
    description: 'The notional in effect during the calculation period.',
    schema: {
      required: {
        type: {
          blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
        },
        value: true,
      },
    },
    type: {
      blueId: '5RCy7NwpdTs7j96evsc93hof8nESXDM5u4q3ykG6dXvE',
    },
  },
  description:
    'Type for reporting the detailed results of calculating a cash flow for a calculation period.  This is enhanced relative to the FpML-based cashflows structure to allow more information to be returned about daily compounded rates.\n',
  floatingRate: {
    description:
      'The details of the floating rate setting.  (If it is a calculated rate, details of that calculation will be inside that.\n',
    type: {
      blueId: '4Nyffqeo3KW7MXuPbXExtEv3Rym5Eutspbx5HHitiKoC',
    },
  },
  name: 'cdm/product/asset/floatingrate/FloatingAmountCalculationDetails',
  processingDetails: {
    description:
      'Details fo the floating rate treatment after the rate is observed or calculated.  This will include details of things like multipliers, spreads, caps and floors, and the raw and treated rates.\n',
    type: {
      blueId: 'A4wWX8jkgKvvqEesWt98ZquGHUZwQv42BCV1VfTQ3xWp',
    },
  },
  spreadExclusiveCalculatedAMount: {
    description:
      'The amount of the cash flow excluding any spread, for subsequent processing.',
    schema: {
      required: {
        type: {
          blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
        },
        value: true,
      },
    },
    type: {
      blueId: '7pwXmXYCJtWnd348c2JQGBkm9C4renmZRwxbfaypsx5y',
    },
  },
  yearFraction: {
    description:
      'The fraction of a year that this calculation represents, according to the day count fraction method.',
    schema: {
      required: {
        type: {
          blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
        },
        value: true,
      },
    },
    type: {
      blueId: '7pwXmXYCJtWnd348c2JQGBkm9C4renmZRwxbfaypsx5y',
    },
  },
} as const;
