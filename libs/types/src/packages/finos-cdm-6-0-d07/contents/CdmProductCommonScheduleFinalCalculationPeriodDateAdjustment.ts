export const CdmProductCommonScheduleFinalCalculationPeriodDateAdjustment: Record<
  string,
  unknown
> = {
  businessDayConvention: {
    description:
      'Override business date convention. This takes precedence over leg level information.',
    schema: {
      required: true,
    },
    type: {
      blueId: 'UEYhmdmBmLhrdtL1ThGtACP6Ljtvao5EVBeQdbiB2XJ',
    },
  },
  description:
    'A data to:  define business date convention adjustment to final payment period per leg.\n',
  name: 'cdm/product/common/schedule/FinalCalculationPeriodDateAdjustment',
  relevantUnderlyingDateReference: {
    description: 'Reference to the unadjusted cancellation effective dates.',
    schema: {
      required: true,
    },
    type: {
      blueId: 'F2nvaUqNbFKSuzYyyhRM8m7PgfFhFvkDbejeQWX9jYCs',
    },
  },
  swapStreamReference: {
    description: 'Reference to the leg, where date adjustments may apply.',
    schema: {
      required: true,
    },
    type: {
      blueId: '2U7YP6Ym1jX4mFm5GexJ4F3psZB836JfxHmp6MF1dcAF',
    },
  },
};
