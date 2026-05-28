export const WorkerAgencyPermissionGrant = {
  allowedWorkerAgencyPermissions: {
    itemType: {
      blueId: 'EKPgicPVdFxx8X4ZBsnx7mT387M3VXDeMjSBnmAreUsS',
    },
    type: {
      blueId: '6aehfNAxHLC1PHHoDr3tYtFH3RWNbiWdFancJ1bypXEY',
    },
  },
  contracts: {
    granterChannel: {
      description:
        'Granter/owner’s timeline (direct grant-document revoke lives here).',
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
        value: 'granterChannel',
      },
      description:
        'Granter requests revocation on the grant document. Grantee-document self-revoke uses the existing revoke-request event with grantDocumentId emitted from the grantee document itself.',
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
    revokeImplGranter: {
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
                      blueId: 'BwXQmude1f6U9P3BG1HbaxC7ekQxGSm6TKAosiZE2rdY',
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
                      {
                        $truthy: {
                          $var: {
                            type: {
                              blueId:
                                'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
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
                              value: 'seenWorkerTypes',
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
                              value: 'granteeDocumentId',
                            },
                            {
                              type: {
                                blueId:
                                  'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                              },
                              value: 'permissionsList',
                            },
                          ],
                        },
                        vars: {
                          granteeDocumentId: {
                            $document: {
                              type: {
                                blueId:
                                  'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                              },
                              value: '/granteeDocumentId',
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
                          permissionsList: {
                            $choose: {
                              cond: {
                                $exists: {
                                  $document: {
                                    type: {
                                      blueId:
                                        'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
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
                                      'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
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
                                  '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
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
                                    value: 'granteeDocumentId',
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
                                              'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                          },
                                          value: 'permissionsList',
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
                                          'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                      },
                                      value: 'itemPath',
                                    },
                                    {
                                      type: {
                                        blueId:
                                          'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                      },
                                      value: 'itemObject',
                                    },
                                    {
                                      type: {
                                        blueId:
                                          'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                      },
                                      value: 'workerType',
                                    },
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
                                  itemObject: {
                                    $call: {
                                      args: {
                                        val: {
                                          $var: {
                                            type: {
                                              blueId:
                                                'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                            },
                                            value: 'item',
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
                                  itemPath: {
                                    $concat: {
                                      items: [
                                        {
                                          type: {
                                            blueId:
                                              'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                          },
                                          value:
                                            '/allowedWorkerAgencyPermissions[',
                                        },
                                        {
                                          $var: {
                                            type: {
                                              blueId:
                                                'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                            },
                                            value: 'idx',
                                          },
                                        },
                                        {
                                          type: {
                                            blueId:
                                              'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
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
                                                  'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
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
                                              '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
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
                                                      'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                                  },
                                                  value: '/permissions',
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
                                  workerType: {
                                    $var: {
                                      name: 'itemObject',
                                      path: {
                                        type: {
                                          blueId:
                                            'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
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
                                                          $var: {
                                                            type: {
                                                              blueId:
                                                                'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                                            },
                                                            value: 'itemPath',
                                                          },
                                                        },
                                                        {
                                                          type: {
                                                            blueId:
                                                              'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
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
                                                'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                            },
                                            value: 'workerType',
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
                                                    'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                                },
                                                value: 'workerType',
                                              },
                                            },
                                            object: {
                                              $var: {
                                                type: {
                                                  blueId:
                                                    'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
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
                                                            'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                                        },
                                                        value: 'workerType',
                                                      },
                                                    },
                                                    object: {
                                                      $var: {
                                                        type: {
                                                          blueId:
                                                            'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                                        },
                                                        value:
                                                          'seenWorkerTypes',
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
                                                                    "duplicate workerType '",
                                                                },
                                                                {
                                                                  $var: {
                                                                    type: {
                                                                      blueId:
                                                                        'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                                                    },
                                                                    value:
                                                                      'workerType',
                                                                  },
                                                                },
                                                                {
                                                                  type: {
                                                                    blueId:
                                                                      'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
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
                                                          $var: {
                                                            type: {
                                                              blueId:
                                                                'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                                            },
                                                            value: 'itemPath',
                                                          },
                                                        },
                                                        {
                                                          type: {
                                                            blueId:
                                                              'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
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
                                              'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
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
                                                          'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                                      },
                                                      value: 'perms',
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
                                                            $concat: {
                                                              items: [
                                                                {
                                                                  $var: {
                                                                    type: {
                                                                      blueId:
                                                                        'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                                                    },
                                                                    value:
                                                                      'itemPath',
                                                                  },
                                                                },
                                                                {
                                                                  type: {
                                                                    blueId:
                                                                      'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
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
                                                                  $var: {
                                                                    type: {
                                                                      blueId:
                                                                        'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                                                    },
                                                                    value:
                                                                      'itemPath',
                                                                  },
                                                                },
                                                                {
                                                                  type: {
                                                                    blueId:
                                                                      'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
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
                                                                  $var: {
                                                                    type: {
                                                                      blueId:
                                                                        'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                                                    },
                                                                    value:
                                                                      'itemPath',
                                                                  },
                                                                },
                                                                {
                                                                  type: {
                                                                    blueId:
                                                                      'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
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
                                                                  $var: {
                                                                    type: {
                                                                      blueId:
                                                                        'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                                                    },
                                                                    value:
                                                                      'itemPath',
                                                                  },
                                                                },
                                                                {
                                                                  type: {
                                                                    blueId:
                                                                      'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                                                  },
                                                                  value:
                                                                    '.permissions.allOps=true and',
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
                                                                    value:
                                                                      'itemPath',
                                                                  },
                                                                },
                                                                {
                                                                  type: {
                                                                    blueId:
                                                                      'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
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
                                                          $var: {
                                                            type: {
                                                              blueId:
                                                                'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                                            },
                                                            value: 'itemPath',
                                                          },
                                                        },
                                                        {
                                                          type: {
                                                            blueId:
                                                              'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
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
                                      'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                  },
                                  value: 'permissionsList',
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
                        index: {
                          type: {
                            blueId:
                              'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                          },
                          value: 'idx',
                        },
                        item: {
                          type: {
                            blueId:
                              'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
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
                                    '8EcfEBSmZUTp73AjLNaCQQRrdQzzdxebG1QUpGe95im2',
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
                                    '5eDTUokCWbu8Sp1PRZewh7wkdwwdrvpQZcweiMjaHd6m',
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
  granteeDocumentId: {
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
  name: 'Worker Agency Permission Grant',
  type: {
    blueId: 'Gm9rGd9RJMvBcPCwN7ybywVAtMAAngeAB82DZ2cQ6bAE',
  },
} as const;
