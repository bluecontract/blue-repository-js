export const StatusInProgress = {
  description:
    'Document Status specialization for active processing. Status In Progress means the document is in its main operational\nphase and may continue to accept events, update state, emit requests, wait for responses, and process embedded scopes.\n\nThis status is appropriate for workflows that involve multiple sequential or asynchronous steps over time. It does not\nimply success or failure; it means the document has work underway and has not reached a final application-level state.\n',
  mode: {
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
    value: 'active',
  },
  name: 'Status In Progress',
  type: {
    blueId: 'QHoUCCVhepZWQnSo9VfZCJWbSwyA9TuT65tBZMVtnRX',
  },
} as const;
