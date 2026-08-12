export const CdmProductCommonSettlementPrincipalPayment: Record<
  string,
  unknown
> = {
  description:
    'Any kind of principal payments when the amount is known and thus fixed.',
  discountFactor: {
    description:
      'The value representing the discount factor used to calculate the present value of the principal payment amount.\n',
    type: {
      blueId: '9eWaHYz2vKrFofdHTHAizNNu8xP6QE3WQ5y7DGrGZvyJ',
    },
  },
  name: 'cdm/product/common/settlement/PrincipalPayment',
  payerReceiver: {
    description:
      'Specifies the parties responsible for making and receiving payments defined by this structure.',
    type: {
      blueId: 'JDAXkucJ2m4yHJZmHoTSjW5ZioDKLBu2dbM6gerfoyHn',
    },
  },
  presentValuePrincipalAmount: {
    description:
      'The amount representing the present value of the principal payment.',
    type: {
      blueId: 'A6JZXX4Rug3aj7cJh48V6FeziSECwFQzyrJ1xUwd9kii',
    },
  },
  principalAmount: {
    description:
      'When known at the time the transaction is made, the cash amount to be paid.',
    type: {
      blueId: 'A6JZXX4Rug3aj7cJh48V6FeziSECwFQzyrJ1xUwd9kii',
    },
  },
  principalPaymentDate: {
    description: 'The date where the PrincipalPayment shall be settled.',
    type: {
      blueId: 'J1kGTdAb67L1bPgvuKZ86jTR9UZJomnkgA6hcnVfnwfD',
    },
  },
};
