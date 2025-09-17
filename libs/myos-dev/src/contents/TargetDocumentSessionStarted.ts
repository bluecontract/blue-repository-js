export const targetDocumentSessionStarted = {
  name: 'Target Document Session Started',
  document: {
    description:
      'The final, canonicalized document state with all timelineIds filled in.',
  },
  initiatorSessionId: {
    description: 'Session ID created for the bootstrap initiator (caller)',
    type: {
      blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
    },
  },
} as const;
