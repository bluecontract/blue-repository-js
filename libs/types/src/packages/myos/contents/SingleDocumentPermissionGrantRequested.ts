export const SingleDocumentPermissionGrantRequested = {
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
      blueId: '5cZ3J1QiMJEJV4FV5kfSkeG2oJmweWCyJo3v2TSc3Xuw',
    },
  },
  targetSessionId: {
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
  type: {
    blueId: '8f9UhHMbRe62sFgzQVheToaJPYi7t7HPNVvpQTbqfL5n',
  },
} as const;
