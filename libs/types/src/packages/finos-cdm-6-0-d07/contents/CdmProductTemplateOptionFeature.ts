export const CdmProductTemplateOptionFeature = {
  averagingFeature: {
    description:
      'Defines an option feature in which an average market observation price is determined on valuation and compared to the strike to determine a settlement amount.\n',
    type: {
      blueId: 'DgMT9GvGPfVpoxATLX7UH2QtPrCD7csg3P5rdgiQxAUg',
    },
  },
  barrier: {
    description: 'Specifies a barrier feature.',
    type: {
      blueId: 'BEbFVsDjqqvf3dVeshgGzf9rW4xPdk4DnECxRAcKSJ3M',
    },
  },
  description:
    'Defines additional optional features that can be included in an option contract.',
  fxFeature: {
    description: 'Describes a quanto or composite FX feature.',
    itemType: {
      blueId: '4vFVJ5RzFY4D7trKTFXSjcQJv9vQk2V1fzpSsA4MHF3u',
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
  knock: {
    description: 'Specifies a knock in or knock out feature.',
    type: {
      blueId: 'CL3hBXyGabfmMpYHcZYWQxP93Xs1YFHL6AcsrLfzFqtB',
    },
  },
  name: 'cdm/product/template/OptionFeature',
  passThrough: {
    description:
      'Specifies the rules for pass-through payments from the underlier, such as dividends.',
    type: {
      blueId: '4d4qPzCq4LAzZkhP87mw5hoXewnyCnGKrdjgtMcZYXWc',
    },
  },
  strategyFeature: {
    description: 'Defines a simple strategy feature.',
    type: {
      blueId: 'DgYhTvKZWcbsWAJhHrAdY7ihYDMtyVr2mPxUjDnwHkUN',
    },
  },
} as const;
