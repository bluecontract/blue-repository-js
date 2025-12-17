export const singleDocumentPermissionGrantRequested = {
  description:
    'Ask MyOS Admin to grant permisison to document (event emitter) for a concrete target session.',
  name: 'Single Document Permission Grant Requested',
  onBehalfOf: {
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
  permissions: {
    type: {
      blueId: 'DRDQcve5AjwBK9z6Njfa4MNERko7Uf4ucvARFdC6sL54',
    },
  },
  targetSessionId: {
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
  type: {
    blueId: '3n91zvNzZkMN4mdBNMA3ez9ccJQDzkNcv67BtYnMW8Hn',
  },
} as const;
