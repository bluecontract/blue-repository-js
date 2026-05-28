export const CdmProductAssetAssetDeliveryProfileBlock = {
  dayOfWeek: {
    description: 'The days of the week of the delivery.',
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
  deliveryCapacity: {
    description:
      'The number of units included in the transaction for each delivery interval',
    type: {
      blueId: '2uPPgn1ZsbovDfjRb1d8M9YmmgEnNo9UeG1VEz2wceY3',
    },
  },
  description:
    'Defines a delivery profile block, including start and end time, days of the week, duration, delivery capacity and price time interval quantity.\n',
  endTime: {
    description:
      'The end time of the delivery interval for each block or shape.',
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
  name: 'cdm/product/asset/AssetDeliveryProfileBlock',
  priceTimeIntervalQuantity: {
    description: 'Price per quantity per delivery time interval.',
    type: {
      blueId: 'wuC3RHpv6ahucWwxTgdeQyeUP8ecWQQqgMvSpx3Z543',
    },
  },
  startTime: {
    description:
      'The start time of the delivery interval for each block or shape.',
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
} as const;
