export const CdmEventCommonValuationInstruction: Record<string, unknown> = {
  description: 'Specifies inputs needed to process a valuation.',
  name: 'cdm/event/common/ValuationInstruction',
  replace: {
    description:
      'Specifies whether the previous valuation tracks in the valuation history are removed (True) or kept (False).',
    schema: {
      required: true,
    },
    type: {
      blueId: 'AwvXD961fmnmqcSQhjMA7r15HpVh39cefb6ZTyUz2Fm2',
    },
  },
  valuation: {
    description: 'Contains all information related to a valuation.',
    itemType: {
      blueId: '7fUqjcMznRtsQXbh382nhVNPoG8pPi1kH6C6QRJ1NXii',
    },
    schema: {
      minItems: 1,
    },
    type: {
      blueId: '8DSFoWG9MqRSUhStqoPLrwVQiYByRh18NWbDEarN8MKF',
    },
  },
};
