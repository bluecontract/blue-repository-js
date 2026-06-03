export const CdmEventCommonMarginCallInstructionType: Record<string, unknown> =
  {
    callType: {
      description:
        'Indicates the status of the call message type, such as expected call, notification of a call or an actionable margin call.\n',
      schema: {
        required: true,
      },
      type: {
        blueId: 'Fz4NTo1FbXH16J8EfuEn4VzfYkcagg6FsmDXL49ce7H',
      },
    },
    description:
      'Represents enumeration values to specify the call notification type, direction, specific action type.',
    name: 'cdm/event/common/MarginCallInstructionType',
    visibilityIndicator: {
      description:
        'Indicates the choice if the call instruction is visible or not to the other party.',
      type: {
        blueId: 'AwvXD961fmnmqcSQhjMA7r15HpVh39cefb6ZTyUz2Fm2',
      },
    },
  };
