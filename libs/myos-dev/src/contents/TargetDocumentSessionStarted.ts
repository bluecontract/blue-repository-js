export const targetDocumentSessionStarted = {
  document: {
    description:
      'The final, canonicalized document state with all timelineIds filled in.',
  },
  initiatorSessionIds: {
    description: 'Session IDs created for the bootstrap initiator (caller)',
    itemType: {
      blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
    },
    type: {
      blueId: 'G8wmfjEqugPEEXByMYWJXiEdbLToPRWNQEekNxrxfQWB',
    },
  },
  name: 'Target Document Session Started',
} as const;
