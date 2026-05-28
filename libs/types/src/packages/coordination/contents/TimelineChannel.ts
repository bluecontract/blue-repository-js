export const TimelineChannel = {
  description:
    "Channel contract that accepts Timeline Entry events belonging to one configured timeline. A Timeline Channel is the\nbridge between append-only timeline storage and Blue contract processing: when a Timeline Provider signals or supplies\na new entry for the configured `timelineId`, the channel can deliver that entry's message to handlers in the current\nscope.\n\nTimeline Channel processing is deterministic only when the feeder/provider layer supplies entries in a complete order.\nIn multi-party documents, a processor must not blindly process whichever timeline notifies first if other timeline\nchannels could contain earlier events. The feeder or channel environment is expected to use provider completeness\nguarantees to gather all entries before the processing boundary timestamp, then deliver them in deterministic order.\nThis type identifies the timeline a channel observes; the exact provider protocol, proof format, and completeness\nquery are outside this type but should be defined by a concrete channel specialization.\n\nThe channel is a contract runtime entry point, not the timeline itself. It should be used as a scope-local contract key\nthat handlers bind to. Each Timeline Channel should have its own checkpoint state so repeated entries are not processed\ntwice and late or stale entries can be rejected according to the Blue Contracts checkpoint model.\n",
  name: 'Timeline Channel',
  timelineId: {
    description: 'The `timelineId` whose entries this channel delivers.',
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
  type: {
    blueId: 'DcoJyCh7XXxy1nR5xjy7qfkUgQ1GiZnKKSxh8DJusBSr',
  },
} as const;
