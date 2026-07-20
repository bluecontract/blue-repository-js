export const PayNote: Record<string, unknown> = {
  amount: {
    completed: {
      description: 'Amount already completed / finalized.\n',
      type: {
        blueId: 'E2LM6qgzWG9ttagq2xTmiZkgYEAgkYedFCmU9v7NnVEq',
      },
    },
    description: 'Amount values associated with this PayNote.',
    expectedTotal: {
      description: 'The initially expected total amount in minor units.\n',
      type: {
        blueId: 'E2LM6qgzWG9ttagq2xTmiZkgYEAgkYedFCmU9v7NnVEq',
      },
    },
    finalResolved: {
      description: 'The final resolved amount for completion, if known.\n',
      type: {
        blueId: 'E2LM6qgzWG9ttagq2xTmiZkgYEAgkYedFCmU9v7NnVEq',
      },
    },
    reversed: {
      description: 'Amount already reversed after completion.\n',
      type: {
        blueId: 'E2LM6qgzWG9ttagq2xTmiZkgYEAgkYedFCmU9v7NnVEq',
      },
    },
    secured: {
      description: 'Amount currently secured / under guarantor control.\n',
      type: {
        blueId: 'E2LM6qgzWG9ttagq2xTmiZkgYEAgkYedFCmU9v7NnVEq',
      },
    },
  },
  contracts: {
    acceptPayNote: {
      channel: {
        type: {
          blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
        },
        value: 'guarantorChannel',
      },
      request: {
        type: {
          blueId: 'EWJLkS8q4TE5NWDh4qpQZMcbgGWdiePNkbZMCtGYVRAN',
        },
      },
      type: {
        blueId: 'Be766kx7kqFYGf96VtAc8Weofb3xkCRUTxSDVd317S2G',
      },
    },
    acceptPayNoteImpl: {
      operation: {
        type: {
          blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
        },
        value: 'acceptPayNote',
      },
      steps: {
        items: [
          {
            changeset: {
              items: [
                {
                  op: {
                    type: {
                      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                    },
                    value: 'replace',
                  },
                  path: {
                    type: {
                      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                    },
                    value: '/status',
                  },
                  val: {
                    type: {
                      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                    },
                    value: 'Accepted',
                  },
                },
              ],
            },
            name: 'Mark PayNote Accepted',
            type: {
              blueId: '6bU2jWm3F6GaCXSLpdxiNjRbf9XcQDzH1NUsroHz4x8U',
            },
          },
          {
            event: {
              type: {
                blueId: 'EWJLkS8q4TE5NWDh4qpQZMcbgGWdiePNkbZMCtGYVRAN',
              },
            },
            name: 'Emit PayNote Accepted',
            type: {
              blueId: 'Dg3nc6K9P7AWn4K1dpGCAKG3YXJjsUWRhG3YxfqyLTeK',
            },
          },
        ],
      },
      type: {
        blueId: 'B5eQ8GaYwECKEtduoWEv8Ri1FvWznuvb3ZXGKqeYUuy',
      },
    },
    cancelBeforeCompletion: {
      channel: {
        type: {
          blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
        },
        value: 'guarantorChannel',
      },
      request: {
        type: {
          blueId: 'BVVMg23GQoEyUwPxQj1uif1cxc1PgMd6reAdfkt1k77',
        },
      },
      type: {
        blueId: 'Be766kx7kqFYGf96VtAc8Weofb3xkCRUTxSDVd317S2G',
      },
    },
    cancelBeforeCompletionImpl: {
      operation: {
        type: {
          blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
        },
        value: 'cancelBeforeCompletion',
      },
      steps: {
        items: [
          {
            changeset: {
              items: [
                {
                  op: {
                    type: {
                      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                    },
                    value: 'replace',
                  },
                  path: {
                    type: {
                      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                    },
                    value: '/status',
                  },
                  val: {
                    type: {
                      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                    },
                    value: 'Cancelled',
                  },
                },
              ],
            },
            name: 'Mark Cancelled Before Completion',
            type: {
              blueId: '6bU2jWm3F6GaCXSLpdxiNjRbf9XcQDzH1NUsroHz4x8U',
            },
          },
          {
            event: {
              type: {
                blueId: 'BVVMg23GQoEyUwPxQj1uif1cxc1PgMd6reAdfkt1k77',
              },
            },
            name: 'Emit Payment Cancelled Before Completion',
            type: {
              blueId: 'Dg3nc6K9P7AWn4K1dpGCAKG3YXJjsUWRhG3YxfqyLTeK',
            },
          },
        ],
      },
      type: {
        blueId: 'B5eQ8GaYwECKEtduoWEv8Ri1FvWznuvb3ZXGKqeYUuy',
      },
    },
    completePayment: {
      channel: {
        type: {
          blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
        },
        value: 'guarantorChannel',
      },
      request: {
        type: {
          blueId: 'HRPugeYyuAMpDR4rKoDeDbJpewtFGgAPpFtwyw1T6Row',
        },
      },
      type: {
        blueId: 'Be766kx7kqFYGf96VtAc8Weofb3xkCRUTxSDVd317S2G',
      },
    },
    completePaymentImpl: {
      operation: {
        type: {
          blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
        },
        value: 'completePayment',
      },
      steps: {
        items: [
          {
            do: {
              items: [
                {
                  $appendChange: {
                    op: {
                      type: {
                        blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                      },
                      value: 'replace',
                    },
                    path: {
                      type: {
                        blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                      },
                      value: '/status',
                    },
                    val: {
                      type: {
                        blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                      },
                      value: 'Completed',
                    },
                  },
                },
                {
                  $appendChange: {
                    op: {
                      type: {
                        blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                      },
                      value: 'replace',
                    },
                    path: {
                      type: {
                        blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                      },
                      value: '/amount/completed',
                    },
                    val: {
                      $event: {
                        type: {
                          blueId:
                            'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                        },
                        value: '/message/request/amountCompleted',
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
                  },
                },
              ],
            },
            name: 'Update Completed Amount',
            returnResult: {
              type: {
                blueId: 'AwvXD961fmnmqcSQhjMA7r15HpVh39cefb6ZTyUz2Fm2',
              },
              value: true,
            },
            type: {
              blueId: '4qGDz5yJxXc9dr8bsBE1B2Tg4AWuR4qHPU9H6T29m3KZ',
            },
          },
          {
            do: {
              items: [
                {
                  $appendEvent: {
                    amountCompleted: {
                      $event: {
                        type: {
                          blueId:
                            'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                        },
                        value: '/message/request/amountCompleted',
                      },
                    },
                    type: {
                      blueId: 'HRPugeYyuAMpDR4rKoDeDbJpewtFGgAPpFtwyw1T6Row',
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
            emitEvents: {
              type: {
                blueId: 'AwvXD961fmnmqcSQhjMA7r15HpVh39cefb6ZTyUz2Fm2',
              },
              value: true,
            },
            name: 'Emit Payment Completed',
            returnResult: {
              type: {
                blueId: 'AwvXD961fmnmqcSQhjMA7r15HpVh39cefb6ZTyUz2Fm2',
              },
              value: true,
            },
            type: {
              blueId: '4qGDz5yJxXc9dr8bsBE1B2Tg4AWuR4qHPU9H6T29m3KZ',
            },
          },
        ],
      },
      type: {
        blueId: 'B5eQ8GaYwECKEtduoWEv8Ri1FvWznuvb3ZXGKqeYUuy',
      },
    },
    confirmPayeeAssignment: {
      channel: {
        type: {
          blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
        },
        value: 'guarantorChannel',
      },
      request: {
        type: {
          blueId: '79ZV4j1dHpE5nt9nGN141Pte8hDbKgsxSavm9RV9wu1U',
        },
      },
      type: {
        blueId: 'Be766kx7kqFYGf96VtAc8Weofb3xkCRUTxSDVd317S2G',
      },
    },
    confirmPayeeAssignmentImpl: {
      operation: {
        type: {
          blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
        },
        value: 'confirmPayeeAssignment',
      },
      steps: {
        items: [
          {
            entry: {
              type: {
                blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
              },
              value: 'merge',
            },
            functions: {
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
              merge: {
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
                              value: 'request',
                            },
                            {
                              type: {
                                blueId:
                                  'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                              },
                              value: 'nextTransactionDetails',
                            },
                          ],
                        },
                        vars: {
                          nextTransactionDetails: {
                            $merge: {
                              items: [
                                {
                                  $call: {
                                    args: {
                                      val: {
                                        $choose: {
                                          cond: {
                                            $exists: {
                                              $document: {
                                                type: {
                                                  blueId:
                                                    'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                                },
                                                value: '/transactionDetails',
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
                                            $document: {
                                              type: {
                                                blueId:
                                                  'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                              },
                                              value: '/transactionDetails',
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
                                {
                                  payeeRef: {
                                    $event: {
                                      type: {
                                        blueId:
                                          'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                      },
                                      value: '/message/request/payeeRef',
                                    },
                                  },
                                },
                              ],
                            },
                          },
                          request: {
                            $event: {
                              type: {
                                blueId:
                                  'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                              },
                              value: '/message/request',
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
                                  value: 'request',
                                },
                              },
                            },
                          },
                        },
                        then: {
                          items: [
                            {
                              $fail: {
                                type: {
                                  blueId:
                                    'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                },
                                value:
                                  'Payee assignment payload must be an object.',
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
                                value: 'text',
                              },
                              val: {
                                $var: {
                                  name: 'request',
                                  path: {
                                    type: {
                                      blueId:
                                        'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                    },
                                    value: '/payeeRef',
                                  },
                                },
                              },
                            },
                          },
                        },
                        then: {
                          items: [
                            {
                              $fail: {
                                type: {
                                  blueId:
                                    'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                },
                                value:
                                  'Payee assignment payload must include payeeRef.',
                              },
                            },
                          ],
                        },
                      },
                    },
                    {
                      $appendEvent: {
                        $var: {
                          type: {
                            blueId:
                              'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                          },
                          value: 'request',
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
                          value: 'replace',
                        },
                        path: {
                          type: {
                            blueId:
                              'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                          },
                          value: '/transactionDetails',
                        },
                        val: {
                          $var: {
                            type: {
                              blueId:
                                'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                            },
                            value: 'nextTransactionDetails',
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
            },
            name: 'MergePayeeAssignment',
            type: {
              blueId: '4qGDz5yJxXc9dr8bsBE1B2Tg4AWuR4qHPU9H6T29m3KZ',
            },
          },
        ],
      },
      type: {
        blueId: 'B5eQ8GaYwECKEtduoWEv8Ri1FvWznuvb3ZXGKqeYUuy',
      },
    },
    confirmTransactionDetailsUpdated: {
      channel: {
        type: {
          blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
        },
        value: 'guarantorChannel',
      },
      request: {
        type: {
          blueId: '5B6omzwwUauNNbarndynuCMyMCqZVu6ikTqnLocXZyWA',
        },
      },
      type: {
        blueId: 'Be766kx7kqFYGf96VtAc8Weofb3xkCRUTxSDVd317S2G',
      },
    },
    confirmTransactionDetailsUpdatedImpl: {
      operation: {
        type: {
          blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
        },
        value: 'confirmTransactionDetailsUpdated',
      },
      steps: {
        items: [
          {
            entry: {
              type: {
                blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
              },
              value: 'merge',
            },
            functions: {
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
              merge: {
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
                              value: 'request',
                            },
                            {
                              type: {
                                blueId:
                                  'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                              },
                              value: 'patch',
                            },
                            {
                              type: {
                                blueId:
                                  'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                              },
                              value: 'nextTransactionDetails',
                            },
                          ],
                        },
                        vars: {
                          nextTransactionDetails: {
                            $merge: {
                              items: [
                                {
                                  $call: {
                                    args: {
                                      val: {
                                        $choose: {
                                          cond: {
                                            $exists: {
                                              $document: {
                                                type: {
                                                  blueId:
                                                    'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                                },
                                                value: '/transactionDetails',
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
                                            $document: {
                                              type: {
                                                blueId:
                                                  'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                              },
                                              value: '/transactionDetails',
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
                                {
                                  $call: {
                                    args: {
                                      val: {
                                        $event: {
                                          type: {
                                            blueId:
                                              'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                          },
                                          value:
                                            '/message/request/transactionDetails',
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
                              ],
                            },
                          },
                          patch: {
                            $event: {
                              type: {
                                blueId:
                                  'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                              },
                              value: '/message/request/transactionDetails',
                            },
                          },
                          request: {
                            $event: {
                              type: {
                                blueId:
                                  'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                              },
                              value: '/message/request',
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
                                  value: 'request',
                                },
                              },
                            },
                          },
                        },
                        then: {
                          items: [
                            {
                              $fail: {
                                type: {
                                  blueId:
                                    'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                },
                                value:
                                  'Transaction details update payload must be an object.',
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
                                  value: 'patch',
                                },
                              },
                            },
                          },
                        },
                        then: {
                          items: [
                            {
                              $fail: {
                                type: {
                                  blueId:
                                    'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                },
                                value:
                                  'Transaction details update payload must include transactionDetails object.',
                              },
                            },
                          ],
                        },
                      },
                    },
                    {
                      $appendEvent: {
                        $var: {
                          type: {
                            blueId:
                              'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                          },
                          value: 'request',
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
                          value: 'replace',
                        },
                        path: {
                          type: {
                            blueId:
                              'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                          },
                          value: '/transactionDetails',
                        },
                        val: {
                          $var: {
                            type: {
                              blueId:
                                'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                            },
                            value: 'nextTransactionDetails',
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
            },
            name: 'MergeTransactionDetailsUpdate',
            type: {
              blueId: '4qGDz5yJxXc9dr8bsBE1B2Tg4AWuR4qHPU9H6T29m3KZ',
            },
          },
        ],
      },
      type: {
        blueId: 'B5eQ8GaYwECKEtduoWEv8Ri1FvWznuvb3ZXGKqeYUuy',
      },
    },
    declineCancelBeforeCompletion: {
      channel: {
        type: {
          blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
        },
        value: 'guarantorChannel',
      },
      request: {
        type: {
          blueId: 'AygrNas7s1Gvg5zb7X1dVrufVNrGvUxPU7qgQHJ9QLzQ',
        },
      },
      type: {
        blueId: 'Be766kx7kqFYGf96VtAc8Weofb3xkCRUTxSDVd317S2G',
      },
    },
    declineCancelBeforeCompletionImpl: {
      operation: {
        type: {
          blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
        },
        value: 'declineCancelBeforeCompletion',
      },
      steps: {
        items: [
          {
            changeset: {
              items: [
                {
                  op: {
                    type: {
                      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                    },
                    value: 'replace',
                  },
                  path: {
                    type: {
                      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                    },
                    value: '/status',
                  },
                  val: {
                    type: {
                      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                    },
                    value: 'Rejected',
                  },
                },
              ],
            },
            name: 'Mark Payment Cancellation Declined',
            type: {
              blueId: '6bU2jWm3F6GaCXSLpdxiNjRbf9XcQDzH1NUsroHz4x8U',
            },
          },
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
                        value: '/message/request/reason',
                      },
                    },
                    type: {
                      blueId: 'AygrNas7s1Gvg5zb7X1dVrufVNrGvUxPU7qgQHJ9QLzQ',
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
            emitEvents: {
              type: {
                blueId: 'AwvXD961fmnmqcSQhjMA7r15HpVh39cefb6ZTyUz2Fm2',
              },
              value: true,
            },
            name: 'Emit Payment Cancellation Declined',
            returnResult: {
              type: {
                blueId: 'AwvXD961fmnmqcSQhjMA7r15HpVh39cefb6ZTyUz2Fm2',
              },
              value: true,
            },
            type: {
              blueId: '4qGDz5yJxXc9dr8bsBE1B2Tg4AWuR4qHPU9H6T29m3KZ',
            },
          },
        ],
      },
      type: {
        blueId: 'B5eQ8GaYwECKEtduoWEv8Ri1FvWznuvb3ZXGKqeYUuy',
      },
    },
    declineCompletePayment: {
      channel: {
        type: {
          blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
        },
        value: 'guarantorChannel',
      },
      request: {
        type: {
          blueId: 'HV1cMM1SfwUna62hDFcwaHwMgDN3QVVSVWWMqmr3Y4jx',
        },
      },
      type: {
        blueId: 'Be766kx7kqFYGf96VtAc8Weofb3xkCRUTxSDVd317S2G',
      },
    },
    declineCompletePaymentImpl: {
      operation: {
        type: {
          blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
        },
        value: 'declineCompletePayment',
      },
      steps: {
        items: [
          {
            changeset: {
              items: [
                {
                  op: {
                    type: {
                      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                    },
                    value: 'replace',
                  },
                  path: {
                    type: {
                      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                    },
                    value: '/status',
                  },
                  val: {
                    type: {
                      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                    },
                    value: 'Rejected',
                  },
                },
              ],
            },
            name: 'Mark Payment Completion Declined',
            type: {
              blueId: '6bU2jWm3F6GaCXSLpdxiNjRbf9XcQDzH1NUsroHz4x8U',
            },
          },
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
                        value: '/message/request/reason',
                      },
                    },
                    type: {
                      blueId: 'HV1cMM1SfwUna62hDFcwaHwMgDN3QVVSVWWMqmr3Y4jx',
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
            emitEvents: {
              type: {
                blueId: 'AwvXD961fmnmqcSQhjMA7r15HpVh39cefb6ZTyUz2Fm2',
              },
              value: true,
            },
            name: 'Emit Payment Completion Declined',
            returnResult: {
              type: {
                blueId: 'AwvXD961fmnmqcSQhjMA7r15HpVh39cefb6ZTyUz2Fm2',
              },
              value: true,
            },
            type: {
              blueId: '4qGDz5yJxXc9dr8bsBE1B2Tg4AWuR4qHPU9H6T29m3KZ',
            },
          },
        ],
      },
      type: {
        blueId: 'B5eQ8GaYwECKEtduoWEv8Ri1FvWznuvb3ZXGKqeYUuy',
      },
    },
    declineReverseAfterCompletion: {
      channel: {
        type: {
          blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
        },
        value: 'guarantorChannel',
      },
      request: {
        type: {
          blueId: '3zqCf4fDYcC5ETzvGZA8Jasf1LXdujZTZyL88zL3EDSF',
        },
      },
      type: {
        blueId: 'Be766kx7kqFYGf96VtAc8Weofb3xkCRUTxSDVd317S2G',
      },
    },
    declineReverseAfterCompletionImpl: {
      operation: {
        type: {
          blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
        },
        value: 'declineReverseAfterCompletion',
      },
      steps: {
        items: [
          {
            changeset: {
              items: [
                {
                  op: {
                    type: {
                      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                    },
                    value: 'replace',
                  },
                  path: {
                    type: {
                      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                    },
                    value: '/status',
                  },
                  val: {
                    type: {
                      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                    },
                    value: 'Rejected',
                  },
                },
              ],
            },
            name: 'Mark Payment Reversal Declined',
            type: {
              blueId: '6bU2jWm3F6GaCXSLpdxiNjRbf9XcQDzH1NUsroHz4x8U',
            },
          },
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
                        value: '/message/request/reason',
                      },
                    },
                    type: {
                      blueId: '3zqCf4fDYcC5ETzvGZA8Jasf1LXdujZTZyL88zL3EDSF',
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
            emitEvents: {
              type: {
                blueId: 'AwvXD961fmnmqcSQhjMA7r15HpVh39cefb6ZTyUz2Fm2',
              },
              value: true,
            },
            name: 'Emit Payment Reversal Declined',
            returnResult: {
              type: {
                blueId: 'AwvXD961fmnmqcSQhjMA7r15HpVh39cefb6ZTyUz2Fm2',
              },
              value: true,
            },
            type: {
              blueId: '4qGDz5yJxXc9dr8bsBE1B2Tg4AWuR4qHPU9H6T29m3KZ',
            },
          },
        ],
      },
      type: {
        blueId: 'B5eQ8GaYwECKEtduoWEv8Ri1FvWznuvb3ZXGKqeYUuy',
      },
    },
    declineSecureFunds: {
      channel: {
        type: {
          blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
        },
        value: 'guarantorChannel',
      },
      request: {
        type: {
          blueId: '8x9kLwfX9bJdvChLgQjwhPBCAMDZrmRJPMdaWsKKkbjN',
        },
      },
      type: {
        blueId: 'Be766kx7kqFYGf96VtAc8Weofb3xkCRUTxSDVd317S2G',
      },
    },
    declineSecureFundsImpl: {
      operation: {
        type: {
          blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
        },
        value: 'declineSecureFunds',
      },
      steps: {
        items: [
          {
            changeset: {
              items: [
                {
                  op: {
                    type: {
                      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                    },
                    value: 'replace',
                  },
                  path: {
                    type: {
                      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                    },
                    value: '/status',
                  },
                  val: {
                    type: {
                      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                    },
                    value: 'Rejected',
                  },
                },
              ],
            },
            name: 'Mark Funds Securing Declined',
            type: {
              blueId: '6bU2jWm3F6GaCXSLpdxiNjRbf9XcQDzH1NUsroHz4x8U',
            },
          },
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
                        value: '/message/request/reason',
                      },
                    },
                    type: {
                      blueId: '8x9kLwfX9bJdvChLgQjwhPBCAMDZrmRJPMdaWsKKkbjN',
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
            emitEvents: {
              type: {
                blueId: 'AwvXD961fmnmqcSQhjMA7r15HpVh39cefb6ZTyUz2Fm2',
              },
              value: true,
            },
            name: 'Emit Funds Securing Declined',
            returnResult: {
              type: {
                blueId: 'AwvXD961fmnmqcSQhjMA7r15HpVh39cefb6ZTyUz2Fm2',
              },
              value: true,
            },
            type: {
              blueId: '4qGDz5yJxXc9dr8bsBE1B2Tg4AWuR4qHPU9H6T29m3KZ',
            },
          },
        ],
      },
      type: {
        blueId: 'B5eQ8GaYwECKEtduoWEv8Ri1FvWznuvb3ZXGKqeYUuy',
      },
    },
    failCancelBeforeCompletion: {
      channel: {
        type: {
          blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
        },
        value: 'guarantorChannel',
      },
      request: {
        type: {
          blueId: 'HpeKXtecYHLk8Mm787Pof8hYgQ92SjRQzTDcUdFwrhZV',
        },
      },
      type: {
        blueId: 'Be766kx7kqFYGf96VtAc8Weofb3xkCRUTxSDVd317S2G',
      },
    },
    failCancelBeforeCompletionImpl: {
      operation: {
        type: {
          blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
        },
        value: 'failCancelBeforeCompletion',
      },
      steps: {
        items: [
          {
            changeset: {
              items: [
                {
                  op: {
                    type: {
                      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                    },
                    value: 'replace',
                  },
                  path: {
                    type: {
                      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                    },
                    value: '/status',
                  },
                  val: {
                    type: {
                      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                    },
                    value: 'Failed',
                  },
                },
              ],
            },
            name: 'Mark Payment Cancellation Failed',
            type: {
              blueId: '6bU2jWm3F6GaCXSLpdxiNjRbf9XcQDzH1NUsroHz4x8U',
            },
          },
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
                        value: '/message/request/reason',
                      },
                    },
                    type: {
                      blueId: 'HpeKXtecYHLk8Mm787Pof8hYgQ92SjRQzTDcUdFwrhZV',
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
            emitEvents: {
              type: {
                blueId: 'AwvXD961fmnmqcSQhjMA7r15HpVh39cefb6ZTyUz2Fm2',
              },
              value: true,
            },
            name: 'Emit Payment Cancellation Failed',
            returnResult: {
              type: {
                blueId: 'AwvXD961fmnmqcSQhjMA7r15HpVh39cefb6ZTyUz2Fm2',
              },
              value: true,
            },
            type: {
              blueId: '4qGDz5yJxXc9dr8bsBE1B2Tg4AWuR4qHPU9H6T29m3KZ',
            },
          },
        ],
      },
      type: {
        blueId: 'B5eQ8GaYwECKEtduoWEv8Ri1FvWznuvb3ZXGKqeYUuy',
      },
    },
    failCompletePayment: {
      channel: {
        type: {
          blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
        },
        value: 'guarantorChannel',
      },
      request: {
        type: {
          blueId: '7nzmwZ5GYggD81cgK9aTduPVhznB8ay1k128CZA4nvzt',
        },
      },
      type: {
        blueId: 'Be766kx7kqFYGf96VtAc8Weofb3xkCRUTxSDVd317S2G',
      },
    },
    failCompletePaymentImpl: {
      operation: {
        type: {
          blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
        },
        value: 'failCompletePayment',
      },
      steps: {
        items: [
          {
            changeset: {
              items: [
                {
                  op: {
                    type: {
                      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                    },
                    value: 'replace',
                  },
                  path: {
                    type: {
                      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                    },
                    value: '/status',
                  },
                  val: {
                    type: {
                      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                    },
                    value: 'Failed',
                  },
                },
              ],
            },
            name: 'Mark Payment Completion Failed',
            type: {
              blueId: '6bU2jWm3F6GaCXSLpdxiNjRbf9XcQDzH1NUsroHz4x8U',
            },
          },
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
                        value: '/message/request/reason',
                      },
                    },
                    type: {
                      blueId: '7nzmwZ5GYggD81cgK9aTduPVhznB8ay1k128CZA4nvzt',
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
            emitEvents: {
              type: {
                blueId: 'AwvXD961fmnmqcSQhjMA7r15HpVh39cefb6ZTyUz2Fm2',
              },
              value: true,
            },
            name: 'Emit Payment Completion Failed',
            returnResult: {
              type: {
                blueId: 'AwvXD961fmnmqcSQhjMA7r15HpVh39cefb6ZTyUz2Fm2',
              },
              value: true,
            },
            type: {
              blueId: '4qGDz5yJxXc9dr8bsBE1B2Tg4AWuR4qHPU9H6T29m3KZ',
            },
          },
        ],
      },
      type: {
        blueId: 'B5eQ8GaYwECKEtduoWEv8Ri1FvWznuvb3ZXGKqeYUuy',
      },
    },
    failPaymentCompletionLockChange: {
      channel: {
        type: {
          blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
        },
        value: 'guarantorChannel',
      },
      request: {
        type: {
          blueId: '7A765v3durX3otiybhEomfPAqtztUSt9Ywqef2dsyvLx',
        },
      },
      type: {
        blueId: 'Be766kx7kqFYGf96VtAc8Weofb3xkCRUTxSDVd317S2G',
      },
    },
    failPaymentCompletionLockChangeImpl: {
      operation: {
        type: {
          blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
        },
        value: 'failPaymentCompletionLockChange',
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
                        value: '/message/request/reason',
                      },
                    },
                    type: {
                      blueId: '7A765v3durX3otiybhEomfPAqtztUSt9Ywqef2dsyvLx',
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
            emitEvents: {
              type: {
                blueId: 'AwvXD961fmnmqcSQhjMA7r15HpVh39cefb6ZTyUz2Fm2',
              },
              value: true,
            },
            name: 'Emit Payment Completion Lock Change Failed',
            returnResult: {
              type: {
                blueId: 'AwvXD961fmnmqcSQhjMA7r15HpVh39cefb6ZTyUz2Fm2',
              },
              value: true,
            },
            type: {
              blueId: '4qGDz5yJxXc9dr8bsBE1B2Tg4AWuR4qHPU9H6T29m3KZ',
            },
          },
        ],
      },
      type: {
        blueId: 'B5eQ8GaYwECKEtduoWEv8Ri1FvWznuvb3ZXGKqeYUuy',
      },
    },
    failPaymentReversalLockChange: {
      channel: {
        type: {
          blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
        },
        value: 'guarantorChannel',
      },
      request: {
        type: {
          blueId: '9wsCVU7Pw5BzQhN8RYZXJhiwJAEfBzCkLEWURkJymKsy',
        },
      },
      type: {
        blueId: 'Be766kx7kqFYGf96VtAc8Weofb3xkCRUTxSDVd317S2G',
      },
    },
    failPaymentReversalLockChangeImpl: {
      operation: {
        type: {
          blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
        },
        value: 'failPaymentReversalLockChange',
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
                        value: '/message/request/reason',
                      },
                    },
                    type: {
                      blueId: '9wsCVU7Pw5BzQhN8RYZXJhiwJAEfBzCkLEWURkJymKsy',
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
            emitEvents: {
              type: {
                blueId: 'AwvXD961fmnmqcSQhjMA7r15HpVh39cefb6ZTyUz2Fm2',
              },
              value: true,
            },
            name: 'Emit Payment Reversal Lock Change Failed',
            returnResult: {
              type: {
                blueId: 'AwvXD961fmnmqcSQhjMA7r15HpVh39cefb6ZTyUz2Fm2',
              },
              value: true,
            },
            type: {
              blueId: '4qGDz5yJxXc9dr8bsBE1B2Tg4AWuR4qHPU9H6T29m3KZ',
            },
          },
        ],
      },
      type: {
        blueId: 'B5eQ8GaYwECKEtduoWEv8Ri1FvWznuvb3ZXGKqeYUuy',
      },
    },
    failReverseAfterCompletion: {
      channel: {
        type: {
          blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
        },
        value: 'guarantorChannel',
      },
      request: {
        type: {
          blueId: 'HgRjnfFyp9156xXVSeXhzKWuZFQE4jVuL1WYD3Gbm98T',
        },
      },
      type: {
        blueId: 'Be766kx7kqFYGf96VtAc8Weofb3xkCRUTxSDVd317S2G',
      },
    },
    failReverseAfterCompletionImpl: {
      operation: {
        type: {
          blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
        },
        value: 'failReverseAfterCompletion',
      },
      steps: {
        items: [
          {
            changeset: {
              items: [
                {
                  op: {
                    type: {
                      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                    },
                    value: 'replace',
                  },
                  path: {
                    type: {
                      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                    },
                    value: '/status',
                  },
                  val: {
                    type: {
                      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                    },
                    value: 'Failed',
                  },
                },
              ],
            },
            name: 'Mark Payment Reversal Failed',
            type: {
              blueId: '6bU2jWm3F6GaCXSLpdxiNjRbf9XcQDzH1NUsroHz4x8U',
            },
          },
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
                        value: '/message/request/reason',
                      },
                    },
                    type: {
                      blueId: 'HgRjnfFyp9156xXVSeXhzKWuZFQE4jVuL1WYD3Gbm98T',
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
            emitEvents: {
              type: {
                blueId: 'AwvXD961fmnmqcSQhjMA7r15HpVh39cefb6ZTyUz2Fm2',
              },
              value: true,
            },
            name: 'Emit Payment Reversal Failed',
            returnResult: {
              type: {
                blueId: 'AwvXD961fmnmqcSQhjMA7r15HpVh39cefb6ZTyUz2Fm2',
              },
              value: true,
            },
            type: {
              blueId: '4qGDz5yJxXc9dr8bsBE1B2Tg4AWuR4qHPU9H6T29m3KZ',
            },
          },
        ],
      },
      type: {
        blueId: 'B5eQ8GaYwECKEtduoWEv8Ri1FvWznuvb3ZXGKqeYUuy',
      },
    },
    failSecureFunds: {
      channel: {
        type: {
          blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
        },
        value: 'guarantorChannel',
      },
      request: {
        type: {
          blueId: '5X9UpCYn4uR6vidaBwpsng98RsVMXjnweXeVgGPXkzQi',
        },
      },
      type: {
        blueId: 'Be766kx7kqFYGf96VtAc8Weofb3xkCRUTxSDVd317S2G',
      },
    },
    failSecureFundsImpl: {
      operation: {
        type: {
          blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
        },
        value: 'failSecureFunds',
      },
      steps: {
        items: [
          {
            changeset: {
              items: [
                {
                  op: {
                    type: {
                      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                    },
                    value: 'replace',
                  },
                  path: {
                    type: {
                      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                    },
                    value: '/status',
                  },
                  val: {
                    type: {
                      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                    },
                    value: 'Failed',
                  },
                },
              ],
            },
            name: 'Mark Funds Securing Failed',
            type: {
              blueId: '6bU2jWm3F6GaCXSLpdxiNjRbf9XcQDzH1NUsroHz4x8U',
            },
          },
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
                        value: '/message/request/reason',
                      },
                    },
                    type: {
                      blueId: '5X9UpCYn4uR6vidaBwpsng98RsVMXjnweXeVgGPXkzQi',
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
            emitEvents: {
              type: {
                blueId: 'AwvXD961fmnmqcSQhjMA7r15HpVh39cefb6ZTyUz2Fm2',
              },
              value: true,
            },
            name: 'Emit Funds Securing Failed',
            returnResult: {
              type: {
                blueId: 'AwvXD961fmnmqcSQhjMA7r15HpVh39cefb6ZTyUz2Fm2',
              },
              value: true,
            },
            type: {
              blueId: '4qGDz5yJxXc9dr8bsBE1B2Tg4AWuR4qHPU9H6T29m3KZ',
            },
          },
        ],
      },
      type: {
        blueId: 'B5eQ8GaYwECKEtduoWEv8Ri1FvWznuvb3ZXGKqeYUuy',
      },
    },
    failTransactionDetailsUpdate: {
      channel: {
        type: {
          blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
        },
        value: 'guarantorChannel',
      },
      request: {
        type: {
          blueId: 'DDuuaogLyNgVHbSoJxxQcX5iZqWy6U9DAxjgtdzWRnWB',
        },
      },
      type: {
        blueId: 'Be766kx7kqFYGf96VtAc8Weofb3xkCRUTxSDVd317S2G',
      },
    },
    failTransactionDetailsUpdateImpl: {
      operation: {
        type: {
          blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
        },
        value: 'failTransactionDetailsUpdate',
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
                        value: '/message/request/reason',
                      },
                    },
                    type: {
                      blueId: 'DDuuaogLyNgVHbSoJxxQcX5iZqWy6U9DAxjgtdzWRnWB',
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
            emitEvents: {
              type: {
                blueId: 'AwvXD961fmnmqcSQhjMA7r15HpVh39cefb6ZTyUz2Fm2',
              },
              value: true,
            },
            name: 'Emit Transaction Details Update Failed',
            returnResult: {
              type: {
                blueId: 'AwvXD961fmnmqcSQhjMA7r15HpVh39cefb6ZTyUz2Fm2',
              },
              value: true,
            },
            type: {
              blueId: '4qGDz5yJxXc9dr8bsBE1B2Tg4AWuR4qHPU9H6T29m3KZ',
            },
          },
        ],
      },
      type: {
        blueId: 'B5eQ8GaYwECKEtduoWEv8Ri1FvWznuvb3ZXGKqeYUuy',
      },
    },
    failTransactionDetailsUpdateLockChange: {
      channel: {
        type: {
          blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
        },
        value: 'guarantorChannel',
      },
      request: {
        type: {
          blueId: '369jQqbKxUNXz4yZHMgeomhtQUbAByuCCXCcXKaUSun9',
        },
      },
      type: {
        blueId: 'Be766kx7kqFYGf96VtAc8Weofb3xkCRUTxSDVd317S2G',
      },
    },
    failTransactionDetailsUpdateLockChangeImpl: {
      operation: {
        type: {
          blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
        },
        value: 'failTransactionDetailsUpdateLockChange',
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
                        value: '/message/request/reason',
                      },
                    },
                    type: {
                      blueId: '369jQqbKxUNXz4yZHMgeomhtQUbAByuCCXCcXKaUSun9',
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
            emitEvents: {
              type: {
                blueId: 'AwvXD961fmnmqcSQhjMA7r15HpVh39cefb6ZTyUz2Fm2',
              },
              value: true,
            },
            name: 'Emit Transaction Details Update Lock Change Failed',
            returnResult: {
              type: {
                blueId: 'AwvXD961fmnmqcSQhjMA7r15HpVh39cefb6ZTyUz2Fm2',
              },
              value: true,
            },
            type: {
              blueId: '4qGDz5yJxXc9dr8bsBE1B2Tg4AWuR4qHPU9H6T29m3KZ',
            },
          },
        ],
      },
      type: {
        blueId: 'B5eQ8GaYwECKEtduoWEv8Ri1FvWznuvb3ZXGKqeYUuy',
      },
    },
    guarantorChannel: {
      type: {
        blueId: '4FAZ94JPExNM4pn2ZhtdHa4CVP7uASmLNVrBy7aCG1p5',
      },
    },
    initialize: {
      channel: {
        type: {
          blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
        },
        value: 'initLifecycleChannel',
      },
      steps: {
        items: [
          {
            do: {
              items: [
                {
                  $appendChange: {
                    op: {
                      type: {
                        blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                      },
                      value: 'add',
                    },
                    path: {
                      type: {
                        blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                      },
                      value: '/status',
                    },
                    val: {
                      $choose: {
                        cond: {
                          $exists: {
                            $document: {
                              type: {
                                blueId:
                                  'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                              },
                              value: '/status',
                            },
                          },
                        },
                        else: {
                          type: {
                            blueId:
                              'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                          },
                          value: 'Pending',
                        },
                        then: {
                          $document: {
                            type: {
                              blueId:
                                'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                            },
                            value: '/status',
                          },
                        },
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
                      type: {
                        blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                      },
                      value: '/amount/finalResolved',
                    },
                    val: {
                      $choose: {
                        cond: {
                          $exists: {
                            $document: {
                              type: {
                                blueId:
                                  'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                              },
                              value: '/amount/finalResolved',
                            },
                          },
                        },
                        else: {
                          type: {
                            blueId:
                              'E2LM6qgzWG9ttagq2xTmiZkgYEAgkYedFCmU9v7NnVEq',
                          },
                          value: 0,
                        },
                        then: {
                          $document: {
                            type: {
                              blueId:
                                'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                            },
                            value: '/amount/finalResolved',
                          },
                        },
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
                      type: {
                        blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                      },
                      value: '/amount/secured',
                    },
                    val: {
                      $choose: {
                        cond: {
                          $exists: {
                            $document: {
                              type: {
                                blueId:
                                  'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                              },
                              value: '/amount/secured',
                            },
                          },
                        },
                        else: {
                          type: {
                            blueId:
                              'E2LM6qgzWG9ttagq2xTmiZkgYEAgkYedFCmU9v7NnVEq',
                          },
                          value: 0,
                        },
                        then: {
                          $document: {
                            type: {
                              blueId:
                                'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                            },
                            value: '/amount/secured',
                          },
                        },
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
                      type: {
                        blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                      },
                      value: '/amount/completed',
                    },
                    val: {
                      $choose: {
                        cond: {
                          $exists: {
                            $document: {
                              type: {
                                blueId:
                                  'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                              },
                              value: '/amount/completed',
                            },
                          },
                        },
                        else: {
                          type: {
                            blueId:
                              'E2LM6qgzWG9ttagq2xTmiZkgYEAgkYedFCmU9v7NnVEq',
                          },
                          value: 0,
                        },
                        then: {
                          $document: {
                            type: {
                              blueId:
                                'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                            },
                            value: '/amount/completed',
                          },
                        },
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
                      type: {
                        blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                      },
                      value: '/amount/reversed',
                    },
                    val: {
                      $choose: {
                        cond: {
                          $exists: {
                            $document: {
                              type: {
                                blueId:
                                  'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                              },
                              value: '/amount/reversed',
                            },
                          },
                        },
                        else: {
                          type: {
                            blueId:
                              'E2LM6qgzWG9ttagq2xTmiZkgYEAgkYedFCmU9v7NnVEq',
                          },
                          value: 0,
                        },
                        then: {
                          $document: {
                            type: {
                              blueId:
                                'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                            },
                            value: '/amount/reversed',
                          },
                        },
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
                      type: {
                        blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                      },
                      value: '/controls/completionLocked',
                    },
                    val: {
                      $choose: {
                        cond: {
                          $exists: {
                            $document: {
                              type: {
                                blueId:
                                  'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                              },
                              value: '/controls/completionLocked',
                            },
                          },
                        },
                        else: {
                          type: {
                            blueId:
                              'AwvXD961fmnmqcSQhjMA7r15HpVh39cefb6ZTyUz2Fm2',
                          },
                          value: false,
                        },
                        then: {
                          $document: {
                            type: {
                              blueId:
                                'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                            },
                            value: '/controls/completionLocked',
                          },
                        },
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
                      type: {
                        blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                      },
                      value: '/controls/reversalLocked',
                    },
                    val: {
                      $choose: {
                        cond: {
                          $exists: {
                            $document: {
                              type: {
                                blueId:
                                  'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                              },
                              value: '/controls/reversalLocked',
                            },
                          },
                        },
                        else: {
                          type: {
                            blueId:
                              'AwvXD961fmnmqcSQhjMA7r15HpVh39cefb6ZTyUz2Fm2',
                          },
                          value: false,
                        },
                        then: {
                          $document: {
                            type: {
                              blueId:
                                'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                            },
                            value: '/controls/reversalLocked',
                          },
                        },
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
                      type: {
                        blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                      },
                      value: '/controls/transactionDetailsUpdateLocked',
                    },
                    val: {
                      $choose: {
                        cond: {
                          $exists: {
                            $document: {
                              type: {
                                blueId:
                                  'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                              },
                              value: '/controls/transactionDetailsUpdateLocked',
                            },
                          },
                        },
                        else: {
                          type: {
                            blueId:
                              'AwvXD961fmnmqcSQhjMA7r15HpVh39cefb6ZTyUz2Fm2',
                          },
                          value: false,
                        },
                        then: {
                          $document: {
                            type: {
                              blueId:
                                'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                            },
                            value: '/controls/transactionDetailsUpdateLocked',
                          },
                        },
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
                      type: {
                        blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                      },
                      value: '/transactionDetails',
                    },
                    val: {
                      $choose: {
                        cond: {
                          $exists: {
                            $document: {
                              type: {
                                blueId:
                                  'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                              },
                              value: '/transactionDetails',
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
                          $document: {
                            type: {
                              blueId:
                                'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                            },
                            value: '/transactionDetails',
                          },
                        },
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
                  },
                },
              ],
            },
            name: 'ResolveRuntimeDefaults',
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
    lockPaymentCompletion: {
      channel: {
        type: {
          blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
        },
        value: 'guarantorChannel',
      },
      request: {
        type: {
          blueId: 'GiarUWCiPuTZ2g7YfosXP17bTi1cH1ZqkguGcYKNqUvY',
        },
      },
      type: {
        blueId: 'Be766kx7kqFYGf96VtAc8Weofb3xkCRUTxSDVd317S2G',
      },
    },
    lockPaymentCompletionImpl: {
      operation: {
        type: {
          blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
        },
        value: 'lockPaymentCompletion',
      },
      steps: {
        items: [
          {
            changeset: {
              items: [
                {
                  op: {
                    type: {
                      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                    },
                    value: 'replace',
                  },
                  path: {
                    type: {
                      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                    },
                    value: '/controls/completionLocked',
                  },
                  val: {
                    type: {
                      blueId: 'AwvXD961fmnmqcSQhjMA7r15HpVh39cefb6ZTyUz2Fm2',
                    },
                    value: true,
                  },
                },
              ],
            },
            name: 'Enable Completion Lock',
            type: {
              blueId: '6bU2jWm3F6GaCXSLpdxiNjRbf9XcQDzH1NUsroHz4x8U',
            },
          },
          {
            do: {
              items: [
                {
                  $appendEvent: {
                    lockedAt: {
                      $event: {
                        type: {
                          blueId:
                            'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                        },
                        value: '/message/request/lockedAt',
                      },
                    },
                    type: {
                      blueId: 'GiarUWCiPuTZ2g7YfosXP17bTi1cH1ZqkguGcYKNqUvY',
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
            emitEvents: {
              type: {
                blueId: 'AwvXD961fmnmqcSQhjMA7r15HpVh39cefb6ZTyUz2Fm2',
              },
              value: true,
            },
            name: 'Emit Payment Completion Locked',
            returnResult: {
              type: {
                blueId: 'AwvXD961fmnmqcSQhjMA7r15HpVh39cefb6ZTyUz2Fm2',
              },
              value: true,
            },
            type: {
              blueId: '4qGDz5yJxXc9dr8bsBE1B2Tg4AWuR4qHPU9H6T29m3KZ',
            },
          },
        ],
      },
      type: {
        blueId: 'B5eQ8GaYwECKEtduoWEv8Ri1FvWznuvb3ZXGKqeYUuy',
      },
    },
    lockPaymentReversal: {
      channel: {
        type: {
          blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
        },
        value: 'guarantorChannel',
      },
      request: {
        type: {
          blueId: '6qKyexNfVD2WhQQ5FGuCoPGQF89SAigGgwyzbKXsPMRP',
        },
      },
      type: {
        blueId: 'Be766kx7kqFYGf96VtAc8Weofb3xkCRUTxSDVd317S2G',
      },
    },
    lockPaymentReversalImpl: {
      operation: {
        type: {
          blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
        },
        value: 'lockPaymentReversal',
      },
      steps: {
        items: [
          {
            changeset: {
              items: [
                {
                  op: {
                    type: {
                      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                    },
                    value: 'replace',
                  },
                  path: {
                    type: {
                      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                    },
                    value: '/controls/reversalLocked',
                  },
                  val: {
                    type: {
                      blueId: 'AwvXD961fmnmqcSQhjMA7r15HpVh39cefb6ZTyUz2Fm2',
                    },
                    value: true,
                  },
                },
              ],
            },
            name: 'Enable Reversal Lock',
            type: {
              blueId: '6bU2jWm3F6GaCXSLpdxiNjRbf9XcQDzH1NUsroHz4x8U',
            },
          },
          {
            do: {
              items: [
                {
                  $appendEvent: {
                    lockedAt: {
                      $event: {
                        type: {
                          blueId:
                            'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                        },
                        value: '/message/request/lockedAt',
                      },
                    },
                    type: {
                      blueId: '6qKyexNfVD2WhQQ5FGuCoPGQF89SAigGgwyzbKXsPMRP',
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
            emitEvents: {
              type: {
                blueId: 'AwvXD961fmnmqcSQhjMA7r15HpVh39cefb6ZTyUz2Fm2',
              },
              value: true,
            },
            name: 'Emit Payment Reversal Locked',
            returnResult: {
              type: {
                blueId: 'AwvXD961fmnmqcSQhjMA7r15HpVh39cefb6ZTyUz2Fm2',
              },
              value: true,
            },
            type: {
              blueId: '4qGDz5yJxXc9dr8bsBE1B2Tg4AWuR4qHPU9H6T29m3KZ',
            },
          },
        ],
      },
      type: {
        blueId: 'B5eQ8GaYwECKEtduoWEv8Ri1FvWznuvb3ZXGKqeYUuy',
      },
    },
    lockTransactionDetailsUpdate: {
      channel: {
        type: {
          blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
        },
        value: 'guarantorChannel',
      },
      request: {
        type: {
          blueId: '44MphyKwNYqXzF8aS5WTmXZMQ4x35PViXyoy2Ks14G1Z',
        },
      },
      type: {
        blueId: 'Be766kx7kqFYGf96VtAc8Weofb3xkCRUTxSDVd317S2G',
      },
    },
    lockTransactionDetailsUpdateImpl: {
      operation: {
        type: {
          blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
        },
        value: 'lockTransactionDetailsUpdate',
      },
      steps: {
        items: [
          {
            changeset: {
              items: [
                {
                  op: {
                    type: {
                      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                    },
                    value: 'replace',
                  },
                  path: {
                    type: {
                      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                    },
                    value: '/controls/transactionDetailsUpdateLocked',
                  },
                  val: {
                    type: {
                      blueId: 'AwvXD961fmnmqcSQhjMA7r15HpVh39cefb6ZTyUz2Fm2',
                    },
                    value: true,
                  },
                },
              ],
            },
            name: 'Enable Transaction Details Update Lock',
            type: {
              blueId: '6bU2jWm3F6GaCXSLpdxiNjRbf9XcQDzH1NUsroHz4x8U',
            },
          },
          {
            do: {
              items: [
                {
                  $appendEvent: {
                    lockedAt: {
                      $event: {
                        type: {
                          blueId:
                            'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                        },
                        value: '/message/request/lockedAt',
                      },
                    },
                    type: {
                      blueId: '44MphyKwNYqXzF8aS5WTmXZMQ4x35PViXyoy2Ks14G1Z',
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
            emitEvents: {
              type: {
                blueId: 'AwvXD961fmnmqcSQhjMA7r15HpVh39cefb6ZTyUz2Fm2',
              },
              value: true,
            },
            name: 'Emit Transaction Details Update Locked',
            returnResult: {
              type: {
                blueId: 'AwvXD961fmnmqcSQhjMA7r15HpVh39cefb6ZTyUz2Fm2',
              },
              value: true,
            },
            type: {
              blueId: '4qGDz5yJxXc9dr8bsBE1B2Tg4AWuR4qHPU9H6T29m3KZ',
            },
          },
        ],
      },
      type: {
        blueId: 'B5eQ8GaYwECKEtduoWEv8Ri1FvWznuvb3ZXGKqeYUuy',
      },
    },
    payeeChannel: {
      type: {
        blueId: '4FAZ94JPExNM4pn2ZhtdHa4CVP7uASmLNVrBy7aCG1p5',
      },
    },
    payerChannel: {
      type: {
        blueId: '4FAZ94JPExNM4pn2ZhtdHa4CVP7uASmLNVrBy7aCG1p5',
      },
    },
    recordTransactionInitiated: {
      channel: {
        type: {
          blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
        },
        value: 'guarantorChannel',
      },
      request: {
        type: {
          blueId: '7WG5MSrMMCeAEYwavUJ2eZQhYdYn2xZv5T8ZYoFyFA4Z',
        },
      },
      type: {
        blueId: 'Be766kx7kqFYGf96VtAc8Weofb3xkCRUTxSDVd317S2G',
      },
    },
    recordTransactionInitiatedImpl: {
      operation: {
        type: {
          blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
        },
        value: 'recordTransactionInitiated',
      },
      steps: {
        items: [
          {
            entry: {
              type: {
                blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
              },
              value: 'merge',
            },
            functions: {
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
              merge: {
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
                              value: 'request',
                            },
                            {
                              type: {
                                blueId:
                                  'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                              },
                              value: 'nextTransactionDetails',
                            },
                          ],
                        },
                        vars: {
                          nextTransactionDetails: {
                            $merge: {
                              items: [
                                {
                                  $call: {
                                    args: {
                                      val: {
                                        $choose: {
                                          cond: {
                                            $exists: {
                                              $document: {
                                                type: {
                                                  blueId:
                                                    'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                                },
                                                value: '/transactionDetails',
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
                                            $document: {
                                              type: {
                                                blueId:
                                                  'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                              },
                                              value: '/transactionDetails',
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
                                {
                                  $call: {
                                    args: {
                                      val: {
                                        $event: {
                                          type: {
                                            blueId:
                                              'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                          },
                                          value: '/message/request',
                                        },
                                      },
                                    },
                                    function: {
                                      type: {
                                        blueId:
                                          'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                      },
                                      value: 'objectWithoutType',
                                    },
                                  },
                                },
                              ],
                            },
                          },
                          request: {
                            $event: {
                              type: {
                                blueId:
                                  'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                              },
                              value: '/message/request',
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
                                  value: 'request',
                                },
                              },
                            },
                          },
                        },
                        then: {
                          items: [
                            {
                              $fail: {
                                type: {
                                  blueId:
                                    'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                },
                                value:
                                  'Transaction initiated payload must be an object.',
                              },
                            },
                          ],
                        },
                      },
                    },
                    {
                      $appendEvent: {
                        $var: {
                          type: {
                            blueId:
                              'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                          },
                          value: 'request',
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
                          value: 'replace',
                        },
                        path: {
                          type: {
                            blueId:
                              'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                          },
                          value: '/status',
                        },
                        val: {
                          type: {
                            blueId:
                              'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                          },
                          value: 'Initiated',
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
                          value: 'replace',
                        },
                        path: {
                          type: {
                            blueId:
                              'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                          },
                          value: '/transactionDetails',
                        },
                        val: {
                          $var: {
                            type: {
                              blueId:
                                'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                            },
                            value: 'nextTransactionDetails',
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
              objectWithoutType: {
                args: {
                  val: {
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
                          $get: {
                            key: {
                              $var: {
                                type: {
                                  blueId:
                                    'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                },
                                value: 'key',
                              },
                            },
                            object: {
                              $call: {
                                args: {
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
                      },
                      in: {
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
                                      value: 'val',
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
                              blueId:
                                'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                            },
                            value: 'key',
                          },
                          where: {
                            $ne: {
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
                        },
                      },
                      item: {
                        type: {
                          blueId:
                            'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                        },
                        value: 'key',
                      },
                    },
                  },
                },
              },
            },
            name: 'MergeInitiationTransactionDetails',
            type: {
              blueId: '4qGDz5yJxXc9dr8bsBE1B2Tg4AWuR4qHPU9H6T29m3KZ',
            },
          },
        ],
      },
      type: {
        blueId: 'B5eQ8GaYwECKEtduoWEv8Ri1FvWznuvb3ZXGKqeYUuy',
      },
    },
    recordTransactionInitiationFailed: {
      channel: {
        type: {
          blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
        },
        value: 'guarantorChannel',
      },
      request: {
        type: {
          blueId: '4RWHs3KE6EL4cyMHvhrxR7pm6wQcgW5wGefM5t7p8jn2',
        },
      },
      type: {
        blueId: 'Be766kx7kqFYGf96VtAc8Weofb3xkCRUTxSDVd317S2G',
      },
    },
    recordTransactionInitiationFailedImpl: {
      operation: {
        type: {
          blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
        },
        value: 'recordTransactionInitiationFailed',
      },
      steps: {
        items: [
          {
            changeset: {
              items: [
                {
                  op: {
                    type: {
                      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                    },
                    value: 'replace',
                  },
                  path: {
                    type: {
                      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                    },
                    value: '/status',
                  },
                  val: {
                    type: {
                      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                    },
                    value: 'Failed',
                  },
                },
              ],
            },
            name: 'Mark Initiation Failed',
            type: {
              blueId: '6bU2jWm3F6GaCXSLpdxiNjRbf9XcQDzH1NUsroHz4x8U',
            },
          },
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
                        value: '/message/request/reason',
                      },
                    },
                    type: {
                      blueId: '4RWHs3KE6EL4cyMHvhrxR7pm6wQcgW5wGefM5t7p8jn2',
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
            emitEvents: {
              type: {
                blueId: 'AwvXD961fmnmqcSQhjMA7r15HpVh39cefb6ZTyUz2Fm2',
              },
              value: true,
            },
            name: 'Emit Transaction Initiation Failed',
            returnResult: {
              type: {
                blueId: 'AwvXD961fmnmqcSQhjMA7r15HpVh39cefb6ZTyUz2Fm2',
              },
              value: true,
            },
            type: {
              blueId: '4qGDz5yJxXc9dr8bsBE1B2Tg4AWuR4qHPU9H6T29m3KZ',
            },
          },
        ],
      },
      type: {
        blueId: 'B5eQ8GaYwECKEtduoWEv8Ri1FvWznuvb3ZXGKqeYUuy',
      },
    },
    rejectFinalAmountResolution: {
      channel: {
        type: {
          blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
        },
        value: 'guarantorChannel',
      },
      request: {
        type: {
          blueId: '4rw9kwJRP7P5opfxz1AFAX3mp1wmPNf3qKBz1om9gr8A',
        },
      },
      type: {
        blueId: 'Be766kx7kqFYGf96VtAc8Weofb3xkCRUTxSDVd317S2G',
      },
    },
    rejectFinalAmountResolutionImpl: {
      operation: {
        type: {
          blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
        },
        value: 'rejectFinalAmountResolution',
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
                        value: '/message/request/reason',
                      },
                    },
                    type: {
                      blueId: '4rw9kwJRP7P5opfxz1AFAX3mp1wmPNf3qKBz1om9gr8A',
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
            emitEvents: {
              type: {
                blueId: 'AwvXD961fmnmqcSQhjMA7r15HpVh39cefb6ZTyUz2Fm2',
              },
              value: true,
            },
            name: 'Emit Final Amount Resolution Rejected',
            returnResult: {
              type: {
                blueId: 'AwvXD961fmnmqcSQhjMA7r15HpVh39cefb6ZTyUz2Fm2',
              },
              value: true,
            },
            type: {
              blueId: '4qGDz5yJxXc9dr8bsBE1B2Tg4AWuR4qHPU9H6T29m3KZ',
            },
          },
        ],
      },
      type: {
        blueId: 'B5eQ8GaYwECKEtduoWEv8Ri1FvWznuvb3ZXGKqeYUuy',
      },
    },
    rejectPayeeAssignment: {
      channel: {
        type: {
          blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
        },
        value: 'guarantorChannel',
      },
      request: {
        type: {
          blueId: 'EHxam7uVrzwbyKVGmHk4QcnKtcPaeM7JzZiiURXj7M33',
        },
      },
      type: {
        blueId: 'Be766kx7kqFYGf96VtAc8Weofb3xkCRUTxSDVd317S2G',
      },
    },
    rejectPayeeAssignmentImpl: {
      operation: {
        type: {
          blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
        },
        value: 'rejectPayeeAssignment',
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
                        value: '/message/request/reason',
                      },
                    },
                    type: {
                      blueId: 'EHxam7uVrzwbyKVGmHk4QcnKtcPaeM7JzZiiURXj7M33',
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
            emitEvents: {
              type: {
                blueId: 'AwvXD961fmnmqcSQhjMA7r15HpVh39cefb6ZTyUz2Fm2',
              },
              value: true,
            },
            name: 'Emit Payee Assignment Rejected',
            returnResult: {
              type: {
                blueId: 'AwvXD961fmnmqcSQhjMA7r15HpVh39cefb6ZTyUz2Fm2',
              },
              value: true,
            },
            type: {
              blueId: '4qGDz5yJxXc9dr8bsBE1B2Tg4AWuR4qHPU9H6T29m3KZ',
            },
          },
        ],
      },
      type: {
        blueId: 'B5eQ8GaYwECKEtduoWEv8Ri1FvWznuvb3ZXGKqeYUuy',
      },
    },
    rejectPayNote: {
      channel: {
        type: {
          blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
        },
        value: 'guarantorChannel',
      },
      request: {
        type: {
          blueId: 'FJqmEa4mSV4FrJkeZn9KLbTZMBeULqaBkzEhceuoaLJG',
        },
      },
      type: {
        blueId: 'Be766kx7kqFYGf96VtAc8Weofb3xkCRUTxSDVd317S2G',
      },
    },
    rejectPayNoteImpl: {
      operation: {
        type: {
          blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
        },
        value: 'rejectPayNote',
      },
      steps: {
        items: [
          {
            do: {
              items: [
                {
                  $let: {
                    expr: {
                      $event: {
                        type: {
                          blueId:
                            'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                        },
                        value: '/message/request',
                      },
                    },
                    name: 'request',
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
                              value: 'request',
                            },
                          },
                        },
                      },
                    },
                    then: {
                      items: [
                        {
                          $fail: {
                            type: {
                              blueId:
                                'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                            },
                            value:
                              'PayNote rejection request must be an object.',
                          },
                        },
                      ],
                    },
                  },
                },
                {
                  $appendEvent: {
                    $var: {
                      type: {
                        blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                      },
                      value: 'request',
                    },
                  },
                },
                {
                  $appendChange: {
                    op: {
                      type: {
                        blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                      },
                      value: 'replace',
                    },
                    path: {
                      type: {
                        blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                      },
                      value: '/status',
                    },
                    val: {
                      type: {
                        blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                      },
                      value: 'Rejected',
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
            name: 'ValidateForwardAndReject',
            type: {
              blueId: '4qGDz5yJxXc9dr8bsBE1B2Tg4AWuR4qHPU9H6T29m3KZ',
            },
          },
        ],
      },
      type: {
        blueId: 'B5eQ8GaYwECKEtduoWEv8Ri1FvWznuvb3ZXGKqeYUuy',
      },
    },
    rejectTransactionDetailsUpdate: {
      channel: {
        type: {
          blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
        },
        value: 'guarantorChannel',
      },
      request: {
        type: {
          blueId: '3iWy5uSeaCr149THj4x9sAeb2AhTtkHFY9yCuqeV7LCT',
        },
      },
      type: {
        blueId: 'Be766kx7kqFYGf96VtAc8Weofb3xkCRUTxSDVd317S2G',
      },
    },
    rejectTransactionDetailsUpdateImpl: {
      operation: {
        type: {
          blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
        },
        value: 'rejectTransactionDetailsUpdate',
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
                        value: '/message/request/reason',
                      },
                    },
                    type: {
                      blueId: '3iWy5uSeaCr149THj4x9sAeb2AhTtkHFY9yCuqeV7LCT',
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
            emitEvents: {
              type: {
                blueId: 'AwvXD961fmnmqcSQhjMA7r15HpVh39cefb6ZTyUz2Fm2',
              },
              value: true,
            },
            name: 'Emit Transaction Details Update Rejected',
            returnResult: {
              type: {
                blueId: 'AwvXD961fmnmqcSQhjMA7r15HpVh39cefb6ZTyUz2Fm2',
              },
              value: true,
            },
            type: {
              blueId: '4qGDz5yJxXc9dr8bsBE1B2Tg4AWuR4qHPU9H6T29m3KZ',
            },
          },
        ],
      },
      type: {
        blueId: 'B5eQ8GaYwECKEtduoWEv8Ri1FvWznuvb3ZXGKqeYUuy',
      },
    },
    resolveFinalAmount: {
      channel: {
        type: {
          blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
        },
        value: 'guarantorChannel',
      },
      request: {
        type: {
          blueId: 'CDwF6APqf9NVAn49dBfJsJVQU1gB4Ah2gbxs3T7DT3Fc',
        },
      },
      type: {
        blueId: 'Be766kx7kqFYGf96VtAc8Weofb3xkCRUTxSDVd317S2G',
      },
    },
    resolveFinalAmountImpl: {
      operation: {
        type: {
          blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
        },
        value: 'resolveFinalAmount',
      },
      steps: {
        items: [
          {
            do: {
              items: [
                {
                  $appendChange: {
                    op: {
                      type: {
                        blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                      },
                      value: 'replace',
                    },
                    path: {
                      type: {
                        blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                      },
                      value: '/amount/finalResolved',
                    },
                    val: {
                      $event: {
                        type: {
                          blueId:
                            'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                        },
                        value: '/message/request/finalAmount',
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
                  },
                },
              ],
            },
            name: 'Update Final Amount',
            returnResult: {
              type: {
                blueId: 'AwvXD961fmnmqcSQhjMA7r15HpVh39cefb6ZTyUz2Fm2',
              },
              value: true,
            },
            type: {
              blueId: '4qGDz5yJxXc9dr8bsBE1B2Tg4AWuR4qHPU9H6T29m3KZ',
            },
          },
          {
            do: {
              items: [
                {
                  $appendEvent: {
                    finalAmount: {
                      $event: {
                        type: {
                          blueId:
                            'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                        },
                        value: '/message/request/finalAmount',
                      },
                    },
                    type: {
                      blueId: 'CDwF6APqf9NVAn49dBfJsJVQU1gB4Ah2gbxs3T7DT3Fc',
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
            emitEvents: {
              type: {
                blueId: 'AwvXD961fmnmqcSQhjMA7r15HpVh39cefb6ZTyUz2Fm2',
              },
              value: true,
            },
            name: 'Emit Final Amount Resolved',
            returnResult: {
              type: {
                blueId: 'AwvXD961fmnmqcSQhjMA7r15HpVh39cefb6ZTyUz2Fm2',
              },
              value: true,
            },
            type: {
              blueId: '4qGDz5yJxXc9dr8bsBE1B2Tg4AWuR4qHPU9H6T29m3KZ',
            },
          },
        ],
      },
      type: {
        blueId: 'B5eQ8GaYwECKEtduoWEv8Ri1FvWznuvb3ZXGKqeYUuy',
      },
    },
    reverseAfterCompletion: {
      channel: {
        type: {
          blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
        },
        value: 'guarantorChannel',
      },
      request: {
        type: {
          blueId: '42iMsNHFY4jUTy1yhZeEeZu9XZL4ZJqReRe191f1KHXf',
        },
      },
      type: {
        blueId: 'Be766kx7kqFYGf96VtAc8Weofb3xkCRUTxSDVd317S2G',
      },
    },
    reverseAfterCompletionImpl: {
      operation: {
        type: {
          blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
        },
        value: 'reverseAfterCompletion',
      },
      steps: {
        items: [
          {
            do: {
              items: [
                {
                  $appendChange: {
                    op: {
                      type: {
                        blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                      },
                      value: 'replace',
                    },
                    path: {
                      type: {
                        blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                      },
                      value: '/status',
                    },
                    val: {
                      type: {
                        blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                      },
                      value: 'Reversed',
                    },
                  },
                },
                {
                  $appendChange: {
                    op: {
                      type: {
                        blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                      },
                      value: 'replace',
                    },
                    path: {
                      type: {
                        blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                      },
                      value: '/amount/reversed',
                    },
                    val: {
                      $event: {
                        type: {
                          blueId:
                            'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                        },
                        value: '/message/request/amountReversed',
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
                  },
                },
              ],
            },
            name: 'Update Reversed Amount',
            returnResult: {
              type: {
                blueId: 'AwvXD961fmnmqcSQhjMA7r15HpVh39cefb6ZTyUz2Fm2',
              },
              value: true,
            },
            type: {
              blueId: '4qGDz5yJxXc9dr8bsBE1B2Tg4AWuR4qHPU9H6T29m3KZ',
            },
          },
          {
            do: {
              items: [
                {
                  $appendEvent: {
                    amountReversed: {
                      $event: {
                        type: {
                          blueId:
                            'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                        },
                        value: '/message/request/amountReversed',
                      },
                    },
                    type: {
                      blueId: '42iMsNHFY4jUTy1yhZeEeZu9XZL4ZJqReRe191f1KHXf',
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
            emitEvents: {
              type: {
                blueId: 'AwvXD961fmnmqcSQhjMA7r15HpVh39cefb6ZTyUz2Fm2',
              },
              value: true,
            },
            name: 'Emit Payment Reversed After Completion',
            returnResult: {
              type: {
                blueId: 'AwvXD961fmnmqcSQhjMA7r15HpVh39cefb6ZTyUz2Fm2',
              },
              value: true,
            },
            type: {
              blueId: '4qGDz5yJxXc9dr8bsBE1B2Tg4AWuR4qHPU9H6T29m3KZ',
            },
          },
        ],
      },
      type: {
        blueId: 'B5eQ8GaYwECKEtduoWEv8Ri1FvWznuvb3ZXGKqeYUuy',
      },
    },
    search: {
      kv: {
        kind: {
          type: {
            blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
          },
          value: '/kind',
        },
      },
      type: {
        blueId: 'ACDXskXQ1cmM9uN8UCRKgH7fEHzqUW5XzyjKgsxgdujs',
      },
    },
    secureFunds: {
      channel: {
        type: {
          blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
        },
        value: 'guarantorChannel',
      },
      request: {
        type: {
          blueId: '3wSieJf5cYTa6o9CMcYAFNmVRS1mJe9wMeQ8Jmo3Xp3i',
        },
      },
      type: {
        blueId: 'Be766kx7kqFYGf96VtAc8Weofb3xkCRUTxSDVd317S2G',
      },
    },
    secureFundsImpl: {
      operation: {
        type: {
          blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
        },
        value: 'secureFunds',
      },
      steps: {
        items: [
          {
            do: {
              items: [
                {
                  $appendChange: {
                    op: {
                      type: {
                        blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                      },
                      value: 'replace',
                    },
                    path: {
                      type: {
                        blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                      },
                      value: '/status',
                    },
                    val: {
                      type: {
                        blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                      },
                      value: 'Secured',
                    },
                  },
                },
                {
                  $appendChange: {
                    op: {
                      type: {
                        blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                      },
                      value: 'replace',
                    },
                    path: {
                      type: {
                        blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                      },
                      value: '/amount/secured',
                    },
                    val: {
                      $event: {
                        type: {
                          blueId:
                            'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                        },
                        value: '/message/request/amountSecured',
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
                  },
                },
              ],
            },
            name: 'Update Secured Amount',
            returnResult: {
              type: {
                blueId: 'AwvXD961fmnmqcSQhjMA7r15HpVh39cefb6ZTyUz2Fm2',
              },
              value: true,
            },
            type: {
              blueId: '4qGDz5yJxXc9dr8bsBE1B2Tg4AWuR4qHPU9H6T29m3KZ',
            },
          },
          {
            do: {
              items: [
                {
                  $appendEvent: {
                    amountSecured: {
                      $event: {
                        type: {
                          blueId:
                            'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                        },
                        value: '/message/request/amountSecured',
                      },
                    },
                    type: {
                      blueId: '3wSieJf5cYTa6o9CMcYAFNmVRS1mJe9wMeQ8Jmo3Xp3i',
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
            emitEvents: {
              type: {
                blueId: 'AwvXD961fmnmqcSQhjMA7r15HpVh39cefb6ZTyUz2Fm2',
              },
              value: true,
            },
            name: 'Emit Funds Secured',
            returnResult: {
              type: {
                blueId: 'AwvXD961fmnmqcSQhjMA7r15HpVh39cefb6ZTyUz2Fm2',
              },
              value: true,
            },
            type: {
              blueId: '4qGDz5yJxXc9dr8bsBE1B2Tg4AWuR4qHPU9H6T29m3KZ',
            },
          },
        ],
      },
      type: {
        blueId: 'B5eQ8GaYwECKEtduoWEv8Ri1FvWznuvb3ZXGKqeYUuy',
      },
    },
    unlockPaymentCompletion: {
      channel: {
        type: {
          blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
        },
        value: 'guarantorChannel',
      },
      request: {
        type: {
          blueId: '4qyUrMxKg5b3zPiB3kBwwy4Yh9fgD4DSqGeLTXh57b7i',
        },
      },
      type: {
        blueId: 'Be766kx7kqFYGf96VtAc8Weofb3xkCRUTxSDVd317S2G',
      },
    },
    unlockPaymentCompletionImpl: {
      operation: {
        type: {
          blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
        },
        value: 'unlockPaymentCompletion',
      },
      steps: {
        items: [
          {
            changeset: {
              items: [
                {
                  op: {
                    type: {
                      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                    },
                    value: 'replace',
                  },
                  path: {
                    type: {
                      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                    },
                    value: '/controls/completionLocked',
                  },
                  val: {
                    type: {
                      blueId: 'AwvXD961fmnmqcSQhjMA7r15HpVh39cefb6ZTyUz2Fm2',
                    },
                    value: false,
                  },
                },
              ],
            },
            name: 'Disable Completion Lock',
            type: {
              blueId: '6bU2jWm3F6GaCXSLpdxiNjRbf9XcQDzH1NUsroHz4x8U',
            },
          },
          {
            do: {
              items: [
                {
                  $appendEvent: {
                    type: {
                      blueId: '4qyUrMxKg5b3zPiB3kBwwy4Yh9fgD4DSqGeLTXh57b7i',
                    },
                    unlockedAt: {
                      $event: {
                        type: {
                          blueId:
                            'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                        },
                        value: '/message/request/unlockedAt',
                      },
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
            emitEvents: {
              type: {
                blueId: 'AwvXD961fmnmqcSQhjMA7r15HpVh39cefb6ZTyUz2Fm2',
              },
              value: true,
            },
            name: 'Emit Payment Completion Unlocked',
            returnResult: {
              type: {
                blueId: 'AwvXD961fmnmqcSQhjMA7r15HpVh39cefb6ZTyUz2Fm2',
              },
              value: true,
            },
            type: {
              blueId: '4qGDz5yJxXc9dr8bsBE1B2Tg4AWuR4qHPU9H6T29m3KZ',
            },
          },
        ],
      },
      type: {
        blueId: 'B5eQ8GaYwECKEtduoWEv8Ri1FvWznuvb3ZXGKqeYUuy',
      },
    },
    unlockPaymentReversal: {
      channel: {
        type: {
          blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
        },
        value: 'guarantorChannel',
      },
      request: {
        type: {
          blueId: 'FVjUChq6akLbAux94Gs4Sv2VQ1JtQWqy1WekMUTyNXuv',
        },
      },
      type: {
        blueId: 'Be766kx7kqFYGf96VtAc8Weofb3xkCRUTxSDVd317S2G',
      },
    },
    unlockPaymentReversalImpl: {
      operation: {
        type: {
          blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
        },
        value: 'unlockPaymentReversal',
      },
      steps: {
        items: [
          {
            changeset: {
              items: [
                {
                  op: {
                    type: {
                      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                    },
                    value: 'replace',
                  },
                  path: {
                    type: {
                      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                    },
                    value: '/controls/reversalLocked',
                  },
                  val: {
                    type: {
                      blueId: 'AwvXD961fmnmqcSQhjMA7r15HpVh39cefb6ZTyUz2Fm2',
                    },
                    value: false,
                  },
                },
              ],
            },
            name: 'Disable Reversal Lock',
            type: {
              blueId: '6bU2jWm3F6GaCXSLpdxiNjRbf9XcQDzH1NUsroHz4x8U',
            },
          },
          {
            do: {
              items: [
                {
                  $appendEvent: {
                    type: {
                      blueId: 'FVjUChq6akLbAux94Gs4Sv2VQ1JtQWqy1WekMUTyNXuv',
                    },
                    unlockedAt: {
                      $event: {
                        type: {
                          blueId:
                            'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                        },
                        value: '/message/request/unlockedAt',
                      },
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
            emitEvents: {
              type: {
                blueId: 'AwvXD961fmnmqcSQhjMA7r15HpVh39cefb6ZTyUz2Fm2',
              },
              value: true,
            },
            name: 'Emit Payment Reversal Unlocked',
            returnResult: {
              type: {
                blueId: 'AwvXD961fmnmqcSQhjMA7r15HpVh39cefb6ZTyUz2Fm2',
              },
              value: true,
            },
            type: {
              blueId: '4qGDz5yJxXc9dr8bsBE1B2Tg4AWuR4qHPU9H6T29m3KZ',
            },
          },
        ],
      },
      type: {
        blueId: 'B5eQ8GaYwECKEtduoWEv8Ri1FvWznuvb3ZXGKqeYUuy',
      },
    },
    unlockTransactionDetailsUpdate: {
      channel: {
        type: {
          blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
        },
        value: 'guarantorChannel',
      },
      request: {
        type: {
          blueId: 'ASnHnJCtcbdEsWa5wcbRpmoUBnw9yajf9vLpsovXyTXg',
        },
      },
      type: {
        blueId: 'Be766kx7kqFYGf96VtAc8Weofb3xkCRUTxSDVd317S2G',
      },
    },
    unlockTransactionDetailsUpdateImpl: {
      operation: {
        type: {
          blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
        },
        value: 'unlockTransactionDetailsUpdate',
      },
      steps: {
        items: [
          {
            changeset: {
              items: [
                {
                  op: {
                    type: {
                      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                    },
                    value: 'replace',
                  },
                  path: {
                    type: {
                      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                    },
                    value: '/controls/transactionDetailsUpdateLocked',
                  },
                  val: {
                    type: {
                      blueId: 'AwvXD961fmnmqcSQhjMA7r15HpVh39cefb6ZTyUz2Fm2',
                    },
                    value: false,
                  },
                },
              ],
            },
            name: 'Disable Transaction Details Update Lock',
            type: {
              blueId: '6bU2jWm3F6GaCXSLpdxiNjRbf9XcQDzH1NUsroHz4x8U',
            },
          },
          {
            do: {
              items: [
                {
                  $appendEvent: {
                    type: {
                      blueId: 'ASnHnJCtcbdEsWa5wcbRpmoUBnw9yajf9vLpsovXyTXg',
                    },
                    unlockedAt: {
                      $event: {
                        type: {
                          blueId:
                            'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                        },
                        value: '/message/request/unlockedAt',
                      },
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
            emitEvents: {
              type: {
                blueId: 'AwvXD961fmnmqcSQhjMA7r15HpVh39cefb6ZTyUz2Fm2',
              },
              value: true,
            },
            name: 'Emit Transaction Details Update Unlocked',
            returnResult: {
              type: {
                blueId: 'AwvXD961fmnmqcSQhjMA7r15HpVh39cefb6ZTyUz2Fm2',
              },
              value: true,
            },
            type: {
              blueId: '4qGDz5yJxXc9dr8bsBE1B2Tg4AWuR4qHPU9H6T29m3KZ',
            },
          },
        ],
      },
      type: {
        blueId: 'B5eQ8GaYwECKEtduoWEv8Ri1FvWznuvb3ZXGKqeYUuy',
      },
    },
  },
  controls: {
    completionLocked: {
      type: {
        blueId: 'AwvXD961fmnmqcSQhjMA7r15HpVh39cefb6ZTyUz2Fm2',
      },
    },
    reversalLocked: {
      type: {
        blueId: 'AwvXD961fmnmqcSQhjMA7r15HpVh39cefb6ZTyUz2Fm2',
      },
    },
    transactionDetailsUpdateLocked: {
      type: {
        blueId: 'AwvXD961fmnmqcSQhjMA7r15HpVh39cefb6ZTyUz2Fm2',
      },
    },
  },
  currency: {
    description: 'ISO 4217 currency code.',
    type: {
      blueId: 'rdiMJ9tNu3geCKLDwXxCCjVQzKvCyaFXHiZTFAkRsCJ',
    },
  },
  description:
    'A document attached to exactly one transaction that governs what should happen with that transaction.\n',
  kind: {
    type: {
      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
    },
    value: 'PayNote',
  },
  name: 'PayNote',
  payNoteInitialStateDescription: {
    details: {
      description:
        'Full explanation of the process, conditions, and special rules. Markdown recommended.\n',
      type: {
        blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
      },
    },
    summary: {
      description: 'Short explanation of what this PayNote is for.\n',
      type: {
        blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
      },
    },
  },
  status: {
    description:
      'Current lifecycle state of this PayNote. Expected values include: Pending, Accepted, Initiated, Secured, Completed, Cancelled, Reversed, Rejected, Failed.\n',
    type: {
      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
    },
  },
  transactionDetails: {
    description:
      'Transaction attachment information confirmed by the Guarantor.\n',
  },
};
