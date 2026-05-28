export const DocumentBootstrapCompleted = {
  description:
    "Response event indicating that a requested document bootstrap succeeded. The `documentId` identifies the newly created\nor registered document instance according to the surrounding storage or provider system.\n\nCompletion means the bootstrap provider believes the document has been created and is ready for further interaction.\nThe exact meaning of `documentId` is application-defined: it may be a BlueId, session ID, storage key, timeline entry,\nprovider URI, or another stable identifier. Consumers should use the provider's documented lookup rules.\n",
  documentId: {
    description: 'Document ID of the bootstrapped document.',
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
  name: 'Document Bootstrap Completed',
  type: {
    blueId: '7aeKdDTceCVYDtyYZRdK7eQ8UU6PWn6X26Uea3XrGZdX',
  },
} as const;
