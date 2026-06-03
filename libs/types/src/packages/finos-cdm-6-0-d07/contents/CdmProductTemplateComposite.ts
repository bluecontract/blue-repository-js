export const CdmProductTemplateComposite: Record<string, unknown> = {
  description:
    'Specifies the conditions to be applied for converting into a reference currency when the actual currency rate is not determined upfront.\n',
  determinationMethod: {
    description:
      'Specifies the method according to which an amount or a date is determined.',
    type: {
      blueId: 'F2XKDuytcyrcyYVFazD7Tuqtk1J9p5rtwDxh9Y9PUUWH',
    },
  },
  fixingTime: {
    description:
      'The time at which the spot currency exchange rate will be observed. It is specified as a time in a business day calendar location, e.g. 11:00am London time.\n',
    type: {
      blueId: '4Mi73c2rJbGTBeaTVi4xUgW33QBxsUyxSSV6ELoqnP4j',
    },
  },
  fxSpotRateSource: {
    description:
      'Specifies the methodology (reference source and, optionally, fixing time) to be used for determining a currency conversion rate.\n',
    type: {
      blueId: 'AxAyn6UgyoJj9YDT4soz7eYpmhL8U6kEzFxGMonZgxcg',
    },
  },
  name: 'cdm/product/template/Composite',
  relativeDate: {
    description:
      'A date specified as some offset to another date (the anchor date).',
    type: {
      blueId: '4JvKSv6NGWh8hqfN6miPYiWwfE3g61v9yBhQuXc8tB8z',
    },
  },
};
