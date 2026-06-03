export const CdmProductCommonScheduleRateSchedule: Record<string, unknown> = {
  description:
    'A class defining a schedule of rates or amounts in terms of an initial value and then a series of step date and value pairs. On each step date the rate or amount changes to the new step value. The series of step date and value pairs are optional. If not specified, this implies that the initial value remains unchanged over time.\n',
  name: 'cdm/product/common/schedule/RateSchedule',
  price: {
    description:
      'The initial rate. An initial rate of 5% would be represented as 0.05.',
    schema: {
      required: true,
    },
    type: {
      blueId: '2Uog2mdWokkHVaMVWG2ZhXCKPdQtauRk7oxemYRLn9hy',
    },
  },
};
