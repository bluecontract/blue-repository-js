export const CdmProductTemplateQuanto = {
  description:
    'Determines the currency rate that the seller of the equity amounts will apply at each valuation date for converting the respective amounts into a currency that is different from the currency denomination of the underlier.\n',
  fixingTime: {
    description:
      'The time at which the spot currency exchange rate will be observed. It is specified as a time in a business day calendar location, e.g. 11:00am London time.\n',
    type: {
      blueId: 'AYcPv3zXSTKojz4MpYi8KWL5Z9TVBuzNzHmzsZe3cYcC',
    },
  },
  fxRate: {
    description: 'Specifies a currency conversion rate.',
    itemType: {
      blueId: 'GUt1SUo6dMPSuntNueHZRjt3nrrab2xJB86nBLGRQrEY',
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
  fxSpotRateSource: {
    description:
      'Specifies the methodology (reference source and, optionally, fixing time) to be used for determining a currency conversion rate.\n',
    type: {
      blueId: 'HnwRAqr1R2aXWUnkBsKcZ8yNRHPCmQTAVm6griWqkRce',
    },
  },
  name: 'cdm/product/template/Quanto',
} as const;
