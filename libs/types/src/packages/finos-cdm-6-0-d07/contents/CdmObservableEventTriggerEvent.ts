export const CdmObservableEventTriggerEvent: Record<string, unknown> = {
  description: 'Observation point for trigger.',
  featurePayment: {
    description:
      'The feature payment, i.e. the payment made following trigger occurrence.',
    type: {
      blueId: '658or3kYtUm56ELDk8VvoiAT7agLsP99UNrYUqXPMWyp',
    },
  },
  name: 'cdm/observable/event/TriggerEvent',
  schedule: {
    description: 'A derivative schedule.',
    itemType: {
      blueId: 'CR9L4SVmKAvSmKh2xUfY6RvyAg4XL3BwDYCeqWk8ejn8',
    },
    schema: {
      minItems: 0,
    },
    type: {
      blueId: '8DSFoWG9MqRSUhStqoPLrwVQiYByRh18NWbDEarN8MKF',
    },
  },
  trigger: {
    description: 'The trigger level',
    schema: {
      required: true,
    },
    type: {
      blueId: '21pozsBPMtA8xJQ77VahQiEpCbG8nV3ryR8r5xgX4sQP',
    },
  },
  triggerDates: {
    description: 'The trigger Dates.',
    type: {
      blueId: '75qSo7DxMh9MksCdoEnKxduHVLunj1pn42TvPFdxTgN8',
    },
  },
};
