export const documentLink = {
  description:
    'Link targeting a specific Blue document by its stable documentId (initial blueId before any processing). Used to point to a logical document regardless of session.',
  documentId: {
    description:
      'Stable document identifier (original BlueId) of the target document.',
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
  name: 'Document Link',
  type: {
    blueId: 'D2ERUvbpn6R6PR7hjFsGofwQsu9bkRfc6wbSYHcfJtMD',
  },
} as const;
