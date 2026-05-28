export const CompositeTimelineChannel = {
  channels: {
    description:
      'List of contracts-map keys (Text) of channels in the same scope to compose (union). Each entry must name an existing Channel contract.\n',
    itemType: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
    type: {
      blueId: '6aehfNAxHLC1PHHoDr3tYtFH3RWNbiWdFancJ1bypXEY',
    },
  },
  description:
    "Channel contract that composes several same-scope Timeline Channel contracts into a single union channel. It matches an\nincoming event when any child channel named in `channels` would match. This is useful when a workflow should react to a\ngroup of timelines through one handler binding while preserving each child timeline's individual identity,\ncheckpointing, and provider semantics.\n\nComposite Timeline Channel does not create a new global timeline and does not impose consensus over the child\ntimelines. It is a routing convenience inside a document scope. Completeness and ordering must still be handled by the\nfeeder/provider layer and by the underlying child channels. The composite channel should adapt or pass through the\nmatched child channel's payload in a deterministic way defined by the concrete implementation or profile.\n\nThe `channels` list contains contract-map keys in the same scope. The keys are ordered list content, but matching should\nremain deterministic regardless of notification arrival order. If more than one child channel could accept the same\nevent, the processor must use the supported channel semantics and deterministic ordering rules to choose or deliver\nconsistently.\n",
  name: 'Composite Timeline Channel',
  type: {
    blueId: 'DcoJyCh7XXxy1nR5xjy7qfkUgQ1GiZnKKSxh8DJusBSr',
  },
} as const;
