export const SingleDocumentPermissionGranted = {
  description: 'DB rows written; rights are effective.',
  grantDocumentId: {
    description:
      'Optional. Stable handle of the created permission grant document. Required in request/response document-grant flows that later support self-revoke from the grantee document.',
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
  name: 'Single Document Permission Granted',
  permissions: {
    type: {
      blueId: '5cZ3J1QiMJEJV4FV5kfSkeG2oJmweWCyJo3v2TSc3Xuw',
    },
  },
  targetSessionId: {
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
  type: {
    blueId: '36epvrpVHZLjapbeZsNodz2NDnm7XZeNZcnkWHgkP1pp',
  },
} as const;
