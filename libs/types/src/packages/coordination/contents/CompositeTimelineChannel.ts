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
    'Channel contract that groups several same-scope Timeline Channels into one union channel. A Composite Timeline\nChannel matches when any referenced child channel would accept the delivered event. It is useful when a workflow\nshould react to a family of participant timelines while binding handlers to one logical channel key.\n\nThis type does not create global consensus and does not collapse the child timelines into one storage log. Each child\ntimeline retains its provider, checkpoint, completeness, actor attribution, and trust model. The composite only\nsimplifies routing inside the document. A correct feeder/processor must still preserve deterministic ordering across\nthe relevant timelines using provider completeness guarantees and the Blue Contracts checkpoint model.\n',
  name: 'Composite Timeline Channel',
  type: {
    blueId: '4FAZ94JPExNM4pn2ZhtdHa4CVP7uASmLNVrBy7aCG1p5',
  },
};
