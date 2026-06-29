export const SingleDocumentPermissionGrantToDocument: Record<string, unknown> =
  {
    contracts: {
      granterChannel: {
        description:
          'Granter/owner’s timeline (direct grant-document revoke lives here).',
        type: {
          blueId: 'DwLMXCJcg3AL4GHW1SjraxoNDPpswXH6RHsx4fNDT6rg',
        },
      },
      initLifecycleChannel: {
        event: {
          type: {
            blueId: 'Ht1o66MTLKf7JmnEiR27rRLSwdz8FUTgf2mGPNuLSDUL',
          },
        },
        type: {
          blueId: '2DXGQUiQBQ6CT89jwAsTAXaEPhLgiSXhKCGh9Q7Hv3MQ',
        },
      },
      revoke: {
        channel: {
          type: {
            blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
          },
          value: 'granterChannel',
        },
        description:
          'Granter requests revocation on the grant document. Grantee-document self-revoke uses the existing revoke-request event with grantDocumentId emitted from the grantee document itself.',
        request: {
          description: 'Optional human-readable reason',
          type: {
            blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
          },
        },
        type: {
          blueId: 'wGksq5vE8TroTr6StteHDnMx9mJKqT7dHoYT9bEddym',
        },
      },
      revokeImplGranter: {
        operation: {
          type: {
            blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
          },
          value: 'revoke',
        },
        steps: {
          items: [
            {
              do: {
                items: [
                  {
                    $appendEvent: {
                      reason: {
                        $event: {
                          type: {
                            blueId:
                              'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                          },
                          value: '/message/request',
                        },
                      },
                      type: {
                        blueId: '5Jtu4jN8svHxkJkkkZdDQLVzk6vjxE4Reo4VTw4rwrn9',
                      },
                    },
                  },
                  {
                    $return: {
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
              name: 'EmitRevokeRequested',
              type: {
                blueId: '4qGDz5yJxXc9dr8bsBE1B2Tg4AWuR4qHPU9H6T29m3KZ',
              },
            },
          ],
        },
        type: {
          blueId: 'CXotTNTYxqqSgDBzTGJjbLVvsjrxJMgmJZaC1rA826CF',
        },
      },
      validateOnInit: {
        channel: {
          type: {
            blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
          },
          value: 'initLifecycleChannel',
        },
        steps: {
          items: [
            {
              entry: {
                type: {
                  blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                },
                value: 'validate',
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
                              blueId:
                                'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                            blueId:
                              'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                          },
                          value: 'val',
                        },
                      },
                    },
                  },
                },
                hasBadSingleOps: {
                  args: {
                    ops: {
                      description: 'BEX helper argument.',
                    },
                  },
                  expr: {
                    $some: {
                      in: {
                        $call: {
                          args: {
                            val: {
                              $var: {
                                type: {
                                  blueId:
                                    'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                },
                                value: 'ops',
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
                          blueId:
                            'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                        },
                        value: 'opName',
                      },
                      where: {
                        $not: {
                          $call: {
                            args: {
                              val: {
                                $var: {
                                  type: {
                                    blueId:
                                      'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                  },
                                  value: 'opName',
                                },
                              },
                            },
                            function: {
                              type: {
                                blueId:
                                  'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                              },
                              value: 'isNonEmptyText',
                            },
                          },
                        },
                      },
                    },
                  },
                },
                isNonEmptyText: {
                  args: {
                    val: {
                      description: 'BEX helper argument.',
                    },
                  },
                  expr: {
                    $and: {
                      items: [
                        {
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
                                value: 'val',
                              },
                            },
                          },
                        },
                        {
                          $truthy: {
                            $var: {
                              type: {
                                blueId:
                                  'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                              },
                              value: 'val',
                            },
                          },
                        },
                      ],
                    },
                  },
                },
                validate: {
                  do: {
                    items: [
                      {
                        $returnIf: {
                          cond: {
                            $eq: {
                              items: [
                                {
                                  $document: {
                                    type: {
                                      blueId:
                                        'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                    },
                                    value: '/skipValidation',
                                  },
                                },
                                {
                                  type: {
                                    blueId:
                                      'AwvXD961fmnmqcSQhjMA7r15HpVh39cefb6ZTyUz2Fm2',
                                  },
                                  value: true,
                                },
                              ],
                            },
                          },
                          expr: {
                            events: {
                              items: [],
                            },
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
                                value: 'issues',
                              },
                              {
                                type: {
                                  blueId:
                                    'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                },
                                value: 'target',
                              },
                              {
                                type: {
                                  blueId:
                                    'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                },
                                value: 'granterId',
                              },
                              {
                                type: {
                                  blueId:
                                    'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                },
                                value: 'granteeDocumentId',
                              },
                              {
                                type: {
                                  blueId:
                                    'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                },
                                value: 'perms',
                              },
                              {
                                type: {
                                  blueId:
                                    'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                },
                                value: 'singleOps',
                              },
                              {
                                type: {
                                  blueId:
                                    'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                },
                                value: 'hasSingle',
                              },
                            ],
                          },
                          vars: {
                            granteeDocumentId: {
                              $document: {
                                type: {
                                  blueId:
                                    'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                },
                                value: '/granteeDocumentId',
                              },
                            },
                            granterId: {
                              $document: {
                                type: {
                                  blueId:
                                    'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                },
                                value: '/contracts/granterChannel/accountId',
                              },
                            },
                            hasSingle: {
                              $gt: {
                                items: [
                                  {
                                    $size: {
                                      $call: {
                                        args: {
                                          val: {
                                            $var: {
                                              type: {
                                                blueId:
                                                  'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                              },
                                              value: 'singleOps',
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
                            issues: {
                              items: [],
                            },
                            perms: {
                              $document: {
                                type: {
                                  blueId:
                                    'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                },
                                value: '/permissions',
                              },
                            },
                            singleOps: {
                              $choose: {
                                cond: {
                                  $exists: {
                                    $document: {
                                      type: {
                                        blueId:
                                          'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                      },
                                      value: '/permissions/singleOps',
                                    },
                                  },
                                },
                                else: {
                                  items: [],
                                },
                                then: {
                                  $document: {
                                    type: {
                                      blueId:
                                        'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                    },
                                    value: '/permissions/singleOps',
                                  },
                                },
                              },
                            },
                            target: {
                              $document: {
                                type: {
                                  blueId:
                                    'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                },
                                value: '/targetSessionId',
                              },
                            },
                          },
                        },
                      },
                      {
                        $if: {
                          cond: {
                            $not: {
                              $call: {
                                args: {
                                  val: {
                                    $var: {
                                      type: {
                                        blueId:
                                          'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                      },
                                      value: 'target',
                                    },
                                  },
                                },
                                function: {
                                  type: {
                                    blueId:
                                      'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                  },
                                  value: 'isNonEmptyText',
                                },
                              },
                            },
                          },
                          then: {
                            items: [
                              {
                                $set: {
                                  expr: {
                                    $listConcat: {
                                      items: [
                                        {
                                          $var: {
                                            type: {
                                              blueId:
                                                'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                            },
                                            value: 'issues',
                                          },
                                        },
                                        {
                                          items: [
                                            {
                                              type: {
                                                blueId:
                                                  'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                              },
                                              value:
                                                'targetSessionId is missing or invalid',
                                            },
                                          ],
                                        },
                                      ],
                                    },
                                  },
                                  name: 'issues',
                                },
                              },
                            ],
                          },
                        },
                      },
                      {
                        $if: {
                          cond: {
                            $not: {
                              $call: {
                                args: {
                                  val: {
                                    $var: {
                                      type: {
                                        blueId:
                                          'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                      },
                                      value: 'granterId',
                                    },
                                  },
                                },
                                function: {
                                  type: {
                                    blueId:
                                      'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                  },
                                  value: 'isNonEmptyText',
                                },
                              },
                            },
                          },
                          then: {
                            items: [
                              {
                                $set: {
                                  expr: {
                                    $listConcat: {
                                      items: [
                                        {
                                          $var: {
                                            type: {
                                              blueId:
                                                'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                            },
                                            value: 'issues',
                                          },
                                        },
                                        {
                                          items: [
                                            {
                                              type: {
                                                blueId:
                                                  'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                              },
                                              value:
                                                'granterChannel must be bound to an accountId',
                                            },
                                          ],
                                        },
                                      ],
                                    },
                                  },
                                  name: 'issues',
                                },
                              },
                            ],
                          },
                        },
                      },
                      {
                        $if: {
                          cond: {
                            $not: {
                              $call: {
                                args: {
                                  val: {
                                    $var: {
                                      type: {
                                        blueId:
                                          'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                      },
                                      value: 'granteeDocumentId',
                                    },
                                  },
                                },
                                function: {
                                  type: {
                                    blueId:
                                      'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                  },
                                  value: 'isNonEmptyText',
                                },
                              },
                            },
                          },
                          then: {
                            items: [
                              {
                                $set: {
                                  expr: {
                                    $listConcat: {
                                      items: [
                                        {
                                          $var: {
                                            type: {
                                              blueId:
                                                'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                            },
                                            value: 'issues',
                                          },
                                        },
                                        {
                                          items: [
                                            {
                                              type: {
                                                blueId:
                                                  'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                              },
                                              value:
                                                'granteeDocumentId must be a non-empty string (originalBlueId)',
                                            },
                                          ],
                                        },
                                      ],
                                    },
                                  },
                                  name: 'issues',
                                },
                              },
                            ],
                          },
                        },
                      },
                      {
                        $if: {
                          cond: {
                            $not: {
                              $isKind: {
                                kind: {
                                  type: {
                                    blueId:
                                      'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                  },
                                  value: 'object',
                                },
                                val: {
                                  $var: {
                                    type: {
                                      blueId:
                                        'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                    },
                                    value: 'perms',
                                  },
                                },
                              },
                            },
                          },
                          else: {
                            items: [
                              {
                                $if: {
                                  cond: {
                                    $ne: {
                                      items: [
                                        {
                                          $var: {
                                            name: 'perms',
                                            path: {
                                              type: {
                                                blueId:
                                                  'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                              },
                                              value: '/read',
                                            },
                                          },
                                        },
                                        {
                                          type: {
                                            blueId:
                                              'AwvXD961fmnmqcSQhjMA7r15HpVh39cefb6ZTyUz2Fm2',
                                          },
                                          value: true,
                                        },
                                      ],
                                    },
                                  },
                                  then: {
                                    items: [
                                      {
                                        $set: {
                                          expr: {
                                            $listConcat: {
                                              items: [
                                                {
                                                  $var: {
                                                    type: {
                                                      blueId:
                                                        'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                                    },
                                                    value: 'issues',
                                                  },
                                                },
                                                {
                                                  items: [
                                                    {
                                                      type: {
                                                        blueId:
                                                          'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                                      },
                                                      value:
                                                        'permissions.read must be true for SDPG',
                                                    },
                                                  ],
                                                },
                                              ],
                                            },
                                          },
                                          name: 'issues',
                                        },
                                      },
                                    ],
                                  },
                                },
                              },
                              {
                                $if: {
                                  cond: {
                                    $call: {
                                      args: {
                                        ops: {
                                          $var: {
                                            type: {
                                              blueId:
                                                'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                            },
                                            value: 'singleOps',
                                          },
                                        },
                                      },
                                      function: {
                                        type: {
                                          blueId:
                                            'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                        },
                                        value: 'hasBadSingleOps',
                                      },
                                    },
                                  },
                                  then: {
                                    items: [
                                      {
                                        $set: {
                                          expr: {
                                            $listConcat: {
                                              items: [
                                                {
                                                  $var: {
                                                    type: {
                                                      blueId:
                                                        'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                                    },
                                                    value: 'issues',
                                                  },
                                                },
                                                {
                                                  items: [
                                                    {
                                                      type: {
                                                        blueId:
                                                          'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                                      },
                                                      value:
                                                        'permissions.singleOps must contain only non-empty strings',
                                                    },
                                                  ],
                                                },
                                              ],
                                            },
                                          },
                                          name: 'issues',
                                        },
                                      },
                                    ],
                                  },
                                },
                              },
                              {
                                $if: {
                                  cond: {
                                    $and: {
                                      items: [
                                        {
                                          $eq: {
                                            items: [
                                              {
                                                $var: {
                                                  name: 'perms',
                                                  path: {
                                                    type: {
                                                      blueId:
                                                        'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                                    },
                                                    value: '/allOps',
                                                  },
                                                },
                                              },
                                              {
                                                type: {
                                                  blueId:
                                                    'AwvXD961fmnmqcSQhjMA7r15HpVh39cefb6ZTyUz2Fm2',
                                                },
                                                value: true,
                                              },
                                            ],
                                          },
                                        },
                                        {
                                          $var: {
                                            type: {
                                              blueId:
                                                'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                            },
                                            value: 'hasSingle',
                                          },
                                        },
                                      ],
                                    },
                                  },
                                  then: {
                                    items: [
                                      {
                                        $set: {
                                          expr: {
                                            $listConcat: {
                                              items: [
                                                {
                                                  $var: {
                                                    type: {
                                                      blueId:
                                                        'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                                    },
                                                    value: 'issues',
                                                  },
                                                },
                                                {
                                                  items: [
                                                    {
                                                      type: {
                                                        blueId:
                                                          'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                                      },
                                                      value:
                                                        'permissions.allOps=true and permissions.singleOps are mutually exclusive',
                                                    },
                                                  ],
                                                },
                                              ],
                                            },
                                          },
                                          name: 'issues',
                                        },
                                      },
                                    ],
                                  },
                                },
                              },
                            ],
                          },
                          then: {
                            items: [
                              {
                                $set: {
                                  expr: {
                                    $listConcat: {
                                      items: [
                                        {
                                          $var: {
                                            type: {
                                              blueId:
                                                'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                            },
                                            value: 'issues',
                                          },
                                        },
                                        {
                                          items: [
                                            {
                                              type: {
                                                blueId:
                                                  'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                              },
                                              value:
                                                'permissions block is missing',
                                            },
                                          ],
                                        },
                                      ],
                                    },
                                  },
                                  name: 'issues',
                                },
                              },
                            ],
                          },
                        },
                      },
                      {
                        $if: {
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
                                      value: 'issues',
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
                            items: [
                              {
                                $appendEvent: {
                                  type: {
                                    blueId:
                                      '6rJFGtfmUHZyspx5UNtUvSjNn89XqmBHzmMRiQHjhPX3',
                                  },
                                },
                              },
                            ],
                          },
                          then: {
                            items: [
                              {
                                $appendEvent: {
                                  issues: {
                                    $var: {
                                      type: {
                                        blueId:
                                          'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                      },
                                      value: 'issues',
                                    },
                                  },
                                  type: {
                                    blueId:
                                      '7BEbHgR3h4y9HDLvxnKSMyGZZqYnA8Jm2cFuTMjDuCJg',
                                  },
                                },
                              },
                            ],
                          },
                        },
                      },
                      {
                        $return: {
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
              },
              name: 'ValidateBasicShape',
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
    },
    granteeDocumentId: {
      description:
        "Required original document id (blueId) that will act as the grantee principal ('document').",
      type: {
        blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
      },
    },
    granterDocumentSessionId: {
      description:
        'Optional. If set, MyOS should evaluate authority using this document session as the principal (instead of granter accountId).',
      type: {
        blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
      },
    },
    name: 'Single Document Permission Grant To Document',
    permissions: {
      description:
        'Rights to grant on the target session (READ required; allOps and singleOps are mutually exclusive; singleOps is optional but must be non-empty if provided).',
      type: {
        blueId: '9L2spAU6UyAkHicQ4vEqeWWoaEEndi1iVdt8Vdbpi4Yq',
      },
    },
    skipValidation: {
      description:
        "If true, the validation will be skipped (MyOS Admin won't be triggered to create permission grant).",
      type: {
        blueId: 'AwvXD961fmnmqcSQhjMA7r15HpVh39cefb6ZTyUz2Fm2',
      },
    },
    targetSessionId: {
      description: 'Target document session id to grant access to',
      type: {
        blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
      },
    },
    type: {
      blueId: 'cjPVQ6sifei7ryEsdwVhsYgHRXiAWMvaoQvrRo6LYRY',
    },
  };
