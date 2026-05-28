export const TimelineEntry = {
  actor: {
    description:
      "Attribution of who or what caused this entry. This field is the provider's claim about principal versus agent action\nand is the basis for Actor Policy enforcement and audit. It should be a Coordination/Actor specialization.\n",
    type: {
      blueId: 'CFPWz2TX7a1xq6xZYnx93Cu7MqEdMzumr3Zgnx6TrVtd',
    },
  },
  description:
    "A Timeline Entry is one immutable event in an append-only Timeline. It records a message produced by the timeline\nowner or an authorized actor, links to the previous entry, carries a provider-assigned timestamp, and includes actor and\nsource attribution. The entry is a Blue document, so its BlueId is a content address over the entry fields. The\n`prevEntry` link creates a hash chain: modifying any historical entry changes its BlueId and breaks verification for\nall subsequent entries that reference it.\n\nThe `timeline` field identifies the timeline and provider context to which the entry belongs. The `timestamp` is an\ninteger microsecond timestamp, generally assigned by the Timeline Provider. Timestamps establish deterministic ordering\nacross entries. Within a single timeline they should be monotonically increasing according to the provider's rules. In\nmulti-timeline documents, processors sort candidate entries by timestamp and deterministic tie-breakers such as channel\nkey and provider-specific ordering fields. Completeness guarantees from providers are necessary before processors treat\nthe ordering as complete.\n\nThe `message` field is the actual Blue event content being delivered to documents, such as an Operation Request, Status\nChange, Chat Message, or domain-specific action. The `actor` field attributes the entry to a principal, agent, or\nspecialized actor. The optional `source` field records how the request reached the provider, such as browser session,\nAPI call, document request, or blockchain transaction. A processor should never infer actor/source semantics from the\nmessage body when these fields are present; the provider's attribution is the auditable claim.\n",
  message: {
    description:
      'The event payload recorded in this entry. It may be any Blue node, but concrete Timeline Channels and workflows usually\nexpect a subtype of Coordination/Event such as Operation Request, Chat Message, Status Change, or a domain event.\n',
  },
  name: 'Timeline Entry',
  prevEntry: {
    description:
      "Reference to the previous Timeline Entry in the same timeline. The first entry may omit this field or use an explicit\nprovider-defined beginning marker. Every later entry should reference the BlueId of its immediate predecessor. This\ncreates the tamper-evident chain: modifying a historical entry changes that entry's BlueId and invalidates the\n`prevEntry` reference held by its successor.\n",
  },
  source: {
    description:
      'Optional provenance of how the action reached the provider, such as Browser Session, API Call, Document Request, or\nblockchain transaction. Source complements actor attribution and can be used by policy rules.\n',
  },
  timeline: {
    description: 'The timeline this entry belongs to.',
    type: {
      blueId: 'DFycCEHaAuMXptCMxQ4N5M1UW2yyddgi5xa3TPWDTNAZ',
    },
  },
  timestamp: {
    description:
      'Provider-assigned integer timestamp in microseconds since Unix epoch unless a concrete timeline provider defines a\nstricter compatible representation. The timestamp is used for deterministic ordering across entries and for provider\ncompleteness guarantees. Once a provider guarantees no entries before T, future entries must be assigned timestamps\ngreater than or equal to T.\n',
    type: {
      blueId: '5WNMiV9Knz63B4dVY5JtMyh3FB4FSGqv7ceScvuapdE1',
    },
  },
} as const;
