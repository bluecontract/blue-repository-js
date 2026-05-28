export const StatusPending = {
  description:
    'Document Status specialization for a generic initial or waiting state. Status Pending means the document has not yet\nentered its main operational phase because it is waiting for an initial event, prerequisite, participant response,\nauthorization, configuration, or other condition.\n\nThis status should not be interpreted as failure. It is a stable state in which the document is alive but not yet\nactive. Workflows may transition out of pending when the required event arrives or a precondition is satisfied.\n',
  mode: {
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
    value: 'pending',
  },
  name: 'Status Pending',
  type: {
    blueId: 'QHoUCCVhepZWQnSo9VfZCJWbSwyA9TuT65tBZMVtnRX',
  },
} as const;
