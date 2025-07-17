export const fatalErrorEvent = {
  name: 'Fatal Error Event',
  description:
    'Represents a fatal, irrecoverable error that occurred during the processing of a contract instance.',
  errorMessage: {
    description: 'Detailed description of the error.',
    type: {
      blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
    },
  },
  stackTrace: {
    description: 'Stack trace of the error, if available.',
    type: {
      blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
    },
  },
} as const;
