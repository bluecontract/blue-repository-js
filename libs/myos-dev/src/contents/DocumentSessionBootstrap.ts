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
  contracts: {
    description: 'Operational contracts for the bootstrap session participants',
    myOsAdminChannel: {
      description:
        'Timeline channel for MyOS Admin to orchestrate the bootstrap process and emit progress events',
      type: {
        blueId: 'Bx3dgXf5uFkGf9KxkUTFWQhbEw9QBc9cTgz1KP1Qtgh6',
      },
    },
    myOsAdminUpdateImpl: {
      description: 'Implementation that re-emits the provided events',
      type: {
        blueId: '8Ryr45Yg1hajwTaQYTzbUawLLhqiRExEvPs8suaWRi4n',
      },
      operation: {
        type: {
          blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
        },
        value: 'myOsAdminUpdate',
      },
      steps: {
        items: [
          {
            name: 'EmitAdminEvents',
            type: {
              blueId: 'CbkaaimMgTw2L5AP6bVWVKVArHkkrKuJxu6Uo4o6Piwr',
            },
            code: {
              type: {
                blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
              },
              value: 'return { events: event.message.request };',
            },
          },
        ],
      },
    },
    myOsAdminUpdate: {
      description:
        'Operation for MyOS Admin to emit progress events during bootstrap process',
      type: {
        blueId: '6tJThrkAEzwjt5oUVh4Puc5xvLjEkDPH8HZqKEqFL115',
      },
      channel: {
        type: {
          blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
        },
        value: 'myOsAdminChannel',
      },
      request: {
        description: 'List of events to emit',
        type: {
          blueId: 'G8wmfjEqugPEEXByMYWJXiEdbLToPRWNQEekNxrxfQWB',
        },
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
      blueId: '23ZWQ6WWqFcyuoBDV9P8XaLk2oEwJtoQaPrkFFayZVqY',
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
} as const;
