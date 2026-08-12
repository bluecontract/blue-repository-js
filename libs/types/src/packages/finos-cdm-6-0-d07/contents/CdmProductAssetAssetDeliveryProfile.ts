export const CdmProductAssetAssetDeliveryProfile: Record<string, unknown> = {
  bankHolidaysTreatment: {
    description: 'Specifies whether the dates defined include holidays or not.',
    type: {
      blueId: '675Aca2arvdxDX1fKffGHMK9YEzGwT9569ZTDeWvZbRQ',
    },
  },
  block: {
    description:
      'Defines a delivery profile block, including start and end time, days of the week, duration, delivery capacity and price time interval quantity.\n',
    itemType: {
      blueId: 'DBB9Ve9VNPocXHDjCnG1nYEfLfnhNFSLu4n7sfCxpNoj',
    },
    schema: {
      minItems: 0,
    },
    type: {
      blueId: '8DSFoWG9MqRSUhStqoPLrwVQiYByRh18NWbDEarN8MKF',
    },
  },
  description:
    'Defines the delivery profile of the asset, including the load type and the delivery intervals.',
  loadType: {
    description: 'Identification of the delivery profile.',
    type: {
      blueId: 'BsdmgVxSpyU8h1XB5bgHz1RaFzBvfaE7M1ePnKipwMFH',
    },
  },
  name: 'cdm/product/asset/AssetDeliveryProfile',
};
