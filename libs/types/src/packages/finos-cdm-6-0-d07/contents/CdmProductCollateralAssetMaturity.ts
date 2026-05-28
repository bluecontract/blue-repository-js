export const CdmProductCollateralAssetMaturity = {
  maturityRange: {
    description: 'Represents a filter based on the underlying asset maturity.',
    schema: {
      required: {
        type: {
          blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
        },
        value: true,
      },
    },
    type: {
      blueId: '9U8DjGW5C9KDiofbqRSgjUGn8zzm279fFRHZ1W9VNLoD',
    },
  },
  maturityType: {
    description:
      'Specifies whether the maturity range is the remaining or original maturity.',
    schema: {
      required: {
        type: {
          blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
        },
        value: true,
      },
    },
    type: {
      blueId: '4FEgZ2S5mgNGfwpTRngN5cA9QySYVkoZyRvstY7sKH9x',
    },
  },
  name: 'cdm/product/collateral/AssetMaturity',
} as const;
