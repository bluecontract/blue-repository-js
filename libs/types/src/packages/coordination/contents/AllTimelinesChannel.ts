export const AllTimelinesChannel: Record<string, unknown> = {
  description:
    'Dynamic union channel that matches entries from all Timeline-derived channels in the same contracts scope. It is the\ncompact form for operations that should be callable by every current participant, such as chat or purpose/role\nconfirmation. When participant channels are added or removed through normal document updates, this channel follows the\ncurrent document structure automatically.\n\nThe union has no timeline or actor of its own. It delegates eligibility to the same-scope Timeline Channels, each of\nwhich supplies its own timeline and actor binding. If several child channels accept the same entry, this channel\nproduces one logical delivery to handlers bound to the All Timelines Channel key. Its checkpoint is independent from\ncheckpoints of child channels used directly elsewhere in the document.\n\nAll Timelines Channel does not create a new timeline, does not merge provider proofs, and does not change ordering.\nThe feeder/runtime must still obtain completeness for every timeline that participates in the current document scope\nand must deliver entries in the canonical deterministic order. The channel only simplifies authoring by avoiding a\nmanually maintained Composite Timeline Channel for "everyone at the table".\n',
  name: 'All Timelines Channel',
  type: {
    blueId: 'CaFMD5Tpz4LbGjJsftT3465hKBWa7Ti6dutYHnCSRQyR',
  },
};
