export const CdmProductCommonScheduleFxLinkedNotionalAmount: Record<
  string,
  unknown
> = {
  adjustedFxSpotFixingDate: {
    description:
      'The date on which the FX spot rate is observed. This date should already be adjusted for any applicable business day convention.\n',
    type: {
      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
    },
  },
  description:
    'A data to:  describe the cashflow representation for FX linked notionals.\n',
  name: 'cdm/product/common/schedule/FxLinkedNotionalAmount',
  notionalAmount: {
    description: 'The calculation period notional amount.',
    type: {
      blueId: '9eWaHYz2vKrFofdHTHAizNNu8xP6QE3WQ5y7DGrGZvyJ',
    },
  },
  observedFxSpotRate: {
    description: 'The actual observed FX spot rate.',
    type: {
      blueId: '9eWaHYz2vKrFofdHTHAizNNu8xP6QE3WQ5y7DGrGZvyJ',
    },
  },
  resetDate: {
    description: 'The reset date.',
    type: {
      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
    },
  },
};
