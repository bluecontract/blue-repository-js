export const CdmObservableEventObservationIdentifier: Record<string, unknown> =
  {
    description:
      'Defines the parameters needed to uniquely identify a piece of data among the population of all available market data.\n',
    determinationMethodology: {
      description:
        'Specifies the method according to which an amount or a date is determined.',
      type: {
        blueId: 'Fhi93wJfXrWgPY9spj9SbzZzgnHf8qeKHwSrvxFtgrEU',
      },
    },
    informationSource: {
      description:
        'Represents where the market data published and should be observed.',
      type: {
        blueId: 'DBw7um9gNRcqAbnknhfeiUnCkzs6Q2yp3aFtBkKuZ8S5',
      },
    },
    name: 'cdm/observable/event/ObservationIdentifier',
    observable: {
      description:
        'Represents the asset or rate to which the observation relates.',
      schema: {
        required: true,
      },
      type: {
        blueId: 'DXTyjwoR6uArYEUFJyE6a94sYYNV39vXWVYB7iLGSdv2',
      },
    },
    observationDate: {
      description:
        'Specifies the date value to use when resolving the market data.',
      schema: {
        required: true,
      },
      type: {
        blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
      },
    },
    observationTime: {
      description: 'Represents the time and time-zone.',
      type: {
        blueId: '3jiEy2e5MqwFVX3zkALqRNFaBpD4DawUCg1iYwfFzeca',
      },
    },
  };
