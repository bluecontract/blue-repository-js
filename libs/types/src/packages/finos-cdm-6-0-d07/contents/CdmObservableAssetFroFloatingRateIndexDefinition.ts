export const CdmObservableAssetFroFloatingRateIndexDefinition = {
  calculationDefaults: {
    description: 'Any calculation default values.',
    type: {
      blueId: 'ffUyq1uLJr9pnbCbPGb4K1JcnKnJuaoqQNJkQwfCi9N',
    },
  },
  fro: {
    description: 'The underlying FRO name and designated maturity.',
    schema: {
      required: {
        type: {
          blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
        },
        value: true,
      },
    },
    type: {
      blueId: '96T2JgQE4VDra6h3ycZ6kq7so3h7TVScf8cEw5kbkkq4',
    },
  },
  name: 'cdm/observable/asset/fro/FloatingRateIndexDefinition',
} as const;
