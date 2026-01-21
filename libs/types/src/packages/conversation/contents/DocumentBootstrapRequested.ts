export const DocumentBootstrapRequested = {
  bootstrapAssignee: {
    description:
      'Channel name of a participant in the requesting document which is asked to bootstrap the requested document',
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
  channelBindings: {
    description: 'Maps channel names to participant identifiers.',
    keyType: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
    type: {
      blueId: 'G7fBT9PSod1RfHLHkpafAGBDVAJMrMhAMY51ERcyXNrj',
    },
    valueType: {
      blueId: 'DcoJyCh7XXxy1nR5xjy7qfkUgQ1GiZnKKSxh8DJusBSr',
    },
  },
  description: 'Request to bootstrap the provided document.',
  document: {
    description: 'Target Blue document to bootstrap.',
  },
  initialMessages: {
    defaultMessage: {
      description: 'Default invitation message sent to all participants.',
      type: {
        blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
      },
    },
    description:
      'Messages sent to participants when inviting them to the bootstrapped document.',
    perChannel: {
      description: 'Per-channel custom invitation messages.',
      keyType: {
        blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
      },
      type: {
        blueId: 'G7fBT9PSod1RfHLHkpafAGBDVAJMrMhAMY51ERcyXNrj',
      },
      valueType: {
        blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
      },
    },
  },
  name: 'Document Bootstrap Requested',
  type: {
    blueId: '8f9UhHMbRe62sFgzQVheToaJPYi7t7HPNVvpQTbqfL5n',
  },
} as const;
