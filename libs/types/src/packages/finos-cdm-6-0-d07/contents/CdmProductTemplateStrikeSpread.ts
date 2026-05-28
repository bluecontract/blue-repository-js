export const CdmProductTemplateStrikeSpread = {
  description: 'A class for defining a strike spread feature.',
  name: 'cdm/product/template/StrikeSpread',
  upperStrike: {
    description: 'Upper strike in a strike spread.',
    schema: {
      required: {
        type: {
          blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
        },
        value: true,
      },
    },
    type: {
      blueId: 'Ah265ohZqxFXsWTp62UC3yWMvZAwGymx5y9Hu55yG4MN',
    },
  },
  upperStrikeNumberOfOptions: {
    description:
      'Number of options at the upper strike price in a strike spread.',
    schema: {
      required: {
        type: {
          blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
        },
        value: true,
      },
    },
    type: {
      blueId: '7pwXmXYCJtWnd348c2JQGBkm9C4renmZRwxbfaypsx5y',
    },
  },
} as const;
