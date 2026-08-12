export const CdmEventPositionInventory: Record<string, unknown> = {
  description:
    'A data type that can be used to describe an inventory of securities.',
  inventoryRecord: {
    description:
      'An array holding the list of inventory being described. Each element in the inventoryRecord array represents an individual piece of inventory i.e. a security.\n',
    itemType: {
      blueId: 'swvmAAFAvn3njjvFA8CkPez3L5hTXnQVBoeLsYiHbae',
    },
    schema: {
      minItems: 0,
    },
    type: {
      blueId: '8DSFoWG9MqRSUhStqoPLrwVQiYByRh18NWbDEarN8MKF',
    },
  },
  name: 'cdm/event/position/Inventory',
};
