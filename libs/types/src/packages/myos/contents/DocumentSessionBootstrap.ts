export const DocumentSessionBootstrap: Record<string, unknown> = {
  avatarUrl: {
    description:
      'Uploaded avatar URL propagated to the bootstrapped target sessions',
    type: {
      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
    },
  },
  bootstrapError: {
    description: 'Error message explaining bootstrap failure',
    type: {
      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
    },
  },
  bootstrapStatus: {
    description: 'Overall bootstrap process status',
    type: {
      blueId: '9Q7nZyiFKJyzxH6c6EWHsHsqQ8arUYtyrAUgwv9paoxe',
    },
  },
  capabilities: {
    description:
      'Optional MyOS Admin capability contracts to attach (participantsOrchestration, sessionInteraction)',
    keyType: {
      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
    },
    type: {
      blueId: 'Efkz9D1ARMM7rU43w3rDNVqat1naS6qXKCqP4eHin3yG',
    },
    valueType: {
      blueId: 'AwvXD961fmnmqcSQhjMA7r15HpVh39cefb6ZTyUz2Fm2',
    },
  },
  channelBindings: {
    description: 'Maps channel names to participant identifiers',
    keyType: {
      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
    },
    type: {
      blueId: 'Efkz9D1ARMM7rU43w3rDNVqat1naS6qXKCqP4eHin3yG',
    },
    valueType: {
      blueId: '4FAZ94JPExNM4pn2ZhtdHa4CVP7uASmLNVrBy7aCG1p5',
    },
  },
  contracts: {
    handleBootstrapFailed: {
      channel: {
        type: {
          blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
        },
        value: 'triggeredEventsChannel',
      },
      event: {
        type: {
          blueId: 'GiwuMm3gtbi79CVSUtHGZmpUnQma7EK6A17G9PRmh6jK',
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
                        $exists: {
                          $event: {
                            type: {
                              blueId:
                                'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                            },
                            value: '/reason',
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
                        blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                      },
                      value: 'replace',
                    },
                    path: {
                      type: {
                        blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                      },
                      value: '/bootstrapError',
                    },
                    val: {
                      $event: {
                        type: {
                          blueId:
                            'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                            'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                        },
                        value: 'terminated',
                      },
                      type: {
                        blueId: '3kguQFJvHMnCfrg4Bmqt81EZg6qeht8Cs6tEjNDxTkyB',
                      },
                    },
                    type: {
                      blueId: '3wCtHNjVZc4JKbbbvfctdMYLB5VjMNEePgWLMLSdFbdv',
                    },
                  },
                },
                {
                  $return: {
                    changeset: {
                      $changeset: {
                        type: {
                          blueId:
                            'AwvXD961fmnmqcSQhjMA7r15HpVh39cefb6ZTyUz2Fm2',
                        },
                        value: true,
                      },
                    },
                    events: {
                      $events: {
                        type: {
                          blueId:
                            'AwvXD961fmnmqcSQhjMA7r15HpVh39cefb6ZTyUz2Fm2',
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
              blueId: '4qGDz5yJxXc9dr8bsBE1B2Tg4AWuR4qHPU9H6T29m3KZ',
            },
          },
        ],
      },
      type: {
        blueId: 'MyaXwTXty7ZujV89fT5STJvXpEr1W59puqdK2XM9ALv',
      },
    },
    handleParticipantResolved: {
      channel: {
        type: {
          blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
        },
        value: 'triggeredEventsChannel',
      },
      event: {
        type: {
          blueId: '3cujh2pNfS1bvc1L5eWhLaaeBepXjByWZ75XF5erArKU',
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
                        $exists: {
                          $event: {
                            type: {
                              blueId:
                                'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                            },
                            value: '/channelName',
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
                              'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                          },
                          value: 'channelName',
                        },
                        {
                          type: {
                            blueId:
                              'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                                    'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                },
                                value: '/participant/status/accountStatus',
                              },
                            },
                            {
                              type: {
                                blueId:
                                  'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                              'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                        blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                      },
                      value: 'replace',
                    },
                    path: {
                      $pointerJoin: {
                        items: [
                          {
                            type: {
                              blueId:
                                'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                            },
                            value: 'participantsState',
                          },
                          {
                            $var: {
                              type: {
                                blueId:
                                  'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                              'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                          },
                          value: 'accountStatus',
                        },
                      },
                      errorMessage: {
                        type: {
                          blueId:
                            'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                            'AwvXD961fmnmqcSQhjMA7r15HpVh39cefb6ZTyUz2Fm2',
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
              blueId: '4qGDz5yJxXc9dr8bsBE1B2Tg4AWuR4qHPU9H6T29m3KZ',
            },
          },
        ],
      },
      type: {
        blueId: 'MyaXwTXty7ZujV89fT5STJvXpEr1W59puqdK2XM9ALv',
      },
    },
    handleStatusChange: {
      channel: {
        type: {
          blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
        },
        value: 'triggeredEventsChannel',
      },
      event: {
        type: {
          blueId: '3wCtHNjVZc4JKbbbvfctdMYLB5VjMNEePgWLMLSdFbdv',
        },
      },
      steps: {
        items: [
          {
            do: {
              items: [
                {
                  $appendChange: {
                    op: {
                      type: {
                        blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                      },
                      value: 'replace',
                    },
                    path: {
                      type: {
                        blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                      },
                      value: '/bootstrapStatus',
                    },
                    val: {
                      $event: {
                        type: {
                          blueId:
                            'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                            'AwvXD961fmnmqcSQhjMA7r15HpVh39cefb6ZTyUz2Fm2',
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
              blueId: '4qGDz5yJxXc9dr8bsBE1B2Tg4AWuR4qHPU9H6T29m3KZ',
            },
          },
        ],
      },
      type: {
        blueId: 'MyaXwTXty7ZujV89fT5STJvXpEr1W59puqdK2XM9ALv',
      },
    },
    handleTargetDocumentSessionStarted: {
      channel: {
        type: {
          blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
        },
        value: 'triggeredEventsChannel',
      },
      event: {
        type: {
          blueId: 'J9a8qD8javfYK6nRDq9YZRA8LDuzZzq7QS7DB73Pm4Lv',
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
                        $exists: {
                          $event: {
                            type: {
                              blueId:
                                'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                            },
                            value: '/initiatorSessionIds',
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
                        blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                      },
                      value: 'replace',
                    },
                    path: {
                      type: {
                        blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                      },
                      value: '/initiatorSessionIds',
                    },
                    val: {
                      $event: {
                        type: {
                          blueId:
                            'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                            'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                        },
                        value: 'terminated',
                      },
                      type: {
                        blueId: '8LNqtg237MFe1zKdG3eWftMXtFTgVtyvrxgZkHcXYkC1',
                      },
                    },
                    type: {
                      blueId: '3wCtHNjVZc4JKbbbvfctdMYLB5VjMNEePgWLMLSdFbdv',
                    },
                  },
                },
                {
                  $return: {
                    changeset: {
                      $changeset: {
                        type: {
                          blueId:
                            'AwvXD961fmnmqcSQhjMA7r15HpVh39cefb6ZTyUz2Fm2',
                        },
                        value: true,
                      },
                    },
                    events: {
                      $events: {
                        type: {
                          blueId:
                            'AwvXD961fmnmqcSQhjMA7r15HpVh39cefb6ZTyUz2Fm2',
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
              blueId: '4qGDz5yJxXc9dr8bsBE1B2Tg4AWuR4qHPU9H6T29m3KZ',
            },
          },
        ],
      },
      type: {
        blueId: 'MyaXwTXty7ZujV89fT5STJvXpEr1W59puqdK2XM9ALv',
      },
    },
    initHandler: {
      channel: {
        type: {
          blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                    },
                    value: 'replace',
                  },
                  path: {
                    type: {
                      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                    },
                    value: '/bootstrapStatus',
                  },
                  val: {
                    type: {
                      blueId: 'G5KJnJLaUCSvz4BaZAMNJAgxtfxssb64oWWJXsDW3Uoy',
                    },
                  },
                },
              ],
            },
            name: 'Initialize Bootstrap Status',
            type: {
              blueId: '6bU2jWm3F6GaCXSLpdxiNjRbf9XcQDzH1NUsroHz4x8U',
            },
          },
        ],
      },
      type: {
        blueId: 'MyaXwTXty7ZujV89fT5STJvXpEr1W59puqdK2XM9ALv',
      },
    },
    lifecycle: {
      event: {
        type: {
          blueId: 'Ht1o66MTLKf7JmnEiR27rRLSwdz8FUTgf2mGPNuLSDUL',
        },
      },
      type: {
        blueId: '2DXGQUiQBQ6CT89jwAsTAXaEPhLgiSXhKCGh9Q7Hv3MQ',
      },
    },
    triggeredEventsChannel: {
      type: {
        blueId: '5HwxfbwRBCxG8xYpowWkCPC9akqUSKV7So2M4QHEmLsZ',
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
        blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
      },
    },
    description:
      'Messages sent to participants when inviting them to the bootstrapped document',
    perChannel: {
      description: 'Per-channel custom invitation messages',
      keyType: {
        blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
      },
      type: {
        blueId: 'Efkz9D1ARMM7rU43w3rDNVqat1naS6qXKCqP4eHin3yG',
      },
      valueType: {
        blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
      },
    },
  },
  initiatorSessionIds: {
    description: 'Session IDs created for the bootstrap initiator (caller)',
    itemType: {
      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
    },
    type: {
      blueId: '8DSFoWG9MqRSUhStqoPLrwVQiYByRh18NWbDEarN8MKF',
    },
  },
  name: 'Document Session Bootstrap',
  participantsState: {
    description: 'Maps channel names to participant activation tracking',
    keyType: {
      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
    },
    type: {
      blueId: 'Efkz9D1ARMM7rU43w3rDNVqat1naS6qXKCqP4eHin3yG',
    },
    valueType: {
      blueId: 'ASa82RtPSXwdys7M5Xs5s3brTjYgJmQqJt2uyraQGrNA',
    },
  },
  type: {
    blueId: '8ggQTWRSXKFTH3H8iqp4ff7NTFvFJn5ZNDWCHcxaxpbq',
  },
};
