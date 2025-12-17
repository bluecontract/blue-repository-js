export const ProcessingInitializedMarker = {
  description:
    "Core type of Blue Language v1.0 (see https://language.blue).\nRecorded exactly once at a scope on first processing; stores the pre-init\nidentifier of the scope's subtree. Writing this marker is a patch that\ntriggers a Document Update cascade.\n",
  documentId: {
    description: 'Stable document identifier (original BlueId) of this scope.',
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
  name: 'Processing Initialized Marker',
  type: {
    blueId: '7QACj919YMRvFCTELCf6jfQTp41RVhtHdE6bPazLUZQ6',
  },
} as const;
