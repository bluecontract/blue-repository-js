export const CdmProductCommonSchedulePaymentCalculationPeriod = {
  adjustedPaymentDate: {
    description:
      'The adjusted payment date. This date should already be adjusted for any applicable business day convention. This component is not intended for use in trade confirmation but may be specified to allow the fee structure to also serve as a cashflow type component.\n',
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
  calculationPeriod: {
    description:
      'The parameters used in the calculation of a fixed or floating rate calculation period amount. A list of calculation period elements may be ordered in the document by ascending start date. An FpML document which contains an unordered list of calculation periods is still regarded as a conformant document.\n',
    itemType: {
      blueId: '5Lq5NnUDQc1VYTrSN1ydpnZwyrjq2SofswjFANgehFem',
    },
    schema: {
      minItems: {
        type: {
          blueId: '5WNMiV9Knz63B4dVY5JtMyh3FB4FSGqv7ceScvuapdE1',
        },
        value: 1,
      },
    },
    type: {
      blueId: '6aehfNAxHLC1PHHoDr3tYtFH3RWNbiWdFancJ1bypXEY',
    },
  },
  description:
    'A data defining:  the adjusted payment date and associated calculation period parameters required to calculate the actual or projected payment amount. This data forms:  part of the cashflow representation of a swap stream.\n',
  discountFactor: {
    description:
      'A decimal value representing the discount factor used to calculate the present value of cash flow.',
    type: {
      blueId: '7pwXmXYCJtWnd348c2JQGBkm9C4renmZRwxbfaypsx5y',
    },
  },
  fixedPaymentAmount: {
    description: 'A known fixed payment amount.',
    type: {
      blueId: '5RCy7NwpdTs7j96evsc93hof8nESXDM5u4q3ykG6dXvE',
    },
  },
  forecastPaymentAmount: {
    description:
      'A monetary amount representing the forecast of the future value of the payment.',
    type: {
      blueId: '5RCy7NwpdTs7j96evsc93hof8nESXDM5u4q3ykG6dXvE',
    },
  },
  name: 'cdm/product/common/schedule/PaymentCalculationPeriod',
  presentValueAmount: {
    description:
      'A monetary amount representing the present value of the forecast payment.',
    type: {
      blueId: '5RCy7NwpdTs7j96evsc93hof8nESXDM5u4q3ykG6dXvE',
    },
  },
  unadjustedPaymentDate: {
    description: 'The unadjusted payment date.',
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
} as const;
