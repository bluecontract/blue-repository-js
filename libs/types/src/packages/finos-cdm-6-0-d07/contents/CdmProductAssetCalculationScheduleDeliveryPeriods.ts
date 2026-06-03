export const CdmProductAssetCalculationScheduleDeliveryPeriods: Record<
  string,
  unknown
> = {
  deliveryCapacity: {
    description:
      'The number of units included in the transaction for each delivery interval',
    type: {
      blueId: 'DGJZYRtm8AD2nG2o56eH5EDc8FujZiiXmBsuHgLf3UCR',
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
      blueId: 'GLmQaa2vVZKjaht1sNMcUL55xfAgWQxpj5ENxwvVRvsm',
    },
  },
  profile: {
    description:
      'Defines the delivery profile of the asset, including the load type and the delivery intervals.',
    itemType: {
      blueId: 'E8QF9EBMdnTPHUuRgEqvQUvGm75ReZB3zjKJB7BSjt7z',
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
