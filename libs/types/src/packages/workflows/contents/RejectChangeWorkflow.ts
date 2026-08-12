export const RejectChangeWorkflow: Record<string, unknown> = {
  description:
    'Discards a previously proposed change by removing its proposal state.',
  name: 'Reject Change Workflow',
  postfix: {
    description:
      'Optional postfix used while building proposed change state key.',
    type: {
      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                                'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                                    'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                },
                                value: 'no proposed change at',
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
                  value: 'remove',
                },
                path: {
                  $var: {
                    type: {
                      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
    blueId: '6rnGvP1BUsBpbtvuvJ1vy6hS7psoUJVBEXXsFeRma82V',
  },
};
