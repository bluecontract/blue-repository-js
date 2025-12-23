export const DocumentUpdate = {
  after: {
    description: 'Snapshot after the patch at this path (may be null).',
  },
  before: {
    description: 'Snapshot before the patch at this path (may be null).',
  },
  description:
    "Core type of Blue Language v1.0 (see https://language.blue).\nEmitted once per participating scope for each successful patch\n(bottom-up delivery). 'op' uses lower-case enum; 'path' is scope-relative\nfor the receiving scope. 'before' and 'after' are snapshots (immutable views).\n",
  name: 'Document Update',
  op: {
    description: 'One of add, replace, remove.',
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
  path: {
    description:
      'Scope-relative pointer. "/" when the receiving scope\'s root was affected.',
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
} as const;
