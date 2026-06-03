export const Operation: Record<string, unknown> = {
  channel: {
    description:
      'Same-scope channel key through which Operation Request events for this operation are expected to arrive.\n',
    type: {
      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
    },
  },
  description:
    'Base contract type describing a named operation supported by a document or scope. An Operation gives a stable name to\na business action, specifies the channel through which requests for that action arrive, and describes the expected\nrequest payload shape.\n\nOperation is metadata for a supported runtime. It does not execute by itself. A Sequential Workflow Operation or other\nconcrete operation type binds this operation metadata to executable workflow steps. Actor Policy and source policy\ntypically refer to operation names when deciding whether a Timeline Entry or Operation Request may be processed.\n',
  name: 'Operation',
  request: {
    description:
      'Expected request payload shape or description for this operation. Concrete operation runtimes may use this for event\nmatching, validation, or documentation.\n',
  },
  type: {
    blueId: '6zqbYGDGrMv5ReuEsjyzyyjjuqVnqDZxtY7RsPXdBTNy',
  },
};
