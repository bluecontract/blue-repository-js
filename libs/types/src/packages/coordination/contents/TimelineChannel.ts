export const TimelineChannel: Record<string, unknown> = {
  description:
    "Channel contract that accepts Timeline Entry events for a configured timeline. Timeline Channel is the scope-local\nruntime entry point that lets a Blue document react to messages stored in append-only timeline infrastructure.\n\nThe channel identifies which timeline it observes, usually through `timelineId` and concrete provider fields. It does\nnot define the provider protocol by itself. A feeder or provider integration is responsible for fetching entries,\nobtaining completeness or finality guarantees, deduplicating through checkpoints, and delivering entries in a\ndeterministic order. Once an entry is delivered, the channel can expose the entry or its `message` as the payload for\nsame-scope handlers.\n\nTimeline Channel must not be confused with the Timeline. The Timeline is storage and attribution infrastructure; the\nchannel is a contract inside one Blue document. Multiple documents may observe the same timeline, and one document may\nobserve many timelines. The channel does not make the provider understand the document's semantics. It simply defines\nhow attributed timeline entries enter the processor.\n",
  name: 'Timeline Channel',
  timelineId: {
    description:
      'Identifier of the timeline whose entries this channel accepts. A concrete subtype may include provider, account,\nchain, contract address, finality policy, or other fields needed to locate and verify the timeline.\n',
    type: {
      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
    },
  },
  type: {
    blueId: '4FAZ94JPExNM4pn2ZhtdHa4CVP7uASmLNVrBy7aCG1p5',
  },
};
