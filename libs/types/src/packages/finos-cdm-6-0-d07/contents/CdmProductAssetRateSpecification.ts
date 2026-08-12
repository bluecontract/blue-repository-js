export const CdmProductAssetRateSpecification: Record<string, unknown> = {
  description:
    'A data type to specify the fixed interest rate, floating interest rate or inflation rate.',
  FixedRateSpecification: {
    description:
      'The fixed rate or fixed rate specification expressed as explicit fixed rates and dates.',
    type: {
      blueId: 'EGYqbJxyubwqpMiSD4GyaqjF8JLLc2R5X7drZoPxyc1k',
    },
  },
  FloatingRateSpecification: {
    description:
      'The floating interest rate specification, which includes the definition of the floating rate index. the tenor, the initial value, and, when applicable, the spread, the rounding convention, the averaging method and the negative interest rate treatment.\n',
    type: {
      blueId: 'ANmCF3xmaUGNncVaDabTkkZxZmT5nvtE48NwyhYMN9Ev',
    },
  },
  InflationRateSpecification: {
    description: 'An inflation rate calculation definition.',
    type: {
      blueId: 'HgvUazWUT3cYBnJe67N6uNczREHE3zyrajGM4ouhEa1L',
    },
  },
  name: 'cdm/product/asset/RateSpecification',
};
