export const WorkerAgencyPermissionRevokeRequested = {
  description:
    'Emitted either by revoke operation on the grant document or by grantee-document self-revoke flow when grantDocumentId is provided.',
  grantDocumentId: {
    description:
      'Optional. If present, MyOS Admin must revoke the referenced permission grant after validating that the requesting document matches the grant granteeDocumentId. If absent, revoke applies to the grant document that emitted the event.',
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
  name: 'Worker Agency Permission Revoke Requested',
  reason: {
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
  type: {
    blueId: '8f9UhHMbRe62sFgzQVheToaJPYi7t7HPNVvpQTbqfL5n',
  },
} as const;
