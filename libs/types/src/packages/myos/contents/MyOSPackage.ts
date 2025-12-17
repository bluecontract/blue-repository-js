export const MyOSPackage = {
  agentStoreDescription: {
    description: 'Human-readable description for stores/directories',
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
  automationTemplate: {
    description: 'Optional automation template to start post-creation',
    type: {
      blueId: '8JHhvprgxVUFZCQpyeEJfMFF8vuVEAnjqojftJ6B2E6S',
    },
  },
  capabilities: {
    description:
      'Optional MyOS Admin capability contracts to attach (participantsOrchestration, sessionInteraction, workerAgency)',
    keyType: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
    type: {
      blueId: 'G7fBT9PSod1RfHLHkpafAGBDVAJMrMhAMY51ERcyXNrj',
    },
    valueType: {
      blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
    },
  },
  channelBindings: {
    description: 'Maps channel names to participant identifiers',
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
    'A distributable blueprint for a new Agent session, which can include pre-configured automations that start on installation.\n',
  document: {
    description:
      "The full initial state of the Agent to be created. Root type MUST specialize 'Agent'.",
  },
  initialMessages: {
    defaultMessage: {
      description: 'Default invitation message sent to all participants',
      type: {
        blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
      },
    },
    description:
      "Optional per-participant invitation messages (installer's message is public)",
    perChannel: {
      description: 'Per-channel custom invitation messages',
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
  installerChannel: {
    description:
      "Channel name in 'document' to bind to the installing user/account",
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
  name: 'MyOS Package',
  type: {
    blueId: 'AjfPDYhjp31oYmraTy7PYFrSUGQKxtfQnHdBr8o7mt3g',
  },
} as const;
