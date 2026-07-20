export const DocumentStatus: Record<string, unknown> = {
  description:
    'Base type for document status markers. A Document Status summarizes the current lifecycle or business state of a\ncoordination document in a compact, machine-readable form.\n\nConcrete statuses specialize this type by fixing the `mode` field and may use\ntheir concrete type to distinguish business outcomes that share a lifecycle\nmode. Status values are Blue content: changing status changes document\nidentity and may trigger Document Update channels or workflows.\n',
  mode: {
    description:
      'Canonical lifecycle mode. Concrete status types fix this value to `pending`,\n`active`, or `terminated`; the concrete type distinguishes outcomes such as\ncompletion, failure, and decline.\n',
    type: {
      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
    },
  },
  name: 'Document Status',
};
