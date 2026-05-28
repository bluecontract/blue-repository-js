export const CdmBaseStaticdataAssetCommonCollateralTaxonomy = {
  description:
    'Specifies the collateral taxonomy, which is composed of a taxonomy value and a taxonomy source.',
  name: 'cdm/base/staticdata/asset/common/CollateralTaxonomy',
  taxonomySource: {
    description: 'Specifies the taxonomy source.',
    schema: {
      required: {
        type: {
          blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
        },
        value: true,
      },
    },
    type: {
      blueId: 'JCJ9MNesX9TGLQYptUpXZV8MhajfmB9tBsCwmJAg1q3K',
    },
  },
  taxonomyValue: {
    description: 'Specifies the taxonomy value.',
    schema: {
      required: {
        type: {
          blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
        },
        value: true,
      },
    },
    type: {
      blueId: '3HrgPHYwkPSXNE4DHc2FFPAowGK3N5VQRnhAg2oYufpe',
    },
  },
} as const;
