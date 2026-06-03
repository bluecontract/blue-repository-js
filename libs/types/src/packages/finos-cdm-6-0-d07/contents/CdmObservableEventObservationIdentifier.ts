export const CdmObservableEventObservationIdentifier: Record<string, unknown> =
  {
    description:
      'Defines the parameters needed to uniquely identify a piece of data among the population of all available market data.\n',
    determinationMethodology: {
      description:
        'Specifies the method according to which an amount or a date is determined.',
      type: {
        blueId: '4Gy7A4j9sYhPf8Eqd9dXLdUFBWPHMDXxiV4n5VNAsmQF',
      },
    },
    informationSource: {
      description:
        'Represents where the market data published and should be observed.',
      type: {
        blueId: '5x9dr8ixBaX8QXWdiNGeuyFn1GS9wN5xkpfrxHhKLC2y',
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
        blueId: 'xQiQzMuZW6Q8gjgsvtqDYP1yE3C8KQUXtUp3fFAr7HS',
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
        blueId: 'A5epowY7nXCnh1AWLF3H4Zv7YyXwwAFethePAEeyAQ92',
      },
    },
  };
