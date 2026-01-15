export const PayNoteClientDecisionDiscarded = {
  decision: {
    description: 'Attempted decision (accepted or rejected).',
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
  decisionAt: {
    description: 'Timestamp provided with the decision, if any.',
    type: {
      blueId: 'GQaGqFxHDz64L1c9QkCbz52ths6bMVtpHnw4QDngzQYs',
    },
  },
  description:
    "The client's decision was discarded because it could not be applied in the current delivery state.",
  name: 'PayNote Client Decision Discarded',
  reason: {
    description: 'Validation reason for discarding the decision.',
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
  type: {
    blueId: '5Wz4G9qcnBJnntYRkz4dgLK5bSuoMpYJZj4j5M59z4we',
  },
} as const;
