export const documentSessionBootstrap = {
  bootstrapError: {
    description: 'Error message explaining bootstrap failure',
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
  bootstrapStatus: {
    description: 'Overall bootstrap process status',
    type: {
      blueId: 'CewvMvGaShax8xhe9TuJmWbkpbpDwqyMcGTMwGft4pE5',
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
      blueId: '23ZWQ6WWqFcyuoBDV9P8XaLk2oEwJtoQaPrkFFayZVqY',
    },
  },
  contracts: {
    handleBootstrapFailed: {
      channel: {
        type: {
          blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
        },
        value: 'triggeredEventsChannel',
      },
      event: {
        type: {
          blueId: '9iEADVdqxqgacF3GAZVMFZu4m5ywuNpsGzButLUNkPWo',
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
                      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                    },
                    value: 'replace',
                  },
                  path: {
                    type: {
                      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                    },
                    value: '/bootstrapError',
                  },
                  val: {
                    type: {
                      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                    },
                    value: '${event.reason}',
                  },
                },
              ],
            },
            name: 'Update Error Message',
            type: {
              blueId: '54tUHQY9L5Nu1YL3d86RfGPpNH5kzbxntssaS8yGmTXm',
            },
          },
          {
            code: {
              type: {
                blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
              },
              value:
                "return { events: [ { type: 'Status Change', status: { type: 'Status Failed' } } ] };\n",
            },
            name: 'Emit Failure Event',
            type: {
              blueId: 'Hz1LwvihraqVw1xEhSG6eeKnnFnytPNTXKMZgG8wtWtR',
            },
          },
        ],
      },
      type: {
        blueId: 'HFRNoa2joz3hzwNNTDMP2pWo1LafW3qmwmc5yZK5b6ky',
      },
    },
    handleParticipantResolved: {
      channel: {
        type: {
          blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
        },
        value: 'triggeredEventsChannel',
      },
      event: {
        type: {
          blueId: 'EQVu8aZyp5ivTyKpSm8ueVsDLgprfcrHzr5QWdH1p6Cz',
        },
      },
      steps: {
        items: [
          {
            code: {
              type: {
                blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
              },
              value:
                'const participantState = {\n  accountStatus: event.participant?.status?.accountStatus || \'Unknown\', // "Active" | "Inactive"\n  errorMessage: \'\'\n};\n\nreturn {\n  participantState,\n  channelName: event.channelName\n};\n',
            },
            name: 'Prepare Participant State',
            type: {
              blueId: 'Hz1LwvihraqVw1xEhSG6eeKnnFnytPNTXKMZgG8wtWtR',
            },
          },
          {
            changeset: {
              items: [
                {
                  op: {
                    type: {
                      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                    },
                    value: 'replace',
                  },
                  path: {
                    type: {
                      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                    },
                    value:
                      "/participantsState/${steps['Prepare Participant State'].channelName}",
                  },
                  val: {
                    type: {
                      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                    },
                    value:
                      "${steps['Prepare Participant State'].participantState}",
                  },
                },
              ],
            },
            name: 'Update Participants State',
            type: {
              blueId: '54tUHQY9L5Nu1YL3d86RfGPpNH5kzbxntssaS8yGmTXm',
            },
          },
        ],
      },
      type: {
        blueId: 'HFRNoa2joz3hzwNNTDMP2pWo1LafW3qmwmc5yZK5b6ky',
      },
    },
    handleStatusChange: {
      channel: {
        type: {
          blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
        },
        value: 'triggeredEventsChannel',
      },
      event: {
        type: {
          blueId: 'As7RVkLBRZxEQiEbNbS7S4Gq3yxLRcswKVv7GiEAPfdB',
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
                      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                    },
                    value: 'replace',
                  },
                  path: {
                    type: {
                      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                    },
                    value: '/bootstrapStatus',
                  },
                  val: {
                    type: {
                      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                    },
                    value: '${event.status}',
                  },
                },
              ],
            },
            name: 'Update Bootstrap Status',
            type: {
              blueId: '54tUHQY9L5Nu1YL3d86RfGPpNH5kzbxntssaS8yGmTXm',
            },
          },
        ],
      },
      type: {
        blueId: 'HFRNoa2joz3hzwNNTDMP2pWo1LafW3qmwmc5yZK5b6ky',
      },
    },
    handleTargetDocumentSessionStarted: {
      channel: {
        type: {
          blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
        },
        value: 'triggeredEventsChannel',
      },
      event: {
        type: {
          blueId: 'FoHDf4WzS4idtPc8rWwVFFvALQ27WzMHxPdXovy7DH4p',
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
                      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                    },
                    value: 'replace',
                  },
                  path: {
                    type: {
                      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                    },
                    value: '/initiatorSessionIds',
                  },
                  val: {
                    type: {
                      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                    },
                    value: '${event.initiatorSessionIds}',
                  },
                },
              ],
            },
            name: 'Update Initiator Session',
            type: {
              blueId: '54tUHQY9L5Nu1YL3d86RfGPpNH5kzbxntssaS8yGmTXm',
            },
          },
          {
            code: {
              type: {
                blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
              },
              value:
                "return { events: [ { type: 'Status Change', status: { type: 'Status Completed' } } ] };\n",
            },
            name: 'Emit Completion Event',
            type: {
              blueId: 'Hz1LwvihraqVw1xEhSG6eeKnnFnytPNTXKMZgG8wtWtR',
            },
          },
        ],
      },
      type: {
        blueId: 'HFRNoa2joz3hzwNNTDMP2pWo1LafW3qmwmc5yZK5b6ky',
      },
    },
    initHandler: {
      channel: {
        type: {
          blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
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
                      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                    },
                    value: 'replace',
                  },
                  path: {
                    type: {
                      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                    },
                    value: '/bootstrapStatus',
                  },
                  val: {
                    type: {
                      blueId: 'BQrcMigFu6ra14jVnbkLDEF192SbT7rrvEHMgtApTvYQ',
                    },
                  },
                },
              ],
            },
            name: 'Initialize Bootstrap Status',
            type: {
              blueId: '54tUHQY9L5Nu1YL3d86RfGPpNH5kzbxntssaS8yGmTXm',
            },
          },
        ],
      },
      type: {
        blueId: 'HFRNoa2joz3hzwNNTDMP2pWo1LafW3qmwmc5yZK5b6ky',
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
        blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
      },
    },
    description:
      'Messages sent to participants when inviting them to the bootstrapped document',
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
  initiatorSessionIds: {
    description: 'Session IDs created for the bootstrap initiator (caller)',
    itemType: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
    type: {
      blueId: '6aehfNAxHLC1PHHoDr3tYtFH3RWNbiWdFancJ1bypXEY',
    },
  },
  name: 'Document Session Bootstrap',
  participantsState: {
    description: 'Maps channel names to participant activation tracking',
    keyType: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
    type: {
      blueId: 'G7fBT9PSod1RfHLHkpafAGBDVAJMrMhAMY51ERcyXNrj',
    },
    valueType: {
      blueId: 'CocmZUt2K7LuGukwuPSAFC7EFo5HZonozAm4tUsSmuFB',
    },
  },
  type: {
    blueId: 'CUWkxDC7jdZZLtZBCbLg4coiVgvdFLTNoRN36C7kTiDY',
  },
} as const;
