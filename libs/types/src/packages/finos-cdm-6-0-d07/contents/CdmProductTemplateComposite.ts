export const CdmProductTemplateComposite = {
  description:
    'Specifies the conditions to be applied for converting into a reference currency when the actual currency rate is not determined upfront.\n',
  determinationMethod: {
    description:
      'Specifies the method according to which an amount or a date is determined.',
    type: {
      blueId: '3y75YW3Xvg26b63Etnyf7EmxBfhFMUEgAhimCGQ2jyab',
    },
  },
  fixingTime: {
    description:
      'The time at which the spot currency exchange rate will be observed. It is specified as a time in a business day calendar location, e.g. 11:00am London time.\n',
    type: {
      blueId: 'AYcPv3zXSTKojz4MpYi8KWL5Z9TVBuzNzHmzsZe3cYcC',
    },
  },
  fxSpotRateSource: {
    description:
      'Specifies the methodology (reference source and, optionally, fixing time) to be used for determining a currency conversion rate.\n',
    type: {
      blueId: 'HnwRAqr1R2aXWUnkBsKcZ8yNRHPCmQTAVm6griWqkRce',
    },
  },
  name: 'cdm/product/template/Composite',
  relativeDate: {
    description:
      'A date specified as some offset to another date (the anchor date).',
    type: {
      blueId: '2wAd2mDukRH6r2YEZ4kU9e1fcUYpGHT8ZJEwFZFkKaCL',
    },
  },
} as const;
