export const CdmBaseMathQuantity: Record<string, unknown> = {
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
    'Specifies a quantity as a single value to be associated to a financial product, for example a transfer amount resulting from a trade. This data type extends QuantitySchedule and requires that only the single amount value exists.\n',
  frequency: {
    description:
      'Defines the frequency to be used when defining a quantity. For example a quantity may be specified as a number of barrels of oil per day, which needs multiplying by the number of days in the relevant period to get the total quantity as a number of barrels.\n',
    type: {
      blueId: '66A3jW7LyiNtMy7z2YQQFpSs2dyBatQtY1MXhCSnvNPC',
    },
  },
  multiplier: {
    description:
      'Defines an optional number that the quantity should be multiplied by to derive a total quantity. This number is associated to a unit. For example in the case of the Coal (API2) CIF ARA (ARGUS-McCloskey) Futures Contract on the CME, where the unit would be contracts, the multiplier value would 1,000 and the mulitiplier unit would be 1,000 MT (Metric Tons).\n',
    type: {
      blueId: 'GdxjH3XMfuhBXiciCVsrgQC7QGBiz2DTWMg4SUHSMJTi',
    },
  },
  name: 'cdm/base/math/Quantity',
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
