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
          blueId: '5YLDihBUWvCz7kpaJgmhorvo7b5sdPv2AENZE7TQ7vSC',
        },
      },
      type: {
        blueId: '7pZPbabkYt8GUuY8JnALqhJ7gqoChfZoE5tKmU3gBpFv',
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
              blueId: '8FyswTq5moAS2hexCNqdEVSfPbuwesexqrck7Up5gtxp',
            },
          },
          {
            event: {
              type: {
                blueId: '5YLDihBUWvCz7kpaJgmhorvo7b5sdPv2AENZE7TQ7vSC',
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
        blueId: '6rnGvP1BUsBpbtvuvJ1vy6hS7psoUJVBEXXsFeRma82V',
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
          blueId: '9TqRBQi3CZa6npdsjk1xZmx3Fx8rNu3mLGdKRsUpPxyp',
        },
      },
      type: {
        blueId: '7pZPbabkYt8GUuY8JnALqhJ7gqoChfZoE5tKmU3gBpFv',
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
              blueId: '8FyswTq5moAS2hexCNqdEVSfPbuwesexqrck7Up5gtxp',
            },
          },
          {
            event: {
              type: {
                blueId: '9TqRBQi3CZa6npdsjk1xZmx3Fx8rNu3mLGdKRsUpPxyp',
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
        blueId: '6rnGvP1BUsBpbtvuvJ1vy6hS7psoUJVBEXXsFeRma82V',
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
          blueId: 'A6ju5jCNdPU83nB2EJ19VE2r3d1XPgWQygPcohuRzxMa',
        },
      },
      type: {
        blueId: '7pZPbabkYt8GUuY8JnALqhJ7gqoChfZoE5tKmU3gBpFv',
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
                      blueId: 'A6ju5jCNdPU83nB2EJ19VE2r3d1XPgWQygPcohuRzxMa',
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
        blueId: '6rnGvP1BUsBpbtvuvJ1vy6hS7psoUJVBEXXsFeRma82V',
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
          blueId: '2k1DzCTuqeUdyjxgw2zJRaK8JjVK9b6af5mVVp9ncKtS',
        },
      },
      type: {
        blueId: '7pZPbabkYt8GUuY8JnALqhJ7gqoChfZoE5tKmU3gBpFv',
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
        blueId: '6rnGvP1BUsBpbtvuvJ1vy6hS7psoUJVBEXXsFeRma82V',
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
          blueId: '2PvRXbCWSaToP2BiFrEQHdTZ8W1F5TzNeCsK1rbhd4iE',
        },
      },
      type: {
        blueId: '7pZPbabkYt8GUuY8JnALqhJ7gqoChfZoE5tKmU3gBpFv',
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
        blueId: '6rnGvP1BUsBpbtvuvJ1vy6hS7psoUJVBEXXsFeRma82V',
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
          blueId: '3D5EMr4Yu2pD4z1CSUsj7kKPa28NGq6BDwU8jhFufZir',
        },
      },
      type: {
        blueId: '7pZPbabkYt8GUuY8JnALqhJ7gqoChfZoE5tKmU3gBpFv',
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
              blueId: '8FyswTq5moAS2hexCNqdEVSfPbuwesexqrck7Up5gtxp',
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
                      blueId: '3D5EMr4Yu2pD4z1CSUsj7kKPa28NGq6BDwU8jhFufZir',
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
        blueId: '6rnGvP1BUsBpbtvuvJ1vy6hS7psoUJVBEXXsFeRma82V',
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
          blueId: 'Zi87ggCGvyvyC6BkE6fGfRApCKSEWvwZBzq6kr66Gxz',
        },
      },
      type: {
        blueId: '7pZPbabkYt8GUuY8JnALqhJ7gqoChfZoE5tKmU3gBpFv',
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
              blueId: '8FyswTq5moAS2hexCNqdEVSfPbuwesexqrck7Up5gtxp',
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
                      blueId: 'Zi87ggCGvyvyC6BkE6fGfRApCKSEWvwZBzq6kr66Gxz',
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
        blueId: '6rnGvP1BUsBpbtvuvJ1vy6hS7psoUJVBEXXsFeRma82V',
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
          blueId: 'HBT721eA6MjEL4s9T3ZkmTR3GtSAMQ4yYpXQRt1v4Huh',
        },
      },
      type: {
        blueId: '7pZPbabkYt8GUuY8JnALqhJ7gqoChfZoE5tKmU3gBpFv',
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
              blueId: '8FyswTq5moAS2hexCNqdEVSfPbuwesexqrck7Up5gtxp',
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
                      blueId: 'HBT721eA6MjEL4s9T3ZkmTR3GtSAMQ4yYpXQRt1v4Huh',
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
        blueId: '6rnGvP1BUsBpbtvuvJ1vy6hS7psoUJVBEXXsFeRma82V',
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
          blueId: 'CBGbBbRr8BXEZeWeTHtNucALN7jcjHBsHgV8wCkqzgFg',
        },
      },
      type: {
        blueId: '7pZPbabkYt8GUuY8JnALqhJ7gqoChfZoE5tKmU3gBpFv',
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
              blueId: '8FyswTq5moAS2hexCNqdEVSfPbuwesexqrck7Up5gtxp',
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
                      blueId: 'CBGbBbRr8BXEZeWeTHtNucALN7jcjHBsHgV8wCkqzgFg',
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
        blueId: '6rnGvP1BUsBpbtvuvJ1vy6hS7psoUJVBEXXsFeRma82V',
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
          blueId: 'FzLb75BhpSDKvmnvLRp5VHC7WxszSJWhDUeLYFsG7kyK',
        },
      },
      type: {
        blueId: '7pZPbabkYt8GUuY8JnALqhJ7gqoChfZoE5tKmU3gBpFv',
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
              blueId: '8FyswTq5moAS2hexCNqdEVSfPbuwesexqrck7Up5gtxp',
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
                      blueId: 'FzLb75BhpSDKvmnvLRp5VHC7WxszSJWhDUeLYFsG7kyK',
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
        blueId: '6rnGvP1BUsBpbtvuvJ1vy6hS7psoUJVBEXXsFeRma82V',
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
          blueId: 'Ex5Js1G5Q28DiqxHpMkcnPg69efQZWJqUZmTy6Rkenit',
        },
      },
      type: {
        blueId: '7pZPbabkYt8GUuY8JnALqhJ7gqoChfZoE5tKmU3gBpFv',
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
              blueId: '8FyswTq5moAS2hexCNqdEVSfPbuwesexqrck7Up5gtxp',
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
                      blueId: 'Ex5Js1G5Q28DiqxHpMkcnPg69efQZWJqUZmTy6Rkenit',
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
        blueId: '6rnGvP1BUsBpbtvuvJ1vy6hS7psoUJVBEXXsFeRma82V',
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
          blueId: 'AUyPeDTYbjKsLYHVka8VzsH6mPR3wDDunfCFgzuimFTD',
        },
      },
      type: {
        blueId: '7pZPbabkYt8GUuY8JnALqhJ7gqoChfZoE5tKmU3gBpFv',
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
                      blueId: 'AUyPeDTYbjKsLYHVka8VzsH6mPR3wDDunfCFgzuimFTD',
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
        blueId: '6rnGvP1BUsBpbtvuvJ1vy6hS7psoUJVBEXXsFeRma82V',
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
          blueId: 'FRi3kr6DcW6i7R65yh9YCDhVcU6mCyf2JkEVDkBkZsFa',
        },
      },
      type: {
        blueId: '7pZPbabkYt8GUuY8JnALqhJ7gqoChfZoE5tKmU3gBpFv',
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
                      blueId: 'FRi3kr6DcW6i7R65yh9YCDhVcU6mCyf2JkEVDkBkZsFa',
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
        blueId: '6rnGvP1BUsBpbtvuvJ1vy6hS7psoUJVBEXXsFeRma82V',
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
          blueId: 'GodTmBkeiAhmTYR9gCF4zMnYYauDz2SgUFhwHGCFXRXU',
        },
      },
      type: {
        blueId: '7pZPbabkYt8GUuY8JnALqhJ7gqoChfZoE5tKmU3gBpFv',
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
              blueId: '8FyswTq5moAS2hexCNqdEVSfPbuwesexqrck7Up5gtxp',
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
                      blueId: 'GodTmBkeiAhmTYR9gCF4zMnYYauDz2SgUFhwHGCFXRXU',
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
        blueId: '6rnGvP1BUsBpbtvuvJ1vy6hS7psoUJVBEXXsFeRma82V',
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
          blueId: 'AcV3s6B6heDQVQEMEA4xgtRY3VUtUxqKSVuioBt2pFLp',
        },
      },
      type: {
        blueId: '7pZPbabkYt8GUuY8JnALqhJ7gqoChfZoE5tKmU3gBpFv',
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
              blueId: '8FyswTq5moAS2hexCNqdEVSfPbuwesexqrck7Up5gtxp',
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
                      blueId: 'AcV3s6B6heDQVQEMEA4xgtRY3VUtUxqKSVuioBt2pFLp',
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
        blueId: '6rnGvP1BUsBpbtvuvJ1vy6hS7psoUJVBEXXsFeRma82V',
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
          blueId: 'CLStrVwhFuEXAd4aurmgiHZgBH6RwzmGrN4VTkMA8t4U',
        },
      },
      type: {
        blueId: '7pZPbabkYt8GUuY8JnALqhJ7gqoChfZoE5tKmU3gBpFv',
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
                      blueId: 'CLStrVwhFuEXAd4aurmgiHZgBH6RwzmGrN4VTkMA8t4U',
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
        blueId: '6rnGvP1BUsBpbtvuvJ1vy6hS7psoUJVBEXXsFeRma82V',
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
          blueId: 'FdqDUfAWCuXX76FATG65canUKGYJChbbzhUfnx3U87eH',
        },
      },
      type: {
        blueId: '7pZPbabkYt8GUuY8JnALqhJ7gqoChfZoE5tKmU3gBpFv',
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
                      blueId: 'FdqDUfAWCuXX76FATG65canUKGYJChbbzhUfnx3U87eH',
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
        blueId: '6rnGvP1BUsBpbtvuvJ1vy6hS7psoUJVBEXXsFeRma82V',
      },
    },
    guarantorChannel: {
      type: {
        blueId: 'CaFMD5Tpz4LbGjJsftT3465hKBWa7Ti6dutYHnCSRQyR',
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
        blueId: 'HGVWruAeRNXH8kjHbo7cW24PeJuD8hNZa8ZZBDqdVYaX',
      },
    },
    initLifecycleChannel: {
      event: {
        type: {
          blueId: 'Gck5z8qnbcUvJNkawzKPghj14dJBw8GxkC9mh6cL5e5C',
        },
      },
      type: {
        blueId: '2ukJitzzDKQWHJ5EVUtn3t4FXieGmNA1NdwFSqG8qcfo',
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
          blueId: '5ay51sajCxDRM5w88w7vKqaFPQN2yqok2wMmFQynLLn',
        },
      },
      type: {
        blueId: '7pZPbabkYt8GUuY8JnALqhJ7gqoChfZoE5tKmU3gBpFv',
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
              blueId: '8FyswTq5moAS2hexCNqdEVSfPbuwesexqrck7Up5gtxp',
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
                      blueId: '5ay51sajCxDRM5w88w7vKqaFPQN2yqok2wMmFQynLLn',
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
        blueId: '6rnGvP1BUsBpbtvuvJ1vy6hS7psoUJVBEXXsFeRma82V',
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
          blueId: '7HHy9Zt3Ma5w7HRFHJRLK87L2F3zZsC8rWYXjWjcuzS7',
        },
      },
      type: {
        blueId: '7pZPbabkYt8GUuY8JnALqhJ7gqoChfZoE5tKmU3gBpFv',
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
              blueId: '8FyswTq5moAS2hexCNqdEVSfPbuwesexqrck7Up5gtxp',
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
                      blueId: '7HHy9Zt3Ma5w7HRFHJRLK87L2F3zZsC8rWYXjWjcuzS7',
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
        blueId: '6rnGvP1BUsBpbtvuvJ1vy6hS7psoUJVBEXXsFeRma82V',
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
          blueId: '7eWohnCAiaeDM9w3Ta53HFzNfZ632TRi1QvEC4CWq5dp',
        },
      },
      type: {
        blueId: '7pZPbabkYt8GUuY8JnALqhJ7gqoChfZoE5tKmU3gBpFv',
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
              blueId: '8FyswTq5moAS2hexCNqdEVSfPbuwesexqrck7Up5gtxp',
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
                      blueId: '7eWohnCAiaeDM9w3Ta53HFzNfZ632TRi1QvEC4CWq5dp',
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
        blueId: '6rnGvP1BUsBpbtvuvJ1vy6hS7psoUJVBEXXsFeRma82V',
      },
    },
    payeeChannel: {
      type: {
        blueId: 'CaFMD5Tpz4LbGjJsftT3465hKBWa7Ti6dutYHnCSRQyR',
      },
    },
    payerChannel: {
      type: {
        blueId: 'CaFMD5Tpz4LbGjJsftT3465hKBWa7Ti6dutYHnCSRQyR',
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
          blueId: '3u8MNZmeGVfDWPSDAy4YKrLvjGrKixetC82z5VCj5Nxh',
        },
      },
      type: {
        blueId: '7pZPbabkYt8GUuY8JnALqhJ7gqoChfZoE5tKmU3gBpFv',
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
        blueId: '6rnGvP1BUsBpbtvuvJ1vy6hS7psoUJVBEXXsFeRma82V',
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
          blueId: 'GuqdDWWRhjXQaHEk45Gdfgia1m6Dp5FS3bEaYXCDe16y',
        },
      },
      type: {
        blueId: '7pZPbabkYt8GUuY8JnALqhJ7gqoChfZoE5tKmU3gBpFv',
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
              blueId: '8FyswTq5moAS2hexCNqdEVSfPbuwesexqrck7Up5gtxp',
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
                      blueId: 'GuqdDWWRhjXQaHEk45Gdfgia1m6Dp5FS3bEaYXCDe16y',
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
        blueId: '6rnGvP1BUsBpbtvuvJ1vy6hS7psoUJVBEXXsFeRma82V',
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
          blueId: '9Een3TcB61qehAjz4NcDdPeBGztoq78JGH6KuhfYjhsZ',
        },
      },
      type: {
        blueId: '7pZPbabkYt8GUuY8JnALqhJ7gqoChfZoE5tKmU3gBpFv',
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
                      blueId: '9Een3TcB61qehAjz4NcDdPeBGztoq78JGH6KuhfYjhsZ',
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
        blueId: '6rnGvP1BUsBpbtvuvJ1vy6hS7psoUJVBEXXsFeRma82V',
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
          blueId: 'B9jHNiJW5Dm5vBR3mM9LDSeaYLGw67pKvwMVrrnrLUxq',
        },
      },
      type: {
        blueId: '7pZPbabkYt8GUuY8JnALqhJ7gqoChfZoE5tKmU3gBpFv',
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
                      blueId: 'B9jHNiJW5Dm5vBR3mM9LDSeaYLGw67pKvwMVrrnrLUxq',
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
        blueId: '6rnGvP1BUsBpbtvuvJ1vy6hS7psoUJVBEXXsFeRma82V',
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
          blueId: 'CoL6y3nodmB6mpWixGtNSiNCSQKQn7tJXouUE5Q9aaF',
        },
      },
      type: {
        blueId: '7pZPbabkYt8GUuY8JnALqhJ7gqoChfZoE5tKmU3gBpFv',
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
        blueId: '6rnGvP1BUsBpbtvuvJ1vy6hS7psoUJVBEXXsFeRma82V',
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
          blueId: 'J6Eku9sEFgBuG19nxYTWzvdyM9fDbxf59waQj5hz712H',
        },
      },
      type: {
        blueId: '7pZPbabkYt8GUuY8JnALqhJ7gqoChfZoE5tKmU3gBpFv',
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
                      blueId: 'J6Eku9sEFgBuG19nxYTWzvdyM9fDbxf59waQj5hz712H',
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
        blueId: '6rnGvP1BUsBpbtvuvJ1vy6hS7psoUJVBEXXsFeRma82V',
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
          blueId: '6LmhFAV7hQwAAS1GFeDkuy6ZPhuSAedBoREUDiTLbS8M',
        },
      },
      type: {
        blueId: '7pZPbabkYt8GUuY8JnALqhJ7gqoChfZoE5tKmU3gBpFv',
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
                      blueId: '6LmhFAV7hQwAAS1GFeDkuy6ZPhuSAedBoREUDiTLbS8M',
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
        blueId: '6rnGvP1BUsBpbtvuvJ1vy6hS7psoUJVBEXXsFeRma82V',
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
          blueId: 'J3JY5m2ZQL6nJpeT1fvWxpUb4iuLzrh19fSY1zzbWesE',
        },
      },
      type: {
        blueId: '7pZPbabkYt8GUuY8JnALqhJ7gqoChfZoE5tKmU3gBpFv',
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
                      blueId: 'J3JY5m2ZQL6nJpeT1fvWxpUb4iuLzrh19fSY1zzbWesE',
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
        blueId: '6rnGvP1BUsBpbtvuvJ1vy6hS7psoUJVBEXXsFeRma82V',
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
        blueId: 'DcMLEejNRRoP2vSHW66fdCnCRgnpt2y1f35rFfYk5koj',
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
          blueId: 'D4GFzYxsfR62ScEkmAAfM5EbRRvZWT3Sw6HjUjLLDugu',
        },
      },
      type: {
        blueId: '7pZPbabkYt8GUuY8JnALqhJ7gqoChfZoE5tKmU3gBpFv',
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
                      blueId: 'D4GFzYxsfR62ScEkmAAfM5EbRRvZWT3Sw6HjUjLLDugu',
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
        blueId: '6rnGvP1BUsBpbtvuvJ1vy6hS7psoUJVBEXXsFeRma82V',
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
          blueId: '3CvQdp7L5VYsjdP9Wj4tjaobejkpv6VQCry4LoT2vMYw',
        },
      },
      type: {
        blueId: '7pZPbabkYt8GUuY8JnALqhJ7gqoChfZoE5tKmU3gBpFv',
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
              blueId: '8FyswTq5moAS2hexCNqdEVSfPbuwesexqrck7Up5gtxp',
            },
          },
          {
            do: {
              items: [
                {
                  $appendEvent: {
                    type: {
                      blueId: '3CvQdp7L5VYsjdP9Wj4tjaobejkpv6VQCry4LoT2vMYw',
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
        blueId: '6rnGvP1BUsBpbtvuvJ1vy6hS7psoUJVBEXXsFeRma82V',
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
          blueId: '2FrLTP891JHVyWKycAy5DkXS1VwAd8piEvX1vZvng2WF',
        },
      },
      type: {
        blueId: '7pZPbabkYt8GUuY8JnALqhJ7gqoChfZoE5tKmU3gBpFv',
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
              blueId: '8FyswTq5moAS2hexCNqdEVSfPbuwesexqrck7Up5gtxp',
            },
          },
          {
            do: {
              items: [
                {
                  $appendEvent: {
                    type: {
                      blueId: '2FrLTP891JHVyWKycAy5DkXS1VwAd8piEvX1vZvng2WF',
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
        blueId: '6rnGvP1BUsBpbtvuvJ1vy6hS7psoUJVBEXXsFeRma82V',
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
          blueId: '9Ly4TDBSioFwQGRYZjXFrYToUKYmFsK935PRcVTFwkqA',
        },
      },
      type: {
        blueId: '7pZPbabkYt8GUuY8JnALqhJ7gqoChfZoE5tKmU3gBpFv',
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
              blueId: '8FyswTq5moAS2hexCNqdEVSfPbuwesexqrck7Up5gtxp',
            },
          },
          {
            do: {
              items: [
                {
                  $appendEvent: {
                    type: {
                      blueId: '9Ly4TDBSioFwQGRYZjXFrYToUKYmFsK935PRcVTFwkqA',
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
        blueId: '6rnGvP1BUsBpbtvuvJ1vy6hS7psoUJVBEXXsFeRma82V',
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
