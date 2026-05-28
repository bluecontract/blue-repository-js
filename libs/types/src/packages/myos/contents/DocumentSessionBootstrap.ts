export const DocumentSessionBootstrap = {
  avatarUrl: {
    description:
      'Uploaded avatar URL propagated to the bootstrapped target sessions',
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
  bootstrapError: {
    description: 'Error message explaining bootstrap failure',
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
  bootstrapStatus: {
    description: 'Overall bootstrap process status',
    type: {
      blueId: 'QHoUCCVhepZWQnSo9VfZCJWbSwyA9TuT65tBZMVtnRX',
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
            do: {
              items: [
                {
                  $if: {
                    cond: {
                      $not: {
                        $is: {
                          node: {
                            $event: {
                              type: {
                                blueId:
                                  'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                              },
                              value: '/',
                            },
                          },
                          pattern: {
                            type: {
                              blueId:
                                '9iEADVdqxqgacF3GAZVMFZu4m5ywuNpsGzButLUNkPWo',
                            },
                          },
                        },
                      },
                    },
                    then: {
                      items: [
                        {
                          $return: {
                            changeset: {
                              items: [],
                            },
                            events: {
                              items: [],
                            },
                          },
                        },
                      ],
                    },
                  },
                },
                {
                  $appendChange: {
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
                      $event: {
                        type: {
                          blueId:
                            'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                        },
                        value: '/reason',
                      },
                    },
                  },
                },
                {
                  $appendEvent: {
                    status: {
                      mode: {
                        type: {
                          blueId:
                            'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                        },
                        value: 'terminated',
                      },
                      type: {
                        blueId: 'Fh7VjkS1XTg9BzQWBQrvD9ePLUEZVR86FAhVbttw1Wxs',
                      },
                    },
                    type: {
                      blueId: 'GXbF9ycv87y69kutDUmACbmeme7dGBSPw47fMQefvDPx',
                    },
                  },
                },
                {
                  $return: {
                    changeset: {
                      $changeset: {
                        type: {
                          blueId:
                            '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
                        },
                        value: true,
                      },
                    },
                    events: {
                      $events: {
                        type: {
                          blueId:
                            '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
                        },
                        value: true,
                      },
                    },
                  },
                },
              ],
            },
            name: 'Update Error And Emit Failure',
            type: {
              blueId: 'MXnjrsiUgKPkinuRCVXEmnsBJhESt7HYZQPJH1eJvnJ',
            },
          },
        ],
      },
      type: {
        blueId: '26w2LGCpoFHqcEpb22oJRodHCTew398PGc1WMLRevxqz',
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
            do: {
              items: [
                {
                  $if: {
                    cond: {
                      $not: {
                        $is: {
                          node: {
                            $event: {
                              type: {
                                blueId:
                                  'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                              },
                              value: '/',
                            },
                          },
                          pattern: {
                            type: {
                              blueId:
                                'EQVu8aZyp5ivTyKpSm8ueVsDLgprfcrHzr5QWdH1p6Cz',
                            },
                          },
                        },
                      },
                    },
                    then: {
                      items: [
                        {
                          $return: {
                            changeset: {
                              items: [],
                            },
                            events: {
                              items: [],
                            },
                          },
                        },
                      ],
                    },
                  },
                },
                {
                  $let: {
                    order: {
                      items: [
                        {
                          type: {
                            blueId:
                              'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                          },
                          value: 'channelName',
                        },
                        {
                          type: {
                            blueId:
                              'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                          },
                          value: 'accountStatus',
                        },
                      ],
                    },
                    vars: {
                      accountStatus: {
                        $default: {
                          items: [
                            {
                              $event: {
                                type: {
                                  blueId:
                                    'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                },
                                value: '/participant/status/accountStatus',
                              },
                            },
                            {
                              type: {
                                blueId:
                                  'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                              },
                              value: 'Unknown',
                            },
                          ],
                        },
                      },
                      channelName: {
                        $event: {
                          type: {
                            blueId:
                              'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                          },
                          value: '/channelName',
                        },
                      },
                    },
                  },
                },
                {
                  $appendChange: {
                    op: {
                      type: {
                        blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                      },
                      value: 'replace',
                    },
                    path: {
                      $pointerJoin: {
                        items: [
                          {
                            type: {
                              blueId:
                                'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                            },
                            value: 'participantsState',
                          },
                          {
                            $var: {
                              type: {
                                blueId:
                                  'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                              },
                              value: 'channelName',
                            },
                          },
                        ],
                      },
                    },
                    val: {
                      accountStatus: {
                        $var: {
                          type: {
                            blueId:
                              'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                          },
                          value: 'accountStatus',
                        },
                      },
                      errorMessage: {
                        type: {
                          blueId:
                            'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                        },
                        value: '',
                      },
                    },
                  },
                },
                {
                  $return: {
                    changeset: {
                      $changeset: {
                        type: {
                          blueId:
                            '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
                        },
                        value: true,
                      },
                    },
                  },
                },
              ],
            },
            name: 'Update Participant State',
            type: {
              blueId: 'MXnjrsiUgKPkinuRCVXEmnsBJhESt7HYZQPJH1eJvnJ',
            },
          },
        ],
      },
      type: {
        blueId: '26w2LGCpoFHqcEpb22oJRodHCTew398PGc1WMLRevxqz',
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
          blueId: 'GXbF9ycv87y69kutDUmACbmeme7dGBSPw47fMQefvDPx',
        },
      },
      steps: {
        items: [
          {
            do: {
              items: [
                {
                  $if: {
                    cond: {
                      $not: {
                        $is: {
                          node: {
                            $event: {
                              type: {
                                blueId:
                                  'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                              },
                              value: '/',
                            },
                          },
                          pattern: {
                            type: {
                              blueId:
                                'GXbF9ycv87y69kutDUmACbmeme7dGBSPw47fMQefvDPx',
                            },
                          },
                        },
                      },
                    },
                    then: {
                      items: [
                        {
                          $return: {
                            changeset: {
                              items: [],
                            },
                            events: {
                              items: [],
                            },
                          },
                        },
                      ],
                    },
                  },
                },
                {
                  $appendChange: {
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
                      $event: {
                        type: {
                          blueId:
                            'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                        },
                        value: '/status',
                      },
                    },
                  },
                },
                {
                  $return: {
                    changeset: {
                      $changeset: {
                        type: {
                          blueId:
                            '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
                        },
                        value: true,
                      },
                    },
                  },
                },
              ],
            },
            name: 'Update Bootstrap Status',
            type: {
              blueId: 'MXnjrsiUgKPkinuRCVXEmnsBJhESt7HYZQPJH1eJvnJ',
            },
          },
        ],
      },
      type: {
        blueId: '26w2LGCpoFHqcEpb22oJRodHCTew398PGc1WMLRevxqz',
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
            do: {
              items: [
                {
                  $if: {
                    cond: {
                      $not: {
                        $is: {
                          node: {
                            $event: {
                              type: {
                                blueId:
                                  'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                              },
                              value: '/',
                            },
                          },
                          pattern: {
                            type: {
                              blueId:
                                'FoHDf4WzS4idtPc8rWwVFFvALQ27WzMHxPdXovy7DH4p',
                            },
                          },
                        },
                      },
                    },
                    then: {
                      items: [
                        {
                          $return: {
                            changeset: {
                              items: [],
                            },
                            events: {
                              items: [],
                            },
                          },
                        },
                      ],
                    },
                  },
                },
                {
                  $appendChange: {
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
                      $event: {
                        type: {
                          blueId:
                            'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                        },
                        value: '/initiatorSessionIds',
                      },
                    },
                  },
                },
                {
                  $appendEvent: {
                    status: {
                      mode: {
                        type: {
                          blueId:
                            'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                        },
                        value: 'terminated',
                      },
                      type: {
                        blueId: 'Pzdwn6mQJT2qFDaF4V1dzpcyu4ejRqDv8neLPnbHRGi',
                      },
                    },
                    type: {
                      blueId: 'GXbF9ycv87y69kutDUmACbmeme7dGBSPw47fMQefvDPx',
                    },
                  },
                },
                {
                  $return: {
                    changeset: {
                      $changeset: {
                        type: {
                          blueId:
                            '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
                        },
                        value: true,
                      },
                    },
                    events: {
                      $events: {
                        type: {
                          blueId:
                            '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
                        },
                        value: true,
                      },
                    },
                  },
                },
              ],
            },
            name: 'Update Initiator Session And Emit Completion',
            type: {
              blueId: 'MXnjrsiUgKPkinuRCVXEmnsBJhESt7HYZQPJH1eJvnJ',
            },
          },
        ],
      },
      type: {
        blueId: '26w2LGCpoFHqcEpb22oJRodHCTew398PGc1WMLRevxqz',
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
                      blueId: 'E6jaeVfFuyjB4YEZyp7fvUt8AJ7BmKr8WAM9oGDmhMbM',
                    },
                  },
                },
              ],
            },
            name: 'Initialize Bootstrap Status',
            type: {
              blueId: 'FuD8hYGXvwBJGBzXhFB6DVtWHawt8hbpM6yT94H4p7cZ',
            },
          },
        ],
      },
      type: {
        blueId: '26w2LGCpoFHqcEpb22oJRodHCTew398PGc1WMLRevxqz',
      },
    },
    lifecycle: {
      event: {
        type: {
          blueId: 'BrpmpNt5JkapeUvPqYcxgXZrHNZX3R757dRwuXXdfNM2',
        },
      },
      type: {
        blueId: 'H2aCCTUcLMTJozWkn7HPUjyFBFxamraw1q8DyWk87zxr',
      },
    },
    triggeredEventsChannel: {
      type: {
        blueId: 'C77W4kVGcxL7Mkx9WL9QESPEFFL2GzWAe647s1Efprt',
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
    blueId: 'Gm9rGd9RJMvBcPCwN7ybywVAtMAAngeAB82DZ2cQ6bAE',
  },
} as const;
