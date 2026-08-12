export const CdmObservableEventTriggerEvent: Record<string, unknown> = {
  description: 'Observation point for trigger.',
  featurePayment: {
    description:
      'The feature payment, i.e. the payment made following trigger occurrence.',
    type: {
      blueId: 'CyNbsBbVvQtTXmUtC5VgfJRMfcxjpqRgWZb9o3728hUE',
    },
  },
  name: 'cdm/observable/event/TriggerEvent',
  schedule: {
    description: 'A derivative schedule.',
    itemType: {
      blueId: 'hjVS7GrE9QqNFk61XTvTkP6ktQxzv96UUaGK74mg9YK',
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
      blueId: 'DPiz2W1ctMPUXHZwDNk33csZRvEzLLK98EDtC4S1MYYv',
    },
  },
  triggerDates: {
    description: 'The trigger Dates.',
    type: {
      blueId: '7dJA2x6vQbptJj6JY19SNAepGDTYYauAobPJ5nGTi5GV',
    },
  },
};
