export const CdmProductTemplateOptionFeature: Record<string, unknown> = {
  averagingFeature: {
    description:
      'Defines an option feature in which an average market observation price is determined on valuation and compared to the strike to determine a settlement amount.\n',
    type: {
      blueId: 'G81eqYsDuMYSpYk1hESW7JLhMtsEbDs8dVTux7zmXLUZ',
    },
  },
  barrier: {
    description: 'Specifies a barrier feature.',
    type: {
      blueId: 'BY44nAmZ3yv6hAhiK1EG57TXEZNquFC8QoiMLUBELm2h',
    },
  },
  description:
    'Defines additional optional features that can be included in an option contract.',
  fxFeature: {
    description: 'Describes a quanto or composite FX feature.',
    itemType: {
      blueId: 'HPRsaReKQuhsZQyFweRGJshuiWo9hd1r6CsmkM6iPQnN',
    },
    schema: {
      minItems: 0,
    },
    type: {
      blueId: '8DSFoWG9MqRSUhStqoPLrwVQiYByRh18NWbDEarN8MKF',
    },
  },
  knock: {
    description: 'Specifies a knock in or knock out feature.',
    type: {
      blueId: '6BETyPG5V4U1TUp5rVWo3V4V47SDx9g18ekbAAYhpp4U',
    },
  },
  name: 'cdm/product/template/OptionFeature',
  passThrough: {
    description:
      'Specifies the rules for pass-through payments from the underlier, such as dividends.',
    type: {
      blueId: '48DkPx7UNHrRug36JutQfuqHBiEgcCS2XZiEbFZ4xi4q',
    },
  },
  strategyFeature: {
    description: 'Defines a simple strategy feature.',
    type: {
      blueId: '8Y5hzBqBHEUiwLTnEj3w34yWp3pZ7s2RiBzE2Mi9or3v',
    },
  },
};
