export const TimelineEntry: Record<string, unknown> = {
  actor: {
    description:
      "Provider's attribution of the actor responsible for this entry. This should be a Coordination/Actor specialization,\nsuch as Principal Actor or Agent Actor. Actor attribution supports audit and Actor Policy enforcement.\n",
    type: {
      blueId: 'GnMntk3hLvHEsZTBE8Gk7ytPBexj6jhBJHdaxnJYhEQ7',
    },
  },
  description:
    "A Timeline Entry is one immutable entry in an append-only Timeline. It records a Blue message, the timeline it belongs\nto, the previous entry reference, the provider-assigned or provider-recorded timestamp, and attribution fields such\nas actor and source. Its BlueId is a content address over this data. If entries use `prevEntry`, each entry commits to\nthe BlueId of its predecessor, creating a tamper-evident chain: changing an old entry changes its BlueId and breaks\nevery later `prevEntry` link.\n\nA Timeline Entry is not automatically a document operation. It is a stored statement or action on a timeline. A Blue\ndocument may consume it through a Timeline Channel, but other applications may use the same timeline for audit,\nmessaging, public announcements, personal storage, signed receipts, or other purposes. The provider does not need to\nknow why the message was written. The provider's claims are about append authorization, identity/source attribution,\ntimestamp/order, storage, and completeness.\n\n`timestamp` is used for deterministic ordering. For managed providers it is typically microseconds since Unix epoch\nand must respect all outstanding completeness guarantees. For blockchain-backed timelines it may be derived from\nfinalized block timestamps and may have lower precision. When multiple entries have the same timestamp, processing\nenvironments must use deterministic tie-breakers such as channel key and provider-specific finalized order.\n\n`message` is the Blue payload. It may be an Operation Request, Chat Message, Status Change, customer response,\ndomain-specific event, or any other Blue node. `actor` says who or what the provider attributes the entry to.\n`source` says how the message reached the provider. Blue documents should evaluate actor/source policy from these\nfields rather than guessing from the message body.\n",
  message: {
    description:
      'Blue payload recorded in this entry. The provider stores the message but generally does not validate it against every\npossible consuming document. Document processors and domain-specific channels decide whether a message is relevant and\nvalid for a given document.\n',
  },
  name: 'Timeline Entry',
  prevEntry: {
    description:
      "Reference to the previous entry in the same timeline. The first entry may omit this field or use a provider-defined\nbeginning marker. Later entries should reference the predecessor's BlueId, forming the timeline hash chain and making\nhistorical tampering detectable.\n",
  },
  source: {
    description:
      "Optional provider's attribution of the source through which the entry was submitted, such as Browser Session, API\nCall, Document Request, blockchain transaction, or provider-specific source type. Source complements actor; it does\nnot replace actor.\n",
  },
  timeline: {
    description:
      'Timeline to which this entry belongs. This should be sufficient, together with provider-specific fields on concrete\ntimeline types, for readers to query the provider or storage mechanism for neighboring entries and completeness\nproofs.\n',
    type: {
      blueId: '7wUHmjDmM9suCSX1HPL7NZncfwPmMmXq2vfSVBmRLgAu',
    },
  },
  timestamp: {
    description:
      'Provider-assigned or provider-recorded integer timestamp, commonly microseconds since Unix epoch. It establishes\nentry order and is the value used in completeness guarantees. Future entries accepted after a completeness guarantee\nfor T must not receive timestamps less than T.\n',
    type: {
      blueId: 'E2LM6qgzWG9ttagq2xTmiZkgYEAgkYedFCmU9v7NnVEq',
    },
  },
};
