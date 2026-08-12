export const CdmProductTemplateOptionFeature: Record<string, unknown> = {
  averagingFeature: {
    description:
      'Defines an option feature in which an average market observation price is determined on valuation and compared to the strike to determine a settlement amount.\n',
    type: {
      blueId: 'Dm6X9rfSBnx7WqRtQ4eeZ3yyCpGqTHJWsE6vycZx4yix',
    },
  },
  barrier: {
    description: 'Specifies a barrier feature.',
    type: {
      blueId: 'CKW4kL4HmFUwvVHYa1fL21kzW7ALWAXnaHrVK5vXB2iM',
    },
  },
  description:
    'Defines additional optional features that can be included in an option contract.',
  fxFeature: {
    description: 'Describes a quanto or composite FX feature.',
    itemType: {
      blueId: '4Evx6ctCQA9KW4zWZBuRVzGni9eknk1oQDCWfhxNfdg9',
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
      blueId: '6eo2sKjpFosGead5TWCzCjjLBBK8ZkYk3NbSdBGcVdbZ',
    },
  },
  name: 'cdm/product/template/OptionFeature',
  passThrough: {
    description:
      'Specifies the rules for pass-through payments from the underlier, such as dividends.',
    type: {
      blueId: 'BwWFicbdS15kQQwDYWi4dL1uT4UxHHhJiXdfZWBPB6hN',
    },
  },
  strategyFeature: {
    description: 'Defines a simple strategy feature.',
    type: {
      blueId: '5FY1FUfgFT4nN3Byvi6mYwPrpJ6JFpsc6yBQVo6V5tb7',
    },
  },
};
