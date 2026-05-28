export const CdmProductCommonScheduleRateSchedule = {
  description:
    'A class defining a schedule of rates or amounts in terms of an initial value and then a series of step date and value pairs. On each step date the rate or amount changes to the new step value. The series of step date and value pairs are optional. If not specified, this implies that the initial value remains unchanged over time.\n',
  name: 'cdm/product/common/schedule/RateSchedule',
  price: {
    description:
      'The initial rate. An initial rate of 5% would be represented as 0.05.',
    schema: {
      required: {
        type: {
          blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
        },
        value: true,
      },
    },
    type: {
      blueId: 'BwqVRaSdNEfKjjtV8yGLCFuEEKSyzFJGiBUyEEVkD25',
    },
  },
} as const;
