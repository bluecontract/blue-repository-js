export const Operation: Record<string, unknown> = {
  channel: {
    description:
      'Same-scope effective channel key used to discover and invoke this Operation handler. An Operation Request may be\naccepted through a different eligible source channel; the feeder validates source and authority constraints, and a\nsupporting processor routes the accepted request to this effective channel without transferring source-channel\ncheckpoint ownership.\n',
    type: {
      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
    },
  },
  description:
    'Base handler contract type describing a named operation supported by a document or scope. An Operation gives a stable\nname to a business action, binds that action to a same-scope effective handler channel, and describes the expected\nrequest payload shape.\n\nOperation is the common interface for operation handlers. A plain Operation declares the channel and request shape;\nconcrete operation types such as Sequential Workflow Operation provide the executable behavior. Actor Policy and\nsource policy typically refer to operation names when deciding whether a Timeline Entry or Operation Request may be\nprocessed.\n',
  name: 'Operation',
  request: {
    description:
      'Expected request payload shape or description for this operation. Concrete operation runtimes may use this for event\nmatching, validation, or documentation.\n',
  },
  type: {
    blueId: '2Ag2NfcWpCfPqBAR7bFAEL9L3roX3UWGUkDq7nN3D4gV',
  },
};
