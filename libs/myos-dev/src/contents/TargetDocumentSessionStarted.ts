export const targetDocumentSessionStarted = {
  document: {
    description:
      'The final, canonicalized document state with all timelineIds filled in.',
  },
  initiatorSessionIds: {
    description: 'Session IDs created for the bootstrap initiator (caller)',
    itemType: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
    type: {
      blueId: '6aehfNAxHLC1PHHoDr3tYtFH3RWNbiWdFancJ1bypXEY',
    },
  },
  name: 'Target Document Session Started',
} as const;
