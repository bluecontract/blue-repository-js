export const DocumentStatus: Record<string, unknown> = {
  description:
    'Base type for document status markers. A Document Status summarizes the current lifecycle or business state of a\ncoordination document in a compact, machine-readable form.\n\nConcrete statuses such as pending, in progress, completed, and failed specialize this type by fixing the `mode` field.\nStatus values are Blue content: changing status changes document identity and may trigger Document Update channels or\nworkflows.\n',
  mode: {
    description:
      'Canonical status mode text. Concrete status types fix this value, for example `pending`, `inProgress`, `completed`,\nor `failed`.\n',
    type: {
      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
    },
  },
  name: 'Document Status',
};
