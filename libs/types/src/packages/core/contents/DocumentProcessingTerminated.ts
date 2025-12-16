export const DocumentProcessingTerminated = {
  "name": "Document Processing Terminated",
  "description": "Core type of Blue Language v1.0 (see https://language.blue).\nPublished at the terminating scope when processing ends, either gracefully\nor fatally. Bridgeable to the parent via Embedded Node Channel if configured.\n",
  "cause": {
    "type": {
      "blueId": "DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K"
    },
    "description": "One of fatal, graceful."
  },
  "reason": {
    "type": {
      "blueId": "DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K"
    },
    "description": "Optional explanation."
  }
} as const;
