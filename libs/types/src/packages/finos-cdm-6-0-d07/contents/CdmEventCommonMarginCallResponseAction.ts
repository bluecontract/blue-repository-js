export const CdmEventCommonMarginCallResponseAction: Record<string, unknown> = {
  collateralPositionComponent: {
    description: 'Specifies the collateral to be moved and its direction.',
    itemType: {
      blueId: 'GtabA8b7typ1gjwtAYshA1eaECFCwLWHkBauTVQ8PMpV',
    },
    schema: {
      minItems: 1,
    },
    type: {
      blueId: '8DSFoWG9MqRSUhStqoPLrwVQiYByRh18NWbDEarN8MKF',
    },
  },
  description:
    'Specifies the margin call action details, including collateral to be moved and its direction.',
  marginCallAction: {
    description:
      'Specifies the margin call action details, specified as either Delivery or Return.',
    schema: {
      required: true,
    },
    type: {
      blueId: 'Dy79m3owCNn7dpCvsFfY1sEPZJQ48TPExyAXJVFD8Wdf',
    },
  },
  name: 'cdm/event/common/MarginCallResponseAction',
};
