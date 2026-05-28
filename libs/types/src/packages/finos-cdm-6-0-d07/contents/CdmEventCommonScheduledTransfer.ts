export const CdmEventCommonScheduledTransfer = {
  corporateActionTransferType: {
    type: {
      blueId: '2BvXwm2PJoPCvRz7g8DFbxuMwvaXy1mHq7Tnw2QmQAn6',
    },
  },
  name: 'cdm/event/common/ScheduledTransfer',
  transferType: {
    description:
      'Specifies a transfer created from a scheduled or contingent event on a contract, e.g. Exercise, Performance, Credit Event\n',
    schema: {
      required: {
        type: {
          blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
        },
        value: true,
      },
    },
    type: {
      blueId: 'H7iPS6CrsvGu1PXNutZkgqEEQDC4jBXCMGkL1Ku6TxLf',
    },
  },
} as const;
