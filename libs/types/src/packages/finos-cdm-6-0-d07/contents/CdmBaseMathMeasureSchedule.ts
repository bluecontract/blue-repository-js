export const CdmBaseMathMeasureSchedule: Record<string, unknown> = {
  datedValue: {
    description:
      'A schedule of step date and value pairs. On each step date the associated step value becomes effective. The step dates are used to order the steps by ascending order. This attribute is optional so the data type may be used to define a schedule with a single value.\n',
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
    'A set of measures, all in the same unit, where the values are defined through a schedule of steps. The initial value may be defined either as part of the steps, or using the single amount attribute.\n',
  name: 'cdm/base/math/MeasureSchedule',
  unit: {
    description:
      'Qualifies the unit by which the amount is measured. Optional because a measure may be unit-less (e.g. when representing a ratio between amounts in the same unit).\n',
    type: {
      blueId: 'DJ7mNRisRDzwiXVunMHLfDzvMqVHiQo2iHab3fCmxUL7',
    },
  },
  val: {
    description:
      'Specifies the value of the measure as a number. Optional because in a measure vector or schedule, this single value may be omitted.\n',
    type: {
      blueId: '9eWaHYz2vKrFofdHTHAizNNu8xP6QE3WQ5y7DGrGZvyJ',
    },
  },
};
