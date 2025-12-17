export const JsonPatchEntry = {
  description:
    'Core type of Blue Language v1.0 (see https://language.blue).\nDeterministic subset of RFC 6902 used by handlers to request document changes.\n',
  name: 'Json Patch Entry',
  op: {
    description: 'One of add, replace, remove.',
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
  path: {
    description:
      'Absolute JSON Pointer within the document (must begin with "/").',
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
  val: {
    description:
      'Payload for add and replace (any Blue node). Omitted for remove.',
  },
} as const;
