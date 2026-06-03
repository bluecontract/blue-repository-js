export const CdmBaseMathSchedule: Record<string, unknown> = {
  datedValue: {
    description:
      'The schedule of step date and value pairs. On each step date the associated step value becomes effective. A list of steps may be ordered in the document by ascending step date. An FpML document containing an unordered list of steps is still regarded as a conformant document.\n',
    itemType: {
      blueId: '9zYcb3FcpfuBbxSMqUwSRoYJ3gPs7Nv1qeZUmFvVniPL',
    },
    schema: {
      minItems: 0,
    },
    type: {
      blueId: '8DSFoWG9MqRSUhStqoPLrwVQiYByRh18NWbDEarN8MKF',
    },
  },
  description:
    'A class defining a schedule of rates or amounts in terms of an initial value and then a series of step date and value pairs. On each step date the rate or amount changes to the new step value. The series of step date and value pairs are optional. If not specified, this implies that the initial value remains unchanged over time.\n',
  name: 'cdm/base/math/Schedule',
  val: {
    description:
      'The initial rate or amount, as the case may be. An initial rate of 5% would be represented as 0.05.',
    schema: {
      required: true,
    },
    type: {
      blueId: '9eWaHYz2vKrFofdHTHAizNNu8xP6QE3WQ5y7DGrGZvyJ',
    },
  },
};
