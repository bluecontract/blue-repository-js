export const OperationRequest: Record<string, unknown> = {
  channel: {
    description: 'Required effective target channel key.',
    schema: {
      required: true,
    },
    type: {
      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
    },
  },
  description:
    'Request to invoke one named operation through one effective channel. The enclosing Timeline Entry supplies actor attribution and any mandate-backed authority. A feeder verifies source-channel eligibility, mandate authority, and document-version constraints before passing the entry to a processor.\n',
  document: {
    description:
      'Optional current target document state on which the invocation is based. The value may be materialized or represented by an equivalent pure BlueId reference.\n',
  },
  name: 'Operation Request',
  operation: {
    description: 'Required operation contract key/name to invoke.',
    schema: {
      required: true,
    },
    type: {
      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
    },
  },
  request: {
    description: 'Operation-specific request payload.',
  },
  requireExactDocumentVersion: {
    description:
      "When true, the feeder passes the request only if document equals the current target state. When false or absent, a newer state may be accepted according to the feeder's document-version eligibility policy.\n",
    type: {
      blueId: 'AwvXD961fmnmqcSQhjMA7r15HpVh39cefb6ZTyUz2Fm2',
    },
  },
  type: {
    blueId: '6XYXgjV6ja1oLqLCs3TWy4RP5UwmpPZKcppBfwwXcckU',
  },
};
