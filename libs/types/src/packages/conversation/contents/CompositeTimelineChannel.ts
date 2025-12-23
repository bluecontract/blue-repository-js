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
    'Conversation package type.\nChannel that matches if an incoming event would match **any** of the named\nchild channels in this scope (union). Useful to observe multiple timeline\ninputs through a single handler binding.\n',
  name: 'Composite Timeline Channel',
  type: {
    blueId: 'DcoJyCh7XXxy1nR5xjy7qfkUgQ1GiZnKKSxh8DJusBSr',
  },
} as const;
