export const CdmProductAssetAssetDeliveryProfileBlock: Record<string, unknown> =
  {
    dayOfWeek: {
      description: 'The days of the week of the delivery.',
      itemType: {
        blueId: 'DmhfCUUAaa5kZ8Qsom8VwEsMN3qmGWaJX1pGtUCfbqRQ',
      },
      schema: {
        maxItems: 7,
        minItems: 0,
      },
      type: {
        blueId: '8DSFoWG9MqRSUhStqoPLrwVQiYByRh18NWbDEarN8MKF',
      },
    },
    deliveryCapacity: {
      description:
        'The number of units included in the transaction for each delivery interval',
      type: {
        blueId: 'AdJnZG9c8KBZpbUXw47UmJ1yNJN4AK3q9P9aMJjaKanN',
      },
    },
    description:
      'Defines a delivery profile block, including start and end time, days of the week, duration, delivery capacity and price time interval quantity.\n',
    endTime: {
      description:
        'The end time of the delivery interval for each block or shape.',
      type: {
        blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
      },
    },
    name: 'cdm/product/asset/AssetDeliveryProfileBlock',
    priceTimeIntervalQuantity: {
      description: 'Price per quantity per delivery time interval.',
      type: {
        blueId: 'D6pT9tDvB6nnaNaPVHodxcm2djqTNykgt6VJoD2uDq4M',
      },
    },
    startTime: {
      description:
        'The start time of the delivery interval for each block or shape.',
      type: {
        blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
      },
    },
  };
