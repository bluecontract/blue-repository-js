export const CdmProductTemplateQuanto: Record<string, unknown> = {
  description:
    'Determines the currency rate that the seller of the equity amounts will apply at each valuation date for converting the respective amounts into a currency that is different from the currency denomination of the underlier.\n',
  fixingTime: {
    description:
      'The time at which the spot currency exchange rate will be observed. It is specified as a time in a business day calendar location, e.g. 11:00am London time.\n',
    type: {
      blueId: '4Mi73c2rJbGTBeaTVi4xUgW33QBxsUyxSSV6ELoqnP4j',
    },
  },
  fxRate: {
    description: 'Specifies a currency conversion rate.',
    itemType: {
      blueId: '3j6sxnQ7QgWXvufbYN59akG5xPy8Sz1wg8Lr1nR32iFw',
    },
    schema: {
      minItems: 0,
    },
    type: {
      blueId: '8DSFoWG9MqRSUhStqoPLrwVQiYByRh18NWbDEarN8MKF',
    },
  },
  fxSpotRateSource: {
    description:
      'Specifies the methodology (reference source and, optionally, fixing time) to be used for determining a currency conversion rate.\n',
    type: {
      blueId: 'AxAyn6UgyoJj9YDT4soz7eYpmhL8U6kEzFxGMonZgxcg',
    },
  },
  name: 'cdm/product/template/Quanto',
};
