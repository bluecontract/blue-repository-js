export const DocumentProcessingInitiated = {
  description:
    "Core type of Blue Language v1.0 (see https://language.blue).\nPublished once at a scope on first processing (before writing the\nProcessing Initialized Marker). At root, it is also included in the run's\ntriggered_events outbox.\n",
  documentId: {
    description: 'Stable document identifier (original BlueId).',
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
  name: 'Document Processing Initiated',
} as const;
