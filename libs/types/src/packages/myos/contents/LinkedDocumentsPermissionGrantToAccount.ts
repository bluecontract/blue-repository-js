export const LinkedDocumentsPermissionGrantToAccount = {
  contracts: {
    granteeChannel: {
      description: 'Grantee’s timeline',
      type: {
        blueId: '9gQuMoLckgwgvAfx1X8tzdHwMNfRcraG96PfT5TDbXeh',
      },
    },
    granterChannel: {
      description: 'Granter/owner’s timeline',
      type: {
        blueId: '9gQuMoLckgwgvAfx1X8tzdHwMNfRcraG96PfT5TDbXeh',
      },
    },
    initLifecycleChannel: {
      event: {
        type: {
          blueId: 'BrpmpNt5JkapeUvPqYcxgXZrHNZX3R757dRwuXXdfNM2',
        },
      },
      type: {
        blueId: 'H2aCCTUcLMTJozWkn7HPUjyFBFxamraw1q8DyWk87zxr',
      },
    },
    revoke: {
      channel: {
        type: {
          blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
        },
        value: 'revokeAccessChannel',
      },
      description:
        'Granter or grantee indicates the grant should be revoked (MyOS Admin will handle).',
      request: {
        description: 'Optional human-readable reason',
        type: {
          blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
        },
      },
      type: {
        blueId: '9Fu3Rjq8hNKnZS71ZU8RXBBupZEa7Wb8z44GtzfSwjbr',
      },
    },
    revokeAccessChannel: {
      channels: {
        items: [
          {
            type: {
              blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
            },
            value: 'granterChannel',
          },
          {
            type: {
              blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
            },
            value: 'granteeChannel',
          },
        ],
      },
      description:
        'Either grant side can invoke revoke on this grant document.',
      type: {
        blueId: 'ByQY8CFbj5JVoSuoutRmG5wJWfvAidg7q83zsQ3GTgD4',
      },
    },
    revokeImpl: {
      operation: {
        type: {
          blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
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
                            'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                        },
                        value: '/message/request',
                      },
                    },
                    type: {
                      blueId: 'Exjts5mZB8Z8sLyt79KSJozXFpgJJktEsX8ZHGjE6jNt',
                    },
                  },
                },
                {
                  $return: {
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
            name: 'EmitRevokeRequested',
            type: {
              blueId: 'MXnjrsiUgKPkinuRCVXEmnsBJhESt7HYZQPJH1eJvnJ',
            },
          },
        ],
      },
      type: {
        blueId: 'B5mVH4caQv9Hmzeb5ZmCtzYomooFzTdoCQ4mZVwHY3MS',
      },
    },
    validateOnInit: {
      channel: {
        type: {
          blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
        },
        value: 'initLifecycleChannel',
      },
      steps: {
        items: [
          {
            entry: {
              type: {
                blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
              },
              value: 'validate',
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
                            blueId:
                              'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
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
                          blueId:
                            'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
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
                            blueId:
                              'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
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
                          blueId:
                            '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
                        },
                        value: true,
                      },
                    },
                    then: {
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
              },
              hasBadSingleOps: {
                args: {
                  ops: {
                    value: null,
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
                                  'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                              },
                              value: 'ops',
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
                                    'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                },
                                value: 'opName',
                              },
                            },
                          },
                          function: {
                            type: {
                              blueId:
                                'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
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
                    ],
                  },
                },
              },
              isNonEmptyText: {
                args: {
                  val: {
                    value: null,
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
                                'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                            },
                            value: 'text',
                          },
                          val: {
                            $unwrap: {
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
                      },
                      {
                        $truthy: {
                          $unwrap: {
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
                    ],
                  },
                },
              },
              validate: {
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
                              value: 'issues',
                            },
                            {
                              type: {
                                blueId:
                                  'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                              },
                              value: 'target',
                            },
                            {
                              type: {
                                blueId:
                                  'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                              },
                              value: 'granterId',
                            },
                            {
                              type: {
                                blueId:
                                  'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                              },
                              value: 'granteeId',
                            },
                            {
                              type: {
                                blueId:
                                  'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                              },
                              value: 'links',
                            },
                            {
                              type: {
                                blueId:
                                  'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                              },
                              value: 'anchorCount',
                            },
                          ],
                        },
                        vars: {
                          anchorCount: {
                            type: {
                              blueId:
                                '5WNMiV9Knz63B4dVY5JtMyh3FB4FSGqv7ceScvuapdE1',
                            },
                            value: 0,
                          },
                          granteeId: {
                            $document: {
                              type: {
                                blueId:
                                  'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                              },
                              value: '/contracts/granteeChannel/accountId',
                            },
                          },
                          granterId: {
                            $document: {
                              type: {
                                blueId:
                                  'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
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
                                        'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                    },
                                    value: '/links',
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
                          target: {
                            $document: {
                              type: {
                                blueId:
                                  'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
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
                                        'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                    },
                                    value: 'target',
                                  },
                                },
                              },
                              function: {
                                type: {
                                  blueId:
                                    'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
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
                                              'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                          },
                                          value: 'issues',
                                        },
                                      },
                                      {
                                        items: [
                                          {
                                            type: {
                                              blueId:
                                                'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
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
                                        'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                    },
                                    value: 'granterId',
                                  },
                                },
                              },
                              function: {
                                type: {
                                  blueId:
                                    'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
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
                                              'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                          },
                                          value: 'issues',
                                        },
                                      },
                                      {
                                        items: [
                                          {
                                            type: {
                                              blueId:
                                                'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
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
                                        'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                    },
                                    value: 'granteeId',
                                  },
                                },
                              },
                              function: {
                                type: {
                                  blueId:
                                    'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
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
                                              'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                          },
                                          value: 'issues',
                                        },
                                      },
                                      {
                                        items: [
                                          {
                                            type: {
                                              blueId:
                                                'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                            },
                                            value:
                                              'granteeChannel must be bound to an accountId',
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
                                          'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                      },
                                      value: 'links',
                                    },
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
                                              'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                          },
                                          value: 'issues',
                                        },
                                      },
                                      {
                                        items: [
                                          {
                                            type: {
                                              blueId:
                                                'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
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
                                                'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                            },
                                            value: 'anchor',
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
                                                      'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                                  },
                                                  value: 'anchorCount',
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
                                                  'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                              },
                                              value: 'perms',
                                            },
                                            {
                                              type: {
                                                blueId:
                                                  'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                              },
                                              value: 'singleOps',
                                            },
                                            {
                                              type: {
                                                blueId:
                                                  'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
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
                                                                'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                                            },
                                                            value: 'singleOps',
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
                                          perms: {
                                            $call: {
                                              args: {
                                                val: {
                                                  $get: {
                                                    key: {
                                                      $var: {
                                                        type: {
                                                          blueId:
                                                            'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                                        },
                                                        value: 'anchor',
                                                      },
                                                    },
                                                    object: {
                                                      $var: {
                                                        type: {
                                                          blueId:
                                                            'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
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
                                                    'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
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
                                                          'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
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
                                                        'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
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
                                                        'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                                    },
                                                    value: '/read',
                                                  },
                                                },
                                              },
                                              {
                                                type: {
                                                  blueId:
                                                    '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
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
                                                              'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
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
                                                                      'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                                                  },
                                                                  value:
                                                                    "links['",
                                                                },
                                                                {
                                                                  $var: {
                                                                    type: {
                                                                      blueId:
                                                                        'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                                                    },
                                                                    value:
                                                                      'anchor',
                                                                  },
                                                                },
                                                                {
                                                                  type: {
                                                                    blueId:
                                                                      'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
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
                                                      'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                                  },
                                                  value: 'singleOps',
                                                },
                                              },
                                            },
                                            function: {
                                              type: {
                                                blueId:
                                                  'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
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
                                                              'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
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
                                                                      'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                                                  },
                                                                  value:
                                                                    "links['",
                                                                },
                                                                {
                                                                  $var: {
                                                                    type: {
                                                                      blueId:
                                                                        'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                                                    },
                                                                    value:
                                                                      'anchor',
                                                                  },
                                                                },
                                                                {
                                                                  type: {
                                                                    blueId:
                                                                      'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
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
                                                              'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                                          },
                                                          value: '/allOps',
                                                        },
                                                      },
                                                    },
                                                    {
                                                      type: {
                                                        blueId:
                                                          '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
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
                                                      'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
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
                                                              'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
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
                                                                      'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                                                  },
                                                                  value:
                                                                    "links['",
                                                                },
                                                                {
                                                                  $var: {
                                                                    type: {
                                                                      blueId:
                                                                        'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                                                    },
                                                                    value:
                                                                      'anchor',
                                                                  },
                                                                },
                                                                {
                                                                  type: {
                                                                    blueId:
                                                                      'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
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
                                  'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                              },
                              value: 'links',
                            },
                          },
                        },
                        item: {
                          type: {
                            blueId:
                              'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
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
                                      'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                  },
                                  value: 'anchorCount',
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
                                              'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                          },
                                          value: 'issues',
                                        },
                                      },
                                      {
                                        items: [
                                          {
                                            type: {
                                              blueId:
                                                'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
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
                                        'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                    },
                                    value: 'issues',
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
                          items: [
                            {
                              $appendEvent: {
                                type: {
                                  blueId:
                                    'AuKN3wv7WZXJdonpPqP9TJCBqTfBssMj4f2G1ffyAs6E',
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
                                        'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                    },
                                    value: 'issues',
                                  },
                                },
                                type: {
                                  blueId:
                                    '4JMVYn4GU5hEc6f9PVuTUD7zr4mUgeTyCF54rkjsYUFE',
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
            },
            name: 'ValidateBasicShape',
            type: {
              blueId: 'MXnjrsiUgKPkinuRCVXEmnsBJhESt7HYZQPJH1eJvnJ',
            },
          },
        ],
      },
      type: {
        blueId: '26w2LGCpoFHqcEpb22oJRodHCTew398PGc1WMLRevxqz',
      },
    },
  },
  granterDocumentSessionId: {
    description:
      "Optional. If set, MyOS should evaluate authority as this document session\n(principalType='document', granteeId=documentId of this session),\ninstead of the granter accountId.\n",
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
  links: {
    description:
      'Map from anchor name to permissions that will be granted for documents linked to the base document via that anchor.',
    type: {
      blueId: '75CyJPe82hSjV9T2tsir5R3343vhqvG41w2EzFhCp5Y9',
    },
  },
  name: 'Linked Documents Permission Grant To Account',
  targetSessionId: {
    description:
      'Base document session id whose anchors define the scope of this grant.',
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
  type: {
    blueId: 'Gm9rGd9RJMvBcPCwN7ybywVAtMAAngeAB82DZ2cQ6bAE',
  },
} as const;
