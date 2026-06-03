export const CdmEventCommonTransferState: Record<string, unknown> = {
  description:
    'Defines the fundamental financial information associated with a Transfer event. Each TransferState specifies where a Transfer is in its life-cycle. TransferState is a root type and as such, can be created independently to any other CDM data type, but can also be used as part of the CDM Event Model.\n',
  name: 'cdm/event/common/TransferState',
  transfer: {
    description:
      'Represents the Transfer that has been effected by a business or life-cycle event.',
    schema: {
      required: true,
    },
    type: {
      blueId: 'Huf4W2NzpakJVTTdkhKJriEVabT1NBezmnyTJB9Wt2Vs',
    },
  },
  transferStatus: {
    description: 'Represents the State of the Transfer through its life-cycle.',
    type: {
      blueId: 'CffZN3WjvV7L4yuq8gPxEorKZMGZzCxYzuaCyW5GRsfn',
    },
  },
};
