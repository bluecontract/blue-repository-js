export const Operation: Record<string, unknown> = {
  channel: {
    description:
      'Same-scope channel key through which Operation Request events for this operation are expected to arrive. This is the\nHandler channel binding for the operation.\n',
    type: {
      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
    },
  },
  description:
    'Base handler contract type describing a named operation supported by a document or scope. An Operation gives a stable\nname to a business action, binds that action to a same-scope channel, and describes the expected request payload\nshape.\n\nOperation is the common interface for operation handlers. A plain Operation declares the channel and request shape;\nconcrete operation types such as Sequential Workflow Operation provide the executable behavior. Actor Policy and\nsource policy typically refer to operation names when deciding whether a Timeline Entry or Operation Request may be\nprocessed.\n',
  name: 'Operation',
  request: {
    description:
      'Expected request payload shape or description for this operation. Concrete operation runtimes may use this for event\nmatching, validation, or documentation.\n',
  },
  type: {
    blueId: '7X46P3Q6FJrogqKrBXTALpqzkieyyiQeatnqLvWzAPXE',
  },
};
