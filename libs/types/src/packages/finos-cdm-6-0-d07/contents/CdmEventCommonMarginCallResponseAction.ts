export const CdmEventCommonMarginCallResponseAction: Record<string, unknown> = {
  collateralPositionComponent: {
    description: 'Specifies the collateral to be moved and its direction.',
    itemType: {
      blueId: '9Pn2rDgMph8R9xESVmd1HEN7zV1kPPCcUAMomnz2RDAT',
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
      blueId: '9CwCB3Fnvz24SzGuu8TbsuxrVJz8FFCvQCzGsfUyEjHK',
    },
  },
  name: 'cdm/event/common/MarginCallResponseAction',
};
