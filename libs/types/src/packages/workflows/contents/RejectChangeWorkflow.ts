export const RejectChangeWorkflow = {
  description:
    'Discards a previously proposed change by removing its proposal state.',
  name: 'Reject Change Workflow',
  postfix: {
    description:
      'Optional postfix used while building proposed change state key.',
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
  steps: {
    items: [
      {
        do: {
          items: [
            {
              $let: {
                order: {
                  items: [
                    {
                      type: {
                        blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                      },
                      value: 'postfix',
                    },
                    {
                      type: {
                        blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                      },
                      value: 'proposedPath',
                    },
                  ],
                },
                vars: {
                  postfix: {
                    $default: {
                      items: [
                        {
                          $currentContract: {
                            type: {
                              blueId:
                                'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                            },
                            value: '/postfix',
                          },
                        },
                        {
                          type: {
                            blueId:
                              'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                          },
                          value: '',
                        },
                      ],
                    },
                  },
                  proposedPath: {
                    $concat: {
                      items: [
                        {
                          type: {
                            blueId:
                              'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                          },
                          value: '/proposedChange',
                        },
                        {
                          $var: {
                            type: {
                              blueId:
                                'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                            },
                            value: 'postfix',
                          },
                        },
                      ],
                    },
                  },
                },
              },
            },
            {
              $returnIf: {
                cond: {
                  $not: {
                    $exists: {
                      $document: {
                        path: {
                          $var: {
                            type: {
                              blueId:
                                'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                            },
                            value: 'proposedPath',
                          },
                        },
                      },
                    },
                  },
                },
                expr: {
                  changeset: {
                    items: [],
                  },
                  events: {
                    items: [
                      {
                        reason: {
                          $concat: {
                            items: [
                              {
                                type: {
                                  blueId:
                                    'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                },
                                value: 'no proposed change at',
                              },
                              {
                                type: {
                                  blueId:
                                    'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                },
                                value: ' ',
                              },
                              {
                                $var: {
                                  type: {
                                    blueId:
                                      'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                  },
                                  value: 'proposedPath',
                                },
                              },
                            ],
                          },
                        },
                        type: {
                          blueId:
                            '8oEU9ysLsGJJeeCDsEgnHbyu8vuWTwogExHmNc7t512n',
                        },
                      },
                    ],
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
                  value: 'remove',
                },
                path: {
                  $var: {
                    type: {
                      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                    },
                    value: 'proposedPath',
                  },
                },
              },
            },
            {
              $return: {
                changeset: {
                  $changeset: {
                    type: {
                      blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
                    },
                    value: true,
                  },
                },
                events: {
                  $events: {
                    type: {
                      blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
                    },
                    value: true,
                  },
                },
              },
            },
          ],
        },
        name: 'Prepare',
        type: {
          blueId: 'MXnjrsiUgKPkinuRCVXEmnsBJhESt7HYZQPJH1eJvnJ',
        },
      },
    ],
  },
  type: {
    blueId: 'B5mVH4caQv9Hmzeb5ZmCtzYomooFzTdoCQ4mZVwHY3MS',
  },
} as const;
