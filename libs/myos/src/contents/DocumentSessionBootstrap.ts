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
      blueId: '58B8orsFkxxy7bWqjLXJmtBs2b5rwnNQNbeoAbGhPkJc',
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
      blueId: 'EF9xc9RMMXusRaumQebVUUhwtp1Do6QBYYo6URRhg2yv',
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
              blueId: 'BnnNLCnKF49TUJ1bRfZ5rSMaFw8SVfUNfnE4kJFG7HtM',
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
              blueId: 'DMrw2BSxyuQZai4UvitEY4YUp13ebP4prXyY8ZrZbM4Q',
            },
          },
        ],
      },
      type: {
        blueId: '7X3LkN54Yp88JgZbppPhP6hM3Jqiqv8Z2i4kS7phXtQe',
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
              blueId: 'DMrw2BSxyuQZai4UvitEY4YUp13ebP4prXyY8ZrZbM4Q',
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
              blueId: 'BnnNLCnKF49TUJ1bRfZ5rSMaFw8SVfUNfnE4kJFG7HtM',
            },
          },
        ],
      },
      type: {
        blueId: '7X3LkN54Yp88JgZbppPhP6hM3Jqiqv8Z2i4kS7phXtQe',
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
          blueId: 'C48nKSkbxraMSv4gCiGYVHKFjmtK12k63Yasn95zknWE',
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
              blueId: 'BnnNLCnKF49TUJ1bRfZ5rSMaFw8SVfUNfnE4kJFG7HtM',
            },
          },
        ],
      },
      type: {
        blueId: '7X3LkN54Yp88JgZbppPhP6hM3Jqiqv8Z2i4kS7phXtQe',
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
              blueId: 'BnnNLCnKF49TUJ1bRfZ5rSMaFw8SVfUNfnE4kJFG7HtM',
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
              blueId: 'DMrw2BSxyuQZai4UvitEY4YUp13ebP4prXyY8ZrZbM4Q',
            },
          },
        ],
      },
      type: {
        blueId: '7X3LkN54Yp88JgZbppPhP6hM3Jqiqv8Z2i4kS7phXtQe',
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
                      blueId: '56Lhu3Z2oF3kuYG41eZAK8TvgVtRNevkbRi4D31kKWZm',
                    },
                  },
                },
              ],
            },
            name: 'Initialize Bootstrap Status',
            type: {
              blueId: 'BnnNLCnKF49TUJ1bRfZ5rSMaFw8SVfUNfnE4kJFG7HtM',
            },
          },
        ],
      },
      type: {
        blueId: '7X3LkN54Yp88JgZbppPhP6hM3Jqiqv8Z2i4kS7phXtQe',
      },
    },
    lifecycle: {
      event: {
        type: {
          blueId: 'BrpmpNt5JkapeUvPqYcxgXZrHNZX3R757dRwuXXdfNM2',
        },
      },
      type: {
        blueId: 'Er9zZ7Yoii7D5j8PdvMYouH2TTVnHmcukFWVqJTam3To',
      },
    },
    triggeredEventsChannel: {
      type: {
        blueId: '716Uk7KPeunnc9PK48hNBDfRb9qsKrFCAZEcU92R169m',
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
    blueId: 'A1tMXCeRAYcvysLdBvZkfztu16kYi5yecpvxs5cTuneh',
  },
} as const;
