export const CallOperationRequested: Record<string, unknown> = {
  description:
    'Document asks MyOS Admin to invoke an operation on a target session.',
  name: 'Call Operation Requested',
  onBehalfOf: {
    description: 'Channel whose binding provides the requester account.',
    type: {
      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
    },
  },
  operation: {
    description: 'Operation name to invoke.',
    type: {
      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
    },
  },
  request: {
    description: 'Payload forwarded to the target operation.',
  },
  targetSessionId: {
    description: 'Target document session to invoke.',
    type: {
      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
    },
  },
  type: {
    blueId: '67WiBLmgNLGfxz7EcReXicgopEBUqYcX6mFGe6YRXatw',
  },
};
