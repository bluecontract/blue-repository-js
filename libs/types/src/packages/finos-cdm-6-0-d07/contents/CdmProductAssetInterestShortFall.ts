export const CdmProductAssetInterestShortFall = {
  compounding: {
    schema: {
      required: {
        type: {
          blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
        },
        value: true,
      },
    },
    type: {
      blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
    },
  },
  description:
    'A class to specify the interest shortfall floating rate payment event.',
  interestShortfallCap: {
    description:
      'Specifies the nature of the interest Shortfall cap (i.e. Fixed Cap or Variable Cap) in the case where it is applicable. ISDA 2003 Term: Interest Shortfall Cap.\n',
    schema: {
      required: {
        type: {
          blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
        },
        value: true,
      },
    },
    type: {
      blueId: 'F4ABm6Sk4m5YjceKSAfEmsyYDkQG4Zm6byLLXq9kdSpM',
    },
  },
  name: 'cdm/product/asset/InterestShortFall',
  rateSource: {
    description: 'The rate source in the case of a variable cap.',
    type: {
      blueId: 'D1NQDMjhdP9hVZMeu9eipm9vH3aGJP3Zn1Ea8snMVxam',
    },
  },
} as const;
