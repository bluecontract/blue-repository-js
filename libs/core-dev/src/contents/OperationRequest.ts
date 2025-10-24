export const operationRequest = {
  allowNewerVersion: {
    description:
      'Controls concurrent modification handling. When true, processes the operation on the latest document version even if it changed. When false, only processes if the document still has the same blueId as specified.',
    type: {
      blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
    },
  },
  description:
    "Event sent to a document's channel to invoke a specific operation. This event contains the operation name, request data, target document information, and versioning preferences.",
  document: {
    description:
      'Specifies the target document for the operation, typically containing the blueId of the document to operate on.',
  },
  name: 'Operation Request',
  operation: {
    description: 'The name of the operation to be performed.',
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
  request: {
    description:
      'The data to pass to the operation. Can be simple values for primitive types or structured objects for complex types. Must match the structure defined in the operation contract.',
  },
} as const;
