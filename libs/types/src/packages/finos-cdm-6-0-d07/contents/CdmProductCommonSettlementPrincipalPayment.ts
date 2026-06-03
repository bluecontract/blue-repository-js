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
      blueId: '3xPof2WJyFXisFtvaxpSGddTxHyGioazbsMJjuUucbzT',
    },
  },
  presentValuePrincipalAmount: {
    description:
      'The amount representing the present value of the principal payment.',
    type: {
      blueId: '7eyr2kXubNSHtLXpHJ9G8NqtmDXLfmDmHQZSkLa9qkyy',
    },
  },
  principalAmount: {
    description:
      'When known at the time the transaction is made, the cash amount to be paid.',
    type: {
      blueId: '7eyr2kXubNSHtLXpHJ9G8NqtmDXLfmDmHQZSkLa9qkyy',
    },
  },
  principalPaymentDate: {
    description: 'The date where the PrincipalPayment shall be settled.',
    type: {
      blueId: 'GKy9ctegTJLwNAwxTMo1WX9xQCvWbzwntin4VStfEfDi',
    },
  },
};
