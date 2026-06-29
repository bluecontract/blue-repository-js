export const LinkedDocumentsPermissionGrantToDocument: Record<string, unknown> =
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
                        blueId: 'BKyVzxDr2rJp7weHvuzyrgSJ42ATwN3SizPchqu7QMVc',
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
                              value: 'val',
                            },
                          },
                        },
                      },
                      else: {
                        $emptyObject: {
                          type: {
                            blueId:
                              'AwvXD961fmnmqcSQhjMA7r15HpVh39cefb6ZTyUz2Fm2',
                          },
                          value: true,
                        },
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
                                value: 'description',
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
                      ],
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
                          vars: {
                            anchorCount: {
                              type: {
                                blueId:
                                  'E2LM6qgzWG9ttagq2xTmiZkgYEAgkYedFCmU9v7NnVEq',
                              },
                              value: 0,
                            },
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
                            issues: {
                              items: [],
                            },
                            links: {
                              $call: {
                                args: {
                                  val: {
                                    $document: {
                                      type: {
                                        blueId:
                                          'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                      },
                                      value: '/links',
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
                                                'granteeDocumentId must be a non-empty string',
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
                            $eq: {
                              items: [
                                {
                                  $size: {
                                    $keys: {
                                      $var: {
                                        type: {
                                          blueId:
                                            'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                        },
                                        value: 'links',
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
                                                'links is missing or invalid',
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
                        $forEach: {
                          do: {
                            items: [
                              {
                                $if: {
                                  cond: {
                                    $not: {
                                      $call: {
                                        args: {
                                          key: {
                                            $var: {
                                              type: {
                                                blueId:
                                                  'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                              },
                                              value: 'anchor',
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
                                  then: {
                                    items: [
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
                                                    value: 'anchorCount',
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
                                          name: 'anchorCount',
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
                                                              value:
                                                                'singleOps',
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
                                            perms: {
                                              $call: {
                                                args: {
                                                  val: {
                                                    $get: {
                                                      key: {
                                                        $var: {
                                                          type: {
                                                            blueId:
                                                              'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                                          },
                                                          value: 'anchor',
                                                        },
                                                      },
                                                      object: {
                                                        $var: {
                                                          type: {
                                                            blueId:
                                                              'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                                          },
                                                          value: 'links',
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
                                                  value: 'asObject',
                                                },
                                              },
                                            },
                                            singleOps: {
                                              $choose: {
                                                cond: {
                                                  $exists: {
                                                    $var: {
                                                      name: 'perms',
                                                      path: {
                                                        type: {
                                                          blueId:
                                                            'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                                        },
                                                        value: '/singleOps',
                                                      },
                                                    },
                                                  },
                                                },
                                                else: {
                                                  items: [],
                                                },
                                                then: {
                                                  $var: {
                                                    name: 'perms',
                                                    path: {
                                                      type: {
                                                        blueId:
                                                          'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                                      },
                                                      value: '/singleOps',
                                                    },
                                                  },
                                                },
                                              },
                                            },
                                          },
                                        },
                                      },
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
                                                              $concat: {
                                                                items: [
                                                                  {
                                                                    type: {
                                                                      blueId:
                                                                        'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                                                    },
                                                                    value:
                                                                      "links['",
                                                                  },
                                                                  {
                                                                    $var: {
                                                                      type: {
                                                                        blueId:
                                                                          'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                                                      },
                                                                      value:
                                                                        'anchor',
                                                                    },
                                                                  },
                                                                  {
                                                                    type: {
                                                                      blueId:
                                                                        'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                                                    },
                                                                    value:
                                                                      "'].read must be true",
                                                                  },
                                                                ],
                                                              },
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
                                                              $concat: {
                                                                items: [
                                                                  {
                                                                    type: {
                                                                      blueId:
                                                                        'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                                                    },
                                                                    value:
                                                                      "links['",
                                                                  },
                                                                  {
                                                                    $var: {
                                                                      type: {
                                                                        blueId:
                                                                          'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                                                      },
                                                                      value:
                                                                        'anchor',
                                                                    },
                                                                  },
                                                                  {
                                                                    type: {
                                                                      blueId:
                                                                        'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                                                    },
                                                                    value:
                                                                      "'].singleOps must contain only non-empty strings",
                                                                  },
                                                                ],
                                                              },
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
                                                              $concat: {
                                                                items: [
                                                                  {
                                                                    type: {
                                                                      blueId:
                                                                        'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                                                    },
                                                                    value:
                                                                      "links['",
                                                                  },
                                                                  {
                                                                    $var: {
                                                                      type: {
                                                                        blueId:
                                                                          'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                                                      },
                                                                      value:
                                                                        'anchor',
                                                                    },
                                                                  },
                                                                  {
                                                                    type: {
                                                                      blueId:
                                                                        'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                                                    },
                                                                    value:
                                                                      "'].allOps=true and singleOps are mutually exclusive",
                                                                  },
                                                                ],
                                                              },
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
                                },
                              },
                            ],
                          },
                          in: {
                            $keys: {
                              $var: {
                                type: {
                                  blueId:
                                    'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                },
                                value: 'links',
                              },
                            },
                          },
                          item: {
                            type: {
                              blueId:
                                'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                            },
                            value: 'anchor',
                          },
                        },
                      },
                      {
                        $if: {
                          cond: {
                            $eq: {
                              items: [
                                {
                                  $var: {
                                    type: {
                                      blueId:
                                        'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                    },
                                    value: 'anchorCount',
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
                                                'links must have at least one anchor entry',
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
                                      'Gqf8h8GKR98kdptTXPABstPSc5ezuKGRsTQ8w1QDcSnQ',
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
                                      'Cm9gL7QQ4CDhi18VKg5PfK11Xy6CLVJawoa88BTTy9ZU',
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
        "Required original document id (blueId) that will act as the 'document' principal.",
      type: {
        blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
      },
    },
    granterDocumentSessionId: {
      description:
        "Optional. If set, MyOS should evaluate authority as this document session\n(principalType='document', granteeId=documentId of this session),\ninstead of the granter accountId.\n",
      type: {
        blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
      },
    },
    links: {
      description:
        'Map from anchor name to permissions that will be granted for documents linked to the base document via that anchor.',
      type: {
        blueId: 'DsDibGYwridS8uYoUcwFbBHa49UFAA7MtLNboXrXudmn',
      },
    },
    name: 'Linked Documents Permission Grant To Document',
    skipValidation: {
      description:
        "If true, the validation will be skipped (MyOS Admin won't be triggered to create permission grant).",
      type: {
        blueId: 'AwvXD961fmnmqcSQhjMA7r15HpVh39cefb6ZTyUz2Fm2',
      },
    },
    targetSessionId: {
      description:
        'Base document session id whose anchors define the scope of this grant.',
      type: {
        blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
      },
    },
    type: {
      blueId: 'cjPVQ6sifei7ryEsdwVhsYgHRXiAWMvaoQvrRo6LYRY',
    },
  };
