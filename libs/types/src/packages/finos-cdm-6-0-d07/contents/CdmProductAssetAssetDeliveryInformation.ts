export const CdmProductAssetAssetDeliveryInformation = {
  deliveryCapacity: {
    description:
      'The number of units included in the transaction for each delivery interval',
    type: {
      blueId: '2uPPgn1ZsbovDfjRb1d8M9YmmgEnNo9UeG1VEz2wceY3',
    },
  },
  description:
    'Contains the information relative to the delivery of the asset.',
  location: {
    description: 'Defines the location of the delivery of the commodity.',
    itemType: {
      blueId: '6U2c4eAmwS4qmrPVZRhZQJXRs75a2JGrkQBHr3xRuRXe',
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
  name: 'cdm/product/asset/AssetDeliveryInformation',
  periods: {
    description:
      'Defines the periods of delivery, including the delivery profile.',
    type: {
      blueId: 'HjxX213km4XYV1mYvnDzqdcve8BuM63aN1sJ8oe1TbYc',
    },
  },
} as const;
