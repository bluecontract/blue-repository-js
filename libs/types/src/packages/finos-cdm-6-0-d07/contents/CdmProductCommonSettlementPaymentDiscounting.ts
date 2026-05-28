export const CdmProductCommonSettlementPaymentDiscounting = {
  description:
    'This class corresponds to the FpML PaymentDiscounting.model group for representing the discounting elements that can be associated with a payment.\n',
  discountFactor: {
    description:
      'The value representing the discount factor used to calculate the present value of the cash flow.',
    type: {
      blueId: '7pwXmXYCJtWnd348c2JQGBkm9C4renmZRwxbfaypsx5y',
    },
  },
  name: 'cdm/product/common/settlement/PaymentDiscounting',
  presentValueAmount: {
    description:
      'The amount representing the present value of the forecast payment.',
    type: {
      blueId: '5RCy7NwpdTs7j96evsc93hof8nESXDM5u4q3ykG6dXvE',
    },
  },
} as const;
