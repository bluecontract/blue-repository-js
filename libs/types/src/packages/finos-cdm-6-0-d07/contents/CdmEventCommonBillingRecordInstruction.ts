export const CdmEventCommonBillingRecordInstruction: Record<string, unknown> = {
  description: 'Specifies the instructions for creation of a billing record.',
  name: 'cdm/event/common/BillingRecordInstruction',
  observation: {
    description: 'The observations used to calculate the billing amount.',
    itemType: {
      blueId: 'C6Yp749VzC7SApKQGjPSUFxLD5E445bVciFGiaHHE4pi',
    },
    schema: {
      minItems: 1,
    },
    type: {
      blueId: '8DSFoWG9MqRSUhStqoPLrwVQiYByRh18NWbDEarN8MKF',
    },
  },
  recordEndDate: {
    description: 'The ending date of the period described by this record',
    schema: {
      required: true,
    },
    type: {
      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
    },
  },
  recordStartDate: {
    description: 'The starting date of the period described by this record',
    schema: {
      required: true,
    },
    type: {
      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
    },
  },
  settlementDate: {
    description: 'The date for settlement of the transfer.',
    schema: {
      required: true,
    },
    type: {
      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
    },
  },
  tradeState: {
    description: 'The trade for the individual billing record.',
    schema: {
      required: true,
    },
    type: {
      blueId: 'EQ41UGrPkUeaUNXD9QmELA1aEoVBtx9tVzgQZ5Tp1rMT',
    },
  },
};
