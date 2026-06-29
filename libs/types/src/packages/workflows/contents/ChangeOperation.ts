export const ChangeOperation: Record<string, unknown> = {
  description:
    "Operation marker for applying a Change Request immediately rather than first storing it as a proposal. It is intended\nfor contexts where the caller is already authorized to request the change and the document policy allows direct\napplication.\n\nThe operation's `request` shape is Workflows/Change Request. The corresponding Change Workflow validates the request,\nblocks forbidden `/contracts` modifications when Contracts Change Policy requires sectionChanges, rejects attempts to\nmutate proposal state recursively, and then applies the changes through Update Document.\n\nUse this operation when immediate mutation is acceptable. Use Propose Change Operation followed by Accept or Reject when\nchanges must be reviewed before becoming document state.\n",
  name: 'Change Operation',
  request: {
    type: {
      blueId: '6DTYzUFXoVEV5WjVKmQveSztfXfVN5nr1bso3ygW9ocU',
    },
  },
  type: {
    blueId: 'wGksq5vE8TroTr6StteHDnMx9mJKqT7dHoYT9bEddym',
  },
};
