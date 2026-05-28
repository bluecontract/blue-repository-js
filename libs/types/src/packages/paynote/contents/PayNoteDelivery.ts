export const PayNoteDelivery = {
  cardTransactionDetails: {
    description:
      'Card network identifiers used to match processor and issuer records.',
    type: {
      blueId: 'GZLRe2fEsvs1v7dVcg9kEnCrWEdM3cUZYhFH4XqN5jQT',
    },
  },
  clientAcceptedAt: {
    description: 'Timestamp when the client accepted.',
    type: {
      blueId: 'GQaGqFxHDz64L1c9QkCbz52ths6bMVtpHnw4QDngzQYs',
    },
  },
  clientDecisionStatus: {
    description: 'Client decision (pending, accepted, rejected).',
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
  clientRejectedAt: {
    description: 'Timestamp when the client rejected.',
    type: {
      blueId: 'GQaGqFxHDz64L1c9QkCbz52ths6bMVtpHnw4QDngzQYs',
    },
  },
  contracts: {
    acceptPayNote: {
      channel: {
        type: {
          blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
        },
        value: 'payNoteDeliverer',
      },
      request: {
        acceptedAt: {
          description: 'Timestamp when the client accepted.',
          type: {
            blueId: 'GQaGqFxHDz64L1c9QkCbz52ths6bMVtpHnw4QDngzQYs',
          },
        },
      },
      type: {
        blueId: '9Fu3Rjq8hNKnZS71ZU8RXBBupZEa7Wb8z44GtzfSwjbr',
      },
    },
    acceptPayNoteImpl: {
      operation: {
        type: {
          blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
        },
        value: 'acceptPayNote',
      },
      steps: {
        items: [
          {
            entry: {
              type: {
                blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
              },
              value: 'accept',
            },
            functions: {
              accept: {
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
                              value: 'acceptedAt',
                            },
                            {
                              type: {
                                blueId:
                                  'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                              },
                              value: 'currentDecisionStatus',
                            },
                            {
                              type: {
                                blueId:
                                  'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                              },
                              value: 'alreadyDecided',
                            },
                            {
                              type: {
                                blueId:
                                  'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                              },
                              value: 'transactionStatus',
                            },
                            {
                              type: {
                                blueId:
                                  'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                              },
                              value: 'canAccept',
                            },
                            {
                              type: {
                                blueId:
                                  'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                              },
                              value: 'discardReason',
                            },
                            {
                              type: {
                                blueId:
                                  'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                              },
                              value: 'nextDecisionStatus',
                            },
                            {
                              type: {
                                blueId:
                                  'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                              },
                              value: 'nextAcceptedAt',
                            },
                            {
                              type: {
                                blueId:
                                  'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                              },
                              value: 'nextDeliveryStatus',
                            },
                            {
                              type: {
                                blueId:
                                  'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                              },
                              value: 'nextDeliveryError',
                            },
                          ],
                        },
                        vars: {
                          acceptedAt: {
                            $call: {
                              args: {
                                val: {
                                  $event: {
                                    type: {
                                      blueId:
                                        'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                    },
                                    value: '/message/request/acceptedAt',
                                  },
                                },
                              },
                              function: {
                                type: {
                                  blueId:
                                    'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                },
                                value: 'asText',
                              },
                            },
                          },
                          alreadyDecided: {
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
                                          value: 'currentDecisionStatus',
                                        },
                                      },
                                      {
                                        type: {
                                          blueId:
                                            'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                        },
                                        value: 'accepted',
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
                                          value: 'currentDecisionStatus',
                                        },
                                      },
                                      {
                                        type: {
                                          blueId:
                                            'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                        },
                                        value: 'rejected',
                                      },
                                    ],
                                  },
                                },
                              ],
                            },
                          },
                          canAccept: {
                            $and: {
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
                                          value: 'transactionStatus',
                                        },
                                      },
                                      {
                                        type: {
                                          blueId:
                                            'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                        },
                                        value: 'identified',
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
                                          value: 'currentDecisionStatus',
                                        },
                                      },
                                      {
                                        type: {
                                          blueId:
                                            'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                        },
                                        value: 'pending',
                                      },
                                    ],
                                  },
                                },
                              ],
                            },
                          },
                          currentDecisionStatus: {
                            $call: {
                              args: {
                                val: {
                                  $document: {
                                    type: {
                                      blueId:
                                        'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                    },
                                    value: '/clientDecisionStatus',
                                  },
                                },
                              },
                              function: {
                                type: {
                                  blueId:
                                    'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                },
                                value: 'asText',
                              },
                            },
                          },
                          discardReason: {
                            $choose: {
                              cond: {
                                $var: {
                                  type: {
                                    blueId:
                                      'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                  },
                                  value: 'canAccept',
                                },
                              },
                              else: {
                                $choose: {
                                  cond: {
                                    $var: {
                                      type: {
                                        blueId:
                                          'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                      },
                                      value: 'alreadyDecided',
                                    },
                                  },
                                  else: {
                                    $choose: {
                                      cond: {
                                        $eq: {
                                          items: [
                                            {
                                              $var: {
                                                type: {
                                                  blueId:
                                                    'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                                },
                                                value: 'transactionStatus',
                                              },
                                            },
                                            {
                                              type: {
                                                blueId:
                                                  'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                              },
                                              value: 'failed',
                                            },
                                          ],
                                        },
                                      },
                                      else: {
                                        type: {
                                          blueId:
                                            'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                        },
                                        value: 'Transaction not identified',
                                      },
                                      then: {
                                        type: {
                                          blueId:
                                            'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                        },
                                        value:
                                          'Transaction identification failed',
                                      },
                                    },
                                  },
                                  then: {
                                    $concat: {
                                      items: [
                                        {
                                          type: {
                                            blueId:
                                              'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                          },
                                          value: 'PayNote already',
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
                                            value: 'currentDecisionStatus',
                                          },
                                        },
                                      ],
                                    },
                                  },
                                },
                              },
                              then: {
                                type: {
                                  blueId:
                                    'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                },
                                value: '',
                              },
                            },
                          },
                          nextAcceptedAt: {
                            $choose: {
                              cond: {
                                $var: {
                                  type: {
                                    blueId:
                                      'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                  },
                                  value: 'canAccept',
                                },
                              },
                              else: {
                                $call: {
                                  args: {
                                    val: {
                                      $document: {
                                        type: {
                                          blueId:
                                            'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                        },
                                        value: '/clientAcceptedAt',
                                      },
                                    },
                                  },
                                  function: {
                                    type: {
                                      blueId:
                                        'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                    },
                                    value: 'asText',
                                  },
                                },
                              },
                              then: {
                                $var: {
                                  type: {
                                    blueId:
                                      'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                  },
                                  value: 'acceptedAt',
                                },
                              },
                            },
                          },
                          nextDecisionStatus: {
                            $choose: {
                              cond: {
                                $var: {
                                  type: {
                                    blueId:
                                      'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                  },
                                  value: 'canAccept',
                                },
                              },
                              else: {
                                $choose: {
                                  cond: {
                                    $truthy: {
                                      $var: {
                                        type: {
                                          blueId:
                                            'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                        },
                                        value: 'currentDecisionStatus',
                                      },
                                    },
                                  },
                                  else: {
                                    type: {
                                      blueId:
                                        'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                    },
                                    value: 'pending',
                                  },
                                  then: {
                                    $var: {
                                      type: {
                                        blueId:
                                          'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                      },
                                      value: 'currentDecisionStatus',
                                    },
                                  },
                                },
                              },
                              then: {
                                type: {
                                  blueId:
                                    'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                },
                                value: 'accepted',
                              },
                            },
                          },
                          nextDeliveryError: {
                            $choose: {
                              cond: {
                                $var: {
                                  type: {
                                    blueId:
                                      'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                  },
                                  value: 'canAccept',
                                },
                              },
                              else: {
                                $call: {
                                  args: {
                                    val: {
                                      $document: {
                                        type: {
                                          blueId:
                                            'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                        },
                                        value: '/deliveryError',
                                      },
                                    },
                                  },
                                  function: {
                                    type: {
                                      blueId:
                                        'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                    },
                                    value: 'asText',
                                  },
                                },
                              },
                              then: {
                                type: {
                                  blueId:
                                    'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                },
                                value: '',
                              },
                            },
                          },
                          nextDeliveryStatus: {
                            $choose: {
                              cond: {
                                $var: {
                                  type: {
                                    blueId:
                                      'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                  },
                                  value: 'canAccept',
                                },
                              },
                              else: {
                                $default: {
                                  items: [
                                    {
                                      $document: {
                                        type: {
                                          blueId:
                                            'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                        },
                                        value: '/deliveryStatus',
                                      },
                                    },
                                    {
                                      mode: {
                                        type: {
                                          blueId:
                                            'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                        },
                                        value: 'pending',
                                      },
                                      type: {
                                        blueId:
                                          'Gqcw51QJT9NStqo2ka3E76tQ8UZie33F4yqdjwskav79',
                                      },
                                    },
                                  ],
                                },
                              },
                              then: {
                                mode: {
                                  type: {
                                    blueId:
                                      'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                  },
                                  value: 'terminated',
                                },
                                type: {
                                  blueId:
                                    'Pzdwn6mQJT2qFDaF4V1dzpcyu4ejRqDv8neLPnbHRGi',
                                },
                              },
                            },
                          },
                          transactionStatus: {
                            $call: {
                              args: {
                                val: {
                                  $document: {
                                    type: {
                                      blueId:
                                        'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                    },
                                    value: '/transactionIdentificationStatus',
                                  },
                                },
                              },
                              function: {
                                type: {
                                  blueId:
                                    'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                },
                                value: 'asText',
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
                            blueId:
                              'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                          },
                          value: 'replace',
                        },
                        path: {
                          type: {
                            blueId:
                              'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                          },
                          value: '/clientDecisionStatus',
                        },
                        val: {
                          $var: {
                            type: {
                              blueId:
                                'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                            },
                            value: 'nextDecisionStatus',
                          },
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
                          value: 'replace',
                        },
                        path: {
                          type: {
                            blueId:
                              'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                          },
                          value: '/clientAcceptedAt',
                        },
                        val: {
                          $var: {
                            type: {
                              blueId:
                                'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                            },
                            value: 'nextAcceptedAt',
                          },
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
                          value: 'replace',
                        },
                        path: {
                          type: {
                            blueId:
                              'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                          },
                          value: '/deliveryStatus',
                        },
                        val: {
                          $var: {
                            type: {
                              blueId:
                                'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                            },
                            value: 'nextDeliveryStatus',
                          },
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
                          value: 'replace',
                        },
                        path: {
                          type: {
                            blueId:
                              'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                          },
                          value: '/deliveryError',
                        },
                        val: {
                          $var: {
                            type: {
                              blueId:
                                'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                            },
                            value: 'nextDeliveryError',
                          },
                        },
                      },
                    },
                    {
                      $if: {
                        cond: {
                          $var: {
                            type: {
                              blueId:
                                'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                            },
                            value: 'canAccept',
                          },
                        },
                        else: {
                          items: [
                            {
                              $appendEvent: {
                                decision: {
                                  type: {
                                    blueId:
                                      'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                  },
                                  value: 'accepted',
                                },
                                decisionAt: {
                                  $var: {
                                    type: {
                                      blueId:
                                        'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                    },
                                    value: 'acceptedAt',
                                  },
                                },
                                reason: {
                                  $var: {
                                    type: {
                                      blueId:
                                        'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                    },
                                    value: 'discardReason',
                                  },
                                },
                                type: {
                                  blueId:
                                    '8hhTj5tHF6SorKyCXtkyr6cendUne9A6eYJ225dJjLJW',
                                },
                              },
                            },
                          ],
                        },
                        then: {
                          items: [
                            {
                              $appendEvent: {
                                acceptedAt: {
                                  $var: {
                                    type: {
                                      blueId:
                                        'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                    },
                                    value: 'acceptedAt',
                                  },
                                },
                                type: {
                                  blueId:
                                    'HtsPop9z5R2EoW3TLKCSePnQUAj5wqryWuRWV1cwyBTt',
                                },
                              },
                            },
                            {
                              $appendEvent: {
                                $document: {
                                  type: {
                                    blueId:
                                      'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                  },
                                  value: '/payNoteBootstrapRequest',
                                },
                              },
                            },
                          ],
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
              asText: {
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
                    else: {
                      type: {
                        blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                      },
                      value: '',
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
            },
            name: 'CaptureAcceptanceTimestamp',
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
    initialize: {
      channel: {
        type: {
          blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
        },
        value: 'initLifecycleChannel',
      },
      steps: {
        items: [
          {
            changeset: {
              items: [
                {
                  op: {
                    type: {
                      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                    },
                    value: 'replace',
                  },
                  path: {
                    type: {
                      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                    },
                    value: '/deliveryStatus',
                  },
                  val: {
                    type: {
                      blueId: 'Gqcw51QJT9NStqo2ka3E76tQ8UZie33F4yqdjwskav79',
                    },
                  },
                },
                {
                  op: {
                    type: {
                      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                    },
                    value: 'replace',
                  },
                  path: {
                    type: {
                      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                    },
                    value: '/transactionIdentificationStatus',
                  },
                  val: {
                    type: {
                      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                    },
                    value: 'pending',
                  },
                },
                {
                  op: {
                    type: {
                      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                    },
                    value: 'replace',
                  },
                  path: {
                    type: {
                      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                    },
                    value: '/clientDecisionStatus',
                  },
                  val: {
                    type: {
                      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                    },
                    value: 'pending',
                  },
                },
                {
                  op: {
                    type: {
                      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                    },
                    value: 'replace',
                  },
                  path: {
                    type: {
                      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                    },
                    value: '/deliveryError',
                  },
                  val: {
                    type: {
                      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                    },
                    value: '',
                  },
                },
              ],
            },
            name: 'Initialize Delivery State',
            type: {
              blueId: 'FuD8hYGXvwBJGBzXhFB6DVtWHawt8hbpM6yT94H4p7cZ',
            },
          },
        ],
      },
      type: {
        blueId: '26w2LGCpoFHqcEpb22oJRodHCTew398PGc1WMLRevxqz',
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
    payNoteDeliverer: {
      description: 'Participant delivering and reporting status (e.g., bank).',
      type: {
        blueId: '9gQuMoLckgwgvAfx1X8tzdHwMNfRcraG96PfT5TDbXeh',
      },
    },
    payNoteSender: {
      description:
        'Participant submitting the PayNote delivery (merchant or processor).',
      type: {
        blueId: '9gQuMoLckgwgvAfx1X8tzdHwMNfRcraG96PfT5TDbXeh',
      },
    },
    rejectPayNote: {
      channel: {
        type: {
          blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
        },
        value: 'payNoteDeliverer',
      },
      request: {
        reason: {
          description: 'Optional rejection reason.',
          type: {
            blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
          },
        },
        rejectedAt: {
          description: 'Timestamp when the client rejected.',
          type: {
            blueId: 'GQaGqFxHDz64L1c9QkCbz52ths6bMVtpHnw4QDngzQYs',
          },
        },
      },
      type: {
        blueId: '9Fu3Rjq8hNKnZS71ZU8RXBBupZEa7Wb8z44GtzfSwjbr',
      },
    },
    rejectPayNoteImpl: {
      operation: {
        type: {
          blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
        },
        value: 'rejectPayNote',
      },
      steps: {
        items: [
          {
            entry: {
              type: {
                blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
              },
              value: 'reject',
            },
            functions: {
              asText: {
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
                    else: {
                      type: {
                        blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                      },
                      value: '',
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
              reject: {
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
                              value: 'request',
                            },
                            {
                              type: {
                                blueId:
                                  'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                              },
                              value: 'safeReason',
                            },
                            {
                              type: {
                                blueId:
                                  'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                              },
                              value: 'rejectedAt',
                            },
                            {
                              type: {
                                blueId:
                                  'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                              },
                              value: 'currentDecisionStatus',
                            },
                            {
                              type: {
                                blueId:
                                  'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                              },
                              value: 'alreadyDecided',
                            },
                            {
                              type: {
                                blueId:
                                  'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                              },
                              value: 'transactionStatus',
                            },
                            {
                              type: {
                                blueId:
                                  'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                              },
                              value: 'canReject',
                            },
                            {
                              type: {
                                blueId:
                                  'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                              },
                              value: 'discardReason',
                            },
                            {
                              type: {
                                blueId:
                                  'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                              },
                              value: 'nextDecisionStatus',
                            },
                            {
                              type: {
                                blueId:
                                  'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                              },
                              value: 'nextRejectedAt',
                            },
                            {
                              type: {
                                blueId:
                                  'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                              },
                              value: 'nextDeliveryStatus',
                            },
                            {
                              type: {
                                blueId:
                                  'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                              },
                              value: 'nextDeliveryError',
                            },
                          ],
                        },
                        vars: {
                          alreadyDecided: {
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
                                          value: 'currentDecisionStatus',
                                        },
                                      },
                                      {
                                        type: {
                                          blueId:
                                            'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                        },
                                        value: 'accepted',
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
                                          value: 'currentDecisionStatus',
                                        },
                                      },
                                      {
                                        type: {
                                          blueId:
                                            'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                        },
                                        value: 'rejected',
                                      },
                                    ],
                                  },
                                },
                              ],
                            },
                          },
                          canReject: {
                            $and: {
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
                                          value: 'transactionStatus',
                                        },
                                      },
                                      {
                                        type: {
                                          blueId:
                                            'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                        },
                                        value: 'identified',
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
                                          value: 'currentDecisionStatus',
                                        },
                                      },
                                      {
                                        type: {
                                          blueId:
                                            'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                        },
                                        value: 'pending',
                                      },
                                    ],
                                  },
                                },
                              ],
                            },
                          },
                          currentDecisionStatus: {
                            $call: {
                              args: {
                                val: {
                                  $document: {
                                    type: {
                                      blueId:
                                        'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                    },
                                    value: '/clientDecisionStatus',
                                  },
                                },
                              },
                              function: {
                                type: {
                                  blueId:
                                    'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                },
                                value: 'asText',
                              },
                            },
                          },
                          discardReason: {
                            $choose: {
                              cond: {
                                $var: {
                                  type: {
                                    blueId:
                                      'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                  },
                                  value: 'canReject',
                                },
                              },
                              else: {
                                $choose: {
                                  cond: {
                                    $var: {
                                      type: {
                                        blueId:
                                          'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                      },
                                      value: 'alreadyDecided',
                                    },
                                  },
                                  else: {
                                    $choose: {
                                      cond: {
                                        $eq: {
                                          items: [
                                            {
                                              $var: {
                                                type: {
                                                  blueId:
                                                    'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                                },
                                                value: 'transactionStatus',
                                              },
                                            },
                                            {
                                              type: {
                                                blueId:
                                                  'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                              },
                                              value: 'failed',
                                            },
                                          ],
                                        },
                                      },
                                      else: {
                                        type: {
                                          blueId:
                                            'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                        },
                                        value: 'Transaction not identified',
                                      },
                                      then: {
                                        type: {
                                          blueId:
                                            'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                        },
                                        value:
                                          'Transaction identification failed',
                                      },
                                    },
                                  },
                                  then: {
                                    $concat: {
                                      items: [
                                        {
                                          type: {
                                            blueId:
                                              'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                          },
                                          value: 'PayNote already',
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
                                            value: 'currentDecisionStatus',
                                          },
                                        },
                                      ],
                                    },
                                  },
                                },
                              },
                              then: {
                                type: {
                                  blueId:
                                    'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                },
                                value: '',
                              },
                            },
                          },
                          nextDecisionStatus: {
                            $choose: {
                              cond: {
                                $var: {
                                  type: {
                                    blueId:
                                      'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                  },
                                  value: 'canReject',
                                },
                              },
                              else: {
                                $choose: {
                                  cond: {
                                    $truthy: {
                                      $var: {
                                        type: {
                                          blueId:
                                            'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                        },
                                        value: 'currentDecisionStatus',
                                      },
                                    },
                                  },
                                  else: {
                                    type: {
                                      blueId:
                                        'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                    },
                                    value: 'pending',
                                  },
                                  then: {
                                    $var: {
                                      type: {
                                        blueId:
                                          'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                      },
                                      value: 'currentDecisionStatus',
                                    },
                                  },
                                },
                              },
                              then: {
                                type: {
                                  blueId:
                                    'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                },
                                value: 'rejected',
                              },
                            },
                          },
                          nextDeliveryError: {
                            $choose: {
                              cond: {
                                $var: {
                                  type: {
                                    blueId:
                                      'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                  },
                                  value: 'canReject',
                                },
                              },
                              else: {
                                $call: {
                                  args: {
                                    val: {
                                      $document: {
                                        type: {
                                          blueId:
                                            'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                        },
                                        value: '/deliveryError',
                                      },
                                    },
                                  },
                                  function: {
                                    type: {
                                      blueId:
                                        'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                    },
                                    value: 'asText',
                                  },
                                },
                              },
                              then: {
                                $var: {
                                  type: {
                                    blueId:
                                      'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                  },
                                  value: 'safeReason',
                                },
                              },
                            },
                          },
                          nextDeliveryStatus: {
                            $choose: {
                              cond: {
                                $var: {
                                  type: {
                                    blueId:
                                      'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                  },
                                  value: 'canReject',
                                },
                              },
                              else: {
                                $default: {
                                  items: [
                                    {
                                      $document: {
                                        type: {
                                          blueId:
                                            'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                        },
                                        value: '/deliveryStatus',
                                      },
                                    },
                                    {
                                      mode: {
                                        type: {
                                          blueId:
                                            'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                        },
                                        value: 'pending',
                                      },
                                      type: {
                                        blueId:
                                          'Gqcw51QJT9NStqo2ka3E76tQ8UZie33F4yqdjwskav79',
                                      },
                                    },
                                  ],
                                },
                              },
                              then: {
                                mode: {
                                  type: {
                                    blueId:
                                      'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                  },
                                  value: 'terminated',
                                },
                                type: {
                                  blueId:
                                    'Fh7VjkS1XTg9BzQWBQrvD9ePLUEZVR86FAhVbttw1Wxs',
                                },
                              },
                            },
                          },
                          nextRejectedAt: {
                            $choose: {
                              cond: {
                                $var: {
                                  type: {
                                    blueId:
                                      'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                  },
                                  value: 'canReject',
                                },
                              },
                              else: {
                                $call: {
                                  args: {
                                    val: {
                                      $document: {
                                        type: {
                                          blueId:
                                            'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                        },
                                        value: '/clientRejectedAt',
                                      },
                                    },
                                  },
                                  function: {
                                    type: {
                                      blueId:
                                        'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                    },
                                    value: 'asText',
                                  },
                                },
                              },
                              then: {
                                $var: {
                                  type: {
                                    blueId:
                                      'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                  },
                                  value: 'rejectedAt',
                                },
                              },
                            },
                          },
                          rejectedAt: {
                            $call: {
                              args: {
                                val: {
                                  $event: {
                                    type: {
                                      blueId:
                                        'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                    },
                                    value: '/message/request/rejectedAt',
                                  },
                                },
                              },
                              function: {
                                type: {
                                  blueId:
                                    'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                },
                                value: 'asText',
                              },
                            },
                          },
                          request: {
                            $event: {
                              type: {
                                blueId:
                                  'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                              },
                              value: '/message/request',
                            },
                          },
                          safeReason: {
                            $choose: {
                              cond: {
                                $isKind: {
                                  kind: {
                                    type: {
                                      blueId:
                                        'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                    },
                                    value: 'text',
                                  },
                                  val: {
                                    $event: {
                                      type: {
                                        blueId:
                                          'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                      },
                                      value: '/message/request',
                                    },
                                  },
                                },
                              },
                              else: {
                                $call: {
                                  args: {
                                    val: {
                                      $event: {
                                        type: {
                                          blueId:
                                            'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                        },
                                        value: '/message/request/reason',
                                      },
                                    },
                                  },
                                  function: {
                                    type: {
                                      blueId:
                                        'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                    },
                                    value: 'asText',
                                  },
                                },
                              },
                              then: {
                                $event: {
                                  type: {
                                    blueId:
                                      'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                  },
                                  value: '/message/request',
                                },
                              },
                            },
                          },
                          transactionStatus: {
                            $call: {
                              args: {
                                val: {
                                  $document: {
                                    type: {
                                      blueId:
                                        'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                    },
                                    value: '/transactionIdentificationStatus',
                                  },
                                },
                              },
                              function: {
                                type: {
                                  blueId:
                                    'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                },
                                value: 'asText',
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
                            blueId:
                              'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                          },
                          value: 'replace',
                        },
                        path: {
                          type: {
                            blueId:
                              'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                          },
                          value: '/clientDecisionStatus',
                        },
                        val: {
                          $var: {
                            type: {
                              blueId:
                                'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                            },
                            value: 'nextDecisionStatus',
                          },
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
                          value: 'replace',
                        },
                        path: {
                          type: {
                            blueId:
                              'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                          },
                          value: '/clientRejectedAt',
                        },
                        val: {
                          $var: {
                            type: {
                              blueId:
                                'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                            },
                            value: 'nextRejectedAt',
                          },
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
                          value: 'replace',
                        },
                        path: {
                          type: {
                            blueId:
                              'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                          },
                          value: '/deliveryStatus',
                        },
                        val: {
                          $var: {
                            type: {
                              blueId:
                                'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                            },
                            value: 'nextDeliveryStatus',
                          },
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
                          value: 'replace',
                        },
                        path: {
                          type: {
                            blueId:
                              'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                          },
                          value: '/deliveryError',
                        },
                        val: {
                          $var: {
                            type: {
                              blueId:
                                'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                            },
                            value: 'nextDeliveryError',
                          },
                        },
                      },
                    },
                    {
                      $if: {
                        cond: {
                          $var: {
                            type: {
                              blueId:
                                'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                            },
                            value: 'canReject',
                          },
                        },
                        else: {
                          items: [
                            {
                              $appendEvent: {
                                decision: {
                                  type: {
                                    blueId:
                                      'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                  },
                                  value: 'rejected',
                                },
                                decisionAt: {
                                  $var: {
                                    type: {
                                      blueId:
                                        'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                    },
                                    value: 'rejectedAt',
                                  },
                                },
                                reason: {
                                  $var: {
                                    type: {
                                      blueId:
                                        'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                    },
                                    value: 'discardReason',
                                  },
                                },
                                type: {
                                  blueId:
                                    '8hhTj5tHF6SorKyCXtkyr6cendUne9A6eYJ225dJjLJW',
                                },
                              },
                            },
                          ],
                        },
                        then: {
                          items: [
                            {
                              $appendEvent: {
                                reason: {
                                  $var: {
                                    type: {
                                      blueId:
                                        'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                    },
                                    value: 'safeReason',
                                  },
                                },
                                rejectedAt: {
                                  $var: {
                                    type: {
                                      blueId:
                                        'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                    },
                                    value: 'rejectedAt',
                                  },
                                },
                                type: {
                                  blueId:
                                    '6EwokAQarCKdRXuU2wpkCyHfXzhr1CgjY5feVomsYJob',
                                },
                              },
                            },
                          ],
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
            },
            name: 'CaptureRejectionReason',
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
    reportDeliveryError: {
      channel: {
        type: {
          blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
        },
        value: 'payNoteDeliverer',
      },
      request: {
        description: 'Delivery error reason.',
        type: {
          blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
        },
      },
      type: {
        blueId: '9Fu3Rjq8hNKnZS71ZU8RXBBupZEa7Wb8z44GtzfSwjbr',
      },
    },
    reportDeliveryErrorImpl: {
      operation: {
        type: {
          blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
        },
        value: 'reportDeliveryError',
      },
      steps: {
        items: [
          {
            do: {
              items: [
                {
                  $let: {
                    expr: {
                      $choose: {
                        cond: {
                          $isKind: {
                            kind: {
                              type: {
                                blueId:
                                  'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                              },
                              value: 'text',
                            },
                            val: {
                              $event: {
                                type: {
                                  blueId:
                                    'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                },
                                value: '/message/request',
                              },
                            },
                          },
                        },
                        else: {
                          type: {
                            blueId:
                              'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                          },
                          value: '',
                        },
                        then: {
                          $event: {
                            type: {
                              blueId:
                                'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                            },
                            value: '/message/request',
                          },
                        },
                      },
                    },
                    name: 'reason',
                  },
                },
                {
                  $appendEvent: {
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
                      blueId: '3VLavrr4LCLqo5FV1XxXhxUGryHBzBGQoFKTGWaXv7PM',
                    },
                  },
                },
                {
                  $appendChange: {
                    op: {
                      type: {
                        blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                      },
                      value: 'replace',
                    },
                    path: {
                      type: {
                        blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                      },
                      value: '/deliveryStatus',
                    },
                    val: {
                      mode: {
                        type: {
                          blueId:
                            'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                        },
                        value: 'terminated',
                      },
                      type: {
                        blueId: 'Fh7VjkS1XTg9BzQWBQrvD9ePLUEZVR86FAhVbttw1Wxs',
                      },
                    },
                  },
                },
                {
                  $appendChange: {
                    op: {
                      type: {
                        blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                      },
                      value: 'replace',
                    },
                    path: {
                      type: {
                        blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                      },
                      value: '/deliveryError',
                    },
                    val: {
                      $var: {
                        type: {
                          blueId:
                            'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                        },
                        value: 'reason',
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
            name: 'CaptureDeliveryFailureReason',
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
    updateTransactionIdentificationStatus: {
      channel: {
        type: {
          blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
        },
        value: 'payNoteDeliverer',
      },
      request: {
        description: 'True when the transaction is identified.',
        type: {
          blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
        },
      },
      type: {
        blueId: '9Fu3Rjq8hNKnZS71ZU8RXBBupZEa7Wb8z44GtzfSwjbr',
      },
    },
    updateTransactionIdentificationStatusImpl: {
      operation: {
        type: {
          blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
        },
        value: 'updateTransactionIdentificationStatus',
      },
      steps: {
        items: [
          {
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
                          value: 'identified',
                        },
                        {
                          type: {
                            blueId:
                              'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                          },
                          value: 'currentStatus',
                        },
                        {
                          type: {
                            blueId:
                              'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                          },
                          value: 'canUpdate',
                        },
                        {
                          type: {
                            blueId:
                              'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                          },
                          value: 'nextIdentificationStatus',
                        },
                        {
                          type: {
                            blueId:
                              'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                          },
                          value: 'nextDeliveryStatus',
                        },
                        {
                          type: {
                            blueId:
                              'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                          },
                          value: 'nextDeliveryError',
                        },
                      ],
                    },
                    vars: {
                      canUpdate: {
                        $not: {
                          $or: {
                            items: [
                              {
                                $eq: {
                                  items: [
                                    {
                                      $document: {
                                        type: {
                                          blueId:
                                            'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                        },
                                        value:
                                          '/transactionIdentificationStatus',
                                      },
                                    },
                                    {
                                      type: {
                                        blueId:
                                          'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                      },
                                      value: 'identified',
                                    },
                                  ],
                                },
                              },
                              {
                                $eq: {
                                  items: [
                                    {
                                      $document: {
                                        type: {
                                          blueId:
                                            'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                        },
                                        value:
                                          '/transactionIdentificationStatus',
                                      },
                                    },
                                    {
                                      type: {
                                        blueId:
                                          'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                      },
                                      value: 'failed',
                                    },
                                  ],
                                },
                              },
                            ],
                          },
                        },
                      },
                      currentStatus: {
                        $document: {
                          type: {
                            blueId:
                              'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                          },
                          value: '/transactionIdentificationStatus',
                        },
                      },
                      identified: {
                        $eq: {
                          items: [
                            {
                              $event: {
                                type: {
                                  blueId:
                                    'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                },
                                value: '/message/request',
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
                      nextDeliveryError: {
                        $choose: {
                          cond: {
                            $var: {
                              type: {
                                blueId:
                                  'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                              },
                              value: 'canUpdate',
                            },
                          },
                          else: {
                            $default: {
                              items: [
                                {
                                  $document: {
                                    type: {
                                      blueId:
                                        'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                    },
                                    value: '/deliveryError',
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
                          then: {
                            $choose: {
                              cond: {
                                $var: {
                                  type: {
                                    blueId:
                                      'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                  },
                                  value: 'identified',
                                },
                              },
                              else: {
                                type: {
                                  blueId:
                                    'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                },
                                value: 'Transaction identification failed',
                              },
                              then: {
                                type: {
                                  blueId:
                                    'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                },
                                value: '',
                              },
                            },
                          },
                        },
                      },
                      nextDeliveryStatus: {
                        $choose: {
                          cond: {
                            $var: {
                              type: {
                                blueId:
                                  'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                              },
                              value: 'canUpdate',
                            },
                          },
                          else: {
                            $default: {
                              items: [
                                {
                                  $document: {
                                    type: {
                                      blueId:
                                        'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                    },
                                    value: '/deliveryStatus',
                                  },
                                },
                                {
                                  mode: {
                                    type: {
                                      blueId:
                                        'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                    },
                                    value: 'pending',
                                  },
                                  type: {
                                    blueId:
                                      'Gqcw51QJT9NStqo2ka3E76tQ8UZie33F4yqdjwskav79',
                                  },
                                },
                              ],
                            },
                          },
                          then: {
                            $choose: {
                              cond: {
                                $var: {
                                  type: {
                                    blueId:
                                      'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                  },
                                  value: 'identified',
                                },
                              },
                              else: {
                                mode: {
                                  type: {
                                    blueId:
                                      'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                  },
                                  value: 'terminated',
                                },
                                type: {
                                  blueId:
                                    'Fh7VjkS1XTg9BzQWBQrvD9ePLUEZVR86FAhVbttw1Wxs',
                                },
                              },
                              then: {
                                mode: {
                                  type: {
                                    blueId:
                                      'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                  },
                                  value: 'active',
                                },
                                type: {
                                  blueId:
                                    'E6jaeVfFuyjB4YEZyp7fvUt8AJ7BmKr8WAM9oGDmhMbM',
                                },
                              },
                            },
                          },
                        },
                      },
                      nextIdentificationStatus: {
                        $choose: {
                          cond: {
                            $var: {
                              type: {
                                blueId:
                                  'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                              },
                              value: 'canUpdate',
                            },
                          },
                          else: {
                            $var: {
                              type: {
                                blueId:
                                  'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                              },
                              value: 'currentStatus',
                            },
                          },
                          then: {
                            $choose: {
                              cond: {
                                $var: {
                                  type: {
                                    blueId:
                                      'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                  },
                                  value: 'identified',
                                },
                              },
                              else: {
                                type: {
                                  blueId:
                                    'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                },
                                value: 'failed',
                              },
                              then: {
                                type: {
                                  blueId:
                                    'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                },
                                value: 'identified',
                              },
                            },
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
                        blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                      },
                      value: 'replace',
                    },
                    path: {
                      type: {
                        blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                      },
                      value: '/transactionIdentificationStatus',
                    },
                    val: {
                      $var: {
                        type: {
                          blueId:
                            'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                        },
                        value: 'nextIdentificationStatus',
                      },
                    },
                  },
                },
                {
                  $appendChange: {
                    op: {
                      type: {
                        blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                      },
                      value: 'replace',
                    },
                    path: {
                      type: {
                        blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                      },
                      value: '/deliveryStatus',
                    },
                    val: {
                      $var: {
                        type: {
                          blueId:
                            'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                        },
                        value: 'nextDeliveryStatus',
                      },
                    },
                  },
                },
                {
                  $appendChange: {
                    op: {
                      type: {
                        blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                      },
                      value: 'replace',
                    },
                    path: {
                      type: {
                        blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                      },
                      value: '/deliveryError',
                    },
                    val: {
                      $var: {
                        type: {
                          blueId:
                            'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                        },
                        value: 'nextDeliveryError',
                      },
                    },
                  },
                },
                {
                  $if: {
                    cond: {
                      $var: {
                        type: {
                          blueId:
                            'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                        },
                        value: 'canUpdate',
                      },
                    },
                    then: {
                      items: [
                        {
                          $if: {
                            cond: {
                              $var: {
                                type: {
                                  blueId:
                                    'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                },
                                value: 'identified',
                              },
                            },
                            else: {
                              items: [
                                {
                                  $appendEvent: {
                                    type: {
                                      blueId:
                                        '8XH1vN2R5tLKQKRz4bJzv1JuEnare6Q4G4A49gpJXceW',
                                    },
                                  },
                                },
                              ],
                            },
                            then: {
                              items: [
                                {
                                  $appendEvent: {
                                    type: {
                                      blueId:
                                        'FjaxYHKQ3DZ7h6ooFwVwD2Gs2WygLsw33xQ9vMLZzk8H',
                                    },
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
            name: 'ClassifyIdentificationResult',
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
  },
  deliveryError: {
    description: 'Error message when delivery fails.',
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
  deliveryStatus: {
    description: 'High-level delivery status.',
    type: {
      blueId: 'QHoUCCVhepZWQnSo9VfZCJWbSwyA9TuT65tBZMVtnRX',
    },
  },
  description:
    'Tracks delivery of a PayNote through a deliverer (e.g., bank) to a receiver (payer - client).',
  name: 'PayNote Delivery',
  paymentMandateBootstrapRequest: {
    description:
      'Optional Payment Mandate bootstrap request details for Delivery flows that require mandate attachment before proposal exposure.',
    document: {
      type: {
        blueId: '5fBQHAnRCh6a5DwzJFV2f31yExvRhsnKNNMcuZnMHXry',
      },
    },
    type: {
      blueId: 'DRKHv2QVLQneubWYELKCoHcfen76T7KxDk5pdCT9w8Bw',
    },
  },
  payNoteBootstrapRequest: {
    description: 'PayNote bootstrap request details.',
    document: {
      type: {
        blueId: 'GS7qK6RBWAKdCFMy6hdeQNgmqeAkw5LrbcktFfnQdAxe',
      },
    },
    type: {
      blueId: 'DRKHv2QVLQneubWYELKCoHcfen76T7KxDk5pdCT9w8Bw',
    },
  },
  transactionIdentificationStatus: {
    description: 'Identification state (pending, identified, failed).',
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
} as const;
