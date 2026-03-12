export const WorkerAgencyPermissionGranted = {
  allowedWorkerAgencyPermissions: {
    itemType: {
      blueId: '5J3RXNnALK1ZYAQBrjGwCQ4WpL3YUGHvz9WcGos6mMSp',
    },
    type: {
      blueId: '6aehfNAxHLC1PHHoDr3tYtFH3RWNbiWdFancJ1bypXEY',
    },
  },
  description: 'DB rows written; rights are effective.',
  grantDocumentId: {
    description:
      'Optional. Stable handle of the created permission grant document. Required in request/response document-grant flows that later support self-revoke from the grantee document.',
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
  granteeDocumentId: {
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
  name: 'Worker Agency Permission Granted',
  type: {
    blueId: '36epvrpVHZLjapbeZsNodz2NDnm7XZeNZcnkWHgkP1pp',
  },
} as const;
