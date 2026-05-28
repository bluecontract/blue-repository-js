export const Operation = {
  channel: {
    description:
      'Contracts-map key of the Channel in this scope on which Operation Request events are sent to invoke this operation.\n',
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
  description:
    "Marker contract declaring a named operation that a document exposes to participants or other documents. An Operation\ndefines the expected request shape and the channel through which Operation Request events are delivered. It is the\ndocument's public action surface: users, services, agents, or other documents invoke operations rather than patching\ninternal state directly.\n\nThe `request` field is the Blue shape that invocation payloads should conform to. The `channel` field names the\nscope-local channel contract on which Operation Request events are expected. A corresponding handler, commonly a\nSequential Workflow Operation, implements the behavior for this operation by binding to that channel and running the\nconfigured steps.\n\nOperation itself is a marker. It does not execute. Runtime behavior emerges only when a supported channel accepts an\nOperation Request and a supported handler implements the operation. The marker is still identity-bearing document\ncontent and may be inspected by UIs, agents, policy engines, and other participants to understand what actions the\ndocument allows.\n",
  name: 'Operation',
  request: {
    description:
      'The request schema for this operation (any Blue node). Invocation payloads MUST conform to this shape.\n',
  },
  type: {
    blueId: '7QACj919YMRvFCTELCf6jfQTp41RVhtHdE6bPazLUZQ6',
  },
} as const;
