export const Timeline = {
  description:
    "A Timeline is an append-only, tamper-evident sequence of Timeline Entries representing the actions, statements,\nobservations, and commitments associated with one timeline owner or provider context. Conceptually, it is a personal or\ninstitutional ledger: Alice may have a timeline, a bank may have a timeline, an AI agent may have a timeline, and a\nservice may have a timeline. A Blue document can interact with multiple timelines without requiring global consensus;\neach timeline remains an independently maintained perspective that composes with others through deterministic\nprocessing rules.\n\nA Timeline is expected to be maintained by a Timeline Provider or equivalent storage mechanism. The provider assigns\nmonotonically ordered timestamps, stores entries immutably, verifies the timeline owner's identity, records actor and\nsource attribution, and provides completeness guarantees to processors. A completeness guarantee is a binding statement\nsuch as: there are no entries with timestamp less than T, and future entries accepted by this provider will have\ntimestamp greater than or equal to T. This is what lets independent processors know they have a complete view of all\nrelevant timeline events up to a deterministic processing boundary.\n\nTimeline entries are hash-linked using `prevEntry`, making historical tampering detectable. A blockchain, managed\nplatform, bank, government identity service, or local provider may all serve as timeline storage, provided they define\nhow entries are ordered, how finality/completeness is established, and how actor attribution is guaranteed. The\n`timelineId` field is the stable application-defined identifier used by channels and providers to locate this timeline.\n",
  name: 'Timeline',
  timelineId: {
    description:
      'Stable provider- or application-defined identifier of this timeline. A Timeline Channel uses this value, together with\nprovider-specific context, to locate entries. The identifier should not be reused for a different actor or history\nbecause processors and auditors treat the timeline as one append-only perspective.\n',
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
} as const;
