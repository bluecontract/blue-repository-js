export const request = {
  description:
    'The base type for any event that represents a specific, trackable request to another participant or service. It mandates the inclusion of a unique identifier.\n',
  name: 'Request',
  requestId: {
    description:
      'A caller-generated ID for this specific request. This ID is used by the recipient to correlate their response.\n',
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
  type: {
    blueId: '3gtD3i9bgfhDat3VB53vrQpchWFn1McYe2ngSc3YLjar',
  },
} as const;
