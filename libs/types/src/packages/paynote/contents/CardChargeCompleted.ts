export const CardChargeCompleted = {
  description: 'Final outcome for a card charge request.',
  holdId: {
    description:
      'Hold id created for authorize-only or authorize+capture flows.',
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
  name: 'Card Charge Completed',
  reason: {
    description: 'Optional failure reason.',
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
  status: {
    description: 'Completion status ("succeeded" | "failed").',
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
  transactionId: {
    description: 'Resulting transaction id when available.',
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
  type: {
    blueId: '7aeKdDTceCVYDtyYZRdK7eQ8UU6PWn6X26Uea3XrGZdX',
  },
} as const;
