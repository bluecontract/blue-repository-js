export const ProposeChangeWorkflow: Record<string, unknown> = {
  description: 'Stores a proposed change under /proposedChange{postfix}.',
  name: 'Propose Change Workflow',
  postfix: {
    description:
      'Optional postfix used while building proposed change state key.',
    type: {
      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
    },
  },
  request: {
    description: 'Expected request payload for this workflow.',
    type: {
      blueId: '6DTYzUFXoVEV5WjVKmQveSztfXfVN5nr1bso3ygW9ocU',
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
                        blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                      },
                      value: 'request',
                    },
                    {
                      type: {
                        blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                      },
                      value: 'summary',
                    },
                    {
                      type: {
                        blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                      },
                      value: 'postfix',
                    },
                    {
                      type: {
                        blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                                'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                            },
                            value: '/postfix',
                          },
                        },
                        {
                          type: {
                            blueId:
                              'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                              'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                          },
                          value: '/proposedChange',
                        },
                        {
                          $var: {
                            type: {
                              blueId:
                                'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                        blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                      },
                      value: '/message/request',
                    },
                  },
                  summary: {
                    $event: {
                      type: {
                        blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                                  'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                                  'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                              },
                              value: 'text',
                            },
                            val: {
                              $var: {
                                type: {
                                  blueId:
                                    'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                              'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                          },
                          value: 'summary is missing',
                        },
                        type: {
                          blueId:
                            '6jcAKEeVpGCPenpSnfwwamL2iTHBACRXPFQjEDU5pX1y',
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
                              'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                                    'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                },
                                value: 'proposed change already exists at',
                              },
                              {
                                type: {
                                  blueId:
                                    'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                },
                                value: ' ',
                              },
                              {
                                $var: {
                                  type: {
                                    blueId:
                                      'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                  },
                                  value: 'proposedPath',
                                },
                              },
                            ],
                          },
                        },
                        type: {
                          blueId:
                            '6jcAKEeVpGCPenpSnfwwamL2iTHBACRXPFQjEDU5pX1y',
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
                    blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                  },
                  value: 'add',
                },
                path: {
                  $var: {
                    type: {
                      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                    },
                    value: 'proposedPath',
                  },
                },
                val: {
                  $var: {
                    type: {
                      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                      blueId: 'AwvXD961fmnmqcSQhjMA7r15HpVh39cefb6ZTyUz2Fm2',
                    },
                    value: true,
                  },
                },
                events: {
                  $events: {
                    type: {
                      blueId: 'AwvXD961fmnmqcSQhjMA7r15HpVh39cefb6ZTyUz2Fm2',
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
          blueId: '4qGDz5yJxXc9dr8bsBE1B2Tg4AWuR4qHPU9H6T29m3KZ',
        },
      },
    ],
  },
  type: {
    blueId: 'CXotTNTYxqqSgDBzTGJjbLVvsjrxJMgmJZaC1rA826CF',
  },
};
