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
      blueId: 'HvrBWWRL9WzJPU9bs48T3Uf9CcUgCfqtEszZPN3tYS3n',
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
      blueId: '63Bw1Ena6g9zgLcVwPkkpApxNVecQwz8Ygi9rZZFYMoB',
    },
  },
  paymentDate: {
    description: 'The feature payment date.',
    type: {
      blueId: 'GW4fUG5i4g68v2eQEznuefGCSUPiwaHXpoVmU4ASwx29',
    },
  },
  time: {
    description: 'The feature payment time.',
    type: {
      blueId: 'CPirifxyoZ3EheLcX6KW9muSEUsxpDaj7mJXu5zW6jsJ',
    },
  },
};
