export const CdmProductAssetFloatingrateFloatingRateProcessingParameters = {
  capRate: {
    description: 'capt to be applied to the floating rate.',
    type: {
      blueId: '7pwXmXYCJtWnd348c2JQGBkm9C4renmZRwxbfaypsx5y',
    },
  },
  description:
    'Type to hold the processing parameters that should be or were used to calculate a floating amount.  These parameters can vary over a schedule so this type holds the acutal values applicable to this calculation.\n',
  floorRate: {
    description: 'floor to be applied to the floating rate.',
    type: {
      blueId: '7pwXmXYCJtWnd348c2JQGBkm9C4renmZRwxbfaypsx5y',
    },
  },
  initialRate: {
    description: 'The rate to be applied for the initial period.',
    type: {
      blueId: 'wuC3RHpv6ahucWwxTgdeQyeUP8ecWQQqgMvSpx3Z543',
    },
  },
  multiplier: {
    description: 'floating rate multiplier.',
    type: {
      blueId: '7pwXmXYCJtWnd348c2JQGBkm9C4renmZRwxbfaypsx5y',
    },
  },
  name: 'cdm/product/asset/floatingrate/FloatingRateProcessingParameters',
  negativeTreatment: {
    description: 'How to handle negative interest rates.',
    type: {
      blueId: 'CyvEqKQpGL1tCK33KuVNmoqqfPY41YR2zXaxhgsjDER2',
    },
  },
  rounding: {
    description: 'THe final rate rounding to be applied.',
    type: {
      blueId: 'ArfQ58kSzN4QkRNkhhMYbmgBrEGPrnnSSA4sgC1Stoho',
    },
  },
  spread: {
    description: 'spread to be added to the floating rate.',
    type: {
      blueId: '7pwXmXYCJtWnd348c2JQGBkm9C4renmZRwxbfaypsx5y',
    },
  },
  treatment: {
    description:
      'US rate treatment (Bond Equivalent Yield or Money Market Yield, if applicable.',
    type: {
      blueId: '8GhAUMM1Z2VZSQY9oufxMtUgDuQ5iTuBVYEYrjnYQBBt',
    },
  },
} as const;
