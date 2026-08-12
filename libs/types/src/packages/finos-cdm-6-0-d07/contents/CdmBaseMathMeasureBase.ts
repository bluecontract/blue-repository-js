export const CdmBaseMathMeasureBase: Record<string, unknown> = {
  description:
    'Provides an abstract type to define a measure as a number associated to a unit. This type is abstract because all its attributes are optional. The types that extend it can specify further existence constraints.\n',
  name: 'cdm/base/math/MeasureBase',
  unit: {
    description:
      'Qualifies the unit by which the amount is measured. Optional because a measure may be unit-less (e.g. when representing a ratio between amounts in the same unit).\n',
    type: {
      blueId: '7qE4tr7jZifDuYrWwGZeTpRV1CFde8FZtHmFepTZ1t8F',
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
