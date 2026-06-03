export const CdmProductAssetAssetDeliveryProfileBlock: Record<string, unknown> =
  {
    dayOfWeek: {
      description: 'The days of the week of the delivery.',
      itemType: {
        blueId: 'AYNVNBQsDmS46NA7kfw7jh6eh8DBspyMyDd1bzyBmDG5',
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
        blueId: 'DGJZYRtm8AD2nG2o56eH5EDc8FujZiiXmBsuHgLf3UCR',
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
        blueId: 'GLmQaa2vVZKjaht1sNMcUL55xfAgWQxpj5ENxwvVRvsm',
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
