export const ChangeWorkflow = {
  description: 'Applies a requested changeset immediately to the document.',
  name: 'Change Workflow',
  request: {
    description: 'Expected request payload for this workflow.',
    type: {
      blueId: 'Em6YA77iVnnRaScCrkZr9C9VkQF14i2pk5fA8KNiHS41',
    },
  },
  steps: {
    items: [
      {
        entry: {
          type: {
            blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
          },
          value: 'prepare',
        },
        functions: {
          asList: {
            args: {
              val: {
                value: null,
              },
            },
            expr: {
              $choose: {
                cond: {
                  $isKind: {
                    kind: {
                      type: {
                        blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                      },
                      value: 'list',
                    },
                    val: {
                      $var: {
                        type: {
                          blueId:
                            'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                        },
                        value: 'val',
                      },
                    },
                  },
                },
                else: {
                  items: [],
                },
                then: {
                  $var: {
                    type: {
                      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                    },
                    value: 'val',
                  },
                },
              },
            },
          },
          asObject: {
            args: {
              val: {
                value: null,
              },
            },
            expr: {
              $choose: {
                cond: {
                  $isKind: {
                    kind: {
                      type: {
                        blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                      },
                      value: 'object',
                    },
                    val: {
                      $var: {
                        type: {
                          blueId:
                            'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                        },
                        value: 'val',
                      },
                    },
                  },
                },
                else: {
                  $emptyObject: {
                    type: {
                      blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
                    },
                    value: true,
                  },
                },
                then: {
                  $var: {
                    type: {
                      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                    },
                    value: 'val',
                  },
                },
              },
            },
          },
          contractKeys: {
            args: {
              contractsMap: {
                value: null,
              },
            },
            expr: {
              $filter: {
                in: {
                  $keys: {
                    $call: {
                      args: {
                        val: {
                          $var: {
                            type: {
                              blueId:
                                'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                            },
                            value: 'contractsMap',
                          },
                        },
                      },
                      function: {
                        type: {
                          blueId:
                            'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                        },
                        value: 'asObject',
                      },
                    },
                  },
                },
                item: {
                  type: {
                    blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                  },
                  value: 'contractKey',
                },
                where: {
                  $not: {
                    $call: {
                      args: {
                        key: {
                          $var: {
                            type: {
                              blueId:
                                'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                            },
                            value: 'contractKey',
                          },
                        },
                      },
                      function: {
                        type: {
                          blueId:
                            'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                        },
                        value: 'isMetaKey',
                      },
                    },
                  },
                },
              },
            },
          },
          contractPath: {
            args: {
              key: {
                value: null,
              },
            },
            expr: {
              $pointerJoin: {
                items: [
                  {
                    type: {
                      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                    },
                    value: 'contracts',
                  },
                  {
                    $var: {
                      type: {
                        blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                      },
                      value: 'key',
                    },
                  },
                ],
              },
            },
          },
          hasMatchingRelatedContracts: {
            args: {
              contractKeys: {
                value: null,
              },
              section: {
                value: null,
              },
            },
            do: {
              items: [
                {
                  $let: {
                    order: {
                      items: [
                        {
                          type: {
                            blueId:
                              'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                          },
                          value: 'related',
                        },
                        {
                          type: {
                            blueId:
                              'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                          },
                          value: 'relatedMap',
                        },
                      ],
                    },
                    vars: {
                      related: {
                        $call: {
                          args: {
                            val: {
                              $choose: {
                                cond: {
                                  $exists: {
                                    $var: {
                                      name: 'section',
                                      path: {
                                        type: {
                                          blueId:
                                            'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                        },
                                        value: '/relatedContracts',
                                      },
                                    },
                                  },
                                },
                                else: {
                                  items: [],
                                },
                                then: {
                                  $var: {
                                    name: 'section',
                                    path: {
                                      type: {
                                        blueId:
                                          'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                      },
                                      value: '/relatedContracts',
                                    },
                                  },
                                },
                              },
                            },
                          },
                          function: {
                            type: {
                              blueId:
                                'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                            },
                            value: 'asList',
                          },
                        },
                      },
                      relatedMap: {
                        $call: {
                          args: {
                            keys: {
                              $var: {
                                type: {
                                  blueId:
                                    'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                },
                                value: 'related',
                              },
                            },
                          },
                          function: {
                            type: {
                              blueId:
                                'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                            },
                            value: 'keySetObject',
                          },
                        },
                      },
                    },
                  },
                },
                {
                  $returnIf: {
                    cond: {
                      $eq: {
                        items: [
                          {
                            $size: {
                              $var: {
                                type: {
                                  blueId:
                                    'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                },
                                value: 'related',
                              },
                            },
                          },
                          {
                            type: {
                              blueId:
                                '5WNMiV9Knz63B4dVY5JtMyh3FB4FSGqv7ceScvuapdE1',
                            },
                            value: 0,
                          },
                        ],
                      },
                    },
                    expr: {
                      type: {
                        blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
                      },
                      value: true,
                    },
                  },
                },
                {
                  $returnIf: {
                    cond: {
                      $ne: {
                        items: [
                          {
                            $size: {
                              $var: {
                                type: {
                                  blueId:
                                    'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                },
                                value: 'related',
                              },
                            },
                          },
                          {
                            $size: {
                              $var: {
                                type: {
                                  blueId:
                                    'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                },
                                value: 'contractKeys',
                              },
                            },
                          },
                        ],
                      },
                    },
                    expr: {
                      type: {
                        blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
                      },
                      value: false,
                    },
                  },
                },
                {
                  $returnIf: {
                    cond: {
                      $ne: {
                        items: [
                          {
                            $size: {
                              $keys: {
                                $var: {
                                  type: {
                                    blueId:
                                      'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                  },
                                  value: 'relatedMap',
                                },
                              },
                            },
                          },
                          {
                            $size: {
                              $var: {
                                type: {
                                  blueId:
                                    'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                },
                                value: 'contractKeys',
                              },
                            },
                          },
                        ],
                      },
                    },
                    expr: {
                      type: {
                        blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
                      },
                      value: false,
                    },
                  },
                },
                {
                  $return: {
                    $not: {
                      $some: {
                        in: {
                          $var: {
                            type: {
                              blueId:
                                'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                            },
                            value: 'contractKeys',
                          },
                        },
                        item: {
                          type: {
                            blueId:
                              'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                          },
                          value: 'contractKey',
                        },
                        where: {
                          $not: {
                            $hasKey: {
                              key: {
                                $var: {
                                  type: {
                                    blueId:
                                      'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                  },
                                  value: 'contractKey',
                                },
                              },
                              object: {
                                $var: {
                                  type: {
                                    blueId:
                                      'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                  },
                                  value: 'relatedMap',
                                },
                              },
                            },
                          },
                        },
                      },
                    },
                  },
                },
              ],
            },
          },
          invalid: {
            args: {
              reason: {
                value: null,
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
                      $var: {
                        type: {
                          blueId:
                            'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                        },
                        value: 'reason',
                      },
                    },
                    type: {
                      blueId: '8oEU9ysLsGJJeeCDsEgnHbyu8vuWTwogExHmNc7t512n',
                    },
                  },
                ],
              },
            },
          },
          isContractsPatchEntry: {
            args: {
              entry: {
                value: null,
              },
            },
            expr: {
              $or: {
                items: [
                  {
                    $eq: {
                      items: [
                        {
                          $text: {
                            $default: {
                              items: [
                                {
                                  $var: {
                                    name: 'entry',
                                    path: {
                                      type: {
                                        blueId:
                                          'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                      },
                                      value: '/path',
                                    },
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
                        },
                        {
                          type: {
                            blueId:
                              'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                          },
                          value: '/contracts',
                        },
                      ],
                    },
                  },
                  {
                    $startsWith: {
                      items: [
                        {
                          $text: {
                            $default: {
                              items: [
                                {
                                  $var: {
                                    name: 'entry',
                                    path: {
                                      type: {
                                        blueId:
                                          'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                      },
                                      value: '/path',
                                    },
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
                        },
                        {
                          type: {
                            blueId:
                              'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                          },
                          value: '/contracts/',
                        },
                      ],
                    },
                  },
                ],
              },
            },
          },
          isMetaKey: {
            args: {
              key: {
                value: null,
              },
            },
            expr: {
              $or: {
                items: [
                  {
                    $eq: {
                      items: [
                        {
                          $var: {
                            type: {
                              blueId:
                                'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                            },
                            value: 'key',
                          },
                        },
                        {
                          type: {
                            blueId:
                              'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                          },
                          value: 'type',
                        },
                      ],
                    },
                  },
                  {
                    $eq: {
                      items: [
                        {
                          $var: {
                            type: {
                              blueId:
                                'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                            },
                            value: 'key',
                          },
                        },
                        {
                          type: {
                            blueId:
                              'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                          },
                          value: 'keyType',
                        },
                      ],
                    },
                  },
                  {
                    $eq: {
                      items: [
                        {
                          $var: {
                            type: {
                              blueId:
                                'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                            },
                            value: 'key',
                          },
                        },
                        {
                          type: {
                            blueId:
                              'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                          },
                          value: 'valueType',
                        },
                      ],
                    },
                  },
                  {
                    $eq: {
                      items: [
                        {
                          $var: {
                            type: {
                              blueId:
                                'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                            },
                            value: 'key',
                          },
                        },
                        {
                          type: {
                            blueId:
                              'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                          },
                          value: 'description',
                        },
                      ],
                    },
                  },
                ],
              },
            },
          },
          isProposedChangePatchEntry: {
            args: {
              entry: {
                value: null,
              },
            },
            expr: {
              $startsWith: {
                items: [
                  {
                    $text: {
                      $default: {
                        items: [
                          {
                            $var: {
                              name: 'entry',
                              path: {
                                type: {
                                  blueId:
                                    'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                },
                                value: '/path',
                              },
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
                  },
                  {
                    type: {
                      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                    },
                    value: '/proposedChange',
                  },
                ],
              },
            },
          },
          keySetObject: {
            args: {
              keys: {
                value: null,
              },
            },
            expr: {
              $objectFromEntries: {
                $map: {
                  expr: {
                    key: {
                      $text: {
                        $var: {
                          type: {
                            blueId:
                              'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                          },
                          value: 'key',
                        },
                      },
                    },
                    val: {
                      type: {
                        blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
                      },
                      value: true,
                    },
                  },
                  in: {
                    $call: {
                      args: {
                        val: {
                          $var: {
                            type: {
                              blueId:
                                'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                            },
                            value: 'keys',
                          },
                        },
                      },
                      function: {
                        type: {
                          blueId:
                            'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                        },
                        value: 'asList',
                      },
                    },
                  },
                  item: {
                    type: {
                      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                    },
                    value: 'key',
                  },
                },
              },
            },
          },
          normalizeSection: {
            args: {
              contractKeys: {
                value: null,
              },
              section: {
                value: null,
              },
            },
            do: {
              items: [
                {
                  $let: {
                    expr: {
                      $call: {
                        args: {
                          val: {
                            $choose: {
                              cond: {
                                $exists: {
                                  $var: {
                                    name: 'section',
                                    path: {
                                      type: {
                                        blueId:
                                          'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                      },
                                      value: '/relatedContracts',
                                    },
                                  },
                                },
                              },
                              else: {
                                items: [],
                              },
                              then: {
                                $var: {
                                  name: 'section',
                                  path: {
                                    type: {
                                      blueId:
                                        'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                    },
                                    value: '/relatedContracts',
                                  },
                                },
                              },
                            },
                          },
                        },
                        function: {
                          type: {
                            blueId:
                              'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                          },
                          value: 'asList',
                        },
                      },
                    },
                    name: 'related',
                  },
                },
                {
                  $return: {
                    $merge: {
                      items: [
                        {
                          $call: {
                            args: {
                              val: {
                                $var: {
                                  type: {
                                    blueId:
                                      'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                  },
                                  value: 'section',
                                },
                              },
                            },
                            function: {
                              type: {
                                blueId:
                                  'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                              },
                              value: 'asObject',
                            },
                          },
                        },
                        {
                          relatedContracts: {
                            $choose: {
                              cond: {
                                $gt: {
                                  items: [
                                    {
                                      $size: {
                                        $var: {
                                          type: {
                                            blueId:
                                              'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                          },
                                          value: 'related',
                                        },
                                      },
                                    },
                                    {
                                      type: {
                                        blueId:
                                          '5WNMiV9Knz63B4dVY5JtMyh3FB4FSGqv7ceScvuapdE1',
                                      },
                                      value: 0,
                                    },
                                  ],
                                },
                              },
                              else: {
                                $var: {
                                  type: {
                                    blueId:
                                      'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                  },
                                  value: 'contractKeys',
                                },
                              },
                              then: {
                                $var: {
                                  type: {
                                    blueId:
                                      'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                  },
                                  value: 'related',
                                },
                              },
                            },
                          },
                          type: {
                            blueId:
                              'EQipmtzeTjY7JhgBQWWAhsjBAXsTT2SDu2gv1rXeXSpb',
                          },
                        },
                      ],
                    },
                  },
                },
              ],
            },
          },
          prepare: {
            do: {
              items: [
                {
                  $let: {
                    order: {
                      items: [
                        {
                          type: {
                            blueId:
                              'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                          },
                          value: 'change',
                        },
                        {
                          type: {
                            blueId:
                              'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                          },
                          value: 'summary',
                        },
                        {
                          type: {
                            blueId:
                              'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                          },
                          value: 'requestChangeset',
                        },
                        {
                          type: {
                            blueId:
                              'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                          },
                          value: 'sectionChanges',
                        },
                        {
                          type: {
                            blueId:
                              'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                          },
                          value: 'documentContracts',
                        },
                        {
                          type: {
                            blueId:
                              'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                          },
                          value: 'policy',
                        },
                        {
                          type: {
                            blueId:
                              'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                          },
                          value: 'policyEnabled',
                        },
                        {
                          type: {
                            blueId:
                              'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                          },
                          value: 'seenSectionKeys',
                        },
                        {
                          type: {
                            blueId:
                              'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                          },
                          value: 'seenContractKeys',
                        },
                        {
                          type: {
                            blueId:
                              'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                          },
                          value: 'existingContractKeys',
                        },
                        {
                          type: {
                            blueId:
                              'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                          },
                          value: 'sectionChangeCount',
                        },
                      ],
                    },
                    vars: {
                      change: {
                        $event: {
                          type: {
                            blueId:
                              'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                          },
                          value: '/message/request',
                        },
                      },
                      documentContracts: {
                        $call: {
                          args: {
                            val: {
                              $document: {
                                type: {
                                  blueId:
                                    'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                },
                                value: '/contracts',
                              },
                            },
                          },
                          function: {
                            type: {
                              blueId:
                                'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                            },
                            value: 'asObject',
                          },
                        },
                      },
                      existingContractKeys: {
                        $call: {
                          args: {
                            keys: {
                              $call: {
                                args: {
                                  contractsMap: {
                                    $var: {
                                      type: {
                                        blueId:
                                          'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                      },
                                      value: 'documentContracts',
                                    },
                                  },
                                },
                                function: {
                                  type: {
                                    blueId:
                                      'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                  },
                                  value: 'contractKeys',
                                },
                              },
                            },
                          },
                          function: {
                            type: {
                              blueId:
                                'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                            },
                            value: 'keySetObject',
                          },
                        },
                      },
                      policy: {
                        $find: {
                          in: {
                            $var: {
                              type: {
                                blueId:
                                  'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                              },
                              value: 'documentContracts',
                            },
                          },
                          item: {
                            type: {
                              blueId:
                                'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                            },
                            value: 'contract',
                          },
                          where: {
                            $exists: {
                              $var: {
                                name: 'contract',
                                path: {
                                  type: {
                                    blueId:
                                      'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                  },
                                  value: '/requireSectionChanges',
                                },
                              },
                            },
                          },
                        },
                      },
                      policyEnabled: {
                        $and: {
                          items: [
                            {
                              $exists: {
                                $var: {
                                  type: {
                                    blueId:
                                      'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                  },
                                  value: 'policy',
                                },
                              },
                            },
                            {
                              $ne: {
                                items: [
                                  {
                                    $var: {
                                      name: 'policy',
                                      path: {
                                        type: {
                                          blueId:
                                            'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                        },
                                        value: '/requireSectionChanges',
                                      },
                                    },
                                  },
                                  {
                                    type: {
                                      blueId:
                                        '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
                                    },
                                    value: false,
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      requestChangeset: {
                        $call: {
                          args: {
                            val: {
                              $event: {
                                type: {
                                  blueId:
                                    'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                },
                                value: '/message/request/changeset',
                              },
                            },
                          },
                          function: {
                            type: {
                              blueId:
                                'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                            },
                            value: 'asList',
                          },
                        },
                      },
                      sectionChangeCount: {
                        type: {
                          blueId:
                            '5WNMiV9Knz63B4dVY5JtMyh3FB4FSGqv7ceScvuapdE1',
                        },
                        value: 0,
                      },
                      sectionChanges: {
                        $call: {
                          args: {
                            val: {
                              $event: {
                                type: {
                                  blueId:
                                    'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                },
                                value: '/message/request/sectionChanges',
                              },
                            },
                          },
                          function: {
                            type: {
                              blueId:
                                'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                            },
                            value: 'asObject',
                          },
                        },
                      },
                      seenContractKeys: {
                        $emptyObject: {
                          type: {
                            blueId:
                              '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
                          },
                          value: true,
                        },
                      },
                      seenSectionKeys: {
                        $emptyObject: {
                          type: {
                            blueId:
                              '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
                          },
                          value: true,
                        },
                      },
                      summary: {
                        $event: {
                          type: {
                            blueId:
                              'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
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
                      $call: {
                        args: {
                          reason: {
                            type: {
                              blueId:
                                'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                            },
                            value: 'summary is missing',
                          },
                        },
                        function: {
                          type: {
                            blueId:
                              'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                          },
                          value: 'invalid',
                        },
                      },
                    },
                  },
                },
                {
                  $returnIf: {
                    cond: {
                      $and: {
                        items: [
                          {
                            $var: {
                              type: {
                                blueId:
                                  'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                              },
                              value: 'policyEnabled',
                            },
                          },
                          {
                            $some: {
                              in: {
                                $var: {
                                  type: {
                                    blueId:
                                      'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                  },
                                  value: 'requestChangeset',
                                },
                              },
                              item: {
                                type: {
                                  blueId:
                                    'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                },
                                value: 'entry',
                              },
                              where: {
                                $call: {
                                  args: {
                                    entry: {
                                      $var: {
                                        type: {
                                          blueId:
                                            'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                        },
                                        value: 'entry',
                                      },
                                    },
                                  },
                                  function: {
                                    type: {
                                      blueId:
                                        'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                    },
                                    value: 'isContractsPatchEntry',
                                  },
                                },
                              },
                            },
                          },
                        ],
                      },
                    },
                    expr: {
                      $call: {
                        args: {
                          reason: {
                            type: {
                              blueId:
                                'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                            },
                            value:
                              'changeset cannot modify /contracts when Contracts Change Policy is enabled',
                          },
                        },
                        function: {
                          type: {
                            blueId:
                              'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                          },
                          value: 'invalid',
                        },
                      },
                    },
                  },
                },
                {
                  $returnIf: {
                    cond: {
                      $some: {
                        in: {
                          $var: {
                            type: {
                              blueId:
                                'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                            },
                            value: 'requestChangeset',
                          },
                        },
                        item: {
                          type: {
                            blueId:
                              'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                          },
                          value: 'entry',
                        },
                        where: {
                          $call: {
                            args: {
                              entry: {
                                $var: {
                                  type: {
                                    blueId:
                                      'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                  },
                                  value: 'entry',
                                },
                              },
                            },
                            function: {
                              type: {
                                blueId:
                                  'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                              },
                              value: 'isProposedChangePatchEntry',
                            },
                          },
                        },
                      },
                    },
                    expr: {
                      $call: {
                        args: {
                          reason: {
                            type: {
                              blueId:
                                'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                            },
                            value: 'changeset cannot modify /proposedChange',
                          },
                        },
                        function: {
                          type: {
                            blueId:
                              'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                          },
                          value: 'invalid',
                        },
                      },
                    },
                  },
                },
                {
                  $forEach: {
                    do: {
                      items: [
                        {
                          $let: {
                            order: {
                              items: [
                                {
                                  type: {
                                    blueId:
                                      'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                  },
                                  value: 'sectionKey',
                                },
                                {
                                  type: {
                                    blueId:
                                      'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                  },
                                  value: 'contractsMap',
                                },
                                {
                                  type: {
                                    blueId:
                                      'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                  },
                                  value: 'contractKeys',
                                },
                              ],
                            },
                            vars: {
                              contractKeys: {
                                $call: {
                                  args: {
                                    contractsMap: {
                                      $var: {
                                        type: {
                                          blueId:
                                            'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                        },
                                        value: 'contractsMap',
                                      },
                                    },
                                  },
                                  function: {
                                    type: {
                                      blueId:
                                        'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                    },
                                    value: 'contractKeys',
                                  },
                                },
                              },
                              contractsMap: {
                                $call: {
                                  args: {
                                    val: {
                                      $var: {
                                        name: 'entry',
                                        path: {
                                          type: {
                                            blueId:
                                              'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                          },
                                          value: '/contracts',
                                        },
                                      },
                                    },
                                  },
                                  function: {
                                    type: {
                                      blueId:
                                        'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                    },
                                    value: 'asObject',
                                  },
                                },
                              },
                              sectionKey: {
                                $text: {
                                  $default: {
                                    items: [
                                      {
                                        $var: {
                                          name: 'entry',
                                          path: {
                                            type: {
                                              blueId:
                                                'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                            },
                                            value: '/sectionKey',
                                          },
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
                              },
                            },
                          },
                        },
                        {
                          $returnIf: {
                            cond: {
                              $not: {
                                $truthy: {
                                  $var: {
                                    type: {
                                      blueId:
                                        'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                    },
                                    value: 'sectionKey',
                                  },
                                },
                              },
                            },
                            expr: {
                              $call: {
                                args: {
                                  reason: {
                                    type: {
                                      blueId:
                                        'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                    },
                                    value:
                                      'sectionChanges.add is missing sectionKey',
                                  },
                                },
                                function: {
                                  type: {
                                    blueId:
                                      'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                  },
                                  value: 'invalid',
                                },
                              },
                            },
                          },
                        },
                        {
                          $returnIf: {
                            cond: {
                              $hasKey: {
                                key: {
                                  $var: {
                                    type: {
                                      blueId:
                                        'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                    },
                                    value: 'sectionKey',
                                  },
                                },
                                object: {
                                  $var: {
                                    type: {
                                      blueId:
                                        'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                    },
                                    value: 'seenSectionKeys',
                                  },
                                },
                              },
                            },
                            expr: {
                              $call: {
                                args: {
                                  reason: {
                                    $concat: {
                                      items: [
                                        {
                                          type: {
                                            blueId:
                                              'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                          },
                                          value:
                                            'section key duplicated in sectionChanges: ',
                                        },
                                        {
                                          $var: {
                                            type: {
                                              blueId:
                                                'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                            },
                                            value: 'sectionKey',
                                          },
                                        },
                                      ],
                                    },
                                  },
                                },
                                function: {
                                  type: {
                                    blueId:
                                      'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                  },
                                  value: 'invalid',
                                },
                              },
                            },
                          },
                        },
                        {
                          $set: {
                            expr: {
                              $objectSet: {
                                key: {
                                  $var: {
                                    type: {
                                      blueId:
                                        'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                    },
                                    value: 'sectionKey',
                                  },
                                },
                                object: {
                                  $var: {
                                    type: {
                                      blueId:
                                        'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                    },
                                    value: 'seenSectionKeys',
                                  },
                                },
                                val: {
                                  type: {
                                    blueId:
                                      '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
                                  },
                                  value: true,
                                },
                              },
                            },
                            name: 'seenSectionKeys',
                          },
                        },
                        {
                          $returnIf: {
                            cond: {
                              $hasKey: {
                                key: {
                                  $var: {
                                    type: {
                                      blueId:
                                        'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                    },
                                    value: 'sectionKey',
                                  },
                                },
                                object: {
                                  $var: {
                                    type: {
                                      blueId:
                                        'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                    },
                                    value: 'existingContractKeys',
                                  },
                                },
                              },
                            },
                            expr: {
                              $call: {
                                args: {
                                  reason: {
                                    $concat: {
                                      items: [
                                        {
                                          type: {
                                            blueId:
                                              'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                          },
                                          value:
                                            'contract key already exists at',
                                        },
                                        {
                                          type: {
                                            blueId:
                                              'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                          },
                                          value: ' ',
                                        },
                                        {
                                          $call: {
                                            args: {
                                              key: {
                                                $var: {
                                                  type: {
                                                    blueId:
                                                      'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                                  },
                                                  value: 'sectionKey',
                                                },
                                              },
                                            },
                                            function: {
                                              type: {
                                                blueId:
                                                  'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                              },
                                              value: 'contractPath',
                                            },
                                          },
                                        },
                                      ],
                                    },
                                  },
                                },
                                function: {
                                  type: {
                                    blueId:
                                      'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                  },
                                  value: 'invalid',
                                },
                              },
                            },
                          },
                        },
                        {
                          $returnIf: {
                            cond: {
                              $not: {
                                $call: {
                                  args: {
                                    contractKeys: {
                                      $var: {
                                        type: {
                                          blueId:
                                            'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                        },
                                        value: 'contractKeys',
                                      },
                                    },
                                    section: {
                                      $var: {
                                        name: 'entry',
                                        path: {
                                          type: {
                                            blueId:
                                              'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                          },
                                          value: '/section',
                                        },
                                      },
                                    },
                                  },
                                  function: {
                                    type: {
                                      blueId:
                                        'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                    },
                                    value: 'hasMatchingRelatedContracts',
                                  },
                                },
                              },
                            },
                            expr: {
                              $call: {
                                args: {
                                  reason: {
                                    type: {
                                      blueId:
                                        'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                    },
                                    value:
                                      'relatedContracts must match contracts',
                                  },
                                },
                                function: {
                                  type: {
                                    blueId:
                                      'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                  },
                                  value: 'invalid',
                                },
                              },
                            },
                          },
                        },
                        {
                          $forEach: {
                            do: {
                              items: [
                                {
                                  $returnIf: {
                                    cond: {
                                      $hasKey: {
                                        key: {
                                          $var: {
                                            type: {
                                              blueId:
                                                'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                            },
                                            value: 'contractKey',
                                          },
                                        },
                                        object: {
                                          $var: {
                                            type: {
                                              blueId:
                                                'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                            },
                                            value: 'existingContractKeys',
                                          },
                                        },
                                      },
                                    },
                                    expr: {
                                      $call: {
                                        args: {
                                          reason: {
                                            $concat: {
                                              items: [
                                                {
                                                  type: {
                                                    blueId:
                                                      'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                                  },
                                                  value:
                                                    'contract key already exists at',
                                                },
                                                {
                                                  type: {
                                                    blueId:
                                                      'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                                  },
                                                  value: ' ',
                                                },
                                                {
                                                  $call: {
                                                    args: {
                                                      key: {
                                                        $var: {
                                                          type: {
                                                            blueId:
                                                              'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                                          },
                                                          value: 'contractKey',
                                                        },
                                                      },
                                                    },
                                                    function: {
                                                      type: {
                                                        blueId:
                                                          'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                                      },
                                                      value: 'contractPath',
                                                    },
                                                  },
                                                },
                                              ],
                                            },
                                          },
                                        },
                                        function: {
                                          type: {
                                            blueId:
                                              'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                          },
                                          value: 'invalid',
                                        },
                                      },
                                    },
                                  },
                                },
                                {
                                  $let: {
                                    expr: {
                                      $get: {
                                        key: {
                                          $var: {
                                            type: {
                                              blueId:
                                                'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                            },
                                            value: 'contractKey',
                                          },
                                        },
                                        object: {
                                          $var: {
                                            type: {
                                              blueId:
                                                'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                            },
                                            value: 'seenContractKeys',
                                          },
                                        },
                                      },
                                    },
                                    name: 'existingSection',
                                  },
                                },
                                {
                                  $returnIf: {
                                    cond: {
                                      $and: {
                                        items: [
                                          {
                                            $exists: {
                                              $var: {
                                                type: {
                                                  blueId:
                                                    'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                                },
                                                value: 'existingSection',
                                              },
                                            },
                                          },
                                          {
                                            $ne: {
                                              items: [
                                                {
                                                  $var: {
                                                    type: {
                                                      blueId:
                                                        'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                                    },
                                                    value: 'existingSection',
                                                  },
                                                },
                                                {
                                                  $var: {
                                                    type: {
                                                      blueId:
                                                        'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                                    },
                                                    value: 'sectionKey',
                                                  },
                                                },
                                              ],
                                            },
                                          },
                                        ],
                                      },
                                    },
                                    expr: {
                                      $call: {
                                        args: {
                                          reason: {
                                            $concat: {
                                              items: [
                                                {
                                                  type: {
                                                    blueId:
                                                      'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                                  },
                                                  value:
                                                    'contract key used by multiple sections in request: ',
                                                },
                                                {
                                                  $var: {
                                                    type: {
                                                      blueId:
                                                        'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                                    },
                                                    value: 'contractKey',
                                                  },
                                                },
                                              ],
                                            },
                                          },
                                        },
                                        function: {
                                          type: {
                                            blueId:
                                              'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                          },
                                          value: 'invalid',
                                        },
                                      },
                                    },
                                  },
                                },
                                {
                                  $set: {
                                    expr: {
                                      $objectSet: {
                                        key: {
                                          $var: {
                                            type: {
                                              blueId:
                                                'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                            },
                                            value: 'contractKey',
                                          },
                                        },
                                        object: {
                                          $var: {
                                            type: {
                                              blueId:
                                                'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                            },
                                            value: 'seenContractKeys',
                                          },
                                        },
                                        val: {
                                          $var: {
                                            type: {
                                              blueId:
                                                'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                            },
                                            value: 'sectionKey',
                                          },
                                        },
                                      },
                                    },
                                    name: 'seenContractKeys',
                                  },
                                },
                              ],
                            },
                            in: {
                              $var: {
                                type: {
                                  blueId:
                                    'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                },
                                value: 'contractKeys',
                              },
                            },
                            item: {
                              type: {
                                blueId:
                                  'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                              },
                              value: 'contractKey',
                            },
                          },
                        },
                        {
                          $forEach: {
                            do: {
                              items: [
                                {
                                  $appendChange: {
                                    op: {
                                      type: {
                                        blueId:
                                          'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                      },
                                      value: 'add',
                                    },
                                    path: {
                                      $call: {
                                        args: {
                                          key: {
                                            $var: {
                                              type: {
                                                blueId:
                                                  'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                              },
                                              value: 'contractKey',
                                            },
                                          },
                                        },
                                        function: {
                                          type: {
                                            blueId:
                                              'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                          },
                                          value: 'contractPath',
                                        },
                                      },
                                    },
                                    val: {
                                      $get: {
                                        key: {
                                          $var: {
                                            type: {
                                              blueId:
                                                'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                            },
                                            value: 'contractKey',
                                          },
                                        },
                                        object: {
                                          $var: {
                                            type: {
                                              blueId:
                                                'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                            },
                                            value: 'contractsMap',
                                          },
                                        },
                                      },
                                    },
                                  },
                                },
                                {
                                  $set: {
                                    expr: {
                                      $add: {
                                        items: [
                                          {
                                            $var: {
                                              type: {
                                                blueId:
                                                  'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                              },
                                              value: 'sectionChangeCount',
                                            },
                                          },
                                          {
                                            type: {
                                              blueId:
                                                '5WNMiV9Knz63B4dVY5JtMyh3FB4FSGqv7ceScvuapdE1',
                                            },
                                            value: 1,
                                          },
                                        ],
                                      },
                                    },
                                    name: 'sectionChangeCount',
                                  },
                                },
                              ],
                            },
                            in: {
                              $var: {
                                type: {
                                  blueId:
                                    'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                },
                                value: 'contractKeys',
                              },
                            },
                            item: {
                              type: {
                                blueId:
                                  'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                              },
                              value: 'contractKey',
                            },
                          },
                        },
                        {
                          $appendChange: {
                            op: {
                              type: {
                                blueId:
                                  'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                              },
                              value: 'add',
                            },
                            path: {
                              $call: {
                                args: {
                                  key: {
                                    $var: {
                                      type: {
                                        blueId:
                                          'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                      },
                                      value: 'sectionKey',
                                    },
                                  },
                                },
                                function: {
                                  type: {
                                    blueId:
                                      'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                  },
                                  value: 'contractPath',
                                },
                              },
                            },
                            val: {
                              $call: {
                                args: {
                                  contractKeys: {
                                    $var: {
                                      type: {
                                        blueId:
                                          'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                      },
                                      value: 'contractKeys',
                                    },
                                  },
                                  section: {
                                    $var: {
                                      name: 'entry',
                                      path: {
                                        type: {
                                          blueId:
                                            'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                        },
                                        value: '/section',
                                      },
                                    },
                                  },
                                },
                                function: {
                                  type: {
                                    blueId:
                                      'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                  },
                                  value: 'normalizeSection',
                                },
                              },
                            },
                          },
                        },
                        {
                          $set: {
                            expr: {
                              $add: {
                                items: [
                                  {
                                    $var: {
                                      type: {
                                        blueId:
                                          'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                      },
                                      value: 'sectionChangeCount',
                                    },
                                  },
                                  {
                                    type: {
                                      blueId:
                                        '5WNMiV9Knz63B4dVY5JtMyh3FB4FSGqv7ceScvuapdE1',
                                    },
                                    value: 1,
                                  },
                                ],
                              },
                            },
                            name: 'sectionChangeCount',
                          },
                        },
                      ],
                    },
                    in: {
                      $call: {
                        args: {
                          val: {
                            $var: {
                              name: 'sectionChanges',
                              path: {
                                type: {
                                  blueId:
                                    'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                },
                                value: '/add',
                              },
                            },
                          },
                        },
                        function: {
                          type: {
                            blueId:
                              'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                          },
                          value: 'asList',
                        },
                      },
                    },
                    item: {
                      type: {
                        blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                      },
                      value: 'entry',
                    },
                  },
                },
                {
                  $forEach: {
                    do: {
                      items: [
                        {
                          $let: {
                            order: {
                              items: [
                                {
                                  type: {
                                    blueId:
                                      'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                  },
                                  value: 'sectionKey',
                                },
                                {
                                  type: {
                                    blueId:
                                      'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                  },
                                  value: 'existingRelated',
                                },
                                {
                                  type: {
                                    blueId:
                                      'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                  },
                                  value: 'existingRelatedMap',
                                },
                                {
                                  type: {
                                    blueId:
                                      'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                  },
                                  value: 'contractsMap',
                                },
                                {
                                  type: {
                                    blueId:
                                      'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                  },
                                  value: 'contractKeys',
                                },
                              ],
                            },
                            vars: {
                              contractKeys: {
                                $call: {
                                  args: {
                                    contractsMap: {
                                      $var: {
                                        type: {
                                          blueId:
                                            'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                        },
                                        value: 'contractsMap',
                                      },
                                    },
                                  },
                                  function: {
                                    type: {
                                      blueId:
                                        'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                    },
                                    value: 'contractKeys',
                                  },
                                },
                              },
                              contractsMap: {
                                $call: {
                                  args: {
                                    val: {
                                      $var: {
                                        name: 'entry',
                                        path: {
                                          type: {
                                            blueId:
                                              'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                          },
                                          value: '/contracts',
                                        },
                                      },
                                    },
                                  },
                                  function: {
                                    type: {
                                      blueId:
                                        'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                    },
                                    value: 'asObject',
                                  },
                                },
                              },
                              existingRelated: {
                                $call: {
                                  args: {
                                    val: {
                                      $choose: {
                                        cond: {
                                          $exists: {
                                            $document: {
                                              path: {
                                                $pointerJoin: {
                                                  items: [
                                                    {
                                                      type: {
                                                        blueId:
                                                          'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                                      },
                                                      value: 'contracts',
                                                    },
                                                    {
                                                      $var: {
                                                        type: {
                                                          blueId:
                                                            'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                                        },
                                                        value: 'sectionKey',
                                                      },
                                                    },
                                                    {
                                                      type: {
                                                        blueId:
                                                          'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                                      },
                                                      value: 'relatedContracts',
                                                    },
                                                  ],
                                                },
                                              },
                                            },
                                          },
                                        },
                                        else: {
                                          items: [],
                                        },
                                        then: {
                                          $document: {
                                            path: {
                                              $pointerJoin: {
                                                items: [
                                                  {
                                                    type: {
                                                      blueId:
                                                        'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                                    },
                                                    value: 'contracts',
                                                  },
                                                  {
                                                    $var: {
                                                      type: {
                                                        blueId:
                                                          'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                                      },
                                                      value: 'sectionKey',
                                                    },
                                                  },
                                                  {
                                                    type: {
                                                      blueId:
                                                        'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                                    },
                                                    value: 'relatedContracts',
                                                  },
                                                ],
                                              },
                                            },
                                          },
                                        },
                                      },
                                    },
                                  },
                                  function: {
                                    type: {
                                      blueId:
                                        'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                    },
                                    value: 'asList',
                                  },
                                },
                              },
                              existingRelatedMap: {
                                $call: {
                                  args: {
                                    keys: {
                                      $var: {
                                        type: {
                                          blueId:
                                            'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                        },
                                        value: 'existingRelated',
                                      },
                                    },
                                  },
                                  function: {
                                    type: {
                                      blueId:
                                        'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                    },
                                    value: 'keySetObject',
                                  },
                                },
                              },
                              sectionKey: {
                                $text: {
                                  $default: {
                                    items: [
                                      {
                                        $var: {
                                          name: 'entry',
                                          path: {
                                            type: {
                                              blueId:
                                                'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                            },
                                            value: '/sectionKey',
                                          },
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
                              },
                            },
                          },
                        },
                        {
                          $returnIf: {
                            cond: {
                              $not: {
                                $truthy: {
                                  $var: {
                                    type: {
                                      blueId:
                                        'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                    },
                                    value: 'sectionKey',
                                  },
                                },
                              },
                            },
                            expr: {
                              $call: {
                                args: {
                                  reason: {
                                    type: {
                                      blueId:
                                        'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                    },
                                    value:
                                      'sectionChanges.modify is missing sectionKey',
                                  },
                                },
                                function: {
                                  type: {
                                    blueId:
                                      'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                  },
                                  value: 'invalid',
                                },
                              },
                            },
                          },
                        },
                        {
                          $returnIf: {
                            cond: {
                              $hasKey: {
                                key: {
                                  $var: {
                                    type: {
                                      blueId:
                                        'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                    },
                                    value: 'sectionKey',
                                  },
                                },
                                object: {
                                  $var: {
                                    type: {
                                      blueId:
                                        'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                    },
                                    value: 'seenSectionKeys',
                                  },
                                },
                              },
                            },
                            expr: {
                              $call: {
                                args: {
                                  reason: {
                                    $concat: {
                                      items: [
                                        {
                                          type: {
                                            blueId:
                                              'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                          },
                                          value:
                                            'section key duplicated in sectionChanges: ',
                                        },
                                        {
                                          $var: {
                                            type: {
                                              blueId:
                                                'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                            },
                                            value: 'sectionKey',
                                          },
                                        },
                                      ],
                                    },
                                  },
                                },
                                function: {
                                  type: {
                                    blueId:
                                      'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                  },
                                  value: 'invalid',
                                },
                              },
                            },
                          },
                        },
                        {
                          $set: {
                            expr: {
                              $objectSet: {
                                key: {
                                  $var: {
                                    type: {
                                      blueId:
                                        'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                    },
                                    value: 'sectionKey',
                                  },
                                },
                                object: {
                                  $var: {
                                    type: {
                                      blueId:
                                        'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                    },
                                    value: 'seenSectionKeys',
                                  },
                                },
                                val: {
                                  type: {
                                    blueId:
                                      '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
                                  },
                                  value: true,
                                },
                              },
                            },
                            name: 'seenSectionKeys',
                          },
                        },
                        {
                          $returnIf: {
                            cond: {
                              $not: {
                                $call: {
                                  args: {
                                    contractKeys: {
                                      $var: {
                                        type: {
                                          blueId:
                                            'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                        },
                                        value: 'contractKeys',
                                      },
                                    },
                                    section: {
                                      $var: {
                                        name: 'entry',
                                        path: {
                                          type: {
                                            blueId:
                                              'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                          },
                                          value: '/section',
                                        },
                                      },
                                    },
                                  },
                                  function: {
                                    type: {
                                      blueId:
                                        'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                    },
                                    value: 'hasMatchingRelatedContracts',
                                  },
                                },
                              },
                            },
                            expr: {
                              $call: {
                                args: {
                                  reason: {
                                    type: {
                                      blueId:
                                        'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                    },
                                    value:
                                      'relatedContracts must match contracts',
                                  },
                                },
                                function: {
                                  type: {
                                    blueId:
                                      'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                  },
                                  value: 'invalid',
                                },
                              },
                            },
                          },
                        },
                        {
                          $forEach: {
                            do: {
                              items: [
                                {
                                  $let: {
                                    expr: {
                                      $get: {
                                        key: {
                                          $var: {
                                            type: {
                                              blueId:
                                                'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                            },
                                            value: 'contractKey',
                                          },
                                        },
                                        object: {
                                          $var: {
                                            type: {
                                              blueId:
                                                'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                            },
                                            value: 'seenContractKeys',
                                          },
                                        },
                                      },
                                    },
                                    name: 'existingSection',
                                  },
                                },
                                {
                                  $returnIf: {
                                    cond: {
                                      $and: {
                                        items: [
                                          {
                                            $exists: {
                                              $var: {
                                                type: {
                                                  blueId:
                                                    'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                                },
                                                value: 'existingSection',
                                              },
                                            },
                                          },
                                          {
                                            $ne: {
                                              items: [
                                                {
                                                  $var: {
                                                    type: {
                                                      blueId:
                                                        'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                                    },
                                                    value: 'existingSection',
                                                  },
                                                },
                                                {
                                                  $var: {
                                                    type: {
                                                      blueId:
                                                        'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                                    },
                                                    value: 'sectionKey',
                                                  },
                                                },
                                              ],
                                            },
                                          },
                                        ],
                                      },
                                    },
                                    expr: {
                                      $call: {
                                        args: {
                                          reason: {
                                            $concat: {
                                              items: [
                                                {
                                                  type: {
                                                    blueId:
                                                      'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                                  },
                                                  value:
                                                    'contract key used by multiple sections in request: ',
                                                },
                                                {
                                                  $var: {
                                                    type: {
                                                      blueId:
                                                        'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                                    },
                                                    value: 'contractKey',
                                                  },
                                                },
                                              ],
                                            },
                                          },
                                        },
                                        function: {
                                          type: {
                                            blueId:
                                              'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                          },
                                          value: 'invalid',
                                        },
                                      },
                                    },
                                  },
                                },
                                {
                                  $returnIf: {
                                    cond: {
                                      $and: {
                                        items: [
                                          {
                                            $hasKey: {
                                              key: {
                                                $var: {
                                                  type: {
                                                    blueId:
                                                      'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                                  },
                                                  value: 'contractKey',
                                                },
                                              },
                                              object: {
                                                $var: {
                                                  type: {
                                                    blueId:
                                                      'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                                  },
                                                  value: 'existingContractKeys',
                                                },
                                              },
                                            },
                                          },
                                          {
                                            $not: {
                                              $hasKey: {
                                                key: {
                                                  $var: {
                                                    type: {
                                                      blueId:
                                                        'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                                    },
                                                    value: 'contractKey',
                                                  },
                                                },
                                                object: {
                                                  $var: {
                                                    type: {
                                                      blueId:
                                                        'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                                    },
                                                    value: 'existingRelatedMap',
                                                  },
                                                },
                                              },
                                            },
                                          },
                                        ],
                                      },
                                    },
                                    expr: {
                                      $call: {
                                        args: {
                                          reason: {
                                            $concat: {
                                              items: [
                                                {
                                                  type: {
                                                    blueId:
                                                      'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                                  },
                                                  value:
                                                    'contract key already exists at',
                                                },
                                                {
                                                  type: {
                                                    blueId:
                                                      'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                                  },
                                                  value: ' ',
                                                },
                                                {
                                                  $call: {
                                                    args: {
                                                      key: {
                                                        $var: {
                                                          type: {
                                                            blueId:
                                                              'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                                          },
                                                          value: 'contractKey',
                                                        },
                                                      },
                                                    },
                                                    function: {
                                                      type: {
                                                        blueId:
                                                          'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                                      },
                                                      value: 'contractPath',
                                                    },
                                                  },
                                                },
                                              ],
                                            },
                                          },
                                        },
                                        function: {
                                          type: {
                                            blueId:
                                              'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                          },
                                          value: 'invalid',
                                        },
                                      },
                                    },
                                  },
                                },
                                {
                                  $set: {
                                    expr: {
                                      $objectSet: {
                                        key: {
                                          $var: {
                                            type: {
                                              blueId:
                                                'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                            },
                                            value: 'contractKey',
                                          },
                                        },
                                        object: {
                                          $var: {
                                            type: {
                                              blueId:
                                                'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                            },
                                            value: 'seenContractKeys',
                                          },
                                        },
                                        val: {
                                          $var: {
                                            type: {
                                              blueId:
                                                'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                            },
                                            value: 'sectionKey',
                                          },
                                        },
                                      },
                                    },
                                    name: 'seenContractKeys',
                                  },
                                },
                              ],
                            },
                            in: {
                              $var: {
                                type: {
                                  blueId:
                                    'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                },
                                value: 'contractKeys',
                              },
                            },
                            item: {
                              type: {
                                blueId:
                                  'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                              },
                              value: 'contractKey',
                            },
                          },
                        },
                        {
                          $forEach: {
                            do: {
                              items: [
                                {
                                  $appendChange: {
                                    op: {
                                      type: {
                                        blueId:
                                          'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                      },
                                      value: 'add',
                                    },
                                    path: {
                                      $call: {
                                        args: {
                                          key: {
                                            $var: {
                                              type: {
                                                blueId:
                                                  'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                              },
                                              value: 'contractKey',
                                            },
                                          },
                                        },
                                        function: {
                                          type: {
                                            blueId:
                                              'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                          },
                                          value: 'contractPath',
                                        },
                                      },
                                    },
                                    val: {
                                      $get: {
                                        key: {
                                          $var: {
                                            type: {
                                              blueId:
                                                'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                            },
                                            value: 'contractKey',
                                          },
                                        },
                                        object: {
                                          $var: {
                                            type: {
                                              blueId:
                                                'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                            },
                                            value: 'contractsMap',
                                          },
                                        },
                                      },
                                    },
                                  },
                                },
                                {
                                  $set: {
                                    expr: {
                                      $add: {
                                        items: [
                                          {
                                            $var: {
                                              type: {
                                                blueId:
                                                  'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                              },
                                              value: 'sectionChangeCount',
                                            },
                                          },
                                          {
                                            type: {
                                              blueId:
                                                '5WNMiV9Knz63B4dVY5JtMyh3FB4FSGqv7ceScvuapdE1',
                                            },
                                            value: 1,
                                          },
                                        ],
                                      },
                                    },
                                    name: 'sectionChangeCount',
                                  },
                                },
                              ],
                            },
                            in: {
                              $var: {
                                type: {
                                  blueId:
                                    'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                },
                                value: 'contractKeys',
                              },
                            },
                            item: {
                              type: {
                                blueId:
                                  'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                              },
                              value: 'contractKey',
                            },
                          },
                        },
                        {
                          $forEach: {
                            do: {
                              items: [
                                {
                                  $if: {
                                    cond: {
                                      $not: {
                                        $includes: {
                                          list: {
                                            $var: {
                                              type: {
                                                blueId:
                                                  'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                              },
                                              value: 'contractKeys',
                                            },
                                          },
                                          val: {
                                            $var: {
                                              type: {
                                                blueId:
                                                  'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                              },
                                              value: 'oldKey',
                                            },
                                          },
                                        },
                                      },
                                    },
                                    then: {
                                      items: [
                                        {
                                          $appendChange: {
                                            op: {
                                              type: {
                                                blueId:
                                                  'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                              },
                                              value: 'remove',
                                            },
                                            path: {
                                              $call: {
                                                args: {
                                                  key: {
                                                    $var: {
                                                      type: {
                                                        blueId:
                                                          'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                                      },
                                                      value: 'oldKey',
                                                    },
                                                  },
                                                },
                                                function: {
                                                  type: {
                                                    blueId:
                                                      'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                                  },
                                                  value: 'contractPath',
                                                },
                                              },
                                            },
                                          },
                                        },
                                        {
                                          $set: {
                                            expr: {
                                              $add: {
                                                items: [
                                                  {
                                                    $var: {
                                                      type: {
                                                        blueId:
                                                          'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                                      },
                                                      value:
                                                        'sectionChangeCount',
                                                    },
                                                  },
                                                  {
                                                    type: {
                                                      blueId:
                                                        '5WNMiV9Knz63B4dVY5JtMyh3FB4FSGqv7ceScvuapdE1',
                                                    },
                                                    value: 1,
                                                  },
                                                ],
                                              },
                                            },
                                            name: 'sectionChangeCount',
                                          },
                                        },
                                      ],
                                    },
                                  },
                                },
                              ],
                            },
                            in: {
                              $var: {
                                type: {
                                  blueId:
                                    'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                },
                                value: 'existingRelated',
                              },
                            },
                            item: {
                              type: {
                                blueId:
                                  'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                              },
                              value: 'oldKey',
                            },
                          },
                        },
                        {
                          $appendChange: {
                            op: {
                              type: {
                                blueId:
                                  'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                              },
                              value: 'add',
                            },
                            path: {
                              $call: {
                                args: {
                                  key: {
                                    $var: {
                                      type: {
                                        blueId:
                                          'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                      },
                                      value: 'sectionKey',
                                    },
                                  },
                                },
                                function: {
                                  type: {
                                    blueId:
                                      'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                  },
                                  value: 'contractPath',
                                },
                              },
                            },
                            val: {
                              $call: {
                                args: {
                                  contractKeys: {
                                    $var: {
                                      type: {
                                        blueId:
                                          'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                      },
                                      value: 'contractKeys',
                                    },
                                  },
                                  section: {
                                    $var: {
                                      name: 'entry',
                                      path: {
                                        type: {
                                          blueId:
                                            'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                        },
                                        value: '/section',
                                      },
                                    },
                                  },
                                },
                                function: {
                                  type: {
                                    blueId:
                                      'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                  },
                                  value: 'normalizeSection',
                                },
                              },
                            },
                          },
                        },
                        {
                          $set: {
                            expr: {
                              $add: {
                                items: [
                                  {
                                    $var: {
                                      type: {
                                        blueId:
                                          'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                      },
                                      value: 'sectionChangeCount',
                                    },
                                  },
                                  {
                                    type: {
                                      blueId:
                                        '5WNMiV9Knz63B4dVY5JtMyh3FB4FSGqv7ceScvuapdE1',
                                    },
                                    value: 1,
                                  },
                                ],
                              },
                            },
                            name: 'sectionChangeCount',
                          },
                        },
                      ],
                    },
                    in: {
                      $call: {
                        args: {
                          val: {
                            $choose: {
                              cond: {
                                $exists: {
                                  $var: {
                                    name: 'sectionChanges',
                                    path: {
                                      type: {
                                        blueId:
                                          'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                      },
                                      value: '/modify',
                                    },
                                  },
                                },
                              },
                              else: {
                                items: [],
                              },
                              then: {
                                $var: {
                                  name: 'sectionChanges',
                                  path: {
                                    type: {
                                      blueId:
                                        'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                    },
                                    value: '/modify',
                                  },
                                },
                              },
                            },
                          },
                        },
                        function: {
                          type: {
                            blueId:
                              'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                          },
                          value: 'asList',
                        },
                      },
                    },
                    item: {
                      type: {
                        blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                      },
                      value: 'entry',
                    },
                  },
                },
                {
                  $forEach: {
                    do: {
                      items: [
                        {
                          $let: {
                            order: {
                              items: [
                                {
                                  type: {
                                    blueId:
                                      'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                  },
                                  value: 'sectionKey',
                                },
                                {
                                  type: {
                                    blueId:
                                      'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                  },
                                  value: 'related',
                                },
                              ],
                            },
                            vars: {
                              related: {
                                $call: {
                                  args: {
                                    val: {
                                      $choose: {
                                        cond: {
                                          $exists: {
                                            $document: {
                                              path: {
                                                $pointerJoin: {
                                                  items: [
                                                    {
                                                      type: {
                                                        blueId:
                                                          'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                                      },
                                                      value: 'contracts',
                                                    },
                                                    {
                                                      $var: {
                                                        type: {
                                                          blueId:
                                                            'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                                        },
                                                        value: 'sectionKey',
                                                      },
                                                    },
                                                    {
                                                      type: {
                                                        blueId:
                                                          'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                                      },
                                                      value: 'relatedContracts',
                                                    },
                                                  ],
                                                },
                                              },
                                            },
                                          },
                                        },
                                        else: {
                                          items: [],
                                        },
                                        then: {
                                          $document: {
                                            path: {
                                              $pointerJoin: {
                                                items: [
                                                  {
                                                    type: {
                                                      blueId:
                                                        'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                                    },
                                                    value: 'contracts',
                                                  },
                                                  {
                                                    $var: {
                                                      type: {
                                                        blueId:
                                                          'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                                      },
                                                      value: 'sectionKey',
                                                    },
                                                  },
                                                  {
                                                    type: {
                                                      blueId:
                                                        'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                                    },
                                                    value: 'relatedContracts',
                                                  },
                                                ],
                                              },
                                            },
                                          },
                                        },
                                      },
                                    },
                                  },
                                  function: {
                                    type: {
                                      blueId:
                                        'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                    },
                                    value: 'asList',
                                  },
                                },
                              },
                              sectionKey: {
                                $call: {
                                  args: {
                                    entry: {
                                      $var: {
                                        type: {
                                          blueId:
                                            'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                        },
                                        value: 'entry',
                                      },
                                    },
                                  },
                                  function: {
                                    type: {
                                      blueId:
                                        'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                    },
                                    value: 'sectionKeyForRemove',
                                  },
                                },
                              },
                            },
                          },
                        },
                        {
                          $returnIf: {
                            cond: {
                              $not: {
                                $truthy: {
                                  $var: {
                                    type: {
                                      blueId:
                                        'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                    },
                                    value: 'sectionKey',
                                  },
                                },
                              },
                            },
                            expr: {
                              $call: {
                                args: {
                                  reason: {
                                    type: {
                                      blueId:
                                        'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                    },
                                    value:
                                      'sectionChanges.remove is missing sectionKey',
                                  },
                                },
                                function: {
                                  type: {
                                    blueId:
                                      'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                  },
                                  value: 'invalid',
                                },
                              },
                            },
                          },
                        },
                        {
                          $forEach: {
                            do: {
                              items: [
                                {
                                  $appendChange: {
                                    op: {
                                      type: {
                                        blueId:
                                          'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                      },
                                      value: 'remove',
                                    },
                                    path: {
                                      $call: {
                                        args: {
                                          key: {
                                            $var: {
                                              type: {
                                                blueId:
                                                  'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                              },
                                              value: 'contractKey',
                                            },
                                          },
                                        },
                                        function: {
                                          type: {
                                            blueId:
                                              'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                          },
                                          value: 'contractPath',
                                        },
                                      },
                                    },
                                  },
                                },
                                {
                                  $set: {
                                    expr: {
                                      $add: {
                                        items: [
                                          {
                                            $var: {
                                              type: {
                                                blueId:
                                                  'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                              },
                                              value: 'sectionChangeCount',
                                            },
                                          },
                                          {
                                            type: {
                                              blueId:
                                                '5WNMiV9Knz63B4dVY5JtMyh3FB4FSGqv7ceScvuapdE1',
                                            },
                                            value: 1,
                                          },
                                        ],
                                      },
                                    },
                                    name: 'sectionChangeCount',
                                  },
                                },
                              ],
                            },
                            in: {
                              $var: {
                                type: {
                                  blueId:
                                    'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                },
                                value: 'related',
                              },
                            },
                            item: {
                              type: {
                                blueId:
                                  'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                              },
                              value: 'contractKey',
                            },
                          },
                        },
                        {
                          $appendChange: {
                            op: {
                              type: {
                                blueId:
                                  'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                              },
                              value: 'remove',
                            },
                            path: {
                              $call: {
                                args: {
                                  key: {
                                    $var: {
                                      type: {
                                        blueId:
                                          'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                      },
                                      value: 'sectionKey',
                                    },
                                  },
                                },
                                function: {
                                  type: {
                                    blueId:
                                      'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                  },
                                  value: 'contractPath',
                                },
                              },
                            },
                          },
                        },
                        {
                          $set: {
                            expr: {
                              $add: {
                                items: [
                                  {
                                    $var: {
                                      type: {
                                        blueId:
                                          'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                      },
                                      value: 'sectionChangeCount',
                                    },
                                  },
                                  {
                                    type: {
                                      blueId:
                                        '5WNMiV9Knz63B4dVY5JtMyh3FB4FSGqv7ceScvuapdE1',
                                    },
                                    value: 1,
                                  },
                                ],
                              },
                            },
                            name: 'sectionChangeCount',
                          },
                        },
                      ],
                    },
                    in: {
                      $call: {
                        args: {
                          val: {
                            $choose: {
                              cond: {
                                $exists: {
                                  $var: {
                                    name: 'sectionChanges',
                                    path: {
                                      type: {
                                        blueId:
                                          'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                      },
                                      value: '/remove',
                                    },
                                  },
                                },
                              },
                              else: {
                                items: [],
                              },
                              then: {
                                $var: {
                                  name: 'sectionChanges',
                                  path: {
                                    type: {
                                      blueId:
                                        'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                    },
                                    value: '/remove',
                                  },
                                },
                              },
                            },
                          },
                        },
                        function: {
                          type: {
                            blueId:
                              'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                          },
                          value: 'asList',
                        },
                      },
                    },
                    item: {
                      type: {
                        blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                      },
                      value: 'entry',
                    },
                  },
                },
                {
                  $returnIf: {
                    cond: {
                      $eq: {
                        items: [
                          {
                            $add: {
                              items: [
                                {
                                  $var: {
                                    type: {
                                      blueId:
                                        'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                    },
                                    value: 'sectionChangeCount',
                                  },
                                },
                                {
                                  $size: {
                                    $var: {
                                      type: {
                                        blueId:
                                          'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                      },
                                      value: 'requestChangeset',
                                    },
                                  },
                                },
                              ],
                            },
                          },
                          {
                            type: {
                              blueId:
                                '5WNMiV9Knz63B4dVY5JtMyh3FB4FSGqv7ceScvuapdE1',
                            },
                            value: 0,
                          },
                        ],
                      },
                    },
                    expr: {
                      $call: {
                        args: {
                          reason: {
                            type: {
                              blueId:
                                'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                            },
                            value: 'no changes provided',
                          },
                        },
                        function: {
                          type: {
                            blueId:
                              'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                          },
                          value: 'invalid',
                        },
                      },
                    },
                  },
                },
                {
                  $appendChanges: {
                    $var: {
                      type: {
                        blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                      },
                      value: 'requestChangeset',
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
          },
          sectionKeyForRemove: {
            args: {
              entry: {
                value: null,
              },
            },
            expr: {
              $text: {
                $default: {
                  items: [
                    {
                      $var: {
                        name: 'entry',
                        path: {
                          type: {
                            blueId:
                              'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                          },
                          value: '/sectionKey',
                        },
                      },
                    },
                    {
                      $var: {
                        type: {
                          blueId:
                            'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                        },
                        value: 'entry',
                      },
                    },
                  ],
                },
              },
            },
          },
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
