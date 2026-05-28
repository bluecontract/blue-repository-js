export const CdmProductAssetRateSpecification = {
  description:
    'A data type to specify the fixed interest rate, floating interest rate or inflation rate.',
  FixedRateSpecification: {
    description:
      'The fixed rate or fixed rate specification expressed as explicit fixed rates and dates.',
    type: {
      blueId: '46SWDPN5nuL9ZzDydHQsubnAhiJ9bTSAdCTzFqR4v3uz',
    },
  },
  FloatingRateSpecification: {
    description:
      'The floating interest rate specification, which includes the definition of the floating rate index. the tenor, the initial value, and, when applicable, the spread, the rounding convention, the averaging method and the negative interest rate treatment.\n',
    type: {
      blueId: '2EMfLJYhLWvzUA3EhndQzxjEwTJz1JeAYUNjZDJL66PJ',
    },
  },
  InflationRateSpecification: {
    description: 'An inflation rate calculation definition.',
    type: {
      blueId: 'EjsFU4aMgFpnjbnat7xVhaXFrniJ8sabV7w3XFBgP3C3',
    },
  },
  name: 'cdm/product/asset/RateSpecification',
} as const;
