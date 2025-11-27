export const documentUpdateChannel = {
  description:
    'Core type of Blue Language v1.0 (see https://language.blue).\nFires on successful patches with immediate bottom-up cascade (origin → ancestors → root).\nMatching uses subtree semantics against ABS(scope, path). Payload is the processor-emitted\nDocument Update event with scope-relative path.\n',
  name: 'Document Update Channel',
  path: {
    description:
      'Scope-relative absolute pointer (begins with "/") defining the watched subtree.\nMatch iff the absolute changed path equals or is a descendant of ABS(scope, path).\n',
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
  type: {
    blueId: 'DcoJyCh7XXxy1nR5xjy7qfkUgQ1GiZnKKSxh8DJusBSr',
  },
} as const;
