export const CdmProductCommonScheduleFinalCalculationPeriodDateAdjustment = {
  businessDayConvention: {
    description:
      'Override business date convention. This takes precedence over leg level information.',
    schema: {
      required: {
        type: {
          blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
        },
        value: true,
      },
    },
    type: {
      blueId: 'EP4PK7ibh1EaWh9sLTjFcwVikiRQECurvR5Nb9ZPbJCs',
    },
  },
  description:
    'A data to:  define business date convention adjustment to final payment period per leg.\n',
  name: 'cdm/product/common/schedule/FinalCalculationPeriodDateAdjustment',
  relevantUnderlyingDateReference: {
    description: 'Reference to the unadjusted cancellation effective dates.',
    schema: {
      required: {
        type: {
          blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
        },
        value: true,
      },
    },
    type: {
      blueId: '2JofigEJD6epctAhG3VgunrLaPXKzTDmRyfSZzpFHEkS',
    },
  },
  swapStreamReference: {
    description: 'Reference to the leg, where date adjustments may apply.',
    schema: {
      required: {
        type: {
          blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
        },
        value: true,
      },
    },
    type: {
      blueId: '9s7DmteKxA3yXxQB2nMZpieJDgH1HyVyhHrufLuusW3Z',
    },
  },
} as const;
