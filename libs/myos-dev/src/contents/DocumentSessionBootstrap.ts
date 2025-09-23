export const documentSessionBootstrap = {
  name: 'Document Session Bootstrap',
  description:
    'MyOS-specific document for bootstrapping document sessions and tracking bootstrap progress',
  type: {
    blueId: '3j4HzyLzg2PeY3Bo3jqDPzXMAe8axXTHwBHUX4EKcaZz',
  },
  participantsState: {
    description: 'Maps channel names to participant activation tracking',
    type: {
      blueId: '294NBTj2mFRL3RB4kDRUSckwGg7Kzj6T8CTAFeR1kcSA',
    },
    keyType: {
      blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
    },
    valueType: {
      blueId: '77dKAvJLiqw5WXwyjHNRXfkh3ep8sHw7Q4gQyJEfoadJ',
    },
  },
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
  bootstrapStatus: {
    description: 'Overall bootstrap process status',
    type: {
      blueId: 'HsnCTdM4Rxjp28V7yq4ezQHyRh7MJixqDKtzm3tiLbcN',
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
  bootstrapError: {
    description: 'Error message explaining bootstrap failure',
    type: {
      blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
    },
  },
  initiatorSessionIds: {
    description: 'Session IDs created for the bootstrap initiator (caller)',
    type: {
      blueId: 'G8wmfjEqugPEEXByMYWJXiEdbLToPRWNQEekNxrxfQWB',
    },
    itemType: {
      blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
    },
  },
  contracts: {
    lifecycle: {
      type: {
        blueId: '8XrM27vz8BEC7vDT6Yn41fRwucLeLFXsvqLt7JCvkG4c',
      },
      event: {
        type: {
          blueId: '75eYxjwaABUcTCuKCeg1Pf1jjwDarLnFLXtxERehWFCv',
        },
      },
    },
    handleStatusChange: {
      type: {
        blueId: 'rjhSMnLxw45PaS3KLfjKgS2JoosfX4QYTHpWGwzpY4Y',
      },
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
            name: 'Update Bootstrap Status',
            type: {
              blueId: 'Bf61yTzodeWXWCTaiZqNNPf5Zbpet1ZUczvuewiL3rSZ',
            },
            changeset: {
              items: [
                {
                  val: {
                    type: {
                      blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
                    },
                    value: '${event.status}',
                  },
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
                },
              ],
            },
          },
        ],
      },
    },
    initHandler: {
      type: {
        blueId: 'rjhSMnLxw45PaS3KLfjKgS2JoosfX4QYTHpWGwzpY4Y',
      },
      channel: {
        type: {
          blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
        },
        value: 'lifecycle',
      },
      steps: {
        items: [
          {
            name: 'Initialize Bootstrap Status',
            type: {
              blueId: 'Bf61yTzodeWXWCTaiZqNNPf5Zbpet1ZUczvuewiL3rSZ',
            },
            changeset: {
              items: [
                {
                  val: {
                    type: {
                      blueId: 'C5gqFmeydNK78vSKdqDw3WqB5owofwDowme3y7tY87n',
                    },
                  },
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
                },
              ],
            },
          },
        ],
      },
    },
    handleParticipantResolved: {
      type: {
        blueId: 'rjhSMnLxw45PaS3KLfjKgS2JoosfX4QYTHpWGwzpY4Y',
      },
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
            name: 'Prepare Participant State',
            type: {
              blueId: 'CbkaaimMgTw2L5AP6bVWVKVArHkkrKuJxu6Uo4o6Piwr',
            },
            code: {
              type: {
                blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
              },
              value:
                'const participantState = {\n  accountStatus: event.participant?.status?.accountStatus || \'Unknown\', // "Active" | "Inactive"\n  errorMessage: \'\'\n};\n\nconst currentStatus = document(\'/bootstrapStatus\');\nconst shouldUpdateStatus = currentStatus && currentStatus.mode === \'pending\';\n\nreturn {\n  participantState,\n  channelName: event.channelName,\n  events: shouldUpdateStatus ? [\n    {\n      type: "Status Change",\n      status: "Status In Progress"\n    }\n  ] : []\n};\n',
            },
          },
          {
            name: 'Update Participants State',
            type: {
              blueId: 'Bf61yTzodeWXWCTaiZqNNPf5Zbpet1ZUczvuewiL3rSZ',
            },
            changeset: {
              items: [
                {
                  val: {
                    type: {
                      blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
                    },
                    value:
                      "${steps['Prepare Participant State'].participantState}",
                  },
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
                },
              ],
            },
          },
        ],
      },
    },
    handleTargetDocumentSessionStarted: {
      type: {
        blueId: 'rjhSMnLxw45PaS3KLfjKgS2JoosfX4QYTHpWGwzpY4Y',
      },
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
            name: 'Update Initiator Session',
            type: {
              blueId: 'Bf61yTzodeWXWCTaiZqNNPf5Zbpet1ZUczvuewiL3rSZ',
            },
            changeset: {
              items: [
                {
                  val: {
                    type: {
                      blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
                    },
                    value: '${event.initiatorSessionIds}',
                  },
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
                },
              ],
            },
          },
          {
            name: 'Emit Completion Event',
            type: {
              blueId: 'CbkaaimMgTw2L5AP6bVWVKVArHkkrKuJxu6Uo4o6Piwr',
            },
            code: {
              type: {
                blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
              },
              value:
                "return { events: [ { type: 'Status Change', status: { type: 'Status Completed' } } ] };\n",
            },
          },
        ],
      },
    },
    handleBootstrapFailed: {
      type: {
        blueId: 'rjhSMnLxw45PaS3KLfjKgS2JoosfX4QYTHpWGwzpY4Y',
      },
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
            name: 'Update Error Message',
            type: {
              blueId: 'Bf61yTzodeWXWCTaiZqNNPf5Zbpet1ZUczvuewiL3rSZ',
            },
            changeset: {
              items: [
                {
                  val: {
                    type: {
                      blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
                    },
                    value: '${event.reason}',
                  },
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
                },
              ],
            },
          },
          {
            name: 'Emit Failure Event',
            type: {
              blueId: 'CbkaaimMgTw2L5AP6bVWVKVArHkkrKuJxu6Uo4o6Piwr',
            },
            code: {
              type: {
                blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
              },
              value:
                "return { events: [ { type: 'Status Change', status: { type: 'Status Failed' } } ] };\n",
            },
          },
        ],
      },
    },
    triggeredEventsChannel: {
      type: {
        blueId: 'CXk6kCQ4S28Ee7piJ5a96fXAdgxW7VsuzG4cyJpTgsNL',
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
} as const;
