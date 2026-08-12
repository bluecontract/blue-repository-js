export const DocumentSessionReference: Record<string, unknown> = {
  description:
    'Provider-neutral reference to one running session of a logical document. providerId identifies the runtime namespace in which sessionId is resolved, while initialDocument identifies the logical document independently of that runtime session.\n',
  initialDocument: {
    description:
      'Initial document identifying the logical document processed by this session. The value may be materialized or represented by an equivalent pure { blueId: ... } reference.\n',
    schema: {
      required: true,
    },
  },
  name: 'Document Session Reference',
  providerId: {
    description:
      'Identifier of the session provider that assigned sessionId and resolves the referenced session.\n',
    schema: {
      required: true,
    },
    type: {
      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
    },
  },
  sessionId: {
    description: 'Provider-local identifier of the running document session.',
    schema: {
      required: true,
    },
    type: {
      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
    },
  },
};
