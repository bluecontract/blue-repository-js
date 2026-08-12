export const CdmProductAssetCalculationScheduleDeliveryPeriods: Record<
  string,
  unknown
> = {
  deliveryCapacity: {
    description:
      'The number of units included in the transaction for each delivery interval',
    type: {
      blueId: 'AdJnZG9c8KBZpbUXw47UmJ1yNJN4AK3q9P9aMJjaKanN',
    },
  },
  description: 'Period and time profile over which the delivery takes place.',
  endDate: {
    description: 'Delivery end date',
    type: {
      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
    },
  },
  name: 'cdm/product/asset/CalculationScheduleDeliveryPeriods',
  priceTimeIntervalQuantity: {
    description: 'Price per quantity per delivery time interval.',
    type: {
      blueId: 'D6pT9tDvB6nnaNaPVHodxcm2djqTNykgt6VJoD2uDq4M',
    },
  },
  profile: {
    description:
      'Defines the delivery profile of the asset, including the load type and the delivery intervals.',
    itemType: {
      blueId: 'huDyD12ZoREuxfsApppfcWfJ4LddBpaDDswYuKpWtH5',
    },
    schema: {
      minItems: 0,
    },
    type: {
      blueId: '8DSFoWG9MqRSUhStqoPLrwVQiYByRh18NWbDEarN8MKF',
    },
  },
  startDate: {
    description: 'Delivery start date',
    type: {
      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
    },
  },
};
