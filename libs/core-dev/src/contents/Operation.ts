export const operation = {
  name: 'Operation',
  description:
    'Named, structured interfaces that documents expose to the outside world. They define specific actions that can be performed on a document, complete with formal request definitions.',
  channel: {
    description:
      'Specifies the channel through which Operation Request events are sent to invoke this operation on the document.',
    type: {
      blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
    },
  },
  request: {
    description:
      'Defines the expected input structure and validation rules for the operation. This represents the data that will be passed when the operation is invoked.',
  },
} as const;
