export const LinkedPayNoteStarted: Record<string, unknown> = {
  description:
    'Confirmation that linked PayNote startup was requested successfully.',
  name: 'Linked PayNote Started',
  payNoteDocumentId: {
    description:
      'Document id of the bootstrapped linked PayNote when available.',
    type: {
      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
    },
  },
  payNoteSessionId: {
    description: 'Session id of the bootstrapped linked PayNote document.',
    type: {
      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
    },
  },
  type: {
    blueId: '4rExHc9dQ4h6gqTj343qg2teiFr8GDwWv1aDYPdV21QH',
  },
};
