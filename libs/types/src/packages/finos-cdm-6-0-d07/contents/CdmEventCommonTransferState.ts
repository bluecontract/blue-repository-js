export const CdmEventCommonTransferState = {
  description:
    'Defines the fundamental financial information associated with a Transfer event. Each TransferState specifies where a Transfer is in its life-cycle. TransferState is a root type and as such, can be created independently to any other CDM data type, but can also be used as part of the CDM Event Model.\n',
  name: 'cdm/event/common/TransferState',
  transfer: {
    description:
      'Represents the Transfer that has been effected by a business or life-cycle event.',
    schema: {
      required: {
        type: {
          blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
        },
        value: true,
      },
    },
    type: {
      blueId: '98eFnr7F52GRnD9gADRtEuqZMPpuZCmesaDMrQ7wS8Xk',
    },
  },
  transferStatus: {
    description: 'Represents the State of the Transfer through its life-cycle.',
    type: {
      blueId: 'A34Y1hbdkfTp159ccYU6dWyPMcb7T2yb5WeUyjbVuDVZ',
    },
  },
} as const;
