export const ChangeOperation = {
  description:
    "Operation marker for applying a Change Request immediately rather than first storing it as a proposal. It is intended\nfor contexts where the caller is already authorized to request the change and the document policy allows direct\napplication.\n\nThe operation's `request` shape is Coordination/Change Request. The corresponding Change Workflow validates the request,\nblocks forbidden `/contracts` modifications when Contracts Change Policy requires sectionChanges, rejects attempts to\nmutate proposal state recursively, and then applies the changes through Update Document.\n\nUse this operation when immediate mutation is acceptable. Use Propose Change Operation followed by Accept or Reject when\nchanges must be reviewed before becoming document state.\n",
  name: 'Change Operation',
  request: {
    type: {
      blueId: 'Em6YA77iVnnRaScCrkZr9C9VkQF14i2pk5fA8KNiHS41',
    },
  },
  type: {
    blueId: '9Fu3Rjq8hNKnZS71ZU8RXBBupZEa7Wb8z44GtzfSwjbr',
  },
} as const;
