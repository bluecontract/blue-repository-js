export const CdmEventCommonMarginCallInstructionType = {
  callType: {
    description:
      'Indicates the status of the call message type, such as expected call, notification of a call or an actionable margin call.\n',
    schema: {
      required: {
        type: {
          blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
        },
        value: true,
      },
    },
    type: {
      blueId: 'ArrXGPispsyEryoQo3F2re4vbxjj2xjYyQyBjvDQ36dd',
    },
  },
  description:
    'Represents enumeration values to specify the call notification type, direction, specific action type.',
  name: 'cdm/event/common/MarginCallInstructionType',
  visibilityIndicator: {
    description:
      'Indicates the choice if the call instruction is visible or not to the other party.',
    type: {
      blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
    },
  },
} as const;
