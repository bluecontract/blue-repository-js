export const CdmBaseMathNonNegativeQuantitySchedule = {
  datedValue: {
    description:
      'A schedule of step date and value pairs. On each step date the associated step value becomes effective. The step dates are used to order the steps by ascending order. This attribute is optional so the data type may be used to define a schedule with a single value.\n',
    itemType: {
      blueId: '4Goc1Ax7PdSp2KoLBDYnqrtvCeRBneZD8E97GQazSXQv',
    },
    schema: {
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
  frequency: {
    description:
      'Defines the frequency to be used when defining a quantity. For example a quantity may be specified as a number of barrels of oil per day, which needs multiplying by the number of days in the relevant period to get the total quantity as a number of barrels.\n',
    type: {
      blueId: 'JCn7SJcxSE4UKZYvi2YchB4nwjTsdYKvhCc7RnYogigz',
    },
  },
  multiplier: {
    description:
      'Defines an optional number that the quantity should be multiplied by to derive a total quantity. This number is associated to a unit. For example in the case of the Coal (API2) CIF ARA (ARGUS-McCloskey) Futures Contract on the CME, where the unit would be contracts, the multiplier value would 1,000 and the mulitiplier unit would be 1,000 MT (Metric Tons).\n',
    type: {
      blueId: 'BCRUUCDz5YoH72WRdFUdE8hpNrxmqAyK6QzZdV91WaHp',
    },
  },
  name: 'cdm/base/math/NonNegativeQuantitySchedule',
  unit: {
    description:
      'Qualifies the unit by which the amount is measured. Optional because a measure may be unit-less (e.g. when representing a ratio between amounts in the same unit).\n',
    type: {
      blueId: '7UDCVn3tDYHeQBU818n6bFdccjBeDPrc6GddKWkT4WDu',
    },
  },
  val: {
    description:
      'Specifies the value of the measure as a number. Optional because in a measure vector or schedule, this single value may be omitted.\n',
    type: {
      blueId: '7pwXmXYCJtWnd348c2JQGBkm9C4renmZRwxbfaypsx5y',
    },
  },
} as const;
