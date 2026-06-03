export const CdmEventPositionInventoryRecord: Record<string, unknown> = {
  description:
    'An individual piece of inventory. This represents a single security.',
  identifer: {
    description:
      'Unique identifier for this record. This can be used to uniquely identify a specific piece of inventory.',
    schema: {
      required: true,
    },
    type: {
      blueId: 'HUSEHXgSpK91Brg3mku9fHTV4D8bnuM9D7uwKV2HynTU',
    },
  },
  name: 'cdm/event/position/InventoryRecord',
  security: {
    description: 'The security details.',
    schema: {
      required: true,
    },
    type: {
      blueId: '5R9o4hMGFG6JsprSkPFoQuMmr2FvfKQchfGbxtSgy2JY',
    },
  },
};
