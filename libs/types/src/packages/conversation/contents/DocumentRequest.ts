export const DocumentRequest = {
  description:
    'Source describing a request triggered by document workflow execution.',
  documentId: {
    description: 'Identifier of the document that triggered the request.',
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
  epoch: {
    description: 'Epoch of the source document when the request was emitted.',
    type: {
      blueId: '5WNMiV9Knz63B4dVY5JtMyh3FB4FSGqv7ceScvuapdE1',
    },
  },
  name: 'Document Request',
  type: {
    blueId: '6ADCPYXkusrp4dL1FC126L2ccuzYfqGdBf1w6EXh2hnC',
  },
} as const;
