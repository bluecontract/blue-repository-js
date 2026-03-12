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
      blueId: '75TXyy5E7vbexVAUZcjZ2vdQaG7fJJbAHAgrh8sMtTp5',
    },
  },
  name: 'Linked Documents Permission Granted',
  targetSessionId: {
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
  type: {
    blueId: '36epvrpVHZLjapbeZsNodz2NDnm7XZeNZcnkWHgkP1pp',
  },
} as const;
