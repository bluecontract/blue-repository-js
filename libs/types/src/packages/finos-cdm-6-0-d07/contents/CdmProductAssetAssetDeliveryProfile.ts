export const CdmProductAssetAssetDeliveryProfile = {
  bankHolidaysTreatment: {
    description: 'Specifies whether the dates defined include holidays or not.',
    type: {
      blueId: 'DPWX3TQgadyc2NWPmBWPGsZuwotdkjqzr3AZzY6JgdeY',
    },
  },
  block: {
    description:
      'Defines a delivery profile block, including start and end time, days of the week, duration, delivery capacity and price time interval quantity.\n',
    itemType: {
      blueId: '6Tr6ZRk2ed6Xz94Dfj4ZYH9Z1EnxKkZ2z7uEyNB3Krv',
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
  description:
    'Defines the delivery profile of the asset, including the load type and the delivery intervals.',
  loadType: {
    description: 'Identification of the delivery profile.',
    type: {
      blueId: 'HzHMSqRjpyrAtbCm2oQg1DY1Bkk5tpeoCGTii8EGuUa9',
    },
  },
  name: 'cdm/product/asset/AssetDeliveryProfile',
} as const;
