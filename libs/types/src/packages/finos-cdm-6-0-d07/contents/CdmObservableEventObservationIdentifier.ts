export const CdmObservableEventObservationIdentifier = {
  description:
    'Defines the parameters needed to uniquely identify a piece of data among the population of all available market data.\n',
  determinationMethodology: {
    description:
      'Specifies the method according to which an amount or a date is determined.',
    type: {
      blueId: 'AVTGwC6XTdPNBYpCUxUf5Agcpf2Z8whRs2N8aNRbffDr',
    },
  },
  informationSource: {
    description:
      'Represents where the market data published and should be observed.',
    type: {
      blueId: '4ewTgKPXq5xDsrR3GStD5tHN6FnPdeZXUQ5JDo5tkqZc',
    },
  },
  name: 'cdm/observable/event/ObservationIdentifier',
  observable: {
    description:
      'Represents the asset or rate to which the observation relates.',
    schema: {
      required: {
        type: {
          blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
        },
        value: true,
      },
    },
    type: {
      blueId: 'Hb4wmAVuJwiD8UV5Stp7MdchNt2tK1QCEE5tBFxE5F9A',
    },
  },
  observationDate: {
    description:
      'Specifies the date value to use when resolving the market data.',
    schema: {
      required: {
        type: {
          blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
        },
        value: true,
      },
    },
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
  observationTime: {
    description: 'Represents the time and time-zone.',
    type: {
      blueId: 'FTUwPbNf3h5HEXFU1GenFhKNQoZGkBe5zAWAf3ZnpvrK',
    },
  },
} as const;
