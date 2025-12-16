export const ProcessingTerminatedMarker = {
  "name": "Processing Terminated Marker",
  "type": {
    "blueId": "7QACj919YMRvFCTELCf6jfQTp41RVhtHdE6bPazLUZQ6"
  },
  "description": "Core type of Blue Language v1.0 (see https://language.blue).\nFinal state for a scope (either graceful or fatal). Once present, the scope\nbecomes permanently inactive both for the remainder of the current run and in\nsubsequent runs until explicitly replaced by a parent. Written as a Direct\nWrite (no Document Update) when termination occurs.\n",
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
    "description": "Optional human-readable explanation."
  }
} as const;
