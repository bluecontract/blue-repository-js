export const CallOperationFailed: Record<string, unknown> = {
  description: 'MyOS Admin could not invoke the requested operation.',
  name: 'Call Operation Failed',
  operation: {
    description: 'Operation name that was attempted.',
    type: {
      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
    },
  },
  reason: {
    description:
      'Failure reason code (permission_denied, execution_error, invalid_request, target_not_found).',
    type: {
      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
    },
  },
  targetSessionId: {
    description: 'Target document session that was attempted.',
    type: {
      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
    },
  },
  type: {
    blueId: '283zu1pu97gXBs4mquE3MSjwRYTzZSXZhnRSemCH8mZr',
  },
};
