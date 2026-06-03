export const CdmEventCommonBillingRecord: Record<string, unknown> = {
  description: 'Specifies individual records within a billing invoice.',
  minimumFee: {
    description:
      'Indicates the minimum fee amount applied to the billing record, if any.',
    type: {
      blueId: '7eyr2kXubNSHtLXpHJ9G8NqtmDXLfmDmHQZSkLa9qkyy',
    },
  },
  name: 'cdm/event/common/BillingRecord',
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
  recordTransfer: {
    description: 'The settlement terms for the billing record',
    schema: {
      required: true,
    },
    type: {
      blueId: 'Huf4W2NzpakJVTTdkhKJriEVabT1NBezmnyTJB9Wt2Vs',
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
