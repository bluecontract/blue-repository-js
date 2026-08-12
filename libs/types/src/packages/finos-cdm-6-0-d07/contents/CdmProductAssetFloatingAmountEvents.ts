export const CdmProductAssetFloatingAmountEvents: Record<string, unknown> = {
  additionalFixedPayments: {
    description:
      'Specifies the events that will give rise to the payment additional fixed payments.',
    type: {
      blueId: '2MBY3n1ccqVv3XyWrmGJ6dB87YtvzCaNGTvwyiDrVjdn',
    },
  },
  description:
    'A class to specify the ISDA terms relating to the floating rate payment events and the implied additional fixed payments, applicable to the credit derivatives transactions on mortgage-backed securities with pay-as-you-go or physical settlement.\n',
  failureToPayPrincipal: {
    description:
      'A floating rate payment event. Corresponds to the failure by the Reference Entity to pay an expected principal amount or the payment of an actual principal amount that is less than the expected principal amount. ISDA 2003 Term: Failure to Pay Principal.\n',
    type: {
      blueId: 'AwvXD961fmnmqcSQhjMA7r15HpVh39cefb6ZTyUz2Fm2',
    },
  },
  floatingAmountProvisions: {
    description:
      'Specifies the floating amount provisions associated with the floatingAmountEvents.',
    type: {
      blueId: 'Gd3N5B2Q5Fb7AXEaXfe3iXtXmHuAUXDYpfeqAF9fULPd',
    },
  },
  impliedWritedown: {
    description:
      'A floating rate payment event. Results from the fact that losses occur to the underlying instruments that do not result in reductions of the outstanding principal of the reference obligation.\n',
    type: {
      blueId: 'AwvXD961fmnmqcSQhjMA7r15HpVh39cefb6ZTyUz2Fm2',
    },
  },
  interestShortfall: {
    description:
      'A floating rate payment event. With respect to any Reference Obligation Payment Date, either (a) the non-payment of an Expected Interest Amount or (b) the payment of an Actual Interest Amount that is less than the Expected Interest Amount. ISDA 2003 Term: Interest Shortfall.\n',
    type: {
      blueId: 'CMFyKETF4AW2ABGpniMoaoAomexgwK1AFicxUhU1yef7',
    },
  },
  name: 'cdm/product/asset/FloatingAmountEvents',
  writedown: {
    description:
      'A floating rate payment event. Results from the fact that the underlier writes down its outstanding principal amount. ISDA 2003 Term: Writedown.\n',
    type: {
      blueId: 'AwvXD961fmnmqcSQhjMA7r15HpVh39cefb6ZTyUz2Fm2',
    },
  },
};
