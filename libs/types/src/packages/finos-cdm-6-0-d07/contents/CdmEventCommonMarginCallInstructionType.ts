export const CdmEventCommonMarginCallInstructionType: Record<string, unknown> =
  {
    callType: {
      description:
        'Indicates the status of the call message type, such as expected call, notification of a call or an actionable margin call.\n',
      schema: {
        required: true,
      },
      type: {
        blueId: 'D5Ppw22Ncf5BZ67R91WVaBbQk2BKWA17SAGFY3WkBuTu',
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
