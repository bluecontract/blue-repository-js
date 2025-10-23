export const documentSessionBootstrap = {
  bootstrapError: {
    description: 'Error message explaining bootstrap failure',
    type: {
      blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
    },
  },
  bootstrapStatus: {
    description: 'Overall bootstrap process status',
    type: {
      blueId: 'HsnCTdM4Rxjp28V7yq4ezQHyRh7MJixqDKtzm3tiLbcN',
    },
  },
  capabilities: {
    description:
      'Optional MyOS Admin capability contracts to attach (participantsOrchestration, sessionInteraction, workerAgency)',
    keyType: {
      blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
    },
    type: {
      blueId: '294NBTj2mFRL3RB4kDRUSckwGg7Kzj6T8CTAFeR1kcSA',
    },
    valueType: {
      blueId: 'EL6AjrbJsxTWRTPzY8WR8Y2zAMXRbydQj83PcZwuAHbo',
    },
  },
  channelBindings: {
    description: 'Maps channel names to participant identifiers',
    keyType: {
      blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
    },
    type: {
      blueId: '294NBTj2mFRL3RB4kDRUSckwGg7Kzj6T8CTAFeR1kcSA',
    },
    valueType: {
      blueId: '23ZWQ6WWqFcyuoBDV9P8XaLk2oEwJtoQaPrkFFayZVqY',
    },
  },
  contracts: {
    handleBootstrapFailed: {
      channel: {
        type: {
          blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
        },
        value: 'triggeredEventsChannel',
      },
      event: {
        type: {
          blueId: '8WpUtXczWTnk5cc38GNVH59ZBEwh5B9WEwjK9RGmSjqx',
        },
      },
      steps: {
        items: [
          {
            changeset: {
              items: [
                {
                  op: {
                    type: {
                      blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
                    },
                    value: 'replace',
                  },
                  path: {
                    type: {
                      blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
                    },
                    value: '/bootstrapError',
                  },
                  val: {
                    type: {
                      blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
                    },
                    value: '${event.reason}',
                  },
                },
              ],
            },
            name: 'Update Error Message',
            type: {
              blueId: 'Bf61yTzodeWXWCTaiZqNNPf5Zbpet1ZUczvuewiL3rSZ',
            },
          },
          {
            code: {
              type: {
                blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
              },
              value:
                "return { events: [ { type: 'Status Change', status: { type: 'Status Failed' } } ] };\n",
            },
            name: 'Emit Failure Event',
            type: {
              blueId: 'CbkaaimMgTw2L5AP6bVWVKVArHkkrKuJxu6Uo4o6Piwr',
            },
          },
        ],
      },
      type: {
        blueId: 'rjhSMnLxw45PaS3KLfjKgS2JoosfX4QYTHpWGwzpY4Y',
      },
    },
    handleParticipantResolved: {
      channel: {
        type: {
          blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
        },
        value: 'triggeredEventsChannel',
      },
      event: {
        type: {
          blueId: '8wwU4rYswgfNnVYgEEBeLEdaPwXMzLzNs6do7bawa7xD',
        },
      },
      steps: {
        items: [
          {
            code: {
              type: {
                blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
              },
              value:
                'const participantState = {\n  accountStatus: event.participant?.status?.accountStatus || \'Unknown\', // "Active" | "Inactive"\n  errorMessage: \'\'\n};\n\nreturn {\n  participantState,\n  channelName: event.channelName\n};\n',
            },
            name: 'Prepare Participant State',
            type: {
              blueId: 'CbkaaimMgTw2L5AP6bVWVKVArHkkrKuJxu6Uo4o6Piwr',
            },
          },
          {
            changeset: {
              items: [
                {
                  op: {
                    type: {
                      blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
                    },
                    value: 'replace',
                  },
                  path: {
                    type: {
                      blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
                    },
                    value:
                      "/participantsState/${steps['Prepare Participant State'].channelName}",
                  },
                  val: {
                    type: {
                      blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
                    },
                    value:
                      "${steps['Prepare Participant State'].participantState}",
                  },
                },
              ],
            },
            name: 'Update Participants State',
            type: {
              blueId: 'Bf61yTzodeWXWCTaiZqNNPf5Zbpet1ZUczvuewiL3rSZ',
            },
          },
        ],
      },
      type: {
        blueId: 'rjhSMnLxw45PaS3KLfjKgS2JoosfX4QYTHpWGwzpY4Y',
      },
    },
    handleStatusChange: {
      channel: {
        type: {
          blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
        },
        value: 'triggeredEventsChannel',
      },
      event: {
        type: {
          blueId: '7gvd9dkoEmTAkcuQwanuNsqV9YSMMeXSazWfVoCYe2s9',
        },
      },
      steps: {
        items: [
          {
            changeset: {
              items: [
                {
                  op: {
                    type: {
                      blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
                    },
                    value: 'replace',
                  },
                  path: {
                    type: {
                      blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
                    },
                    value: '/bootstrapStatus',
                  },
                  val: {
                    type: {
                      blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
                    },
                    value: '${event.status}',
                  },
                },
              ],
            },
            name: 'Update Bootstrap Status',
            type: {
              blueId: 'Bf61yTzodeWXWCTaiZqNNPf5Zbpet1ZUczvuewiL3rSZ',
            },
          },
        ],
      },
      type: {
        blueId: 'rjhSMnLxw45PaS3KLfjKgS2JoosfX4QYTHpWGwzpY4Y',
      },
    },
    handleTargetDocumentSessionStarted: {
      channel: {
        type: {
          blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
        },
        value: 'triggeredEventsChannel',
      },
      event: {
        type: {
          blueId: 'GMcNBF1gqzRK4JmMoxjspfdUzXLSknoszawm8qAjfDv7',
        },
      },
      steps: {
        items: [
          {
            changeset: {
              items: [
                {
                  op: {
                    type: {
                      blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
                    },
                    value: 'replace',
                  },
                  path: {
                    type: {
                      blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
                    },
                    value: '/initiatorSessionIds',
                  },
                  val: {
                    type: {
                      blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
                    },
                    value: '${event.initiatorSessionIds}',
                  },
                },
              ],
            },
            name: 'Update Initiator Session',
            type: {
              blueId: 'Bf61yTzodeWXWCTaiZqNNPf5Zbpet1ZUczvuewiL3rSZ',
            },
          },
          {
            code: {
              type: {
                blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
              },
              value:
                "return { events: [ { type: 'Status Change', status: { type: 'Status Completed' } } ] };\n",
            },
            name: 'Emit Completion Event',
            type: {
              blueId: 'CbkaaimMgTw2L5AP6bVWVKVArHkkrKuJxu6Uo4o6Piwr',
            },
          },
        ],
      },
      type: {
        blueId: 'rjhSMnLxw45PaS3KLfjKgS2JoosfX4QYTHpWGwzpY4Y',
      },
    },
    initHandler: {
      channel: {
        type: {
          blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
        },
        value: 'lifecycle',
      },
      steps: {
        items: [
          {
            changeset: {
              items: [
                {
                  op: {
                    type: {
                      blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
                    },
                    value: 'replace',
                  },
                  path: {
                    type: {
                      blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
                    },
                    value: '/bootstrapStatus',
                  },
                  val: {
                    type: {
                      blueId: 'C5gqFmeydNK78vSKdqDw3WqB5owofwDowme3y7tY87n',
                    },
                  },
                },
              ],
            },
            name: 'Initialize Bootstrap Status',
            type: {
              blueId: 'Bf61yTzodeWXWCTaiZqNNPf5Zbpet1ZUczvuewiL3rSZ',
            },
          },
        ],
      },
      type: {
        blueId: 'rjhSMnLxw45PaS3KLfjKgS2JoosfX4QYTHpWGwzpY4Y',
      },
    },
    lifecycle: {
      event: {
        type: {
          blueId: '75eYxjwaABUcTCuKCeg1Pf1jjwDarLnFLXtxERehWFCv',
        },
      },
      type: {
        blueId: '8XrM27vz8BEC7vDT6Yn41fRwucLeLFXsvqLt7JCvkG4c',
      },
    },
    triggeredEventsChannel: {
      type: {
        blueId: 'CXk6kCQ4S28Ee7piJ5a96fXAdgxW7VsuzG4cyJpTgsNL',
      },
    },
  },
  description:
    'MyOS-specific document for bootstrapping document sessions and tracking bootstrap progress',
  document: {
    description: 'Target Blue document to be bootstrapped',
  },
  initialMessages: {
    defaultMessage: {
      description: 'Default invitation message sent to all participants',
      type: {
        blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
      },
    },
    description:
      'Messages sent to participants when inviting them to the bootstrapped document',
    perChannel: {
      description: 'Per-channel custom invitation messages',
      keyType: {
        blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
      },
      type: {
        blueId: '294NBTj2mFRL3RB4kDRUSckwGg7Kzj6T8CTAFeR1kcSA',
      },
      valueType: {
        blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
      },
    },
  },
  initiatorSessionIds: {
    description: 'Session IDs created for the bootstrap initiator (caller)',
    itemType: {
      blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
    },
    type: {
      blueId: 'G8wmfjEqugPEEXByMYWJXiEdbLToPRWNQEekNxrxfQWB',
    },
  },
  name: 'Document Session Bootstrap',
  participantsState: {
    description: 'Maps channel names to participant activation tracking',
    keyType: {
      blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
    },
    type: {
      blueId: '294NBTj2mFRL3RB4kDRUSckwGg7Kzj6T8CTAFeR1kcSA',
    },
    valueType: {
      blueId: '77dKAvJLiqw5WXwyjHNRXfkh3ep8sHw7Q4gQyJEfoadJ',
    },
  },
  type: {
    blueId: '3j4HzyLzg2PeY3Bo3jqDPzXMAe8axXTHwBHUX4EKcaZz',
  },
} as const;
