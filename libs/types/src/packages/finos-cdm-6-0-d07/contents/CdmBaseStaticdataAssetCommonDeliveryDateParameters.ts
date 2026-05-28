export const CdmBaseStaticdataAssetCommonDeliveryDateParameters = {
  deliveryDate: {
    description:
      'Specifies the specific contract date for the contract that should be referenced for a price.',
    type: {
      blueId: '4Ro4tKrST2yaBWNytCjLJMhx3DMoAXwqU1W6HBKrnfRn',
    },
  },
  deliveryDateExpirationConvention: {
    description:
      "Specifies, for a Commodity Transaction that references a listed future, the day on which the specified future will expire ahead of the actual expiration of the referenced future. For example: Z21 Contract expires on 19Nov21, with an adjust of 2D the 'expire' will be 16Nov21. DeliveryDateRollConvention takes precedence. Example: Pricing on the Z21 Contract with NearbyContractDay and a deliveryDateRoll of 10D, Sampling of the F22 Contract will occur on 8Nov21 through the last Date of the Z21 Contract. With an ExpConvention of 5D, the last sampling date on the F22 contract will be 12Nov21.\n",
    type: {
      blueId: '5pnk9bH1JJq67GAcpXYjFhhREvjUoveKHs98CBqt9pEq',
    },
  },
  deliveryDateRollConvention: {
    description:
      'Specifies, for a Commodity Transaction that references a listed future, the day on which the specified future will roll to the next nearby month prior to the expiration of the referenced future. If the future will not roll at all - i.e. the price will be taken from the expiring contract, 0 days should be specified here. If the future will roll to the next nearby on the last trading day - i.e. the price will be taken from the next nearby on the last trading day, then 1 business day should be specified and so on.\n',
    type: {
      blueId: '5pnk9bH1JJq67GAcpXYjFhhREvjUoveKHs98CBqt9pEq',
    },
  },
  deliveryNearby: {
    description:
      'Provides a container for the parametric representation that specifies which nearby contract date would be used as a refrence for a price.\n',
    type: {
      blueId: '5pnk9bH1JJq67GAcpXYjFhhREvjUoveKHs98CBqt9pEq',
    },
  },
  description:
    'Specifies a specific date or the parameters for identifying the relevant contract date when the commodity reference price is a futures contract.\n',
  name: 'cdm/base/staticdata/asset/common/DeliveryDateParameters',
} as const;
