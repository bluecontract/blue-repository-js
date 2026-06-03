export const CdmEventPositionAggregationParameters: Record<string, unknown> = {
  dateTime: {
    description: 'To aggregate as of a particular date',
    schema: {
      required: true,
    },
    type: {
      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
    },
  },
  description:
    'Parameters to be used to filter events that are relevant to a given portfolio in order to calculate the state of this portfolio. The attributes correspond to all the possible aggregation criteria that can be used and these criteria can be combined. All the attributes are optional.\n',
  name: 'cdm/event/position/AggregationParameters',
  party: {
    description:
      'To aggregate based on a selection of party(ies) / legal entity(ies).',
    itemType: {
      blueId: 'Doqu2fdYiHUWbSaMDHL5YoyEeuzbTrSjqbT1ZLqmB1Cr',
    },
    schema: {
      minItems: 0,
    },
    type: {
      blueId: '8DSFoWG9MqRSUhStqoPLrwVQiYByRh18NWbDEarN8MKF',
    },
  },
  positionStatus: {
    description:
      'To aggregate based on position status (EXECUTED, SETTLED etc)',
    type: {
      blueId: 'CtjNKoKQ8S3xNPyMY6GXJKQAAfjxpTQmdDgLUNE3iAJM',
    },
  },
  product: {
    description: 'To aggregate based on a selection of products.',
    itemType: {
      blueId: '8uQuzNQKBLC5kpFy4UH3BU7PPtpbRZEfLQ2ftrsgLHbm#4',
    },
    schema: {
      minItems: 0,
    },
    type: {
      blueId: '8DSFoWG9MqRSUhStqoPLrwVQiYByRh18NWbDEarN8MKF',
    },
  },
  productQualifier: {
    description: 'To aggregate based on a selection of product type(s).',
    itemType: {
      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
    },
    schema: {
      minItems: 0,
    },
    type: {
      blueId: '8DSFoWG9MqRSUhStqoPLrwVQiYByRh18NWbDEarN8MKF',
    },
  },
  totalPosition: {
    description:
      'Specifies whether to calculate total position to given date, or only daily position for the given date.',
    type: {
      blueId: 'AwvXD961fmnmqcSQhjMA7r15HpVh39cefb6ZTyUz2Fm2',
    },
  },
  tradeReference: {
    itemType: {
      blueId: 'C5nADRBcWM2dKjXzJRRmahbypM7x2DUsv7Mxpuc9uPRu',
    },
    schema: {
      minItems: 0,
    },
    type: {
      blueId: '8DSFoWG9MqRSUhStqoPLrwVQiYByRh18NWbDEarN8MKF',
    },
  },
};
