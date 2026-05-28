export const CdmProductAssetFixedRateSpecification = {
  description: 'Type defining the specification for a fixed rate.',
  name: 'cdm/product/asset/FixedRateSpecification',
  rateSchedule: {
    description:
      'The fixed rate or fixed rate schedule expressed as explicit fixed rates and dates. In the case of a schedule, the step dates may be subject to adjustment in accordance with any adjustments specified in calculationPeriodDatesAdjustments.\n',
    type: {
      blueId: '3ScAWMceSndUiR2vHtzZGzPGccvuNjx7L5TmQVXQ9AYf',
    },
  },
} as const;
