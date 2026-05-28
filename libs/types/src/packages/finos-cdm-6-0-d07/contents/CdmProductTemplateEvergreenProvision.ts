export const CdmProductTemplateEvergreenProvision = {
  description:
    'Specifies a transaction which automatically extends for a specified timeframe until the exercise of an embedded option.\n',
  extensionFrequency: {
    description:
      'The frequency with which the evergreen contract will be extended if notice is not given.',
    schema: {
      required: {
        type: {
          blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
        },
        value: true,
      },
    },
    type: {
      blueId: 'Cpbn2utZQopvuh7pdxe4hrg9S6CvTTqwa6hLYZRihZRr',
    },
  },
  finalPeriodFeeAdjustment: {
    description:
      'An optional adjustment to the rate for the last period of the evergreen i.e. the period from when notice is given to stop rolling the contract through to the termination date.\n',
    type: {
      blueId: 'wuC3RHpv6ahucWwxTgdeQyeUP8ecWQQqgMvSpx3Z543',
    },
  },
  name: 'cdm/product/template/EvergreenProvision',
  noticeDeadlineDateTime: {
    description: 'A specific date and time for the notice deadline',
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
  noticeDeadlinePeriod: {
    description:
      'Defines the minimum period before an evergreen is scheduled to terminate that notice can be given that it will terminate beyond the scheduled termination date.\n',
    type: {
      blueId: '2wAd2mDukRH6r2YEZ4kU9e1fcUYpGHT8ZJEwFZFkKaCL',
    },
  },
  noticePeriod: {
    description:
      'The length of each evergreen extension period relative to the effective date of the preceding contract.',
    schema: {
      required: {
        type: {
          blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
        },
        value: true,
      },
    },
    type: {
      blueId: '2wAd2mDukRH6r2YEZ4kU9e1fcUYpGHT8ZJEwFZFkKaCL',
    },
  },
  singlePartyOption: {
    description:
      'If evergreen termination is not available to both parties then this component specifies the buyer and seller of the option.\n',
    type: {
      blueId: '8fXEqMXsnZAuwSFKfhiksmAPnV7yvaxSbmwgTbGrN75M',
    },
  },
} as const;
