export const CdmProductAssetRateSpecification: Record<string, unknown> = {
  description:
    'A data type to specify the fixed interest rate, floating interest rate or inflation rate.',
  FixedRateSpecification: {
    description:
      'The fixed rate or fixed rate specification expressed as explicit fixed rates and dates.',
    type: {
      blueId: '9svusKr6LvCBhk7gV6JsbPAwwXWASiSTahN4JPrDC5rH',
    },
  },
  FloatingRateSpecification: {
    description:
      'The floating interest rate specification, which includes the definition of the floating rate index. the tenor, the initial value, and, when applicable, the spread, the rounding convention, the averaging method and the negative interest rate treatment.\n',
    type: {
      blueId: '7Qg4XRChRagWG1WXXQ6SxKQFUAWi38ZztLZRLJigyUr8',
    },
  },
  InflationRateSpecification: {
    description: 'An inflation rate calculation definition.',
    type: {
      blueId: 'FWV3Br4aKDWruqfn5vhLVt6xEv37srRU5k5YncDQvGnz',
    },
  },
  name: 'cdm/product/asset/RateSpecification',
};
