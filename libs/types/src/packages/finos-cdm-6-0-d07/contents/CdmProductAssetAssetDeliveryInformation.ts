export const CdmProductAssetAssetDeliveryInformation: Record<string, unknown> =
  {
    deliveryCapacity: {
      description:
        'The number of units included in the transaction for each delivery interval',
      type: {
        blueId: 'DGJZYRtm8AD2nG2o56eH5EDc8FujZiiXmBsuHgLf3UCR',
      },
    },
    description:
      'Contains the information relative to the delivery of the asset.',
    location: {
      description: 'Defines the location of the delivery of the commodity.',
      itemType: {
        blueId: 'Cc6abtfBMYGmbDzKaDhnZfAxERd36qMiuHyDbE1wWuuQ',
      },
      schema: {
        minItems: 0,
      },
      type: {
        blueId: '8DSFoWG9MqRSUhStqoPLrwVQiYByRh18NWbDEarN8MKF',
      },
    },
    name: 'cdm/product/asset/AssetDeliveryInformation',
    periods: {
      description:
        'Defines the periods of delivery, including the delivery profile.',
      type: {
        blueId: '6ZsZcTEaVYcHQtEkhsQLm4rfmMsNHjFRR3oPX9j9T5rP',
      },
    },
  };
