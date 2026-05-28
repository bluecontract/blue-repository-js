export const CdmProductAssetSpreadSchedule = {
  description:
    'Adds an optional spread type element to the Schedule to identify a long or short spread value.',
  name: 'cdm/product/asset/SpreadSchedule',
  price: {
    description:
      'The initial rate. An initial rate of 5% would be represented as 0.05.',
    type: {
      blueId: 'BwqVRaSdNEfKjjtV8yGLCFuEEKSyzFJGiBUyEEVkD25',
    },
  },
  spreadScheduleType: {
    description:
      'An element which purpose is to identify a long or short spread value.',
    type: {
      blueId: '6BMwav4uPAPxHDeLGeAJfRnPnXj8bbdd7czs69vEFKGe',
    },
  },
} as const;
