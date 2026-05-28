export const CdmObservableEventTriggerEvent = {
  description: 'Observation point for trigger.',
  featurePayment: {
    description:
      'The feature payment, i.e. the payment made following trigger occurrence.',
    type: {
      blueId: 'GEqVXdfmyLaRbcY72PwcZzu8xtsZVwesLZCTFcqN59mA',
    },
  },
  name: 'cdm/observable/event/TriggerEvent',
  schedule: {
    description: 'A derivative schedule.',
    itemType: {
      blueId: '4gPZWnb1vTp42ssUQer9eA7aUVRjtisHDCL1LhrNuH44',
    },
    schema: {
      minItems: {
        type: {
          blueId: '5WNMiV9Knz63B4dVY5JtMyh3FB4FSGqv7ceScvuapdE1',
        },
        value: 0,
      },
    },
    type: {
      blueId: '6aehfNAxHLC1PHHoDr3tYtFH3RWNbiWdFancJ1bypXEY',
    },
  },
  trigger: {
    description: 'The trigger level',
    schema: {
      required: {
        type: {
          blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
        },
        value: true,
      },
    },
    type: {
      blueId: 'F4aQKt7CSGvhjKJxn6Eq7qh8eWsMhiWdGoPrRMMpNknC',
    },
  },
  triggerDates: {
    description: 'The trigger Dates.',
    type: {
      blueId: '6FERZPz42ZzYn2R9FbEZtJ4sscsq9wYcg9tANknRZjnM',
    },
  },
} as const;
