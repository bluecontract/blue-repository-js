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
      blueId: '4EkR94oSN87arjWhzEQUZELGM8at9SvDoSZ3LKbE12sg',
    },
  },
  finalPeriodFeeAdjustment: {
    description:
      'An optional adjustment to the rate for the last period of the evergreen i.e. the period from when notice is given to stop rolling the contract through to the termination date.\n',
    type: {
      blueId: 'GLmQaa2vVZKjaht1sNMcUL55xfAgWQxpj5ENxwvVRvsm',
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
      blueId: '4JvKSv6NGWh8hqfN6miPYiWwfE3g61v9yBhQuXc8tB8z',
    },
  },
  noticePeriod: {
    description:
      'The length of each evergreen extension period relative to the effective date of the preceding contract.',
    schema: {
      required: true,
    },
    type: {
      blueId: '4JvKSv6NGWh8hqfN6miPYiWwfE3g61v9yBhQuXc8tB8z',
    },
  },
  singlePartyOption: {
    description:
      'If evergreen termination is not available to both parties then this component specifies the buyer and seller of the option.\n',
    type: {
      blueId: 'Hrt2EoYJokASG9J62NMKWt8UZbQN6BwtESp7hVDVQYvm',
    },
  },
};
