export const CdmObservableAssetMultipleCreditNotations = {
  condition: {
    description:
      'An enumerated element, to qualify whether All or Any credit notation applies.',
    schema: {
      required: {
        type: {
          blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
        },
        value: true,
      },
    },
    type: {
      blueId: '63nKry6nGnCtyHC4B341Sun8eUejEvoq7JeK4A4AY7Er',
    },
  },
  creditNotation: {
    description: 'At least two credit notations much be specified.',
    itemType: {
      blueId: 'GxtMQNerdSTaQX4ik747BJde7hdaCUGQs5gCyGs4THE',
    },
    schema: {
      minItems: {
        type: {
          blueId: '5WNMiV9Knz63B4dVY5JtMyh3FB4FSGqv7ceScvuapdE1',
        },
        value: 2,
      },
    },
    type: {
      blueId: '6aehfNAxHLC1PHHoDr3tYtFH3RWNbiWdFancJ1bypXEY',
    },
  },
  description:
    "Represetns a class to specify multiple credit notations alongside a conditional 'any' or 'all' qualifier.",
  mismatchResolution: {
    type: {
      blueId: '8jUUnEg4y5rth3zGXqPDihqz397GjFwaQQYfvUR7VVKU',
    },
  },
  name: 'cdm/observable/asset/MultipleCreditNotations',
  referenceAgency: {
    type: {
      blueId: 'BFNEhsfLPvMSawMY6Q3SUpNzPsjYgQEKYmUQrD92UE4r',
    },
  },
} as const;
