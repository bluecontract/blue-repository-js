export const LinkedDocumentsPermissionGranted = {
  description: 'All initial rights from this LDPG have been persisted.',
  grantDocumentId: {
    description:
      'Optional. Stable handle of the created permission grant document. Required in request/response document-grant flows that later support self-revoke from the grantee document.',
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
  links: {
    type: {
      blueId: '75CyJPe82hSjV9T2tsir5R3343vhqvG41w2EzFhCp5Y9',
    },
  },
  name: 'Linked Documents Permission Granted',
  targetSessionId: {
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
  type: {
    blueId: '7aeKdDTceCVYDtyYZRdK7eQ8UU6PWn6X26Uea3XrGZdX',
  },
} as const;
