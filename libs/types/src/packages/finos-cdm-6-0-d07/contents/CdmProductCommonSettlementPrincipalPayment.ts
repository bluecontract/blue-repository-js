export const CdmProductCommonSettlementPrincipalPayment = {
  description:
    'Any kind of principal payments when the amount is known and thus fixed.',
  discountFactor: {
    description:
      'The value representing the discount factor used to calculate the present value of the principal payment amount.\n',
    type: {
      blueId: '7pwXmXYCJtWnd348c2JQGBkm9C4renmZRwxbfaypsx5y',
    },
  },
  name: 'cdm/product/common/settlement/PrincipalPayment',
  payerReceiver: {
    description:
      'Specifies the parties responsible for making and receiving payments defined by this structure.',
    type: {
      blueId: 'Cx2eHN58eqWKXnZwn6JDYBzAfG95QSEAWjQhbX1R5An3',
    },
  },
  presentValuePrincipalAmount: {
    description:
      'The amount representing the present value of the principal payment.',
    type: {
      blueId: '5RCy7NwpdTs7j96evsc93hof8nESXDM5u4q3ykG6dXvE',
    },
  },
  principalAmount: {
    description:
      'When known at the time the transaction is made, the cash amount to be paid.',
    type: {
      blueId: '5RCy7NwpdTs7j96evsc93hof8nESXDM5u4q3ykG6dXvE',
    },
  },
  principalPaymentDate: {
    description: 'The date where the PrincipalPayment shall be settled.',
    type: {
      blueId: '4Ro4tKrST2yaBWNytCjLJMhx3DMoAXwqU1W6HBKrnfRn',
    },
  },
} as const;
