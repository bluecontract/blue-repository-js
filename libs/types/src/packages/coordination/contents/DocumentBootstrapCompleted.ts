export const DocumentBootstrapCompleted: Record<string, unknown> = {
  description:
    'Lifecycle/coordination event indicating that a requested document bootstrap completed successfully. It records the\nresulting document identifier so the requester can continue interacting with the new document or session.\n',
  documentId: {
    description:
      'Identifier, reference, or BlueId of the bootstrapped document/session, according to the bootstrap runtime.\n',
    type: {
      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
    },
  },
  name: 'Document Bootstrap Completed',
  type: {
    blueId: 'AQqdPmtKmB5VNH4rEbeKcRxsVStTTbJhS4fVF8wiTZrk',
  },
};
