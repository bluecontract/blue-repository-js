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
      blueId: 'FkMWf1pd7YUm7zUWH64xW6YKJEWnWCzUoCiDxJWMWd2U',
    },
  },
  name: 'cdm/event/position/InventoryRecord',
  security: {
    description: 'The security details.',
    schema: {
      required: true,
    },
    type: {
      blueId: 'GRccc39hoCxirVd5AgYHyNZT6TtiBJj8USkFUA6nQcfG',
    },
  },
};
