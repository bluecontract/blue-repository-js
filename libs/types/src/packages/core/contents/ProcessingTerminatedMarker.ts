export const ProcessingTerminatedMarker = {
  cause: {
    description: 'One of fatal, graceful.',
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
  description:
    'Core type of Blue Language v1.0 (see https://language.blue).\nFinal state for a scope (either graceful or fatal). Once present, the scope\nbecomes permanently inactive both for the remainder of the current run and in\nsubsequent runs until explicitly replaced by a parent. Written as a Direct\nWrite (no Document Update) when termination occurs.\n',
  name: 'Processing Terminated Marker',
  reason: {
    description: 'Optional human-readable explanation.',
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
  type: {
    blueId: '7QACj919YMRvFCTELCf6jfQTp41RVhtHdE6bPazLUZQ6',
  },
} as const;
