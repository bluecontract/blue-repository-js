export const documentSessionBootstrap = {
  name: 'Document Session Bootstrap',
  description:
    'MyOS-specific document for bootstrapping document sessions and tracking bootstrap progress',
  capabilities: {
    description:
      'Optional MyOS Admin capability contracts to attach (participantsOrchestration, sessionInteraction, workerAgency)',
    type: {
      blueId: '294NBTj2mFRL3RB4kDRUSckwGg7Kzj6T8CTAFeR1kcSA',
    },
    keyType: {
      blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
    },
    valueType: {
      blueId: 'EL6AjrbJsxTWRTPzY8WR8Y2zAMXRbydQj83PcZwuAHbo',
    },
  },
  document: {
    description: 'Target Blue document to be bootstrapped',
  },
  initialMessages: {
    description:
      'Messages sent to participants when inviting them to the bootstrapped document',
    defaultMessage: {
      description: 'Default invitation message sent to all participants',
      type: {
        blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
      },
    },
    perChannel: {
      description: 'Per-channel custom invitation messages',
      type: {
        blueId: '294NBTj2mFRL3RB4kDRUSckwGg7Kzj6T8CTAFeR1kcSA',
      },
      keyType: {
        blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
      },
      valueType: {
        blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
      },
    },
  },
  contracts: {
    description: 'Operational contracts for the bootstrap session participants',
    initiatorChannel: {
      description:
        'Timeline channel for the user who initiated the bootstrap process',
      type: {
        blueId: 'Bx3dgXf5uFkGf9KxkUTFWQhbEw9QBc9cTgz1KP1Qtgh6',
      },
    },
    myOsAdminChannel: {
      description:
        'Timeline channel for MyOS Admin to orchestrate the bootstrap process and emit progress events',
      type: {
        blueId: 'Bx3dgXf5uFkGf9KxkUTFWQhbEw9QBc9cTgz1KP1Qtgh6',
      },
    },
  },
  channelBindings: {
    description: 'Maps channel names to participant identifiers',
    type: {
      blueId: '294NBTj2mFRL3RB4kDRUSckwGg7Kzj6T8CTAFeR1kcSA',
    },
    keyType: {
      blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
    },
    valueType: {
      blueId: 'Bx3dgXf5uFkGf9KxkUTFWQhbEw9QBc9cTgz1KP1Qtgh6',
    },
  },
  status: {
    description: 'Current status (ResolvingParticipants, Completed, Failed)',
    type: {
      blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
    },
  },
} as const;
