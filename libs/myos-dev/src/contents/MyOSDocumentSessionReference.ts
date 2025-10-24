export const myOSDocumentSessionReference = {
  description:
    'A reference to a specific, live document processing session on the MyOS platform.',
  documentId: {
    description: 'The initial blueId of the logical document.',
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
  name: 'MyOS Document Session Reference',
  sessionId: {
    description: 'The id of a specific, live processing session.',
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
} as const;
