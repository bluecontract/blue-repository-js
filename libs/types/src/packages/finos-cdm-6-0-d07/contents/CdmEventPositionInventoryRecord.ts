export const CdmEventPositionInventoryRecord = {
  description:
    'An individual piece of inventory. This represents a single security.',
  identifer: {
    description:
      'Unique identifier for this record. This can be used to uniquely identify a specific piece of inventory.',
    schema: {
      required: {
        type: {
          blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
        },
        value: true,
      },
    },
    type: {
      blueId: 'CNZP6GsTZi731ekV62fUVAXc2yL9DVbiHje2LSX8DmWf',
    },
  },
  name: 'cdm/event/position/InventoryRecord',
  security: {
    description: 'The security details.',
    schema: {
      required: {
        type: {
          blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
        },
        value: true,
      },
    },
    type: {
      blueId: 'AKAF6F23pDRPx5M9gsqtAKXBUf46Vnz1STHsk38YEAWm',
    },
  },
} as const;
