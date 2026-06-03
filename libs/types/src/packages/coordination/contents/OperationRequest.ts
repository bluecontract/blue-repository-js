export const OperationRequest: Record<string, unknown> = {
  allowNewerVersion: {
    description:
      'Whether the requester allows processing against a document version newer than the one implied by the request context.\nA false value lets workflows reject stale or unexpected document-state transitions.\n',
    type: {
      blueId: 'AwvXD961fmnmqcSQhjMA7r15HpVh39cefb6ZTyUz2Fm2',
    },
  },
  description:
    'Event payload requesting that a document perform a named operation. Operation Request is the standard shape for\ninvoking document-owned behavior through a Timeline Entry, direct event delivery, or another coordination channel.\n\n`operation` names the requested operation. `request` contains the operation-specific input. `document`, when present,\ncan identify or carry the target document/request context. `allowNewerVersion` indicates whether the sender permits\nthe processor to use a newer document version than the one the sender expected. Actor and source attribution are not\nfields of Operation Request itself; they normally come from the enclosing Timeline Entry or event envelope.\n\nA processor or workflow should not treat Operation Request as authorized merely because it is well-formed. It must\nmatch the operation, check any actor/source policy, validate the request shape expected by the operation, and then run\nthe corresponding handler or workflow.\n',
  document: {
    description:
      'Optional target document reference, embedded document, or request context supplied by the caller. The operation type\ndefines how this field is interpreted.\n',
  },
  name: 'Operation Request',
  operation: {
    description:
      'Name of the operation being requested. This name is matched against Operation or Sequential Workflow Operation\ncontracts in the processing scope.\n',
    type: {
      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
    },
  },
  request: {
    description:
      'Operation-specific payload. Its shape is defined by the requested operation.\n',
  },
};
