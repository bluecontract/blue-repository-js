export const CdmProductAssetFloatingAmountEvents = {
  additionalFixedPayments: {
    description:
      'Specifies the events that will give rise to the payment additional fixed payments.',
    type: {
      blueId: 'HeB8cgyKQTeXcVdVnsFpiWBGgXUAfpUPUwPFBPY7JU6H',
    },
  },
  description:
    'A class to specify the ISDA terms relating to the floating rate payment events and the implied additional fixed payments, applicable to the credit derivatives transactions on mortgage-backed securities with pay-as-you-go or physical settlement.\n',
  failureToPayPrincipal: {
    description:
      'A floating rate payment event. Corresponds to the failure by the Reference Entity to pay an expected principal amount or the payment of an actual principal amount that is less than the expected principal amount. ISDA 2003 Term: Failure to Pay Principal.\n',
    type: {
      blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
    },
  },
  floatingAmountProvisions: {
    description:
      'Specifies the floating amount provisions associated with the floatingAmountEvents.',
    type: {
      blueId: 'GMkA62ZBwre9RPW2n4w7eTR8b5JAYucewf6zjRxusAjQ',
    },
  },
  impliedWritedown: {
    description:
      'A floating rate payment event. Results from the fact that losses occur to the underlying instruments that do not result in reductions of the outstanding principal of the reference obligation.\n',
    type: {
      blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
    },
  },
  interestShortfall: {
    description:
      'A floating rate payment event. With respect to any Reference Obligation Payment Date, either (a) the non-payment of an Expected Interest Amount or (b) the payment of an Actual Interest Amount that is less than the Expected Interest Amount. ISDA 2003 Term: Interest Shortfall.\n',
    type: {
      blueId: 'sfaJ5JP9gKaCYXxiJ6wnxfEBWk7QSjUi1UW4TauKx4R',
    },
  },
  name: 'cdm/product/asset/FloatingAmountEvents',
  writedown: {
    description:
      'A floating rate payment event. Results from the fact that the underlier writes down its outstanding principal amount. ISDA 2003 Term: Writedown.\n',
    type: {
      blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
    },
  },
} as const;
