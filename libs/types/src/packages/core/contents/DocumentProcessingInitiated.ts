export const DocumentProcessingInitiated = {
  "name": "Document Processing Initiated",
  "description": "Core type of Blue Language v1.0 (see https://language.blue).\nPublished once at a scope on first processing (before writing the\nProcessing Initialized Marker). At root, it is also included in the run's\ntriggered_events outbox.\n",
  "documentId": {
    "type": {
      "blueId": "DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K"
    },
    "description": "Stable document identifier (original BlueId)."
  }
} as const;
