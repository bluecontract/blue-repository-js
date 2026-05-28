export const CdmObservableEventFeaturePayment = {
  amount: {
    description: 'The monetary quantity in currency units.',
    type: {
      blueId: '7pwXmXYCJtWnd348c2JQGBkm9C4renmZRwxbfaypsx5y',
    },
  },
  currency: {
    description: 'The currency in which an amount is denominated.',
    type: {
      blueId: 'F5GfdsSNcjLAm9anbfMQqxdxAFonErhU5UXFbQzq1zXY',
    },
  },
  description: 'Payment made following trigger occurrence.',
  levelPercentage: {
    description: 'The trigger level percentage.',
    type: {
      blueId: '7pwXmXYCJtWnd348c2JQGBkm9C4renmZRwxbfaypsx5y',
    },
  },
  name: 'cdm/observable/event/FeaturePayment',
  payerReceiver: {
    description:
      "This attribute doesn't exist as part of the FpML construct, which makes use of the PayerReceiver.model group.",
    schema: {
      required: {
        type: {
          blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
        },
        value: true,
      },
    },
    type: {
      blueId: '5jMMKaokSyc3P5cYsiGHgYgok3sYf3J1f3Cq4Ue2LX4C',
    },
  },
  paymentDate: {
    description: 'The feature payment date.',
    type: {
      blueId: '2tGygxV5BThuWavpJ3T6K3Atw5u4bJZT1Wb2Nxk798dd',
    },
  },
  time: {
    description: 'The feature payment time.',
    type: {
      blueId: '5SHUer2m9Wrjeo45qpWiGeBoKwQ2Z66Waz5zaTwYcJUp',
    },
  },
} as const;
