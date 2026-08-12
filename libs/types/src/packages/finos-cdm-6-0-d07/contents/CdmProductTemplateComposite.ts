export const CdmProductTemplateComposite: Record<string, unknown> = {
  description:
    'Specifies the conditions to be applied for converting into a reference currency when the actual currency rate is not determined upfront.\n',
  determinationMethod: {
    description:
      'Specifies the method according to which an amount or a date is determined.',
    type: {
      blueId: '5jqv11pA6a3Nrtm11SrFfbQvRZZ6ukyLt7PkNLq82wy1',
    },
  },
  fixingTime: {
    description:
      'The time at which the spot currency exchange rate will be observed. It is specified as a time in a business day calendar location, e.g. 11:00am London time.\n',
    type: {
      blueId: '4muK6BKTZZzEij2eR3Dg7sQxj224LzRoyzr5n7UcAR3X',
    },
  },
  fxSpotRateSource: {
    description:
      'Specifies the methodology (reference source and, optionally, fixing time) to be used for determining a currency conversion rate.\n',
    type: {
      blueId: '4Jbze8eVmcTD1NE4zxdWWA7NuWrvuqjSc5a68zCAQD7h',
    },
  },
  name: 'cdm/product/template/Composite',
  relativeDate: {
    description:
      'A date specified as some offset to another date (the anchor date).',
    type: {
      blueId: '9fGwsBbeyL5rQuLRmwyBtyjMjAcmhWfHf4bmyqAXmWtD',
    },
  },
};
