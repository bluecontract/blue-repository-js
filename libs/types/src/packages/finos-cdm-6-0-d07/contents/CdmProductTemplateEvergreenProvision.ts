export const CdmProductTemplateEvergreenProvision: Record<string, unknown> = {
  description:
    'Specifies a transaction which automatically extends for a specified timeframe until the exercise of an embedded option.\n',
  extensionFrequency: {
    description:
      'The frequency with which the evergreen contract will be extended if notice is not given.',
    schema: {
      required: true,
    },
    type: {
      blueId: 'A5fbgqJ72K7pbNNCrmP9z1uJjRfJjx4z6Bav92ZY3iMs',
    },
  },
  finalPeriodFeeAdjustment: {
    description:
      'An optional adjustment to the rate for the last period of the evergreen i.e. the period from when notice is given to stop rolling the contract through to the termination date.\n',
    type: {
      blueId: 'D6pT9tDvB6nnaNaPVHodxcm2djqTNykgt6VJoD2uDq4M',
    },
  },
  name: 'cdm/product/template/EvergreenProvision',
  noticeDeadlineDateTime: {
    description: 'A specific date and time for the notice deadline',
    type: {
      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
    },
  },
  noticeDeadlinePeriod: {
    description:
      'Defines the minimum period before an evergreen is scheduled to terminate that notice can be given that it will terminate beyond the scheduled termination date.\n',
    type: {
      blueId: '9fGwsBbeyL5rQuLRmwyBtyjMjAcmhWfHf4bmyqAXmWtD',
    },
  },
  noticePeriod: {
    description:
      'The length of each evergreen extension period relative to the effective date of the preceding contract.',
    schema: {
      required: true,
    },
    type: {
      blueId: '9fGwsBbeyL5rQuLRmwyBtyjMjAcmhWfHf4bmyqAXmWtD',
    },
  },
  singlePartyOption: {
    description:
      'If evergreen termination is not available to both parties then this component specifies the buyer and seller of the option.\n',
    type: {
      blueId: '6DrJREpu1Ms3M4U1q7jqGjM46V1o8vxq4K1i3X4dwMvz',
    },
  },
};
