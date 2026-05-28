export const CdmProductAssetAssetDeliveryPeriods = {
  description:
    'Defines the periods of delivery, including the delivery profile.',
  endDate: {
    description: 'Delivery end date',
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
  name: 'cdm/product/asset/AssetDeliveryPeriods',
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
