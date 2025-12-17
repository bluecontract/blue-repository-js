export const OperationRequest = {
  allowNewerVersion: {
    description:
      'Controls concurrent modification handling. When true, processes the operation on the latest document version even if it changed. When false, only processes if the document still has the same blueId as specified.',
    type: {
      blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
    },
  },
  description:
    'Conversation package event. Sent to a document’s operation channel to invoke a specific operation on a specific document instance, carrying request data and concurrency preference.\n',
  document: {
    description:
      'Specifies the target document for the operation, typically containing the blueId of the document to operate on.',
  },
  name: 'Operation Request',
  operation: {
    description:
      'The name of the operation to invoke (must exist on the target).',
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
  request: {
    description:
      'Payload for the operation. Shape MUST match the target Operation’s `request` contract (scalars or structured nodes).\n',
  },
} as const;
