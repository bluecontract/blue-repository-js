export const CdmEventPositionInventory = {
  description:
    'A data type that can be used to describe an inventory of securities.',
  inventoryRecord: {
    description:
      'An array holding the list of inventory being described. Each element in the inventoryRecord array represents an individual piece of inventory i.e. a security.\n',
    itemType: {
      blueId: '7RagTg1Tpw9L7gAaRss9AXVYT3D7jC9KKyQgQe2nzpkB',
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
  name: 'cdm/event/position/Inventory',
} as const;
