export const timeline = {
  description:
    'Conversation package type. Tamper-evident sequence of entries (hash-linked chain) for a conversation. Each new entry references the preceding entry by identifier to preserve order.\n',
  name: 'Timeline',
  timelineId: {
    description: 'Stable identifier of this timeline (application-defined).',
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
} as const;
