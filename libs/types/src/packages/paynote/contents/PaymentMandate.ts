export const PaymentMandate = {
  allowedPaymentCounterparties: {
    description:
      'Optional payment counterparty allowlist. Missing list means wildcard (any counterparty is allowed).\n',
    itemType: {
      counterpartyId: {
        description:
          'Counterparty identifier interpreted according to counterpartyType.',
        type: {
          blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
        },
      },
      counterpartyType: {
        description:
          'Allowed payment counterparty identifier type:\n- merchantId\n- customerId\n- accountNumber\n',
        type: {
          blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
        },
      },
    },
    type: {
      blueId: '6aehfNAxHLC1PHHoDr3tYtFH3RWNbiWdFancJ1bypXEY',
    },
  },
  allowedPayNotes: {
    description:
      'Optional linked PayNote allowlist. Used only when allowLinkedPayNote is true. Missing list means wildcard (any linked PayNote is allowed). Each entry must set exactly one selector: typeBlueId or documentBlueId.\n',
    itemType: {
      documentBlueId: {
        description:
          'Optional blue-id of an allowed concrete PayNote document. Mutually exclusive with typeBlueId.\n',
        type: {
          blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
        },
      },
      typeBlueId: {
        description:
          'Optional blue-id of an allowed PayNote type. Mutually exclusive with documentBlueId.\n',
        type: {
          blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
        },
      },
    },
    type: {
      blueId: '6aehfNAxHLC1PHHoDr3tYtFH3RWNbiWdFancJ1bypXEY',
    },
  },
  allowLinkedPayNote: {
    description:
      'Whether this mandate allows linked PayNote startup after charge execution.',
    type: {
      blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
    },
  },
  amountCaptured: {
    description:
      'Running captured amount in minor currency units. Increased after successful capture.\n',
    type: {
      blueId: '5WNMiV9Knz63B4dVY5JtMyh3FB4FSGqv7ceScvuapdE1',
    },
  },
  amountLimit: {
    description:
      'Maximum amount in minor currency units allowed by this mandate.',
    type: {
      blueId: '5WNMiV9Knz63B4dVY5JtMyh3FB4FSGqv7ceScvuapdE1',
    },
  },
  amountReserved: {
    description:
      'Running reserved amount in minor currency units. Increased after successful reserve/authorize, decreased after release/capture.\n',
    type: {
      blueId: '5WNMiV9Knz63B4dVY5JtMyh3FB4FSGqv7ceScvuapdE1',
    },
  },
  chargeAttempts: {
    description:
      'Stateful map of authorizationId -> authorization state (authorization + settlement).',
    keyType: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
    type: {
      blueId: 'G7fBT9PSod1RfHLHkpafAGBDVAJMrMhAMY51ERcyXNrj',
    },
    valueType: {
      amountMinor: {
        description: 'Requested amount in minor currency units.',
        type: {
          blueId: '5WNMiV9Knz63B4dVY5JtMyh3FB4FSGqv7ceScvuapdE1',
        },
      },
      authorizationReason: {
        description: 'Optional authorization rejection reason.',
        type: {
          blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
        },
      },
      authorizationRespondedAt: {
        description: 'Timestamp of authorization decision response.',
        type: {
          blueId: 'GQaGqFxHDz64L1c9QkCbz52ths6bMVtpHnw4QDngzQYs',
        },
      },
      authorizationStatus: {
        description: 'Authorization decision status ("approved" | "rejected").',
        type: {
          blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
        },
      },
      authorizedAmountMinor: {
        description:
          'Authorized amount reserved against mandate capacity for this attempt.',
        type: {
          blueId: '5WNMiV9Knz63B4dVY5JtMyh3FB4FSGqv7ceScvuapdE1',
        },
      },
      capturedDeltaMinor: {
        description: 'Captured delta applied for accepted settlement.',
        type: {
          blueId: '5WNMiV9Knz63B4dVY5JtMyh3FB4FSGqv7ceScvuapdE1',
        },
      },
      chargeMode: {
        description:
          'Requested charge mode ("authorize_only" | "authorize_and_capture").',
        type: {
          blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
        },
      },
      counterpartyId: {
        description:
          'Counterparty identifier interpreted according to counterpartyType.',
        type: {
          blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
        },
      },
      counterpartyType: {
        description:
          'Counterparty identifier type ("merchantId" | "customerId" | "accountNumber").',
        type: {
          blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
        },
      },
      currency: {
        description: 'Requested currency.',
        type: {
          blueId: 'CBnZ7aaNetj9KEqXpUWj5jvjKbmviLivP98T2EiyxiYc',
        },
      },
      holdId: {
        description: 'Optional hold id associated with settlement.',
        type: {
          blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
        },
      },
      lastSettlementId: {
        description:
          'Optional last applied settlement id for idempotency tracking.',
        type: {
          blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
        },
      },
      lastSettlementProcessingStatus: {
        description:
          'Mandate processing status for last settlement ("accepted" | "rejected").',
        type: {
          blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
        },
      },
      lastSettlementRequestStatus: {
        description:
          'Last settlement request status received from bank ("succeeded" | "failed").',
        type: {
          blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
        },
      },
      reservedDeltaMinor: {
        description: 'Reserved delta applied for accepted settlement.',
        type: {
          blueId: '5WNMiV9Knz63B4dVY5JtMyh3FB4FSGqv7ceScvuapdE1',
        },
      },
      settled: {
        description: 'Whether mandate accepted settlement for this attempt.',
        type: {
          blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
        },
      },
      settlementReason: {
        description: 'Optional settlement rejection/info reason.',
        type: {
          blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
        },
      },
      settlementRespondedAt: {
        description: 'Timestamp of last settlement processing response.',
        type: {
          blueId: 'GQaGqFxHDz64L1c9QkCbz52ths6bMVtpHnw4QDngzQYs',
        },
      },
      transactionId: {
        description: 'Optional transaction id associated with settlement.',
        type: {
          blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
        },
      },
    },
  },
  contracts: {
    authorizeSpend: {
      channel: {
        type: {
          blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
        },
        value: 'guarantorChannel',
      },
      description:
        'Validate a charge attempt against mandate policy and reserve capacity.',
      request: {
        type: {
          blueId: 'AnxxLd7NofAKrwNp22fvP4jQ24aAHKKvxsv4aXJgjziP',
        },
      },
      type: {
        blueId: '9Fu3Rjq8hNKnZS71ZU8RXBBupZEa7Wb8z44GtzfSwjbr',
      },
    },
    authorizeSpendImpl: {
      operation: {
        type: {
          blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
        },
        value: 'authorizeSpend',
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
                          value: 'authorizationId',
                        },
                        {
                          type: {
                            blueId:
                              'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                          },
                          value: 'amountMinor',
                        },
                        {
                          type: {
                            blueId:
                              'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                          },
                          value: 'requestedCurrency',
                        },
                        {
                          type: {
                            blueId:
                              'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                          },
                          value: 'counterpartyType',
                        },
                        {
                          type: {
                            blueId:
                              'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                          },
                          value: 'counterpartyId',
                        },
                        {
                          type: {
                            blueId:
                              'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                          },
                          value: 'chargeMode',
                        },
                        {
                          type: {
                            blueId:
                              'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                          },
                          value: 'nowIso',
                        },
                        {
                          type: {
                            blueId:
                              'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                          },
                          value: 'amountLimit',
                        },
                        {
                          type: {
                            blueId:
                              'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                          },
                          value: 'amountReserved',
                        },
                        {
                          type: {
                            blueId:
                              'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                          },
                          value: 'amountCaptured',
                        },
                        {
                          type: {
                            blueId:
                              'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                          },
                          value: 'mandateCurrency',
                        },
                        {
                          type: {
                            blueId:
                              'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                          },
                          value: 'revokedAt',
                        },
                        {
                          type: {
                            blueId:
                              'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                          },
                          value: 'chargeAttempts',
                        },
                        {
                          type: {
                            blueId:
                              'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                          },
                          value: 'existingAttempt',
                        },
                        {
                          type: {
                            blueId:
                              'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                          },
                          value: 'existingDecision',
                        },
                        {
                          type: {
                            blueId:
                              'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                          },
                          value: 'existingReason',
                        },
                        {
                          type: {
                            blueId:
                              'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                          },
                          value: 'allowedCounterparties',
                        },
                        {
                          type: {
                            blueId:
                              'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                          },
                          value: 'counterpartyAllowed',
                        },
                        {
                          type: {
                            blueId:
                              'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                          },
                          value: 'status',
                        },
                        {
                          type: {
                            blueId:
                              'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                          },
                          value: 'reason',
                        },
                        {
                          type: {
                            blueId:
                              'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                          },
                          value: 'nextAmountReserved',
                        },
                        {
                          type: {
                            blueId:
                              'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                          },
                          value: 'nextChargeAttempts',
                        },
                      ],
                    },
                    vars: {
                      allowedCounterparties: {
                        $list: {
                          $document: {
                            type: {
                              blueId:
                                'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                            },
                            value: '/allowedPaymentCounterparties',
                          },
                        },
                      },
                      amountCaptured: {
                        $document: {
                          type: {
                            blueId:
                              'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                          },
                          value: '/amountCaptured',
                        },
                      },
                      amountLimit: {
                        $document: {
                          type: {
                            blueId:
                              'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                          },
                          value: '/amountLimit',
                        },
                      },
                      amountMinor: {
                        $choose: {
                          cond: {
                            $isKind: {
                              kind: {
                                type: {
                                  blueId:
                                    'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                },
                                value: 'integer',
                              },
                              val: {
                                $event: {
                                  type: {
                                    blueId:
                                      'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                  },
                                  value: '/message/request/amountMinor',
                                },
                              },
                            },
                          },
                          else: {
                            type: {
                              blueId:
                                '5WNMiV9Knz63B4dVY5JtMyh3FB4FSGqv7ceScvuapdE1',
                            },
                            value: 0,
                          },
                          then: {
                            $event: {
                              type: {
                                blueId:
                                  'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                              },
                              value: '/message/request/amountMinor',
                            },
                          },
                        },
                      },
                      amountReserved: {
                        $document: {
                          type: {
                            blueId:
                              'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                          },
                          value: '/amountReserved',
                        },
                      },
                      authorizationId: {
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
                                  value: '/message/request/authorizationId',
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
                              value: '/message/request/authorizationId',
                            },
                          },
                        },
                      },
                      chargeAttempts: {
                        $call: {
                          args: {
                            object: {
                              $object: {
                                $document: {
                                  type: {
                                    blueId:
                                      'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                  },
                                  value: '/chargeAttempts',
                                },
                              },
                            },
                          },
                          function: {
                            type: {
                              blueId:
                                'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                            },
                            value: 'cleanMap',
                          },
                        },
                      },
                      chargeMode: {
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
                                  value: '/message/request/chargeMode',
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
                              value: '/message/request/chargeMode',
                            },
                          },
                        },
                      },
                      counterpartyAllowed: {
                        $or: {
                          items: [
                            {
                              $eq: {
                                items: [
                                  {
                                    $size: {
                                      $list: {
                                        $document: {
                                          type: {
                                            blueId:
                                              'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                          },
                                          value:
                                            '/allowedPaymentCounterparties',
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
                            {
                              $some: {
                                in: {
                                  $list: {
                                    $document: {
                                      type: {
                                        blueId:
                                          'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                      },
                                      value: '/allowedPaymentCounterparties',
                                    },
                                  },
                                },
                                item: {
                                  type: {
                                    blueId:
                                      'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                  },
                                  value: 'item',
                                },
                                where: {
                                  $and: {
                                    items: [
                                      {
                                        $eq: {
                                          items: [
                                            {
                                              $var: {
                                                name: 'item',
                                                path: {
                                                  type: {
                                                    blueId:
                                                      'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                                  },
                                                  value: '/counterpartyType',
                                                },
                                              },
                                            },
                                            {
                                              $var: {
                                                type: {
                                                  blueId:
                                                    'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                                },
                                                value: 'counterpartyType',
                                              },
                                            },
                                          ],
                                        },
                                      },
                                      {
                                        $eq: {
                                          items: [
                                            {
                                              $var: {
                                                name: 'item',
                                                path: {
                                                  type: {
                                                    blueId:
                                                      'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                                  },
                                                  value: '/counterpartyId',
                                                },
                                              },
                                            },
                                            {
                                              $var: {
                                                type: {
                                                  blueId:
                                                    'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                                },
                                                value: 'counterpartyId',
                                              },
                                            },
                                          ],
                                        },
                                      },
                                    ],
                                  },
                                },
                              },
                            },
                          ],
                        },
                      },
                      counterpartyId: {
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
                                  value: '/message/request/counterpartyId',
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
                              value: '/message/request/counterpartyId',
                            },
                          },
                        },
                      },
                      counterpartyType: {
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
                                  value: '/message/request/counterpartyType',
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
                              value: '/message/request/counterpartyType',
                            },
                          },
                        },
                      },
                      existingAttempt: {
                        $call: {
                          args: {
                            object: {
                              $object: {
                                $get: {
                                  key: {
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
                                              value:
                                                '/message/request/authorizationId',
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
                                          value:
                                            '/message/request/authorizationId',
                                        },
                                      },
                                    },
                                  },
                                  object: {
                                    $object: {
                                      $document: {
                                        type: {
                                          blueId:
                                            'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                        },
                                        value: '/chargeAttempts',
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
                                'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                            },
                            value: 'cleanMap',
                          },
                        },
                      },
                      existingDecision: {
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
                                  name: 'existingAttempt',
                                  path: {
                                    type: {
                                      blueId:
                                        'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                    },
                                    value: '/authorizationStatus',
                                  },
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
                            $var: {
                              name: 'existingAttempt',
                              path: {
                                type: {
                                  blueId:
                                    'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                },
                                value: '/authorizationStatus',
                              },
                            },
                          },
                        },
                      },
                      existingReason: {
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
                                  name: 'existingAttempt',
                                  path: {
                                    type: {
                                      blueId:
                                        'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                    },
                                    value: '/authorizationReason',
                                  },
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
                            $var: {
                              name: 'existingAttempt',
                              path: {
                                type: {
                                  blueId:
                                    'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                },
                                value: '/authorizationReason',
                              },
                            },
                          },
                        },
                      },
                      mandateCurrency: {
                        $document: {
                          type: {
                            blueId:
                              'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                          },
                          value: '/currency',
                        },
                      },
                      nextAmountReserved: {
                        $document: {
                          type: {
                            blueId:
                              'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                          },
                          value: '/amountReserved',
                        },
                      },
                      nextChargeAttempts: {
                        $call: {
                          args: {
                            object: {
                              $object: {
                                $document: {
                                  type: {
                                    blueId:
                                      'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                  },
                                  value: '/chargeAttempts',
                                },
                              },
                            },
                          },
                          function: {
                            type: {
                              blueId:
                                'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                            },
                            value: 'cleanMap',
                          },
                        },
                      },
                      nowIso: {
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
                                  value: '/message/request/requestedAt',
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
                              value: '/message/request/requestedAt',
                            },
                          },
                        },
                      },
                      reason: {
                        type: {
                          blueId:
                            'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                        },
                        value: '',
                      },
                      requestedCurrency: {
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
                                  value: '/message/request/currency',
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
                              value: '/message/request/currency',
                            },
                          },
                        },
                      },
                      revokedAt: {
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
                                $document: {
                                  type: {
                                    blueId:
                                      'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                  },
                                  value: '/revokedAt',
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
                            $document: {
                              type: {
                                blueId:
                                  'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                              },
                              value: '/revokedAt',
                            },
                          },
                        },
                      },
                      status: {
                        type: {
                          blueId:
                            'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                        },
                        value: 'rejected',
                      },
                    },
                  },
                },
                {
                  $if: {
                    cond: {
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
                                    value: 'existingDecision',
                                  },
                                },
                                {
                                  type: {
                                    blueId:
                                      'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                  },
                                  value: 'approved',
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
                                    value: 'existingDecision',
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
                    else: {
                      items: [
                        {
                          $if: {
                            cond: {
                              $not: {
                                $truthy: {
                                  $var: {
                                    type: {
                                      blueId:
                                        'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                    },
                                    value: 'authorizationId',
                                  },
                                },
                              },
                            },
                            else: {
                              items: [
                                {
                                  $if: {
                                    cond: {
                                      $lte: {
                                        items: [
                                          {
                                            $var: {
                                              type: {
                                                blueId:
                                                  'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                              },
                                              value: 'amountMinor',
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
                                          $if: {
                                            cond: {
                                              $or: {
                                                items: [
                                                  {
                                                    $not: {
                                                      $truthy: {
                                                        $var: {
                                                          type: {
                                                            blueId:
                                                              'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                                          },
                                                          value:
                                                            'requestedCurrency',
                                                        },
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
                                                                'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                                            },
                                                            value:
                                                              'requestedCurrency',
                                                          },
                                                        },
                                                        {
                                                          $var: {
                                                            type: {
                                                              blueId:
                                                                'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                                            },
                                                            value:
                                                              'mandateCurrency',
                                                          },
                                                        },
                                                      ],
                                                    },
                                                  },
                                                ],
                                              },
                                            },
                                            else: {
                                              items: [
                                                {
                                                  $if: {
                                                    cond: {
                                                      $truthy: {
                                                        $var: {
                                                          type: {
                                                            blueId:
                                                              'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                                          },
                                                          value: 'revokedAt',
                                                        },
                                                      },
                                                    },
                                                    else: {
                                                      items: [
                                                        {
                                                          $if: {
                                                            cond: {
                                                              $not: {
                                                                $var: {
                                                                  type: {
                                                                    blueId:
                                                                      'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                                                  },
                                                                  value:
                                                                    'counterpartyAllowed',
                                                                },
                                                              },
                                                            },
                                                            else: {
                                                              items: [
                                                                {
                                                                  $if: {
                                                                    cond: {
                                                                      $gt: {
                                                                        items: [
                                                                          {
                                                                            $add: {
                                                                              items:
                                                                                [
                                                                                  {
                                                                                    $var: {
                                                                                      type: {
                                                                                        blueId:
                                                                                          'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                                                                      },
                                                                                      value:
                                                                                        'amountReserved',
                                                                                    },
                                                                                  },
                                                                                  {
                                                                                    $var: {
                                                                                      type: {
                                                                                        blueId:
                                                                                          'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                                                                      },
                                                                                      value:
                                                                                        'amountCaptured',
                                                                                    },
                                                                                  },
                                                                                  {
                                                                                    $var: {
                                                                                      type: {
                                                                                        blueId:
                                                                                          'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                                                                      },
                                                                                      value:
                                                                                        'amountMinor',
                                                                                    },
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
                                                                              value:
                                                                                'amountLimit',
                                                                            },
                                                                          },
                                                                        ],
                                                                      },
                                                                    },
                                                                    else: {
                                                                      items: [
                                                                        {
                                                                          $set: {
                                                                            expr: {
                                                                              type: {
                                                                                blueId:
                                                                                  'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                                                              },
                                                                              value:
                                                                                'approved',
                                                                            },
                                                                            name: 'status',
                                                                          },
                                                                        },
                                                                        {
                                                                          $set: {
                                                                            expr: {
                                                                              $add: {
                                                                                items:
                                                                                  [
                                                                                    {
                                                                                      $var: {
                                                                                        type: {
                                                                                          blueId:
                                                                                            'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                                                                        },
                                                                                        value:
                                                                                          'amountReserved',
                                                                                      },
                                                                                    },
                                                                                    {
                                                                                      $var: {
                                                                                        type: {
                                                                                          blueId:
                                                                                            'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                                                                        },
                                                                                        value:
                                                                                          'amountMinor',
                                                                                      },
                                                                                    },
                                                                                  ],
                                                                              },
                                                                            },
                                                                            name: 'nextAmountReserved',
                                                                          },
                                                                        },
                                                                      ],
                                                                    },
                                                                    then: {
                                                                      items: [
                                                                        {
                                                                          $set: {
                                                                            expr: {
                                                                              type: {
                                                                                blueId:
                                                                                  'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                                                              },
                                                                              value:
                                                                                'Mandate amount limit exceeded.',
                                                                            },
                                                                            name: 'reason',
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
                                                                      type: {
                                                                        blueId:
                                                                          'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                                                      },
                                                                      value:
                                                                        'Counterparty is not allowed by mandate.',
                                                                    },
                                                                    name: 'reason',
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
                                                              type: {
                                                                blueId:
                                                                  'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                                              },
                                                              value:
                                                                'Mandate is revoked.',
                                                            },
                                                            name: 'reason',
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
                                                      type: {
                                                        blueId:
                                                          'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                                      },
                                                      value:
                                                        'Currency does not match mandate currency.',
                                                    },
                                                    name: 'reason',
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
                                              type: {
                                                blueId:
                                                  'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                              },
                                              value:
                                                'Amount must be greater than zero.',
                                            },
                                            name: 'reason',
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
                                      type: {
                                        blueId:
                                          'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                      },
                                      value: 'Missing authorizationId.',
                                    },
                                    name: 'reason',
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
                              $var: {
                                type: {
                                  blueId:
                                    'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                },
                                value: 'existingDecision',
                              },
                            },
                            name: 'status',
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
                                      value: 'existingDecision',
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
                            then: {
                              items: [
                                {
                                  $set: {
                                    expr: {
                                      $var: {
                                        type: {
                                          blueId:
                                            'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                        },
                                        value: 'existingReason',
                                      },
                                    },
                                    name: 'reason',
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
                  $if: {
                    cond: {
                      $and: {
                        items: [
                          {
                            $truthy: {
                              $var: {
                                type: {
                                  blueId:
                                    'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                },
                                value: 'authorizationId',
                              },
                            },
                          },
                          {
                            $not: {
                              $truthy: {
                                $var: {
                                  type: {
                                    blueId:
                                      'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                  },
                                  value: 'existingDecision',
                                },
                              },
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
                              $objectSet: {
                                key: {
                                  $var: {
                                    type: {
                                      blueId:
                                        'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                    },
                                    value: 'authorizationId',
                                  },
                                },
                                object: {
                                  $var: {
                                    type: {
                                      blueId:
                                        'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                    },
                                    value: 'nextChargeAttempts',
                                  },
                                },
                                val: {
                                  amountMinor: {
                                    $var: {
                                      type: {
                                        blueId:
                                          'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                      },
                                      value: 'amountMinor',
                                    },
                                  },
                                  authorizationReason: {
                                    $var: {
                                      type: {
                                        blueId:
                                          'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                      },
                                      value: 'reason',
                                    },
                                  },
                                  authorizationRespondedAt: {
                                    $var: {
                                      type: {
                                        blueId:
                                          'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                      },
                                      value: 'nowIso',
                                    },
                                  },
                                  authorizationStatus: {
                                    $var: {
                                      type: {
                                        blueId:
                                          'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                      },
                                      value: 'status',
                                    },
                                  },
                                  authorizedAmountMinor: {
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
                                                value: 'status',
                                              },
                                            },
                                            {
                                              type: {
                                                blueId:
                                                  'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                              },
                                              value: 'approved',
                                            },
                                          ],
                                        },
                                      },
                                      else: {
                                        type: {
                                          blueId:
                                            '5WNMiV9Knz63B4dVY5JtMyh3FB4FSGqv7ceScvuapdE1',
                                        },
                                        value: 0,
                                      },
                                      then: {
                                        $var: {
                                          type: {
                                            blueId:
                                              'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                          },
                                          value: 'amountMinor',
                                        },
                                      },
                                    },
                                  },
                                  capturedDeltaMinor: {
                                    type: {
                                      blueId:
                                        '5WNMiV9Knz63B4dVY5JtMyh3FB4FSGqv7ceScvuapdE1',
                                    },
                                    value: 0,
                                  },
                                  chargeMode: {
                                    $var: {
                                      type: {
                                        blueId:
                                          'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                      },
                                      value: 'chargeMode',
                                    },
                                  },
                                  counterpartyId: {
                                    $var: {
                                      type: {
                                        blueId:
                                          'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                      },
                                      value: 'counterpartyId',
                                    },
                                  },
                                  counterpartyType: {
                                    $var: {
                                      type: {
                                        blueId:
                                          'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                      },
                                      value: 'counterpartyType',
                                    },
                                  },
                                  currency: {
                                    $var: {
                                      type: {
                                        blueId:
                                          'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                      },
                                      value: 'requestedCurrency',
                                    },
                                  },
                                  holdId: {
                                    type: {
                                      blueId:
                                        'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                    },
                                    value: '',
                                  },
                                  lastSettlementProcessingStatus: {
                                    type: {
                                      blueId:
                                        'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                    },
                                    value: '',
                                  },
                                  lastSettlementRequestStatus: {
                                    type: {
                                      blueId:
                                        'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                    },
                                    value: '',
                                  },
                                  reservedDeltaMinor: {
                                    type: {
                                      blueId:
                                        '5WNMiV9Knz63B4dVY5JtMyh3FB4FSGqv7ceScvuapdE1',
                                    },
                                    value: 0,
                                  },
                                  settled: {
                                    type: {
                                      blueId:
                                        '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
                                    },
                                    value: false,
                                  },
                                  settlementReason: {
                                    type: {
                                      blueId:
                                        'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                    },
                                    value: '',
                                  },
                                  settlementRespondedAt: {
                                    type: {
                                      blueId:
                                        'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                    },
                                    value: '',
                                  },
                                  transactionId: {
                                    type: {
                                      blueId:
                                        'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                    },
                                    value: '',
                                  },
                                },
                              },
                            },
                            name: 'nextChargeAttempts',
                          },
                        },
                      ],
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
                          value: 'remainingAmountMinor',
                        },
                      ],
                    },
                    vars: {
                      remainingAmountMinor: {
                        $choose: {
                          cond: {
                            $gt: {
                              items: [
                                {
                                  $subtract: {
                                    items: [
                                      {
                                        $var: {
                                          type: {
                                            blueId:
                                              'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                          },
                                          value: 'amountLimit',
                                        },
                                      },
                                      {
                                        $add: {
                                          items: [
                                            {
                                              $var: {
                                                type: {
                                                  blueId:
                                                    'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                                },
                                                value: 'nextAmountReserved',
                                              },
                                            },
                                            {
                                              $var: {
                                                type: {
                                                  blueId:
                                                    'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                                },
                                                value: 'amountCaptured',
                                              },
                                            },
                                          ],
                                        },
                                      },
                                    ],
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
                            type: {
                              blueId:
                                '5WNMiV9Knz63B4dVY5JtMyh3FB4FSGqv7ceScvuapdE1',
                            },
                            value: 0,
                          },
                          then: {
                            $subtract: {
                              items: [
                                {
                                  $var: {
                                    type: {
                                      blueId:
                                        'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                    },
                                    value: 'amountLimit',
                                  },
                                },
                                {
                                  $add: {
                                    items: [
                                      {
                                        $var: {
                                          type: {
                                            blueId:
                                              'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                          },
                                          value: 'nextAmountReserved',
                                        },
                                      },
                                      {
                                        $var: {
                                          type: {
                                            blueId:
                                              'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                          },
                                          value: 'amountCaptured',
                                        },
                                      },
                                    ],
                                  },
                                },
                              ],
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
                      value: '/chargeAttempts',
                    },
                    val: {
                      $var: {
                        type: {
                          blueId:
                            'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                        },
                        value: 'nextChargeAttempts',
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
                      value: '/amountReserved',
                    },
                    val: {
                      $var: {
                        type: {
                          blueId:
                            'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                        },
                        value: 'nextAmountReserved',
                      },
                    },
                  },
                },
                {
                  $appendEvent: {
                    authorizationId: {
                      $var: {
                        type: {
                          blueId:
                            'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                        },
                        value: 'authorizationId',
                      },
                    },
                    reason: {
                      $choose: {
                        cond: {
                          $truthy: {
                            $var: {
                              type: {
                                blueId:
                                  'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                              },
                              value: 'reason',
                            },
                          },
                        },
                        then: {
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
                    remainingAmountMinor: {
                      $var: {
                        type: {
                          blueId:
                            'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                        },
                        value: 'remainingAmountMinor',
                      },
                    },
                    respondedAt: {
                      $var: {
                        type: {
                          blueId:
                            'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                        },
                        value: 'nowIso',
                      },
                    },
                    status: {
                      $var: {
                        type: {
                          blueId:
                            'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                        },
                        value: 'status',
                      },
                    },
                    type: {
                      blueId: '9h8QgAXNnpK8ekENXhGxvsqk74vXyBvdEbpHetsEYtQb',
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
            functions: {
              cleanMap: {
                args: {
                  object: {
                    value: null,
                  },
                },
                expr: {
                  $objectFromEntries: {
                    $filter: {
                      in: {
                        $entries: {
                          $var: {
                            type: {
                              blueId:
                                'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                            },
                            value: 'object',
                          },
                        },
                      },
                      item: {
                        type: {
                          blueId:
                            'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                        },
                        value: 'entry',
                      },
                      where: {
                        $not: {
                          $call: {
                            args: {
                              key: {
                                $var: {
                                  name: 'entry',
                                  path: {
                                    type: {
                                      blueId:
                                        'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                    },
                                    value: '/key',
                                  },
                                },
                              },
                            },
                            function: {
                              type: {
                                blueId:
                                  'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                              },
                              value: 'isLanguageKey',
                            },
                          },
                        },
                      },
                    },
                  },
                },
              },
              isLanguageKey: {
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
                              value: 'blueId',
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
                              value: 'name',
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
                              value: 'schema',
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
                              value: 'contracts',
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              },
            },
            name: 'DecideSpendAuthorization',
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
    granteeChannel: {
      description:
        'Grantee timeline channel (party allowed to use the mandate).',
      type: {
        blueId: '9gQuMoLckgwgvAfx1X8tzdHwMNfRcraG96PfT5TDbXeh',
      },
    },
    granterChannel: {
      description: 'Granting party timeline channel.',
      type: {
        blueId: '9gQuMoLckgwgvAfx1X8tzdHwMNfRcraG96PfT5TDbXeh',
      },
    },
    guarantorChannel: {
      description:
        'Bank/admin channel executing mandate checks and settlement updates.',
      type: {
        blueId: '9gQuMoLckgwgvAfx1X8tzdHwMNfRcraG96PfT5TDbXeh',
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
                    value: '/chargeAttempts',
                  },
                  val: {},
                },
              ],
            },
            name: 'Initialize mandate runtime state',
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
    settleSpend: {
      channel: {
        type: {
          blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
        },
        value: 'guarantorChannel',
      },
      description:
        'Apply final reserve/capture deltas for a previously authorized charge attempt.',
      request: {
        type: {
          blueId: 'Bsb4uv9m6GU7T8Z6TwXQGZagFcVR8xn4EBNTR5bBZfgv',
        },
      },
      type: {
        blueId: '9Fu3Rjq8hNKnZS71ZU8RXBBupZEa7Wb8z44GtzfSwjbr',
      },
    },
    settleSpendImpl: {
      operation: {
        type: {
          blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
        },
        value: 'settleSpend',
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
                          value: 'authorizationId',
                        },
                        {
                          type: {
                            blueId:
                              'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                          },
                          value: 'settlementId',
                        },
                        {
                          type: {
                            blueId:
                              'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                          },
                          value: 'settlementStatus',
                        },
                        {
                          type: {
                            blueId:
                              'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                          },
                          value: 'reservedDeltaMinor',
                        },
                        {
                          type: {
                            blueId:
                              'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                          },
                          value: 'capturedDeltaMinor',
                        },
                        {
                          type: {
                            blueId:
                              'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                          },
                          value: 'holdId',
                        },
                        {
                          type: {
                            blueId:
                              'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                          },
                          value: 'transactionId',
                        },
                        {
                          type: {
                            blueId:
                              'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                          },
                          value: 'requestReason',
                        },
                        {
                          type: {
                            blueId:
                              'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                          },
                          value: 'nowIso',
                        },
                        {
                          type: {
                            blueId:
                              'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                          },
                          value: 'amountLimit',
                        },
                        {
                          type: {
                            blueId:
                              'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                          },
                          value: 'amountReserved',
                        },
                        {
                          type: {
                            blueId:
                              'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                          },
                          value: 'amountCaptured',
                        },
                        {
                          type: {
                            blueId:
                              'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                          },
                          value: 'chargeAttempts',
                        },
                        {
                          type: {
                            blueId:
                              'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                          },
                          value: 'existingAttempt',
                        },
                        {
                          type: {
                            blueId:
                              'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                          },
                          value: 'hasExistingAttempt',
                        },
                        {
                          type: {
                            blueId:
                              'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                          },
                          value: 'alreadySettled',
                        },
                        {
                          type: {
                            blueId:
                              'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                          },
                          value: 'approved',
                        },
                        {
                          type: {
                            blueId:
                              'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                          },
                          value: 'authorizedAmount',
                        },
                        {
                          type: {
                            blueId:
                              'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                          },
                          value: 'status',
                        },
                        {
                          type: {
                            blueId:
                              'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                          },
                          value: 'reason',
                        },
                        {
                          type: {
                            blueId:
                              'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                          },
                          value: 'nextAmountReserved',
                        },
                        {
                          type: {
                            blueId:
                              'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                          },
                          value: 'nextAmountCaptured',
                        },
                        {
                          type: {
                            blueId:
                              'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                          },
                          value: 'nextAttempt',
                        },
                        {
                          type: {
                            blueId:
                              'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                          },
                          value: 'nextChargeAttempts',
                        },
                      ],
                    },
                    vars: {
                      alreadySettled: {
                        $eq: {
                          items: [
                            {
                              $var: {
                                name: 'existingAttempt',
                                path: {
                                  type: {
                                    blueId:
                                      'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                  },
                                  value: '/settled',
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
                      amountCaptured: {
                        $document: {
                          type: {
                            blueId:
                              'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                          },
                          value: '/amountCaptured',
                        },
                      },
                      amountLimit: {
                        $document: {
                          type: {
                            blueId:
                              'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                          },
                          value: '/amountLimit',
                        },
                      },
                      amountReserved: {
                        $document: {
                          type: {
                            blueId:
                              'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                          },
                          value: '/amountReserved',
                        },
                      },
                      approved: {
                        $eq: {
                          items: [
                            {
                              $var: {
                                name: 'existingAttempt',
                                path: {
                                  type: {
                                    blueId:
                                      'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                  },
                                  value: '/authorizationStatus',
                                },
                              },
                            },
                            {
                              type: {
                                blueId:
                                  'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                              },
                              value: 'approved',
                            },
                          ],
                        },
                      },
                      authorizationId: {
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
                                  value: '/message/request/authorizationId',
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
                              value: '/message/request/authorizationId',
                            },
                          },
                        },
                      },
                      authorizedAmount: {
                        $choose: {
                          cond: {
                            $isKind: {
                              kind: {
                                type: {
                                  blueId:
                                    'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                },
                                value: 'integer',
                              },
                              val: {
                                $var: {
                                  name: 'existingAttempt',
                                  path: {
                                    type: {
                                      blueId:
                                        'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                    },
                                    value: '/authorizedAmountMinor',
                                  },
                                },
                              },
                            },
                          },
                          else: {
                            type: {
                              blueId:
                                '5WNMiV9Knz63B4dVY5JtMyh3FB4FSGqv7ceScvuapdE1',
                            },
                            value: 0,
                          },
                          then: {
                            $var: {
                              name: 'existingAttempt',
                              path: {
                                type: {
                                  blueId:
                                    'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                },
                                value: '/authorizedAmountMinor',
                              },
                            },
                          },
                        },
                      },
                      capturedDeltaMinor: {
                        $choose: {
                          cond: {
                            $isKind: {
                              kind: {
                                type: {
                                  blueId:
                                    'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                },
                                value: 'integer',
                              },
                              val: {
                                $event: {
                                  type: {
                                    blueId:
                                      'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                  },
                                  value: '/message/request/capturedDeltaMinor',
                                },
                              },
                            },
                          },
                          else: {
                            type: {
                              blueId:
                                '5WNMiV9Knz63B4dVY5JtMyh3FB4FSGqv7ceScvuapdE1',
                            },
                            value: 0,
                          },
                          then: {
                            $event: {
                              type: {
                                blueId:
                                  'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                              },
                              value: '/message/request/capturedDeltaMinor',
                            },
                          },
                        },
                      },
                      chargeAttempts: {
                        $call: {
                          args: {
                            object: {
                              $object: {
                                $document: {
                                  type: {
                                    blueId:
                                      'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                  },
                                  value: '/chargeAttempts',
                                },
                              },
                            },
                          },
                          function: {
                            type: {
                              blueId:
                                'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                            },
                            value: 'cleanMap',
                          },
                        },
                      },
                      existingAttempt: {
                        $call: {
                          args: {
                            object: {
                              $object: {
                                $get: {
                                  key: {
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
                                              value:
                                                '/message/request/authorizationId',
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
                                          value:
                                            '/message/request/authorizationId',
                                        },
                                      },
                                    },
                                  },
                                  object: {
                                    $object: {
                                      $document: {
                                        type: {
                                          blueId:
                                            'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                        },
                                        value: '/chargeAttempts',
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
                                'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                            },
                            value: 'cleanMap',
                          },
                        },
                      },
                      hasExistingAttempt: {
                        $isKind: {
                          kind: {
                            type: {
                              blueId:
                                'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                            },
                            value: 'object',
                          },
                          val: {
                            $get: {
                              key: {
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
                                          value:
                                            '/message/request/authorizationId',
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
                                      value: '/message/request/authorizationId',
                                    },
                                  },
                                },
                              },
                              object: {
                                $object: {
                                  $document: {
                                    type: {
                                      blueId:
                                        'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                    },
                                    value: '/chargeAttempts',
                                  },
                                },
                              },
                            },
                          },
                        },
                      },
                      holdId: {
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
                                  value: '/message/request/holdId',
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
                              value: '/message/request/holdId',
                            },
                          },
                        },
                      },
                      nextAmountCaptured: {
                        $document: {
                          type: {
                            blueId:
                              'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                          },
                          value: '/amountCaptured',
                        },
                      },
                      nextAmountReserved: {
                        $document: {
                          type: {
                            blueId:
                              'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                          },
                          value: '/amountReserved',
                        },
                      },
                      nextAttempt: {
                        $call: {
                          args: {
                            object: {
                              $object: {
                                $get: {
                                  key: {
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
                                              value:
                                                '/message/request/authorizationId',
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
                                          value:
                                            '/message/request/authorizationId',
                                        },
                                      },
                                    },
                                  },
                                  object: {
                                    $object: {
                                      $document: {
                                        type: {
                                          blueId:
                                            'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                        },
                                        value: '/chargeAttempts',
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
                                'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                            },
                            value: 'cleanMap',
                          },
                        },
                      },
                      nextChargeAttempts: {
                        $call: {
                          args: {
                            object: {
                              $object: {
                                $document: {
                                  type: {
                                    blueId:
                                      'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                  },
                                  value: '/chargeAttempts',
                                },
                              },
                            },
                          },
                          function: {
                            type: {
                              blueId:
                                'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                            },
                            value: 'cleanMap',
                          },
                        },
                      },
                      nowIso: {
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
                                  value: '/message/request/settledAt',
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
                              value: '/message/request/settledAt',
                            },
                          },
                        },
                      },
                      reason: {
                        type: {
                          blueId:
                            'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                        },
                        value: '',
                      },
                      requestReason: {
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
                                  value: '/message/request/reason',
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
                              value: '/message/request/reason',
                            },
                          },
                        },
                      },
                      reservedDeltaMinor: {
                        $choose: {
                          cond: {
                            $isKind: {
                              kind: {
                                type: {
                                  blueId:
                                    'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                },
                                value: 'integer',
                              },
                              val: {
                                $event: {
                                  type: {
                                    blueId:
                                      'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                  },
                                  value: '/message/request/reservedDeltaMinor',
                                },
                              },
                            },
                          },
                          else: {
                            type: {
                              blueId:
                                '5WNMiV9Knz63B4dVY5JtMyh3FB4FSGqv7ceScvuapdE1',
                            },
                            value: 0,
                          },
                          then: {
                            $event: {
                              type: {
                                blueId:
                                  'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                              },
                              value: '/message/request/reservedDeltaMinor',
                            },
                          },
                        },
                      },
                      settlementId: {
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
                                  value: '/message/request/settlementId',
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
                              value: '/message/request/settlementId',
                            },
                          },
                        },
                      },
                      settlementStatus: {
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
                                  value: '/message/request/status',
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
                              value: '/message/request/status',
                            },
                          },
                        },
                      },
                      status: {
                        type: {
                          blueId:
                            'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                        },
                        value: 'rejected',
                      },
                      transactionId: {
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
                                  value: '/message/request/transactionId',
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
                              value: '/message/request/transactionId',
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
                      $not: {
                        $truthy: {
                          $var: {
                            type: {
                              blueId:
                                'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                            },
                            value: 'authorizationId',
                          },
                        },
                      },
                    },
                    else: {
                      items: [
                        {
                          $if: {
                            cond: {
                              $var: {
                                type: {
                                  blueId:
                                    'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                },
                                value: 'alreadySettled',
                              },
                            },
                            else: {
                              items: [
                                {
                                  $if: {
                                    cond: {
                                      $not: {
                                        $var: {
                                          type: {
                                            blueId:
                                              'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                          },
                                          value: 'approved',
                                        },
                                      },
                                    },
                                    else: {
                                      items: [
                                        {
                                          $if: {
                                            cond: {
                                              $and: {
                                                items: [
                                                  {
                                                    $ne: {
                                                      items: [
                                                        {
                                                          $var: {
                                                            type: {
                                                              blueId:
                                                                'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                                            },
                                                            value:
                                                              'settlementStatus',
                                                          },
                                                        },
                                                        {
                                                          type: {
                                                            blueId:
                                                              'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                                          },
                                                          value: 'succeeded',
                                                        },
                                                      ],
                                                    },
                                                  },
                                                  {
                                                    $ne: {
                                                      items: [
                                                        {
                                                          $var: {
                                                            type: {
                                                              blueId:
                                                                'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                                            },
                                                            value:
                                                              'settlementStatus',
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
                                            else: {
                                              items: [
                                                {
                                                  $if: {
                                                    cond: {
                                                      $lt: {
                                                        items: [
                                                          {
                                                            $var: {
                                                              type: {
                                                                blueId:
                                                                  'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                                              },
                                                              value:
                                                                'capturedDeltaMinor',
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
                                                          $if: {
                                                            cond: {
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
                                                                            value:
                                                                              'settlementStatus',
                                                                          },
                                                                        },
                                                                        {
                                                                          type: {
                                                                            blueId:
                                                                              'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                                                          },
                                                                          value:
                                                                            'failed',
                                                                        },
                                                                      ],
                                                                    },
                                                                  },
                                                                  {
                                                                    $ne: {
                                                                      items: [
                                                                        {
                                                                          $var: {
                                                                            type: {
                                                                              blueId:
                                                                                'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                                                            },
                                                                            value:
                                                                              'capturedDeltaMinor',
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
                                                                ],
                                                              },
                                                            },
                                                            else: {
                                                              items: [
                                                                {
                                                                  $if: {
                                                                    cond: {
                                                                      $gt: {
                                                                        items: [
                                                                          {
                                                                            $var: {
                                                                              type: {
                                                                                blueId:
                                                                                  'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                                                              },
                                                                              value:
                                                                                'capturedDeltaMinor',
                                                                            },
                                                                          },
                                                                          {
                                                                            $var: {
                                                                              type: {
                                                                                blueId:
                                                                                  'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                                                              },
                                                                              value:
                                                                                'authorizedAmount',
                                                                            },
                                                                          },
                                                                        ],
                                                                      },
                                                                    },
                                                                    else: {
                                                                      items: [
                                                                        {
                                                                          $let: {
                                                                            order:
                                                                              {
                                                                                items:
                                                                                  [
                                                                                    {
                                                                                      type: {
                                                                                        blueId:
                                                                                          'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                                                                      },
                                                                                      value:
                                                                                        'candidateAmountReserved',
                                                                                    },
                                                                                    {
                                                                                      type: {
                                                                                        blueId:
                                                                                          'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                                                                      },
                                                                                      value:
                                                                                        'candidateAmountCaptured',
                                                                                    },
                                                                                    {
                                                                                      type: {
                                                                                        blueId:
                                                                                          'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                                                                      },
                                                                                      value:
                                                                                        'candidateUsed',
                                                                                    },
                                                                                  ],
                                                                              },
                                                                            vars: {
                                                                              candidateAmountCaptured:
                                                                                {
                                                                                  $add: {
                                                                                    items:
                                                                                      [
                                                                                        {
                                                                                          $var: {
                                                                                            type: {
                                                                                              blueId:
                                                                                                'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                                                                            },
                                                                                            value:
                                                                                              'amountCaptured',
                                                                                          },
                                                                                        },
                                                                                        {
                                                                                          $var: {
                                                                                            type: {
                                                                                              blueId:
                                                                                                'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                                                                            },
                                                                                            value:
                                                                                              'capturedDeltaMinor',
                                                                                          },
                                                                                        },
                                                                                      ],
                                                                                  },
                                                                                },
                                                                              candidateAmountReserved:
                                                                                {
                                                                                  $add: {
                                                                                    items:
                                                                                      [
                                                                                        {
                                                                                          $var: {
                                                                                            type: {
                                                                                              blueId:
                                                                                                'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                                                                            },
                                                                                            value:
                                                                                              'amountReserved',
                                                                                          },
                                                                                        },
                                                                                        {
                                                                                          $var: {
                                                                                            type: {
                                                                                              blueId:
                                                                                                'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                                                                            },
                                                                                            value:
                                                                                              'reservedDeltaMinor',
                                                                                          },
                                                                                        },
                                                                                      ],
                                                                                  },
                                                                                },
                                                                              candidateUsed:
                                                                                {
                                                                                  $add: {
                                                                                    items:
                                                                                      [
                                                                                        {
                                                                                          $add: {
                                                                                            items:
                                                                                              [
                                                                                                {
                                                                                                  $var: {
                                                                                                    type: {
                                                                                                      blueId:
                                                                                                        'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                                                                                    },
                                                                                                    value:
                                                                                                      'amountReserved',
                                                                                                  },
                                                                                                },
                                                                                                {
                                                                                                  $var: {
                                                                                                    type: {
                                                                                                      blueId:
                                                                                                        'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                                                                                    },
                                                                                                    value:
                                                                                                      'reservedDeltaMinor',
                                                                                                  },
                                                                                                },
                                                                                              ],
                                                                                          },
                                                                                        },
                                                                                        {
                                                                                          $add: {
                                                                                            items:
                                                                                              [
                                                                                                {
                                                                                                  $var: {
                                                                                                    type: {
                                                                                                      blueId:
                                                                                                        'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                                                                                    },
                                                                                                    value:
                                                                                                      'amountCaptured',
                                                                                                  },
                                                                                                },
                                                                                                {
                                                                                                  $var: {
                                                                                                    type: {
                                                                                                      blueId:
                                                                                                        'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                                                                                    },
                                                                                                    value:
                                                                                                      'capturedDeltaMinor',
                                                                                                  },
                                                                                                },
                                                                                              ],
                                                                                          },
                                                                                        },
                                                                                      ],
                                                                                  },
                                                                                },
                                                                            },
                                                                          },
                                                                        },
                                                                        {
                                                                          $if: {
                                                                            cond: {
                                                                              $lt: {
                                                                                items:
                                                                                  [
                                                                                    {
                                                                                      $var: {
                                                                                        type: {
                                                                                          blueId:
                                                                                            'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                                                                        },
                                                                                        value:
                                                                                          'candidateAmountReserved',
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
                                                                              items:
                                                                                [
                                                                                  {
                                                                                    $if: {
                                                                                      cond: {
                                                                                        $lt: {
                                                                                          items:
                                                                                            [
                                                                                              {
                                                                                                $var: {
                                                                                                  type: {
                                                                                                    blueId:
                                                                                                      'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                                                                                  },
                                                                                                  value:
                                                                                                    'candidateAmountCaptured',
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
                                                                                        items:
                                                                                          [
                                                                                            {
                                                                                              $if: {
                                                                                                cond: {
                                                                                                  $gt: {
                                                                                                    items:
                                                                                                      [
                                                                                                        {
                                                                                                          $var: {
                                                                                                            type: {
                                                                                                              blueId:
                                                                                                                'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                                                                                            },
                                                                                                            value:
                                                                                                              'candidateUsed',
                                                                                                          },
                                                                                                        },
                                                                                                        {
                                                                                                          $var: {
                                                                                                            type: {
                                                                                                              blueId:
                                                                                                                'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                                                                                            },
                                                                                                            value:
                                                                                                              'amountLimit',
                                                                                                          },
                                                                                                        },
                                                                                                      ],
                                                                                                  },
                                                                                                },
                                                                                                else: {
                                                                                                  items:
                                                                                                    [
                                                                                                      {
                                                                                                        $set: {
                                                                                                          expr: {
                                                                                                            type: {
                                                                                                              blueId:
                                                                                                                'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                                                                                            },
                                                                                                            value:
                                                                                                              'accepted',
                                                                                                          },
                                                                                                          name: 'status',
                                                                                                        },
                                                                                                      },
                                                                                                      {
                                                                                                        $set: {
                                                                                                          expr: {
                                                                                                            $var: {
                                                                                                              type: {
                                                                                                                blueId:
                                                                                                                  'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                                                                                              },
                                                                                                              value:
                                                                                                                'candidateAmountReserved',
                                                                                                            },
                                                                                                          },
                                                                                                          name: 'nextAmountReserved',
                                                                                                        },
                                                                                                      },
                                                                                                      {
                                                                                                        $set: {
                                                                                                          expr: {
                                                                                                            $var: {
                                                                                                              type: {
                                                                                                                blueId:
                                                                                                                  'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                                                                                              },
                                                                                                              value:
                                                                                                                'candidateAmountCaptured',
                                                                                                            },
                                                                                                          },
                                                                                                          name: 'nextAmountCaptured',
                                                                                                        },
                                                                                                      },
                                                                                                      {
                                                                                                        $set: {
                                                                                                          expr: {
                                                                                                            $merge:
                                                                                                              {
                                                                                                                items:
                                                                                                                  [
                                                                                                                    {
                                                                                                                      $var: {
                                                                                                                        type: {
                                                                                                                          blueId:
                                                                                                                            'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                                                                                                        },
                                                                                                                        value:
                                                                                                                          'existingAttempt',
                                                                                                                      },
                                                                                                                    },
                                                                                                                    {
                                                                                                                      capturedDeltaMinor:
                                                                                                                        {
                                                                                                                          $var: {
                                                                                                                            type: {
                                                                                                                              blueId:
                                                                                                                                'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                                                                                                            },
                                                                                                                            value:
                                                                                                                              'capturedDeltaMinor',
                                                                                                                          },
                                                                                                                        },
                                                                                                                      holdId:
                                                                                                                        {
                                                                                                                          $var: {
                                                                                                                            type: {
                                                                                                                              blueId:
                                                                                                                                'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                                                                                                            },
                                                                                                                            value:
                                                                                                                              'holdId',
                                                                                                                          },
                                                                                                                        },
                                                                                                                      lastSettlementId:
                                                                                                                        {
                                                                                                                          $var: {
                                                                                                                            type: {
                                                                                                                              blueId:
                                                                                                                                'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                                                                                                            },
                                                                                                                            value:
                                                                                                                              'settlementId',
                                                                                                                          },
                                                                                                                        },
                                                                                                                      lastSettlementProcessingStatus:
                                                                                                                        {
                                                                                                                          type: {
                                                                                                                            blueId:
                                                                                                                              'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                                                                                                          },
                                                                                                                          value:
                                                                                                                            'accepted',
                                                                                                                        },
                                                                                                                      lastSettlementRequestStatus:
                                                                                                                        {
                                                                                                                          $var: {
                                                                                                                            type: {
                                                                                                                              blueId:
                                                                                                                                'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                                                                                                            },
                                                                                                                            value:
                                                                                                                              'settlementStatus',
                                                                                                                          },
                                                                                                                        },
                                                                                                                      reservedDeltaMinor:
                                                                                                                        {
                                                                                                                          $var: {
                                                                                                                            type: {
                                                                                                                              blueId:
                                                                                                                                'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                                                                                                            },
                                                                                                                            value:
                                                                                                                              'reservedDeltaMinor',
                                                                                                                          },
                                                                                                                        },
                                                                                                                      settled:
                                                                                                                        {
                                                                                                                          type: {
                                                                                                                            blueId:
                                                                                                                              '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
                                                                                                                          },
                                                                                                                          value:
                                                                                                                            true,
                                                                                                                        },
                                                                                                                      settlementReason:
                                                                                                                        {
                                                                                                                          $var: {
                                                                                                                            type: {
                                                                                                                              blueId:
                                                                                                                                'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                                                                                                            },
                                                                                                                            value:
                                                                                                                              'requestReason',
                                                                                                                          },
                                                                                                                        },
                                                                                                                      settlementRespondedAt:
                                                                                                                        {
                                                                                                                          $var: {
                                                                                                                            type: {
                                                                                                                              blueId:
                                                                                                                                'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                                                                                                            },
                                                                                                                            value:
                                                                                                                              'nowIso',
                                                                                                                          },
                                                                                                                        },
                                                                                                                      transactionId:
                                                                                                                        {
                                                                                                                          $var: {
                                                                                                                            type: {
                                                                                                                              blueId:
                                                                                                                                'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                                                                                                            },
                                                                                                                            value:
                                                                                                                              'transactionId',
                                                                                                                          },
                                                                                                                        },
                                                                                                                    },
                                                                                                                  ],
                                                                                                              },
                                                                                                          },
                                                                                                          name: 'nextAttempt',
                                                                                                        },
                                                                                                      },
                                                                                                      {
                                                                                                        $set: {
                                                                                                          expr: {
                                                                                                            $objectSet:
                                                                                                              {
                                                                                                                key: {
                                                                                                                  $var: {
                                                                                                                    type: {
                                                                                                                      blueId:
                                                                                                                        'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                                                                                                    },
                                                                                                                    value:
                                                                                                                      'authorizationId',
                                                                                                                  },
                                                                                                                },
                                                                                                                object:
                                                                                                                  {
                                                                                                                    $var: {
                                                                                                                      type: {
                                                                                                                        blueId:
                                                                                                                          'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                                                                                                      },
                                                                                                                      value:
                                                                                                                        'nextChargeAttempts',
                                                                                                                    },
                                                                                                                  },
                                                                                                                val: {
                                                                                                                  $var: {
                                                                                                                    type: {
                                                                                                                      blueId:
                                                                                                                        'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                                                                                                    },
                                                                                                                    value:
                                                                                                                      'nextAttempt',
                                                                                                                  },
                                                                                                                },
                                                                                                              },
                                                                                                          },
                                                                                                          name: 'nextChargeAttempts',
                                                                                                        },
                                                                                                      },
                                                                                                    ],
                                                                                                },
                                                                                                then: {
                                                                                                  items:
                                                                                                    [
                                                                                                      {
                                                                                                        $set: {
                                                                                                          expr: {
                                                                                                            type: {
                                                                                                              blueId:
                                                                                                                'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                                                                                            },
                                                                                                            value:
                                                                                                              'Settlement would exceed amountLimit.',
                                                                                                          },
                                                                                                          name: 'reason',
                                                                                                        },
                                                                                                      },
                                                                                                    ],
                                                                                                },
                                                                                              },
                                                                                            },
                                                                                          ],
                                                                                      },
                                                                                      then: {
                                                                                        items:
                                                                                          [
                                                                                            {
                                                                                              $set: {
                                                                                                expr: {
                                                                                                  type: {
                                                                                                    blueId:
                                                                                                      'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                                                                                  },
                                                                                                  value:
                                                                                                    'Settlement would make amountCaptured negative.',
                                                                                                },
                                                                                                name: 'reason',
                                                                                              },
                                                                                            },
                                                                                          ],
                                                                                      },
                                                                                    },
                                                                                  },
                                                                                ],
                                                                            },
                                                                            then: {
                                                                              items:
                                                                                [
                                                                                  {
                                                                                    $set: {
                                                                                      expr: {
                                                                                        type: {
                                                                                          blueId:
                                                                                            'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                                                                        },
                                                                                        value:
                                                                                          'Settlement would make amountReserved negative.',
                                                                                      },
                                                                                      name: 'reason',
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
                                                                              type: {
                                                                                blueId:
                                                                                  'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                                                              },
                                                                              value:
                                                                                'capturedDeltaMinor exceeds authorized amount.',
                                                                            },
                                                                            name: 'reason',
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
                                                                      type: {
                                                                        blueId:
                                                                          'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                                                      },
                                                                      value:
                                                                        'capturedDeltaMinor must be 0 for failed settlement.',
                                                                    },
                                                                    name: 'reason',
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
                                                              type: {
                                                                blueId:
                                                                  'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                                              },
                                                              value:
                                                                'capturedDeltaMinor cannot be negative.',
                                                            },
                                                            name: 'reason',
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
                                                      type: {
                                                        blueId:
                                                          'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                                      },
                                                      value:
                                                        'Unsupported settlement status.',
                                                    },
                                                    name: 'reason',
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
                                              type: {
                                                blueId:
                                                  'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                              },
                                              value:
                                                'Authorization is not approved.',
                                            },
                                            name: 'reason',
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
                                      type: {
                                        blueId:
                                          'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                      },
                                      value: 'accepted',
                                    },
                                    name: 'status',
                                  },
                                },
                                {
                                  $set: {
                                    expr: {
                                      type: {
                                        blueId:
                                          'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                      },
                                      value: 'Authorization already settled.',
                                    },
                                    name: 'reason',
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
                              type: {
                                blueId:
                                  'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                              },
                              value: 'Missing authorizationId.',
                            },
                            name: 'reason',
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
                            $var: {
                              type: {
                                blueId:
                                  'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                              },
                              value: 'hasExistingAttempt',
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
                                    value: 'status',
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
                    then: {
                      items: [
                        {
                          $set: {
                            expr: {
                              $merge: {
                                items: [
                                  {
                                    $var: {
                                      type: {
                                        blueId:
                                          'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                      },
                                      value: 'existingAttempt',
                                    },
                                  },
                                  {
                                    lastSettlementId: {
                                      $var: {
                                        type: {
                                          blueId:
                                            'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                        },
                                        value: 'settlementId',
                                      },
                                    },
                                    lastSettlementProcessingStatus: {
                                      type: {
                                        blueId:
                                          'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                      },
                                      value: 'rejected',
                                    },
                                    lastSettlementRequestStatus: {
                                      $var: {
                                        type: {
                                          blueId:
                                            'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                        },
                                        value: 'settlementStatus',
                                      },
                                    },
                                    settlementReason: {
                                      $var: {
                                        type: {
                                          blueId:
                                            'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                        },
                                        value: 'reason',
                                      },
                                    },
                                    settlementRespondedAt: {
                                      $var: {
                                        type: {
                                          blueId:
                                            'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                        },
                                        value: 'nowIso',
                                      },
                                    },
                                  },
                                ],
                              },
                            },
                            name: 'nextAttempt',
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
                                        'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                    },
                                    value: 'authorizationId',
                                  },
                                },
                                object: {
                                  $var: {
                                    type: {
                                      blueId:
                                        'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                    },
                                    value: 'nextChargeAttempts',
                                  },
                                },
                                val: {
                                  $var: {
                                    type: {
                                      blueId:
                                        'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                    },
                                    value: 'nextAttempt',
                                  },
                                },
                              },
                            },
                            name: 'nextChargeAttempts',
                          },
                        },
                      ],
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
                      value: '/chargeAttempts',
                    },
                    val: {
                      $var: {
                        type: {
                          blueId:
                            'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                        },
                        value: 'nextChargeAttempts',
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
                      value: '/amountReserved',
                    },
                    val: {
                      $var: {
                        type: {
                          blueId:
                            'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                        },
                        value: 'nextAmountReserved',
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
                      value: '/amountCaptured',
                    },
                    val: {
                      $var: {
                        type: {
                          blueId:
                            'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                        },
                        value: 'nextAmountCaptured',
                      },
                    },
                  },
                },
                {
                  $appendEvent: {
                    amountCaptured: {
                      $var: {
                        type: {
                          blueId:
                            'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                        },
                        value: 'nextAmountCaptured',
                      },
                    },
                    amountReserved: {
                      $var: {
                        type: {
                          blueId:
                            'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                        },
                        value: 'nextAmountReserved',
                      },
                    },
                    authorizationId: {
                      $var: {
                        type: {
                          blueId:
                            'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                        },
                        value: 'authorizationId',
                      },
                    },
                    reason: {
                      $choose: {
                        cond: {
                          $truthy: {
                            $var: {
                              type: {
                                blueId:
                                  'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                              },
                              value: 'reason',
                            },
                          },
                        },
                        then: {
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
                    respondedAt: {
                      $var: {
                        type: {
                          blueId:
                            'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                        },
                        value: 'nowIso',
                      },
                    },
                    settlementId: {
                      $var: {
                        type: {
                          blueId:
                            'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                        },
                        value: 'settlementId',
                      },
                    },
                    status: {
                      $var: {
                        type: {
                          blueId:
                            'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                        },
                        value: 'status',
                      },
                    },
                    type: {
                      blueId: '5Ef9YNuRSVFdykdjoBVWb5QHSzerHE8RAPaq58ARGrt7',
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
            functions: {
              cleanMap: {
                args: {
                  object: {
                    value: null,
                  },
                },
                expr: {
                  $objectFromEntries: {
                    $filter: {
                      in: {
                        $entries: {
                          $var: {
                            type: {
                              blueId:
                                'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                            },
                            value: 'object',
                          },
                        },
                      },
                      item: {
                        type: {
                          blueId:
                            'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                        },
                        value: 'entry',
                      },
                      where: {
                        $not: {
                          $call: {
                            args: {
                              key: {
                                $var: {
                                  name: 'entry',
                                  path: {
                                    type: {
                                      blueId:
                                        'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                                    },
                                    value: '/key',
                                  },
                                },
                              },
                            },
                            function: {
                              type: {
                                blueId:
                                  'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                              },
                              value: 'isLanguageKey',
                            },
                          },
                        },
                      },
                    },
                  },
                },
              },
              isLanguageKey: {
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
                              value: 'blueId',
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
                              value: 'name',
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
                              value: 'schema',
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
                              value: 'contracts',
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              },
            },
            name: 'ValidateAndApplySettlement',
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
  currency: {
    description: 'Currency code used for amountLimit validation.',
    type: {
      blueId: 'CBnZ7aaNetj9KEqXpUWj5jvjKbmviLivP98T2EiyxiYc',
    },
  },
  description:
    'Payment mandate authorizing a grantee to execute payment requests on behalf of a granter, under explicit limits, with deterministic spend tracking and optional linked PayNote bootstrap rules.\n',
  expiresAt: {
    description: 'Optional mandate expiry timestamp.',
    type: {
      blueId: 'GQaGqFxHDz64L1c9QkCbz52ths6bMVtpHnw4QDngzQYs',
    },
  },
  granteeId: {
    description: 'Identifier interpreted according to granteeType.',
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
  granteeType: {
    description:
      'Party allowed to invoke this mandate:\n- documentId\n- merchantId\n- customerId\n',
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
  granterId: {
    description:
      'Identifier of the granting party:\n- merchantId when granterType is merchant\n- customerId (bank user id) when granterType is customer\n',
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
  granterType: {
    description:
      'Party granting authority to use funds:\n- merchant\n- customer\n',
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
  name: 'Payment Mandate',
  revokedAt: {
    description:
      'Optional revocation timestamp. When set, mandate is inactive.',
    type: {
      blueId: 'GQaGqFxHDz64L1c9QkCbz52ths6bMVtpHnw4QDngzQYs',
    },
  },
  sourceAccount: {
    description:
      'Funds source to use when this mandate executes: - root (uses root account context; for merchant this maps to active credit line) - specific account number\n',
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
} as const;
