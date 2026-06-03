export const WorkerAgencyPermissionGrant: Record<string, unknown> = {
  allowedWorkerAgencyPermissions: {
    itemType: {
      blueId: 'GjxBN2eRsYCbipBAFk2eRneiDSs5rWS7eUzZBpPHz2JH',
    },
    type: {
      blueId: '8DSFoWG9MqRSUhStqoPLrwVQiYByRh18NWbDEarN8MKF',
    },
  },
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
        blueId: '316voisXnp8BqLs7BNjjypfn3UG2FSpgFxS6pFqHbf66',
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
                      blueId: 'GeNaTohvYFC1xu9RLJS1buzqj1JpqyernRsvJiTiSTTY',
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
        blueId: 'AWnvWVtp3g7B67iM6ZFETo1zri5yVikh8i53Q6PAPkqz',
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
                        blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                      $let: {
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
                          issues: {
                            items: [],
                          },
                          permissionsList: {
                            $choose: {
                              cond: {
                                $exists: {
                                  $document: {
                                    type: {
                                      blueId:
                                        'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                    },
                                    value: '/allowedWorkerAgencyPermissions',
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
                                  value: '/allowedWorkerAgencyPermissions',
                                },
                              },
                            },
                          },
                          seenWorkerTypes: {
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
                                  $call: {
                                    args: {
                                      val: {
                                        $var: {
                                          type: {
                                            blueId:
                                              'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                          },
                                          value: 'permissionsList',
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
                                              'allowedWorkerAgencyPermissions must be a non-empty array',
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
                              $let: {
                                order: {
                                  items: [
                                    {
                                      type: {
                                        blueId:
                                          'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                      },
                                      value: 'itemPath',
                                    },
                                    {
                                      type: {
                                        blueId:
                                          'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                      },
                                      value: 'itemObject',
                                    },
                                    {
                                      type: {
                                        blueId:
                                          'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                      },
                                      value: 'workerType',
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
                                  itemObject: {
                                    $call: {
                                      args: {
                                        val: {
                                          $var: {
                                            type: {
                                              blueId:
                                                'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                            },
                                            value: 'item',
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
                                  itemPath: {
                                    $concat: {
                                      items: [
                                        {
                                          type: {
                                            blueId:
                                              'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                          },
                                          value:
                                            '/allowedWorkerAgencyPermissions[',
                                        },
                                        {
                                          $var: {
                                            type: {
                                              blueId:
                                                'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                            },
                                            value: 'idx',
                                          },
                                        },
                                        {
                                          type: {
                                            blueId:
                                              'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                          },
                                          value: ']',
                                        },
                                      ],
                                    },
                                  },
                                  perms: {
                                    $choose: {
                                      cond: {
                                        $exists: {
                                          $var: {
                                            name: 'itemObject',
                                            path: {
                                              type: {
                                                blueId:
                                                  'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                              },
                                              value: '/permissions',
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
                                        $call: {
                                          args: {
                                            val: {
                                              $var: {
                                                name: 'itemObject',
                                                path: {
                                                  type: {
                                                    blueId:
                                                      'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                                  },
                                                  value: '/permissions',
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
                                  workerType: {
                                    $var: {
                                      name: 'itemObject',
                                      path: {
                                        type: {
                                          blueId:
                                            'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                        },
                                        value: '/workerType',
                                      },
                                    },
                                  },
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
                                          value: 'item',
                                        },
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
                                                    $concat: {
                                                      items: [
                                                        {
                                                          $var: {
                                                            type: {
                                                              blueId:
                                                                'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                                            },
                                                            value: 'itemPath',
                                                          },
                                                        },
                                                        {
                                                          type: {
                                                            blueId:
                                                              'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                                          },
                                                          value:
                                                            ' must be an object',
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
                                  $not: {
                                    $call: {
                                      args: {
                                        val: {
                                          $var: {
                                            type: {
                                              blueId:
                                                'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                            },
                                            value: 'workerType',
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
                                else: {
                                  items: [
                                    {
                                      $if: {
                                        cond: {
                                          $hasKey: {
                                            key: {
                                              $var: {
                                                type: {
                                                  blueId:
                                                    'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                                },
                                                value: 'workerType',
                                              },
                                            },
                                            object: {
                                              $var: {
                                                type: {
                                                  blueId:
                                                    'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                                },
                                                value: 'seenWorkerTypes',
                                              },
                                            },
                                          },
                                        },
                                        else: {
                                          items: [
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
                                                        value: 'workerType',
                                                      },
                                                    },
                                                    object: {
                                                      $var: {
                                                        type: {
                                                          blueId:
                                                            'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                                        },
                                                        value:
                                                          'seenWorkerTypes',
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
                                                name: 'seenWorkerTypes',
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
                                                            $concat: {
                                                              items: [
                                                                {
                                                                  type: {
                                                                    blueId:
                                                                      'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                                                  },
                                                                  value:
                                                                    "duplicate workerType '",
                                                                },
                                                                {
                                                                  $var: {
                                                                    type: {
                                                                      blueId:
                                                                        'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                                                    },
                                                                    value:
                                                                      'workerType',
                                                                  },
                                                                },
                                                                {
                                                                  type: {
                                                                    blueId:
                                                                      'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                                                  },
                                                                  value:
                                                                    "' in allowedWorkerAgencyPermissions",
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
                                                          $var: {
                                                            type: {
                                                              blueId:
                                                                'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                                            },
                                                            value: 'itemPath',
                                                          },
                                                        },
                                                        {
                                                          type: {
                                                            blueId:
                                                              'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                                          },
                                                          value:
                                                            '.workerType must be a non-empty string',
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
                                  $not: {
                                    $exists: {
                                      $var: {
                                        name: 'itemObject',
                                        path: {
                                          type: {
                                            blueId:
                                              'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                          },
                                          value: '/permissions',
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
                                                      value: 'perms',
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
                                                            $concat: {
                                                              items: [
                                                                {
                                                                  $var: {
                                                                    type: {
                                                                      blueId:
                                                                        'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                                                    },
                                                                    value:
                                                                      'itemPath',
                                                                  },
                                                                },
                                                                {
                                                                  type: {
                                                                    blueId:
                                                                      'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                                                  },
                                                                  value:
                                                                    '.permissions must be an object',
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
                                                                  $var: {
                                                                    type: {
                                                                      blueId:
                                                                        'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                                                    },
                                                                    value:
                                                                      'itemPath',
                                                                  },
                                                                },
                                                                {
                                                                  type: {
                                                                    blueId:
                                                                      'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                                                  },
                                                                  value:
                                                                    '.permissions.read must be true',
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
                                                                  $var: {
                                                                    type: {
                                                                      blueId:
                                                                        'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                                                    },
                                                                    value:
                                                                      'itemPath',
                                                                  },
                                                                },
                                                                {
                                                                  type: {
                                                                    blueId:
                                                                      'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                                                  },
                                                                  value:
                                                                    '.permissions.singleOps must contain only non-empty strings',
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
                                                                  $var: {
                                                                    type: {
                                                                      blueId:
                                                                        'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                                                    },
                                                                    value:
                                                                      'itemPath',
                                                                  },
                                                                },
                                                                {
                                                                  type: {
                                                                    blueId:
                                                                      'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                                                  },
                                                                  value:
                                                                    '.permissions.allOps=true and',
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
                                                                    value:
                                                                      'itemPath',
                                                                  },
                                                                },
                                                                {
                                                                  type: {
                                                                    blueId:
                                                                      'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                                                  },
                                                                  value:
                                                                    '.permissions.singleOps are mutually exclusive',
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
                                                          $var: {
                                                            type: {
                                                              blueId:
                                                                'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                                            },
                                                            value: 'itemPath',
                                                          },
                                                        },
                                                        {
                                                          type: {
                                                            blueId:
                                                              'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                                          },
                                                          value:
                                                            '.permissions is required',
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
                        in: {
                          $call: {
                            args: {
                              val: {
                                $var: {
                                  type: {
                                    blueId:
                                      'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                  },
                                  value: 'permissionsList',
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
                        index: {
                          type: {
                            blueId:
                              'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                          },
                          value: 'idx',
                        },
                        item: {
                          type: {
                            blueId:
                              'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                          },
                          value: 'item',
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
                                    'J7ssmNEa6YpxrLFTqZfwgD4uiz3cSyNLNaC4WbnLEhj7',
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
                                    'B1RnGH4azPberZAn1F3YrP5c2sGV939EpruSPBD2Kc1u',
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
    type: {
      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
    },
  },
  name: 'Worker Agency Permission Grant',
  type: {
    blueId: 'FMWYekdjwkDnoM2YfHmwuUATHZovSgmDEvSVTmyVmbHc',
  },
};
