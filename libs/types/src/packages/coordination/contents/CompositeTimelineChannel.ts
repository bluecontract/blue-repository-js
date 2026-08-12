export const CompositeTimelineChannel: Record<string, unknown> = {
  channels: {
    description:
      'Same-scope contract-map keys of Timeline Channel contracts included in this composite. The list order is not a\ncross-timeline ordering rule; event ordering must be established by the feeder/provider layer and deterministic\nprocessor sorting.\n',
    itemType: {
      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
    },
    type: {
      blueId: '8DSFoWG9MqRSUhStqoPLrwVQiYByRh18NWbDEarN8MKF',
    },
  },
  description:
    "Channel contract that groups several same-scope Timeline Channels into one union channel. A Composite Timeline\nChannel matches when any referenced child channel would accept the delivered event. It is useful when a workflow\nshould react to a family of participant timelines while binding handlers to one logical channel key.\n\nThe composite has no timeline or actor of its own. Each referenced Timeline Channel supplies its own timeline and actor\nbinding, and the composite delegates event eligibility to those children. If several children accept the same entry,\nthe composite produces one logical delivery to handlers bound to the composite key. The composite's checkpoint is\nindependent from checkpoints of child channels used directly elsewhere in the document.\n\nThis type does not create global consensus and does not collapse the child timelines into one storage log. Each child\ntimeline retains its provider, completeness, actor attribution, and trust model. The composite only simplifies routing\ninside the document. A correct feeder/processor must still preserve deterministic ordering across the relevant\ntimelines using provider completeness guarantees and the Blue Contracts checkpoint model.\n",
  name: 'Composite Timeline Channel',
  type: {
    blueId: 'CaFMD5Tpz4LbGjJsftT3465hKBWa7Ti6dutYHnCSRQyR',
  },
};
