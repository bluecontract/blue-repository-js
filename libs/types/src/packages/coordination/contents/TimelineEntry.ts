export const TimelineEntry: Record<string, unknown> = {
  actor: {
    description: 'Actor attributed as the writer or submitter of this entry.',
    schema: {
      required: true,
    },
    type: {
      blueId: 'GnMntk3hLvHEsZTBE8Gk7ytPBexj6jhBJHdaxnJYhEQ7',
    },
  },
  description:
    'Immutable entry in an append-only Timeline. The Timeline Provider assigns a timestamp that is unique and strictly increasing within the timeline, links the entry to its predecessor, and authenticates actor and available source attribution. A feeder validates, orders, and filters entries before passing eligible events to a processor.\n',
  message: {
    description: 'Message or event recorded by the entry.',
    schema: {
      required: true,
    },
  },
  name: 'Timeline Entry',
  onBehalfOf: {
    description:
      'Optional authority under which actor claims to act for another actor. A feeder validates the concrete authority before delivery when the requested action is not directly eligible through a source channel. Mandate-backed authority uses Mandate/Mandate Authority.\n',
    type: {
      blueId: '5BrNKcZDq6q4UY1jQpjyeFjbTV6rxVKM9qNL5xzGMZRW',
    },
  },
  prevEntry: {
    description:
      'Generic reference to the previous entry in the same timeline. Non-first entries should normally use a pure BlueId reference. The field is intentionally untyped so standard document processing can retain it as opaque audit evidence without materializing or validating the referenced history. The Timeline Provider or verifier validates it against the immediately preceding accepted entry. The first entry may omit this field.\n',
  },
  source: {
    description:
      'Optional provider-authenticated attribution of how the entry was submitted, such as through a browser session, API call, or document request. Source complements actor attribution and does not grant authority by itself. A policy that requires or excludes a source category must treat an absent source as not satisfying that source constraint.\n',
    type: {
      blueId: 'Qm35f9xFUH84i745uPMj5jjMX1oCCG79aeSfHViipxG',
    },
  },
  timeline: {
    description: 'Timeline containing this entry.',
    schema: {
      required: true,
    },
    type: {
      blueId: 'BnChAigtmYAEzedCRsLwgtdwthJMiPQsQBpUXdtiRxe',
    },
  },
  timestamp: {
    description:
      'Microsecond timestamp assigned by the Timeline Provider. It is unique and strictly increasing within this timeline and is the authoritative intra-timeline ordering value. It also supports cross-timeline ordering and completeness windows under the provider profile.\n',
    schema: {
      required: true,
    },
    type: {
      blueId: 'E2LM6qgzWG9ttagq2xTmiZkgYEAgkYedFCmU9v7NnVEq',
    },
  },
};
