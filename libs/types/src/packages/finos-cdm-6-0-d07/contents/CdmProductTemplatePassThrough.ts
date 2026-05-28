export const CdmProductTemplatePassThrough = {
  description: 'Type which contains pass through payments.',
  name: 'cdm/product/template/PassThrough',
  passThroughItem: {
    description: 'One to many pass through payment items.',
    itemType: {
      blueId: 'Hqwa8X7pvMZZRLdwwa5Cj15xwqMknn63xJyvR4RdpXvF',
    },
    schema: {
      minItems: {
        type: {
          blueId: '5WNMiV9Knz63B4dVY5JtMyh3FB4FSGqv7ceScvuapdE1',
        },
        value: 1,
      },
    },
    type: {
      blueId: '6aehfNAxHLC1PHHoDr3tYtFH3RWNbiWdFancJ1bypXEY',
    },
  },
} as const;
