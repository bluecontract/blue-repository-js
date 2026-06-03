export const CdmObservableEventFeaturePayment: Record<string, unknown> = {
  amount: {
    description: 'The monetary quantity in currency units.',
    type: {
      blueId: '9eWaHYz2vKrFofdHTHAizNNu8xP6QE3WQ5y7DGrGZvyJ',
    },
  },
  currency: {
    description: 'The currency in which an amount is denominated.',
    type: {
      blueId: 'HTDqFgte5VF88dLHnCZMjvyetfxfTAKxf9r8ciErE7Vg',
    },
  },
  description: 'Payment made following trigger occurrence.',
  levelPercentage: {
    description: 'The trigger level percentage.',
    type: {
      blueId: '9eWaHYz2vKrFofdHTHAizNNu8xP6QE3WQ5y7DGrGZvyJ',
    },
  },
  name: 'cdm/observable/event/FeaturePayment',
  payerReceiver: {
    description:
      "This attribute doesn't exist as part of the FpML construct, which makes use of the PayerReceiver.model group.",
    schema: {
      required: true,
    },
    type: {
      blueId: '2LmejohDGLXaXF2jDmkccaa7GSQbnbp8iBMKmrxifhWs',
    },
  },
  paymentDate: {
    description: 'The feature payment date.',
    type: {
      blueId: '2Dr79mc7tDo84pCgLDhmSAuay1naC42UUovCTcaMjY5R',
    },
  },
  time: {
    description: 'The feature payment time.',
    type: {
      blueId: '4h5N1XJhikomVgESoUQkDUs2Qfx1RK39JWGgd8HQXgEv',
    },
  },
};
