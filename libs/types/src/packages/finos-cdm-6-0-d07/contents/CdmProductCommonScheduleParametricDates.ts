export const CdmProductCommonScheduleParametricDates = {
  businessCenters: {
    description: 'The enumerated values to specify the business centers.',
    schema: {
      required: {
        type: {
          blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
        },
        value: true,
      },
    },
    type: {
      blueId: 'AaeaS3nBkqHVJTRb23iTwYjbMyikRz6mRz7L5FdHczSH',
    },
  },
  dayDistribution: {
    description:
      'Denotes the method by which the pricing days are distributed across the pricing period.',
    type: {
      blueId: 'FD6kLg2xwgd3jdCKhBv6qFv2EqCJPcQbjUm5b9XKmQDg',
    },
  },
  dayFrequency: {
    description:
      'Defines the occurrence of the dayOfWeek within the pricing period on which pricing will take place, e.g. the 3rd Friday within each Calculation Period. If omitted, every dayOfWeek will be a pricing day.\n',
    type: {
      blueId: '7pwXmXYCJtWnd348c2JQGBkm9C4renmZRwxbfaypsx5y',
    },
  },
  dayOfWeek: {
    description:
      'Indicates the days of the week on which the price will be determined.',
    itemType: {
      blueId: 'HF3CKQiKCRyZGK1Um3jMYPpiothNepYg5tDmY7KzPphK',
    },
    schema: {
      maxItems: {
        type: {
          blueId: '5WNMiV9Knz63B4dVY5JtMyh3FB4FSGqv7ceScvuapdE1',
        },
        value: 7,
      },
      minItems: {
        type: {
          blueId: '5WNMiV9Knz63B4dVY5JtMyh3FB4FSGqv7ceScvuapdE1',
        },
        value: 0,
      },
    },
    type: {
      blueId: '6aehfNAxHLC1PHHoDr3tYtFH3RWNbiWdFancJ1bypXEY',
    },
  },
  dayType: {
    description:
      'Denotes the enumerated values to specify the day type classification used in counting the number of days between two dates.\n',
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
  description:
    'Defines rules for the dates on which the price will be determined.',
  lag: {
    description:
      'The pricing period per calculation period if the pricing days do not wholly fall within the respective calculation period.\n',
    type: {
      blueId: '5vk3XbD6dScT1eaY9grEq8mtTaaaAM5g7kjvCTk7s5a5',
    },
  },
  name: 'cdm/product/common/schedule/ParametricDates',
} as const;
