export const AcceptChangeWorkflow: Record<string, unknown> = {
  description:
    'Applies a previously proposed change and removes its proposal state.',
  name: 'Accept Change Workflow',
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
        entry: {
          type: {
            blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
          },
          value: 'prepare',
        },
        functions: {
          asList: {
            args: {
              val: {
                description: 'BEX helper argument.',
              },
            },
            expr: {
              $choose: {
                cond: {
                  $isKind: {
                    kind: {
                      type: {
                        blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                      },
                      value: 'list',
                    },
                    val: {
                      $var: {
                        type: {
                          blueId:
                            'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                description: 'BEX helper argument.',
              },
            },
            expr: {
              $choose: {
                cond: {
                  $isKind: {
                    kind: {
                      type: {
                        blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                      },
                      value: 'object',
                    },
                    val: {
                      $var: {
                        type: {
                          blueId:
                            'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                        },
                        value: 'val',
                      },
                    },
                  },
                },
                else: {
                  $emptyObject: {
                    type: {
                      blueId: 'AwvXD961fmnmqcSQhjMA7r15HpVh39cefb6ZTyUz2Fm2',
                    },
                    value: true,
                  },
                },
                then: {
                  $var: {
                    type: {
                      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                description: 'BEX helper argument.',
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
                                'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                            },
                            value: 'contractsMap',
                          },
                        },
                      },
                      function: {
                        type: {
                          blueId:
                            'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                        },
                        value: 'asObject',
                      },
                    },
                  },
                },
                item: {
                  type: {
                    blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                                'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                            },
                            value: 'contractKey',
                          },
                        },
                      },
                      function: {
                        type: {
                          blueId:
                            'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                description: 'BEX helper argument.',
              },
            },
            expr: {
              $pointerJoin: {
                items: [
                  {
                    type: {
                      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                    },
                    value: 'contracts',
                  },
                  {
                    $var: {
                      type: {
                        blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                description: 'BEX helper argument.',
              },
              section: {
                description: 'BEX helper argument.',
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
                              'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                          },
                          value: 'related',
                        },
                        {
                          type: {
                            blueId:
                              'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                                            'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                                          'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                                'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                                    'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                },
                                value: 'related',
                              },
                            },
                          },
                          function: {
                            type: {
                              blueId:
                                'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                                    'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                },
                                value: 'related',
                              },
                            },
                          },
                          {
                            type: {
                              blueId:
                                'E2LM6qgzWG9ttagq2xTmiZkgYEAgkYedFCmU9v7NnVEq',
                            },
                            value: 0,
                          },
                        ],
                      },
                    },
                    expr: {
                      type: {
                        blueId: 'AwvXD961fmnmqcSQhjMA7r15HpVh39cefb6ZTyUz2Fm2',
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
                                    'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                                    'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                        blueId: 'AwvXD961fmnmqcSQhjMA7r15HpVh39cefb6ZTyUz2Fm2',
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
                                      'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                                    'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                        blueId: 'AwvXD961fmnmqcSQhjMA7r15HpVh39cefb6ZTyUz2Fm2',
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
                                'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                            },
                            value: 'contractKeys',
                          },
                        },
                        item: {
                          type: {
                            blueId:
                              'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                                      'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                  },
                                  value: 'contractKey',
                                },
                              },
                              object: {
                                $var: {
                                  type: {
                                    blueId:
                                      'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                description: 'BEX helper argument.',
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
                            'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                        },
                        value: 'reason',
                      },
                    },
                    type: {
                      blueId: '6jcAKEeVpGCPenpSnfwwamL2iTHBACRXPFQjEDU5pX1y',
                    },
                  },
                ],
              },
            },
          },
          isContractsPatchEntry: {
            args: {
              entry: {
                description: 'BEX helper argument.',
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
                                          'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                      },
                                      value: '/path',
                                    },
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
                        },
                        {
                          type: {
                            blueId:
                              'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                                          'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                      },
                                      value: '/path',
                                    },
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
                        },
                        {
                          type: {
                            blueId:
                              'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                description: 'BEX helper argument.',
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
                                'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                            },
                            value: 'key',
                          },
                        },
                        {
                          type: {
                            blueId:
                              'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                                'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                            },
                            value: 'key',
                          },
                        },
                        {
                          type: {
                            blueId:
                              'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                                'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                            },
                            value: 'key',
                          },
                        },
                        {
                          type: {
                            blueId:
                              'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                                'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                            },
                            value: 'key',
                          },
                        },
                        {
                          type: {
                            blueId:
                              'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                description: 'BEX helper argument.',
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
                                    'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                },
                                value: '/path',
                              },
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
                  },
                  {
                    type: {
                      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                description: 'BEX helper argument.',
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
                              'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                          },
                          value: 'key',
                        },
                      },
                    },
                    val: {
                      type: {
                        blueId: 'AwvXD961fmnmqcSQhjMA7r15HpVh39cefb6ZTyUz2Fm2',
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
                                'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                            },
                            value: 'keys',
                          },
                        },
                      },
                      function: {
                        type: {
                          blueId:
                            'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                        },
                        value: 'asList',
                      },
                    },
                  },
                  item: {
                    type: {
                      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                description: 'BEX helper argument.',
              },
              section: {
                description: 'BEX helper argument.',
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
                                          'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                                        'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                              'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                                      'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                  },
                                  value: 'section',
                                },
                              },
                            },
                            function: {
                              type: {
                                blueId:
                                  'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                                              'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                          },
                                          value: 'related',
                                        },
                                      },
                                    },
                                    {
                                      type: {
                                        blueId:
                                          'E2LM6qgzWG9ttagq2xTmiZkgYEAgkYedFCmU9v7NnVEq',
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
                                      'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                  },
                                  value: 'contractKeys',
                                },
                              },
                              then: {
                                $var: {
                                  type: {
                                    blueId:
                                      'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                  },
                                  value: 'related',
                                },
                              },
                            },
                          },
                          type: {
                            blueId:
                              '6R6asWqr9V6DAow5X6EjRRaABhM7xeT13UzcTegmhcjy',
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
                              'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                          },
                          value: 'postfix',
                        },
                        {
                          type: {
                            blueId:
                              'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                          },
                          value: 'proposedPath',
                        },
                        {
                          type: {
                            blueId:
                              'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                          },
                          value: 'change',
                        },
                        {
                          type: {
                            blueId:
                              'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                          },
                          value: 'requestChangeset',
                        },
                        {
                          type: {
                            blueId:
                              'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                          },
                          value: 'sectionChanges',
                        },
                        {
                          type: {
                            blueId:
                              'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                          },
                          value: 'documentContracts',
                        },
                        {
                          type: {
                            blueId:
                              'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                          },
                          value: 'policy',
                        },
                        {
                          type: {
                            blueId:
                              'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                          },
                          value: 'policyEnabled',
                        },
                        {
                          type: {
                            blueId:
                              'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                          },
                          value: 'seenSectionKeys',
                        },
                        {
                          type: {
                            blueId:
                              'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                          },
                          value: 'seenContractKeys',
                        },
                        {
                          type: {
                            blueId:
                              'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                          },
                          value: 'existingContractKeys',
                        },
                        {
                          type: {
                            blueId:
                              'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                          },
                          value: 'sectionChangeCount',
                        },
                      ],
                    },
                    vars: {
                      change: {
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
                      documentContracts: {
                        $call: {
                          args: {
                            val: {
                              $document: {
                                type: {
                                  blueId:
                                    'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                },
                                value: '/contracts',
                              },
                            },
                          },
                          function: {
                            type: {
                              blueId:
                                'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                                          'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                      },
                                      value: 'documentContracts',
                                    },
                                  },
                                },
                                function: {
                                  type: {
                                    blueId:
                                      'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                  },
                                  value: 'contractKeys',
                                },
                              },
                            },
                          },
                          function: {
                            type: {
                              blueId:
                                'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                                  'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                              },
                              value: 'documentContracts',
                            },
                          },
                          item: {
                            type: {
                              blueId:
                                'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                                      'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                                      'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                                            'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                        },
                                        value: '/requireSectionChanges',
                                      },
                                    },
                                  },
                                  {
                                    type: {
                                      blueId:
                                        'AwvXD961fmnmqcSQhjMA7r15HpVh39cefb6ZTyUz2Fm2',
                                    },
                                    value: false,
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
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
                      requestChangeset: {
                        $call: {
                          args: {
                            val: {
                              $var: {
                                name: 'change',
                                path: {
                                  type: {
                                    blueId:
                                      'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                  },
                                  value: '/changeset',
                                },
                              },
                            },
                          },
                          function: {
                            type: {
                              blueId:
                                'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                            },
                            value: 'asList',
                          },
                        },
                      },
                      sectionChangeCount: {
                        type: {
                          blueId:
                            'E2LM6qgzWG9ttagq2xTmiZkgYEAgkYedFCmU9v7NnVEq',
                        },
                        value: 0,
                      },
                      sectionChanges: {
                        $call: {
                          args: {
                            val: {
                              $var: {
                                name: 'change',
                                path: {
                                  type: {
                                    blueId:
                                      'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                  },
                                  value: '/sectionChanges',
                                },
                              },
                            },
                          },
                          function: {
                            type: {
                              blueId:
                                'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                            },
                            value: 'asObject',
                          },
                        },
                      },
                      seenContractKeys: {
                        $emptyObject: {
                          type: {
                            blueId:
                              'AwvXD961fmnmqcSQhjMA7r15HpVh39cefb6ZTyUz2Fm2',
                          },
                          value: true,
                        },
                      },
                      seenSectionKeys: {
                        $emptyObject: {
                          type: {
                            blueId:
                              'AwvXD961fmnmqcSQhjMA7r15HpVh39cefb6ZTyUz2Fm2',
                          },
                          value: true,
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
                          $var: {
                            type: {
                              blueId:
                                'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                            },
                            value: 'change',
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
                        },
                        function: {
                          type: {
                            blueId:
                              'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                                  'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                                      'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                  },
                                  value: 'requestChangeset',
                                },
                              },
                              item: {
                                type: {
                                  blueId:
                                    'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                                            'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                        },
                                        value: 'entry',
                                      },
                                    },
                                  },
                                  function: {
                                    type: {
                                      blueId:
                                        'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                                'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                            },
                            value:
                              'changeset cannot modify /contracts when Contracts Change Policy is enabled',
                          },
                        },
                        function: {
                          type: {
                            blueId:
                              'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                                'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                            },
                            value: 'requestChangeset',
                          },
                        },
                        item: {
                          type: {
                            blueId:
                              'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                                      'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                  },
                                  value: 'entry',
                                },
                              },
                            },
                            function: {
                              type: {
                                blueId:
                                  'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                                'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                            },
                            value: 'changeset cannot modify /proposedChange',
                          },
                        },
                        function: {
                          type: {
                            blueId:
                              'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                                      'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                  },
                                  value: 'sectionKey',
                                },
                                {
                                  type: {
                                    blueId:
                                      'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                  },
                                  value: 'contractsMap',
                                },
                                {
                                  type: {
                                    blueId:
                                      'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                                            'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                        },
                                        value: 'contractsMap',
                                      },
                                    },
                                  },
                                  function: {
                                    type: {
                                      blueId:
                                        'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                                              'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                          },
                                          value: '/contracts',
                                        },
                                      },
                                    },
                                  },
                                  function: {
                                    type: {
                                      blueId:
                                        'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                                                'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                            },
                                            value: '/sectionKey',
                                          },
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
                                        'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                                        'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                    },
                                    value:
                                      'sectionChanges.add is missing sectionKey',
                                  },
                                },
                                function: {
                                  type: {
                                    blueId:
                                      'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                                        'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                    },
                                    value: 'sectionKey',
                                  },
                                },
                                object: {
                                  $var: {
                                    type: {
                                      blueId:
                                        'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                                              'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                          },
                                          value:
                                            'section key duplicated in sectionChanges: ',
                                        },
                                        {
                                          $var: {
                                            type: {
                                              blueId:
                                                'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                                      'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                                        'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                    },
                                    value: 'sectionKey',
                                  },
                                },
                                object: {
                                  $var: {
                                    type: {
                                      blueId:
                                        'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                    },
                                    value: 'seenSectionKeys',
                                  },
                                },
                                val: {
                                  type: {
                                    blueId:
                                      'AwvXD961fmnmqcSQhjMA7r15HpVh39cefb6ZTyUz2Fm2',
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
                                        'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                    },
                                    value: 'sectionKey',
                                  },
                                },
                                object: {
                                  $var: {
                                    type: {
                                      blueId:
                                        'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                                              'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                          },
                                          value:
                                            'contract key already exists at',
                                        },
                                        {
                                          type: {
                                            blueId:
                                              'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                                                      'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                                  },
                                                  value: 'sectionKey',
                                                },
                                              },
                                            },
                                            function: {
                                              type: {
                                                blueId:
                                                  'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                                      'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                                            'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                                              'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                          },
                                          value: '/section',
                                        },
                                      },
                                    },
                                  },
                                  function: {
                                    type: {
                                      blueId:
                                        'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                                        'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                    },
                                    value:
                                      'relatedContracts must match contracts',
                                  },
                                },
                                function: {
                                  type: {
                                    blueId:
                                      'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                                                'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                            },
                                            value: 'contractKey',
                                          },
                                        },
                                        object: {
                                          $var: {
                                            type: {
                                              blueId:
                                                'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                                                      'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                                  },
                                                  value:
                                                    'contract key already exists at',
                                                },
                                                {
                                                  type: {
                                                    blueId:
                                                      'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                                                              'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                                          },
                                                          value: 'contractKey',
                                                        },
                                                      },
                                                    },
                                                    function: {
                                                      type: {
                                                        blueId:
                                                          'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                                              'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                                                'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                            },
                                            value: 'contractKey',
                                          },
                                        },
                                        object: {
                                          $var: {
                                            type: {
                                              blueId:
                                                'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                                                    'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                                                        'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                                    },
                                                    value: 'existingSection',
                                                  },
                                                },
                                                {
                                                  $var: {
                                                    type: {
                                                      blueId:
                                                        'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                                                      'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                                  },
                                                  value:
                                                    'contract key used by multiple sections in request: ',
                                                },
                                                {
                                                  $var: {
                                                    type: {
                                                      blueId:
                                                        'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                                              'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                                                'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                            },
                                            value: 'contractKey',
                                          },
                                        },
                                        object: {
                                          $var: {
                                            type: {
                                              blueId:
                                                'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                            },
                                            value: 'seenContractKeys',
                                          },
                                        },
                                        val: {
                                          $var: {
                                            type: {
                                              blueId:
                                                'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                                    'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                },
                                value: 'contractKeys',
                              },
                            },
                            item: {
                              type: {
                                blueId:
                                  'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                                          'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                                                  'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                              },
                                              value: 'contractKey',
                                            },
                                          },
                                        },
                                        function: {
                                          type: {
                                            blueId:
                                              'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                                                'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                            },
                                            value: 'contractKey',
                                          },
                                        },
                                        object: {
                                          $var: {
                                            type: {
                                              blueId:
                                                'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                                                  'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                              },
                                              value: 'sectionChangeCount',
                                            },
                                          },
                                          {
                                            type: {
                                              blueId:
                                                'E2LM6qgzWG9ttagq2xTmiZkgYEAgkYedFCmU9v7NnVEq',
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
                                    'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                },
                                value: 'contractKeys',
                              },
                            },
                            item: {
                              type: {
                                blueId:
                                  'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                                  'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                                          'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                      },
                                      value: 'sectionKey',
                                    },
                                  },
                                },
                                function: {
                                  type: {
                                    blueId:
                                      'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                                          'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                                            'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                        },
                                        value: '/section',
                                      },
                                    },
                                  },
                                },
                                function: {
                                  type: {
                                    blueId:
                                      'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                                          'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                      },
                                      value: 'sectionChangeCount',
                                    },
                                  },
                                  {
                                    type: {
                                      blueId:
                                        'E2LM6qgzWG9ttagq2xTmiZkgYEAgkYedFCmU9v7NnVEq',
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
                                    'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                },
                                value: '/add',
                              },
                            },
                          },
                        },
                        function: {
                          type: {
                            blueId:
                              'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                          },
                          value: 'asList',
                        },
                      },
                    },
                    item: {
                      type: {
                        blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                                      'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                  },
                                  value: 'sectionKey',
                                },
                                {
                                  type: {
                                    blueId:
                                      'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                  },
                                  value: 'existingRelated',
                                },
                                {
                                  type: {
                                    blueId:
                                      'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                  },
                                  value: 'existingRelatedMap',
                                },
                                {
                                  type: {
                                    blueId:
                                      'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                  },
                                  value: 'contractsMap',
                                },
                                {
                                  type: {
                                    blueId:
                                      'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                                            'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                        },
                                        value: 'contractsMap',
                                      },
                                    },
                                  },
                                  function: {
                                    type: {
                                      blueId:
                                        'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                                              'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                          },
                                          value: '/contracts',
                                        },
                                      },
                                    },
                                  },
                                  function: {
                                    type: {
                                      blueId:
                                        'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                                                          'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                                      },
                                                      value: 'contracts',
                                                    },
                                                    {
                                                      $var: {
                                                        type: {
                                                          blueId:
                                                            'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                                        },
                                                        value: 'sectionKey',
                                                      },
                                                    },
                                                    {
                                                      type: {
                                                        blueId:
                                                          'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                                                        'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                                    },
                                                    value: 'contracts',
                                                  },
                                                  {
                                                    $var: {
                                                      type: {
                                                        blueId:
                                                          'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                                      },
                                                      value: 'sectionKey',
                                                    },
                                                  },
                                                  {
                                                    type: {
                                                      blueId:
                                                        'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                                        'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                                            'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                        },
                                        value: 'existingRelated',
                                      },
                                    },
                                  },
                                  function: {
                                    type: {
                                      blueId:
                                        'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                                                'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                            },
                                            value: '/sectionKey',
                                          },
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
                                        'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                                        'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                    },
                                    value:
                                      'sectionChanges.modify is missing sectionKey',
                                  },
                                },
                                function: {
                                  type: {
                                    blueId:
                                      'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                                        'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                    },
                                    value: 'sectionKey',
                                  },
                                },
                                object: {
                                  $var: {
                                    type: {
                                      blueId:
                                        'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                                              'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                          },
                                          value:
                                            'section key duplicated in sectionChanges: ',
                                        },
                                        {
                                          $var: {
                                            type: {
                                              blueId:
                                                'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                                      'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                                        'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                    },
                                    value: 'sectionKey',
                                  },
                                },
                                object: {
                                  $var: {
                                    type: {
                                      blueId:
                                        'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                    },
                                    value: 'seenSectionKeys',
                                  },
                                },
                                val: {
                                  type: {
                                    blueId:
                                      'AwvXD961fmnmqcSQhjMA7r15HpVh39cefb6ZTyUz2Fm2',
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
                                            'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                                              'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                          },
                                          value: '/section',
                                        },
                                      },
                                    },
                                  },
                                  function: {
                                    type: {
                                      blueId:
                                        'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                                        'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                    },
                                    value:
                                      'relatedContracts must match contracts',
                                  },
                                },
                                function: {
                                  type: {
                                    blueId:
                                      'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                                                'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                            },
                                            value: 'contractKey',
                                          },
                                        },
                                        object: {
                                          $var: {
                                            type: {
                                              blueId:
                                                'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                                                    'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                                                        'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                                    },
                                                    value: 'existingSection',
                                                  },
                                                },
                                                {
                                                  $var: {
                                                    type: {
                                                      blueId:
                                                        'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                                                      'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                                  },
                                                  value:
                                                    'contract key used by multiple sections in request: ',
                                                },
                                                {
                                                  $var: {
                                                    type: {
                                                      blueId:
                                                        'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                                              'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                                                      'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                                  },
                                                  value: 'contractKey',
                                                },
                                              },
                                              object: {
                                                $var: {
                                                  type: {
                                                    blueId:
                                                      'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                                                        'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                                    },
                                                    value: 'contractKey',
                                                  },
                                                },
                                                object: {
                                                  $var: {
                                                    type: {
                                                      blueId:
                                                        'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                                                      'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                                  },
                                                  value:
                                                    'contract key already exists at',
                                                },
                                                {
                                                  type: {
                                                    blueId:
                                                      'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                                                              'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                                          },
                                                          value: 'contractKey',
                                                        },
                                                      },
                                                    },
                                                    function: {
                                                      type: {
                                                        blueId:
                                                          'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                                              'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                                                'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                            },
                                            value: 'contractKey',
                                          },
                                        },
                                        object: {
                                          $var: {
                                            type: {
                                              blueId:
                                                'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                            },
                                            value: 'seenContractKeys',
                                          },
                                        },
                                        val: {
                                          $var: {
                                            type: {
                                              blueId:
                                                'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                                    'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                },
                                value: 'contractKeys',
                              },
                            },
                            item: {
                              type: {
                                blueId:
                                  'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                                          'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                                                  'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                              },
                                              value: 'contractKey',
                                            },
                                          },
                                        },
                                        function: {
                                          type: {
                                            blueId:
                                              'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                                                'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                            },
                                            value: 'contractKey',
                                          },
                                        },
                                        object: {
                                          $var: {
                                            type: {
                                              blueId:
                                                'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                                                  'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                              },
                                              value: 'sectionChangeCount',
                                            },
                                          },
                                          {
                                            type: {
                                              blueId:
                                                'E2LM6qgzWG9ttagq2xTmiZkgYEAgkYedFCmU9v7NnVEq',
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
                                    'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                },
                                value: 'contractKeys',
                              },
                            },
                            item: {
                              type: {
                                blueId:
                                  'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                                                  'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                              },
                                              value: 'contractKeys',
                                            },
                                          },
                                          val: {
                                            $var: {
                                              type: {
                                                blueId:
                                                  'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                                                  'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                                                          'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                                      },
                                                      value: 'oldKey',
                                                    },
                                                  },
                                                },
                                                function: {
                                                  type: {
                                                    blueId:
                                                      'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                                                          'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                                      },
                                                      value:
                                                        'sectionChangeCount',
                                                    },
                                                  },
                                                  {
                                                    type: {
                                                      blueId:
                                                        'E2LM6qgzWG9ttagq2xTmiZkgYEAgkYedFCmU9v7NnVEq',
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
                                    'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                },
                                value: 'existingRelated',
                              },
                            },
                            item: {
                              type: {
                                blueId:
                                  'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                                  'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                                          'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                      },
                                      value: 'sectionKey',
                                    },
                                  },
                                },
                                function: {
                                  type: {
                                    blueId:
                                      'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                                          'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                                            'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                        },
                                        value: '/section',
                                      },
                                    },
                                  },
                                },
                                function: {
                                  type: {
                                    blueId:
                                      'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                                          'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                      },
                                      value: 'sectionChangeCount',
                                    },
                                  },
                                  {
                                    type: {
                                      blueId:
                                        'E2LM6qgzWG9ttagq2xTmiZkgYEAgkYedFCmU9v7NnVEq',
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
                                          'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                                        'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                              'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                          },
                          value: 'asList',
                        },
                      },
                    },
                    item: {
                      type: {
                        blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                                      'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                  },
                                  value: 'sectionKey',
                                },
                                {
                                  type: {
                                    blueId:
                                      'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                                                          'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                                      },
                                                      value: 'contracts',
                                                    },
                                                    {
                                                      $var: {
                                                        type: {
                                                          blueId:
                                                            'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                                        },
                                                        value: 'sectionKey',
                                                      },
                                                    },
                                                    {
                                                      type: {
                                                        blueId:
                                                          'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                                                        'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                                    },
                                                    value: 'contracts',
                                                  },
                                                  {
                                                    $var: {
                                                      type: {
                                                        blueId:
                                                          'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                                      },
                                                      value: 'sectionKey',
                                                    },
                                                  },
                                                  {
                                                    type: {
                                                      blueId:
                                                        'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                                        'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                                            'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                        },
                                        value: 'entry',
                                      },
                                    },
                                  },
                                  function: {
                                    type: {
                                      blueId:
                                        'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                                        'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                                        'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                    },
                                    value:
                                      'sectionChanges.remove is missing sectionKey',
                                  },
                                },
                                function: {
                                  type: {
                                    blueId:
                                      'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                                          'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                                                  'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                              },
                                              value: 'contractKey',
                                            },
                                          },
                                        },
                                        function: {
                                          type: {
                                            blueId:
                                              'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                                                  'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                              },
                                              value: 'sectionChangeCount',
                                            },
                                          },
                                          {
                                            type: {
                                              blueId:
                                                'E2LM6qgzWG9ttagq2xTmiZkgYEAgkYedFCmU9v7NnVEq',
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
                                    'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                },
                                value: 'related',
                              },
                            },
                            item: {
                              type: {
                                blueId:
                                  'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                                  'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                                          'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                      },
                                      value: 'sectionKey',
                                    },
                                  },
                                },
                                function: {
                                  type: {
                                    blueId:
                                      'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                                          'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                      },
                                      value: 'sectionChangeCount',
                                    },
                                  },
                                  {
                                    type: {
                                      blueId:
                                        'E2LM6qgzWG9ttagq2xTmiZkgYEAgkYedFCmU9v7NnVEq',
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
                                          'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                                        'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                              'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                          },
                          value: 'asList',
                        },
                      },
                    },
                    item: {
                      type: {
                        blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                                        'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                    },
                                    value: 'sectionChangeCount',
                                  },
                                },
                                {
                                  $size: {
                                    $var: {
                                      type: {
                                        blueId:
                                          'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                                'E2LM6qgzWG9ttagq2xTmiZkgYEAgkYedFCmU9v7NnVEq',
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
                                'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                            },
                            value: 'no changes provided',
                          },
                        },
                        function: {
                          type: {
                            blueId:
                              'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                        blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                      },
                      value: 'requestChangeset',
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
                          blueId:
                            'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
          },
          sectionKeyForRemove: {
            args: {
              entry: {
                description: 'BEX helper argument.',
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
                              'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                          },
                          value: '/sectionKey',
                        },
                      },
                    },
                    {
                      $var: {
                        type: {
                          blueId:
                            'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
          blueId: '4qGDz5yJxXc9dr8bsBE1B2Tg4AWuR4qHPU9H6T29m3KZ',
        },
      },
    ],
  },
  type: {
    blueId: 'B5eQ8GaYwECKEtduoWEv8Ri1FvWznuvb3ZXGKqeYUuy',
  },
};
