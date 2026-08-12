export const DocumentBootstrapResponded: Record<string, unknown> = {
  description:
    'Response event for a document bootstrap request. It records the resulting status and optional reason. Concrete\nsystems may use the more specific Completed or Failed events when they want clearer type-level distinction.\n',
  name: 'Document Bootstrap Responded',
  reason: {
    description:
      'Optional reason explaining success, failure, or pending state.\n',
    type: {
      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
    },
  },
  status: {
    description:
      'Bootstrap response status. Prefer a Document Status specialization where possible.\n',
    type: {
      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
    },
  },
  type: {
    blueId: '283zu1pu97gXBs4mquE3MSjwRYTzZSXZhnRSemCH8mZr',
  },
};
