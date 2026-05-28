export const SingleDocumentPermissionGrantToDocument = {
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
                      blueId: '2nRHhR7JeMKzs5wPKV6GMwbxbyvts5Boynzv6yNJxnQz',
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
                      $returnIf: {
                        cond: {
                          $eq: {
                            items: [
                              {
                                $document: {
                                  type: {
                                    blueId:
                                      'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                  },
                                  value: '/skipValidation',
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
                              value: 'granteeDocumentId',
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
                          issues: {
                            items: [],
                          },
                          perms: {
                            $document: {
                              type: {
                                blueId:
                                  'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
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
                                        'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
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
                                      'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
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
                                                    type: {
                                                      blueId:
                                                        'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
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
                                                    type: {
                                                      blueId:
                                                        'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
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
                                                    type: {
                                                      blueId:
                                                        'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
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
                                    '6EYcrXJUBiocfFddndoEx1RdAnXuGr3XTxwGoBDdv5x6',
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
                                    'HTd3TkLwKaALYryVRrwnTTnF3rUzF5yrqzKg2ChrcaE9',
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
    description:
      "Required original document id (blueId) that will act as the grantee principal ('document').",
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
  granterDocumentSessionId: {
    description:
      'Optional. If set, MyOS should evaluate authority using this document session as the principal (instead of granter accountId).',
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
  name: 'Single Document Permission Grant To Document',
  permissions: {
    description:
      'Rights to grant on the target session (READ required; allOps and singleOps are mutually exclusive; singleOps is optional but must be non-empty if provided).',
    type: {
      blueId: '5cZ3J1QiMJEJV4FV5kfSkeG2oJmweWCyJo3v2TSc3Xuw',
    },
  },
  skipValidation: {
    description:
      "If true, the validation will be skipped (MyOS Admin won't be triggered to create permission grant).",
    type: {
      blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
    },
  },
  targetSessionId: {
    description: 'Target document session id to grant access to',
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
  type: {
    blueId: 'Gm9rGd9RJMvBcPCwN7ybywVAtMAAngeAB82DZ2cQ6bAE',
  },
} as const;
