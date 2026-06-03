export const RejectChangeOperation: Record<string, unknown> = {
  description:
    'Operation marker for rejecting a previously proposed change. Rejection removes proposal state without applying the\nrequested changes. It is used when a reviewer, participant, or policy decides that the proposed mutation should not\nbecome part of the document.\n\nReject Change complements Propose Change and Accept Change. The operation itself declares the action; the paired Reject\nChange Workflow checks that proposal state exists and removes it through an Update Document step. If no proposal exists\nat the expected path, the workflow emits Proposed Change Invalid.\n',
  name: 'Reject Change Operation',
  type: {
    blueId: '316voisXnp8BqLs7BNjjypfn3UG2FSpgFxS6pFqHbf66',
  },
};
