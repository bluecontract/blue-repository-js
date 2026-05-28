export const CdmProductCommonSettlementPricingDates = {
  description:
    'Specifies specific dates or parametric rules for the dates on which the price will be determined',
  name: 'cdm/product/common/settlement/PricingDates',
  parametricDates: {
    description:
      'Defines rules for the dates on which the price will be determined.',
    type: {
      blueId: 'CnFPWcJf9xSTq4FLwvkKAXcrxAjrdDmjq7gzPjKyC2MN',
    },
  },
  specifiedDates: {
    description:
      'Defines specified dates on which the price will be determined.',
    itemType: {
      blueId: '3UQyaunu7noHsnkXtFNJHuwdv1AH6Uq6MZ1bZSHN9hYW',
    },
    schema: {
      minItems: {
        type: {
          blueId: '5WNMiV9Knz63B4dVY5JtMyh3FB4FSGqv7ceScvuapdE1',
        },
        value: 0,
      },
    },
    type: {
      blueId: '6aehfNAxHLC1PHHoDr3tYtFH3RWNbiWdFancJ1bypXEY',
    },
  },
} as const;
