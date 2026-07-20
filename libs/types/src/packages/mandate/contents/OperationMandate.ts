export const OperationMandate: Record<string, unknown> = {
  description:
    'Mandate authorizing the actor bound to authorizedActorChannel to invoke one operation through a different effective channel on one logical target document, on behalf of the actor bound to authorityHolderChannel.\n',
  name: 'Operation Mandate',
  target: {
    channel: {
      description: 'Effective target channel authorized by this mandate.',
      schema: {
        required: true,
      },
      type: {
        blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
      },
    },
    initialDocument: {
      description: 'Initial document identifying the logical target document.',
      schema: {
        required: true,
      },
    },
    operation: {
      description: 'Single operation authorized by this mandate.',
      schema: {
        required: true,
      },
      type: {
        blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
      },
    },
  },
  type: {
    blueId: '47V2fyZMejS7LMCqJ66MvJ6v7VcmLL1zyxGQM44svV4H',
  },
};
