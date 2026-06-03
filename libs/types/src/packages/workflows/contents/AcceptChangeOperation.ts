export const AcceptChangeOperation: Record<string, unknown> = {
  description:
    'Operation marker for accepting a previously stored proposed change. Acceptance means the document should apply the\nchanges contained in proposal state and remove the proposal record once the processor has committed the change.\n\nThis operation is part of the proposal/accept/reject workflow family. It separates review from mutation: Propose Change\ncaptures a request, Accept Change applies it, and Reject Change discards it. The corresponding Accept Change Workflow\nperforms validation, policy checks, translation of sectionChanges, and final Update Document patching.\n',
  name: 'Accept Change Operation',
  type: {
    blueId: '316voisXnp8BqLs7BNjjypfn3UG2FSpgFxS6pFqHbf66',
  },
};
