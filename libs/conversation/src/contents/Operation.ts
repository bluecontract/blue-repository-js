export const operation = {
  channel: {
    description:
      'Contracts-map key of the Channel in this scope on which Operation Request events are sent to invoke this operation.\n',
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
  description:
    'Conversation contract a document exposes. Defines the action’s request schema and the channel over which callers invoke it.\n',
  name: 'Operation',
  request: {
    description:
      'The request schema for this operation (any Blue node). Invocation payloads MUST conform to this shape.\n',
  },
  type: {
    blueId: '7QACj919YMRvFCTELCf6jfQTp41RVhtHdE6bPazLUZQ6',
  },
} as const;
