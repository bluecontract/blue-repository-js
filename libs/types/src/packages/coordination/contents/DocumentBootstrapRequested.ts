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
  description:
    'Request event asking a participant or service to bootstrap a new Blue document from a provided document template or\ninitial document. Bootstrapping means creating a processable document instance, binding participant channels, sending\ninitial messages, and returning a response that indicates whether the new document is ready.\n\nThe `document` field contains the Blue document to bootstrap. `channelBindings` maps channel names in that document to\nparticipant identifiers or channel definitions. `initialMessages` provides invitation text, optionally customized per\nchannel. `bootstrapAssignee` identifies which participant in the requesting document is expected to perform the\nbootstrap. `onBehalfOf` identifies the account or participant for whom the new document is being created.\n\nThis event is a request, not the resulting document. A provider may respond with Document Bootstrap Completed,\nDocument Bootstrap Failed, or Document Bootstrap Responded depending on the outcome and the response model used.\n',
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
  onBehalfOf: {
    description:
      'account (channe name) on whose behalf the document is being created',
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
  type: {
    blueId: '3PWiqPYvDfSrPGh1YnuRPGjaXL7YytfBcgfrn9WydqCg',
  },
} as const;
