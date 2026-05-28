export const CdmProductCollateralCollateralInterestNotification = {
  description:
    'Represents the parameters describing when notifications should be made for required collateral interest transfers.\n',
  name: 'cdm/product/collateral/CollateralInterestNotification',
  notificationDayType: {
    description: 'The type of days on which notification should occur.',
    schema: {
      required: {
        type: {
          blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
        },
        value: true,
      },
    },
    type: {
      blueId: '5TzmGki42MGuPUhmSXFrfufu3WDLpyQMvv91eWXoxniX',
    },
  },
  notificationTime: {
    description:
      'Specifies the time of day that the notification should occur.',
    schema: {
      required: {
        type: {
          blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
        },
        value: true,
      },
    },
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
  offset: {
    description:
      'Specifies the number of days before (negative) or after (positive) the trigger event.',
    schema: {
      required: {
        type: {
          blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
        },
        value: true,
      },
    },
    type: {
      blueId: '7pwXmXYCJtWnd348c2JQGBkm9C4renmZRwxbfaypsx5y',
    },
  },
  trigger: {
    description:
      'Specifies what triggers notification (should be enum) Interest Statement Frequency, Period End Date.',
    schema: {
      required: {
        type: {
          blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
        },
        value: true,
      },
    },
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
} as const;
