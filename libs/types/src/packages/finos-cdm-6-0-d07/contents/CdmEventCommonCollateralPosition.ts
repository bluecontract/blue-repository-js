export const CdmEventCommonCollateralPosition: Record<string, unknown> = {
  cashBalance: {
    description: 'The aggregate cost of proceeds',
    type: {
      blueId: 'A6JZXX4Rug3aj7cJh48V6FeziSECwFQzyrJ1xUwd9kii',
    },
  },
  collateralPositionStatus: {
    description: 'Indicates the collateral positions settlement status.',
    type: {
      blueId: '6ctehAVhDiuTwXfG2zzPiqjPq4Chs91k7cZy6gJecUMe',
    },
  },
  description: 'Specifies the individual components of collateral positions.',
  name: 'cdm/event/common/CollateralPosition',
  priceQuantity: {
    description: 'Position with many price quantities.',
    itemType: {
      blueId: '4XEYGgCSfXx2tFwmQjMsXhuwaCjsNZ42jtKAcr8itiqe',
    },
    schema: {
      minItems: 1,
    },
    type: {
      blueId: '8DSFoWG9MqRSUhStqoPLrwVQiYByRh18NWbDEarN8MKF',
    },
  },
  product: {
    description: 'The product underlying the position.',
    type: {
      blueId: '52zbUBnH8375AE19gNSXRU7GgGs5tcoUhR84LVdMrBWi#0',
    },
  },
  tradeReference: {
    description:
      'Reference to the Contract, in case product is contractual and the contract has been formed',
    type: {
      blueId: 'EQ41UGrPkUeaUNXD9QmELA1aEoVBtx9tVzgQZ5Tp1rMT',
    },
  },
  treatment: {
    description:
      'Specifies if there is any treatment to be applied to collateral, such as percentage discount which will impact collateral value.\n',
    type: {
      blueId: 'DZVNm4GP1a1Vs3D9hXgk2tvtUToKxrwkmGmrJcM2kNK',
    },
  },
};
