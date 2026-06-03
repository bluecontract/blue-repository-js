export const CdmProductAssetAssetDeliveryProfile: Record<string, unknown> = {
  bankHolidaysTreatment: {
    description: 'Specifies whether the dates defined include holidays or not.',
    type: {
      blueId: '833fsMUyREDfoeWcVvcxsNdLqF3mjxj8sUSJtn7h5aDG',
    },
  },
  block: {
    description:
      'Defines a delivery profile block, including start and end time, days of the week, duration, delivery capacity and price time interval quantity.\n',
    itemType: {
      blueId: 'BE8tk1V1aM9RX2EaQdADCudboiUVLdjeqNbgPXMoWXXt',
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
      blueId: '3Cw8RykF4cE5soC5fNPE2vRpWQcT4cwXUTQED5ux8xZ6',
    },
  },
  name: 'cdm/product/asset/AssetDeliveryProfile',
};
