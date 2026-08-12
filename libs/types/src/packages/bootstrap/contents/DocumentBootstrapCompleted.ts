export const DocumentBootstrapCompleted: Record<string, unknown> = {
  description:
    'Response reporting that a bootstrap provider successfully started the requested logical document and made a running session of that document available to the requester or to the participant on whose behalf bootstrap was requested.\n',
  documentSession: {
    description:
      'Provider-neutral reference to the running session made available to the requester or to the participant on whose behalf bootstrap was requested. Its initialDocument identifies the requested logical document.\n',
    schema: {
      required: true,
    },
    type: {
      blueId: 'CitEEsPhrBya9i5PK18kP3V4snE1g79885geLZM2PidU',
    },
  },
  name: 'Document Bootstrap Completed',
  type: {
    blueId: '283zu1pu97gXBs4mquE3MSjwRYTzZSXZhnRSemCH8mZr',
  },
};
