export const CdmProductAssetCalculationScheduleDeliveryPeriods = {
  deliveryCapacity: {
    description:
      'The number of units included in the transaction for each delivery interval',
    type: {
      blueId: '2uPPgn1ZsbovDfjRb1d8M9YmmgEnNo9UeG1VEz2wceY3',
    },
  },
  description: 'Period and time profile over which the delivery takes place.',
  endDate: {
    description: 'Delivery end date',
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
  name: 'cdm/product/asset/CalculationScheduleDeliveryPeriods',
  priceTimeIntervalQuantity: {
    description: 'Price per quantity per delivery time interval.',
    type: {
      blueId: 'wuC3RHpv6ahucWwxTgdeQyeUP8ecWQQqgMvSpx3Z543',
    },
  },
  profile: {
    description:
      'Defines the delivery profile of the asset, including the load type and the delivery intervals.',
    itemType: {
      blueId: 'G3hrrr7rcs6ZtCze1xXjYezVbZ6rTuYfog2nrcJZ7fTN',
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
  startDate: {
    description: 'Delivery start date',
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
} as const;
