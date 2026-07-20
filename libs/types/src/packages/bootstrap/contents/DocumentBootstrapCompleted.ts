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
      blueId: 'FxcZycT49wFfrNAZpzquWVRw43epYQx5SkYXpdwx3c2Z',
    },
  },
  name: 'Document Bootstrap Completed',
  type: {
    blueId: '4rExHc9dQ4h6gqTj343qg2teiFr8GDwWv1aDYPdV21QH',
  },
};
