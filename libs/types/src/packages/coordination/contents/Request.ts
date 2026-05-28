export const Request = {
  description:
    "Base event type for a specific, trackable request made by one participant, document, service, or timeline actor to\nanother. A Request carries a caller-generated `requestId` so that responses, checkpoints, user-interface prompts, and\naudit trails can correlate later activity back to the original request.\n\nRequest is intended for workflows where the recipient may respond asynchronously or where multiple similar requests may\nbe in flight. The `requestId` should be unique within the caller's relevant conversation or timeline. It is not\nnecessarily globally unique unless the surrounding protocol makes it so. A Response should copy the relevant requestId\ninto its correlation structure.\n\nConcrete Request subtypes define the actual payload and authorization semantics. For example, an Operation Request\ninvokes a named document operation; a Document Bootstrap Requested event asks a participant to create a new document;\na Customer Action Requested event asks a bank or UI provider to obtain a user's decision.\n",
  name: 'Request',
  requestId: {
    description:
      'A caller-generated ID for this specific request. This ID is used by the recipient to correlate their response.\n',
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
  type: {
    blueId: '7ugyHm8fpgvQx6pbLcW8cRNLBVDBExCp2iSYgd82ak6z',
  },
} as const;
