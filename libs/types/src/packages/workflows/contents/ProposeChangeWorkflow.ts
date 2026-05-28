export const ProposeChangeWorkflow = {
  description: 'Stores a proposed change under /proposedChange{postfix}.',
  name: 'Propose Change Workflow',
  postfix: {
    description:
      'Optional postfix used while building proposed change state key.',
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
  request: {
    description: 'Expected request payload for this workflow.',
    type: {
      blueId: 'Em6YA77iVnnRaScCrkZr9C9VkQF14i2pk5fA8KNiHS41',
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
                      value: 'request',
                    },
                    {
                      type: {
                        blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                      },
                      value: 'summary',
                    },
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
                  request: {
                    $event: {
                      type: {
                        blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                      },
                      value: '/message/request',
                    },
                  },
                  summary: {
                    $event: {
                      type: {
                        blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                      },
                      value: '/message/request/summary',
                    },
                  },
                },
              },
            },
            {
              $returnIf: {
                cond: {
                  $or: {
                    items: [
                      {
                        $not: {
                          $truthy: {
                            $var: {
                              type: {
                                blueId:
                                  'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                              },
                              value: 'summary',
                            },
                          },
                        },
                      },
                      {
                        $not: {
                          $isKind: {
                            kind: {
                              type: {
                                blueId:
                                  'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                              },
                              value: 'text',
                            },
                            val: {
                              $var: {
                                type: {
                                  blueId:
                                    'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                },
                                value: 'summary',
                              },
                            },
                          },
                        },
                      },
                    ],
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
                          type: {
                            blueId:
                              'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                          },
                          value: 'summary is missing',
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
              $returnIf: {
                cond: {
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
                                value: 'proposed change already exists at',
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
                  value: 'add',
                },
                path: {
                  $var: {
                    type: {
                      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                    },
                    value: 'proposedPath',
                  },
                },
                val: {
                  $var: {
                    type: {
                      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                    },
                    value: 'request',
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
