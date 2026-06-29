export const PaymentMandate: Record<string, unknown> = {
  allowedPaymentCounterparties: {
    description:
      'Optional payment counterparty allowlist. Missing list means wildcard (any counterparty is allowed).\n',
    itemType: {
      counterpartyId: {
        description:
          'Counterparty identifier interpreted according to counterpartyType.',
        type: {
          blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
        },
      },
      counterpartyType: {
        description:
          'Allowed payment counterparty identifier type:\n- merchantId\n- customerId\n- accountNumber\n',
        type: {
          blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
        },
      },
    },
    type: {
      blueId: '8DSFoWG9MqRSUhStqoPLrwVQiYByRh18NWbDEarN8MKF',
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
          blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
        },
      },
      typeBlueId: {
        description:
          'Optional blue-id of an allowed PayNote type. Mutually exclusive with documentBlueId.\n',
        type: {
          blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
        },
      },
    },
    type: {
      blueId: '8DSFoWG9MqRSUhStqoPLrwVQiYByRh18NWbDEarN8MKF',
    },
  },
  allowLinkedPayNote: {
    description:
      'Whether this mandate allows linked PayNote startup after charge execution.',
    type: {
      blueId: 'AwvXD961fmnmqcSQhjMA7r15HpVh39cefb6ZTyUz2Fm2',
    },
  },
  amountCaptured: {
    description:
      'Running captured amount in minor currency units. Increased after successful capture.\n',
    type: {
      blueId: 'E2LM6qgzWG9ttagq2xTmiZkgYEAgkYedFCmU9v7NnVEq',
    },
  },
  amountLimit: {
    description:
      'Maximum amount in minor currency units allowed by this mandate.',
    type: {
      blueId: 'E2LM6qgzWG9ttagq2xTmiZkgYEAgkYedFCmU9v7NnVEq',
    },
  },
  amountReserved: {
    description:
      'Running reserved amount in minor currency units. Increased after successful reserve/authorize, decreased after release/capture.\n',
    type: {
      blueId: 'E2LM6qgzWG9ttagq2xTmiZkgYEAgkYedFCmU9v7NnVEq',
    },
  },
  chargeAttempts: {
    description:
      'Stateful map of authorizationId -> authorization state (authorization + settlement).',
    keyType: {
      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
    },
    type: {
      blueId: 'Efkz9D1ARMM7rU43w3rDNVqat1naS6qXKCqP4eHin3yG',
    },
    valueType: {
      amountMinor: {
        description: 'Requested amount in minor currency units.',
        type: {
          blueId: 'E2LM6qgzWG9ttagq2xTmiZkgYEAgkYedFCmU9v7NnVEq',
        },
      },
      authorizationReason: {
        description: 'Optional authorization rejection reason.',
        type: {
          blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
        },
      },
      authorizationRespondedAt: {
        description: 'Timestamp of authorization decision response.',
        type: {
          blueId: '47EN5A1B1ZXXdXMEoURVJquMSjdDuKFNDjMrkvVxoVJk',
        },
      },
      authorizationStatus: {
        description: 'Authorization decision status ("approved" | "rejected").',
        type: {
          blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
        },
      },
      authorizedAmountMinor: {
        description:
          'Authorized amount reserved against mandate capacity for this attempt.',
        type: {
          blueId: 'E2LM6qgzWG9ttagq2xTmiZkgYEAgkYedFCmU9v7NnVEq',
        },
      },
      capturedDeltaMinor: {
        description: 'Captured delta applied for accepted settlement.',
        type: {
          blueId: 'E2LM6qgzWG9ttagq2xTmiZkgYEAgkYedFCmU9v7NnVEq',
        },
      },
      chargeMode: {
        description:
          'Requested charge mode ("authorize_only" | "authorize_and_capture").',
        type: {
          blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
        },
      },
      counterpartyId: {
        description:
          'Counterparty identifier interpreted according to counterpartyType.',
        type: {
          blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
        },
      },
      counterpartyType: {
        description:
          'Counterparty identifier type ("merchantId" | "customerId" | "accountNumber").',
        type: {
          blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
        },
      },
      currency: {
        description: 'Requested currency.',
        type: {
          blueId: 'rdiMJ9tNu3geCKLDwXxCCjVQzKvCyaFXHiZTFAkRsCJ',
        },
      },
      holdId: {
        description: 'Optional hold id associated with settlement.',
        type: {
          blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
        },
      },
      lastSettlementId: {
        description:
          'Optional last applied settlement id for idempotency tracking.',
        type: {
          blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
        },
      },
      lastSettlementProcessingStatus: {
        description:
          'Mandate processing status for last settlement ("accepted" | "rejected").',
        type: {
          blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
        },
      },
      lastSettlementRequestStatus: {
        description:
          'Last settlement request status received from bank ("succeeded" | "failed").',
        type: {
          blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
        },
      },
      reservedDeltaMinor: {
        description: 'Reserved delta applied for accepted settlement.',
        type: {
          blueId: 'E2LM6qgzWG9ttagq2xTmiZkgYEAgkYedFCmU9v7NnVEq',
        },
      },
      settled: {
        description: 'Whether mandate accepted settlement for this attempt.',
        type: {
          blueId: 'AwvXD961fmnmqcSQhjMA7r15HpVh39cefb6ZTyUz2Fm2',
        },
      },
      settlementReason: {
        description: 'Optional settlement rejection/info reason.',
        type: {
          blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
        },
      },
      settlementRespondedAt: {
        description: 'Timestamp of last settlement processing response.',
        type: {
          blueId: '47EN5A1B1ZXXdXMEoURVJquMSjdDuKFNDjMrkvVxoVJk',
        },
      },
      transactionId: {
        description: 'Optional transaction id associated with settlement.',
        type: {
          blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
        },
      },
    },
  },
  contracts: {
    authorizeSpend: {
      channel: {
        type: {
          blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
        },
        value: 'guarantorChannel',
      },
      description:
        'Validate a charge attempt against mandate policy and reserve capacity.',
      request: {
        type: {
          blueId: '8jsJ7UY8wiQvDtpsjqXvnrQUMhqXZhfF6EKBzhtkUKqo',
        },
      },
      type: {
        blueId: 'wGksq5vE8TroTr6StteHDnMx9mJKqT7dHoYT9bEddym',
      },
    },
    authorizeSpendImpl: {
      operation: {
        type: {
          blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                              'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                          },
                          value: 'authorizationId',
                        },
                        {
                          type: {
                            blueId:
                              'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                          },
                          value: 'amountMinor',
                        },
                        {
                          type: {
                            blueId:
                              'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                          },
                          value: 'requestedCurrency',
                        },
                        {
                          type: {
                            blueId:
                              'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                          },
                          value: 'counterpartyType',
                        },
                        {
                          type: {
                            blueId:
                              'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                          },
                          value: 'counterpartyId',
                        },
                        {
                          type: {
                            blueId:
                              'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                          },
                          value: 'chargeMode',
                        },
                        {
                          type: {
                            blueId:
                              'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                          },
                          value: 'nowIso',
                        },
                        {
                          type: {
                            blueId:
                              'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                          },
                          value: 'amountLimit',
                        },
                        {
                          type: {
                            blueId:
                              'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                          },
                          value: 'amountReserved',
                        },
                        {
                          type: {
                            blueId:
                              'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                          },
                          value: 'amountCaptured',
                        },
                        {
                          type: {
                            blueId:
                              'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                          },
                          value: 'mandateCurrency',
                        },
                        {
                          type: {
                            blueId:
                              'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                          },
                          value: 'revokedAt',
                        },
                        {
                          type: {
                            blueId:
                              'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                          },
                          value: 'chargeAttempts',
                        },
                        {
                          type: {
                            blueId:
                              'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                          },
                          value: 'existingAttempt',
                        },
                        {
                          type: {
                            blueId:
                              'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                          },
                          value: 'existingDecision',
                        },
                        {
                          type: {
                            blueId:
                              'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                          },
                          value: 'existingReason',
                        },
                        {
                          type: {
                            blueId:
                              'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                          },
                          value: 'allowedCounterparties',
                        },
                        {
                          type: {
                            blueId:
                              'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                          },
                          value: 'counterpartyAllowed',
                        },
                        {
                          type: {
                            blueId:
                              'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                          },
                          value: 'status',
                        },
                        {
                          type: {
                            blueId:
                              'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                          },
                          value: 'reason',
                        },
                        {
                          type: {
                            blueId:
                              'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                          },
                          value: 'nextAmountReserved',
                        },
                        {
                          type: {
                            blueId:
                              'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                                'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                            },
                            value: '/allowedPaymentCounterparties',
                          },
                        },
                      },
                      amountCaptured: {
                        $document: {
                          type: {
                            blueId:
                              'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                          },
                          value: '/amountCaptured',
                        },
                      },
                      amountLimit: {
                        $document: {
                          type: {
                            blueId:
                              'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                                    'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                },
                                value: 'integer',
                              },
                              val: {
                                $event: {
                                  type: {
                                    blueId:
                                      'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                  },
                                  value: '/message/request/amountMinor',
                                },
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
                            $event: {
                              type: {
                                blueId:
                                  'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                              'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                                    'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                },
                                value: 'text',
                              },
                              val: {
                                $event: {
                                  type: {
                                    blueId:
                                      'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                  },
                                  value: '/message/request/authorizationId',
                                },
                              },
                            },
                          },
                          else: {
                            type: {
                              blueId:
                                'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                            },
                            value: '',
                          },
                          then: {
                            $event: {
                              type: {
                                blueId:
                                  'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                                      'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                  },
                                  value: '/chargeAttempts',
                                },
                              },
                            },
                          },
                          function: {
                            type: {
                              blueId:
                                'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                                    'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                },
                                value: 'text',
                              },
                              val: {
                                $event: {
                                  type: {
                                    blueId:
                                      'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                  },
                                  value: '/message/request/chargeMode',
                                },
                              },
                            },
                          },
                          else: {
                            type: {
                              blueId:
                                'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                            },
                            value: '',
                          },
                          then: {
                            $event: {
                              type: {
                                blueId:
                                  'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                                              'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                                        'E2LM6qgzWG9ttagq2xTmiZkgYEAgkYedFCmU9v7NnVEq',
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
                                          'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                      },
                                      value: '/allowedPaymentCounterparties',
                                    },
                                  },
                                },
                                item: {
                                  type: {
                                    blueId:
                                      'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                                                      'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                                  },
                                                  value: '/counterpartyType',
                                                },
                                              },
                                            },
                                            {
                                              $var: {
                                                type: {
                                                  blueId:
                                                    'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                                                      'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                                  },
                                                  value: '/counterpartyId',
                                                },
                                              },
                                            },
                                            {
                                              $var: {
                                                type: {
                                                  blueId:
                                                    'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                                    'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                },
                                value: 'text',
                              },
                              val: {
                                $event: {
                                  type: {
                                    blueId:
                                      'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                  },
                                  value: '/message/request/counterpartyId',
                                },
                              },
                            },
                          },
                          else: {
                            type: {
                              blueId:
                                'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                            },
                            value: '',
                          },
                          then: {
                            $event: {
                              type: {
                                blueId:
                                  'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                                    'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                },
                                value: 'text',
                              },
                              val: {
                                $event: {
                                  type: {
                                    blueId:
                                      'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                  },
                                  value: '/message/request/counterpartyType',
                                },
                              },
                            },
                          },
                          else: {
                            type: {
                              blueId:
                                'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                            },
                            value: '',
                          },
                          then: {
                            $event: {
                              type: {
                                blueId:
                                  'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                                                'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                            },
                                            value: 'text',
                                          },
                                          val: {
                                            $event: {
                                              type: {
                                                blueId:
                                                  'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                                            'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                        },
                                        value: '',
                                      },
                                      then: {
                                        $event: {
                                          type: {
                                            blueId:
                                              'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                                            'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                                'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                                    'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                },
                                value: 'text',
                              },
                              val: {
                                $var: {
                                  name: 'existingAttempt',
                                  path: {
                                    type: {
                                      blueId:
                                        'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                                'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                            },
                            value: '',
                          },
                          then: {
                            $var: {
                              name: 'existingAttempt',
                              path: {
                                type: {
                                  blueId:
                                    'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                                    'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                },
                                value: 'text',
                              },
                              val: {
                                $var: {
                                  name: 'existingAttempt',
                                  path: {
                                    type: {
                                      blueId:
                                        'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                                'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                            },
                            value: '',
                          },
                          then: {
                            $var: {
                              name: 'existingAttempt',
                              path: {
                                type: {
                                  blueId:
                                    'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                              'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                          },
                          value: '/currency',
                        },
                      },
                      nextAmountReserved: {
                        $document: {
                          type: {
                            blueId:
                              'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                                      'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                  },
                                  value: '/chargeAttempts',
                                },
                              },
                            },
                          },
                          function: {
                            type: {
                              blueId:
                                'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                                    'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                },
                                value: 'text',
                              },
                              val: {
                                $event: {
                                  type: {
                                    blueId:
                                      'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                  },
                                  value: '/message/request/requestedAt',
                                },
                              },
                            },
                          },
                          else: {
                            type: {
                              blueId:
                                'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                            },
                            value: '',
                          },
                          then: {
                            $event: {
                              type: {
                                blueId:
                                  'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                              },
                              value: '/message/request/requestedAt',
                            },
                          },
                        },
                      },
                      reason: {
                        type: {
                          blueId:
                            'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                                    'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                },
                                value: 'text',
                              },
                              val: {
                                $event: {
                                  type: {
                                    blueId:
                                      'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                  },
                                  value: '/message/request/currency',
                                },
                              },
                            },
                          },
                          else: {
                            type: {
                              blueId:
                                'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                            },
                            value: '',
                          },
                          then: {
                            $event: {
                              type: {
                                blueId:
                                  'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                                    'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                },
                                value: 'text',
                              },
                              val: {
                                $document: {
                                  type: {
                                    blueId:
                                      'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                  },
                                  value: '/revokedAt',
                                },
                              },
                            },
                          },
                          else: {
                            type: {
                              blueId:
                                'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                            },
                            value: '',
                          },
                          then: {
                            $document: {
                              type: {
                                blueId:
                                  'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                              },
                              value: '/revokedAt',
                            },
                          },
                        },
                      },
                      status: {
                        type: {
                          blueId:
                            'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                                        'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                    },
                                    value: 'existingDecision',
                                  },
                                },
                                {
                                  type: {
                                    blueId:
                                      'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                                        'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                    },
                                    value: 'existingDecision',
                                  },
                                },
                                {
                                  type: {
                                    blueId:
                                      'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                                        'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                                                  'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                              },
                                              value: 'amountMinor',
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
                                                              'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                                                                'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                                            },
                                                            value:
                                                              'requestedCurrency',
                                                          },
                                                        },
                                                        {
                                                          $var: {
                                                            type: {
                                                              blueId:
                                                                'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                                                              'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                                                                      'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                                                                                          'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                                                                      },
                                                                                      value:
                                                                                        'amountReserved',
                                                                                    },
                                                                                  },
                                                                                  {
                                                                                    $var: {
                                                                                      type: {
                                                                                        blueId:
                                                                                          'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                                                                      },
                                                                                      value:
                                                                                        'amountCaptured',
                                                                                    },
                                                                                  },
                                                                                  {
                                                                                    $var: {
                                                                                      type: {
                                                                                        blueId:
                                                                                          'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                                                                                  'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                                                                                  'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                                                                                            'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                                                                        },
                                                                                        value:
                                                                                          'amountReserved',
                                                                                      },
                                                                                    },
                                                                                    {
                                                                                      $var: {
                                                                                        type: {
                                                                                          blueId:
                                                                                            'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                                                                                  'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                                                                          'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                                                                  'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                                                          'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                                                  'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                                          'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                                    'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                                          'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                      },
                                      value: 'existingDecision',
                                    },
                                  },
                                  {
                                    type: {
                                      blueId:
                                        'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                                            'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                                    'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                                      'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                                        'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                    },
                                    value: 'authorizationId',
                                  },
                                },
                                object: {
                                  $var: {
                                    type: {
                                      blueId:
                                        'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                    },
                                    value: 'nextChargeAttempts',
                                  },
                                },
                                val: {
                                  amountMinor: {
                                    $var: {
                                      type: {
                                        blueId:
                                          'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                      },
                                      value: 'amountMinor',
                                    },
                                  },
                                  authorizationReason: {
                                    $var: {
                                      type: {
                                        blueId:
                                          'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                      },
                                      value: 'reason',
                                    },
                                  },
                                  authorizationRespondedAt: {
                                    $var: {
                                      type: {
                                        blueId:
                                          'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                      },
                                      value: 'nowIso',
                                    },
                                  },
                                  authorizationStatus: {
                                    $var: {
                                      type: {
                                        blueId:
                                          'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                                                    'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                                },
                                                value: 'status',
                                              },
                                            },
                                            {
                                              type: {
                                                blueId:
                                                  'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                              },
                                              value: 'approved',
                                            },
                                          ],
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
                                        $var: {
                                          type: {
                                            blueId:
                                              'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                          },
                                          value: 'amountMinor',
                                        },
                                      },
                                    },
                                  },
                                  capturedDeltaMinor: {
                                    type: {
                                      blueId:
                                        'E2LM6qgzWG9ttagq2xTmiZkgYEAgkYedFCmU9v7NnVEq',
                                    },
                                    value: 0,
                                  },
                                  chargeMode: {
                                    $var: {
                                      type: {
                                        blueId:
                                          'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                      },
                                      value: 'chargeMode',
                                    },
                                  },
                                  counterpartyId: {
                                    $var: {
                                      type: {
                                        blueId:
                                          'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                      },
                                      value: 'counterpartyId',
                                    },
                                  },
                                  counterpartyType: {
                                    $var: {
                                      type: {
                                        blueId:
                                          'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                      },
                                      value: 'counterpartyType',
                                    },
                                  },
                                  currency: {
                                    $var: {
                                      type: {
                                        blueId:
                                          'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                      },
                                      value: 'requestedCurrency',
                                    },
                                  },
                                  holdId: {
                                    type: {
                                      blueId:
                                        'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                    },
                                    value: '',
                                  },
                                  lastSettlementProcessingStatus: {
                                    type: {
                                      blueId:
                                        'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                    },
                                    value: '',
                                  },
                                  lastSettlementRequestStatus: {
                                    type: {
                                      blueId:
                                        'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                    },
                                    value: '',
                                  },
                                  reservedDeltaMinor: {
                                    type: {
                                      blueId:
                                        'E2LM6qgzWG9ttagq2xTmiZkgYEAgkYedFCmU9v7NnVEq',
                                    },
                                    value: 0,
                                  },
                                  settled: {
                                    type: {
                                      blueId:
                                        'AwvXD961fmnmqcSQhjMA7r15HpVh39cefb6ZTyUz2Fm2',
                                    },
                                    value: false,
                                  },
                                  settlementReason: {
                                    type: {
                                      blueId:
                                        'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                    },
                                    value: '',
                                  },
                                  settlementRespondedAt: {
                                    type: {
                                      blueId:
                                        'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                    },
                                    value: '',
                                  },
                                  transactionId: {
                                    type: {
                                      blueId:
                                        'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                              'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                                              'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                                                    'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                                },
                                                value: 'nextAmountReserved',
                                              },
                                            },
                                            {
                                              $var: {
                                                type: {
                                                  blueId:
                                                    'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                                      'E2LM6qgzWG9ttagq2xTmiZkgYEAgkYedFCmU9v7NnVEq',
                                  },
                                  value: 0,
                                },
                              ],
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
                            $subtract: {
                              items: [
                                {
                                  $var: {
                                    type: {
                                      blueId:
                                        'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                                              'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                          },
                                          value: 'nextAmountReserved',
                                        },
                                      },
                                      {
                                        $var: {
                                          type: {
                                            blueId:
                                              'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                        blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                      },
                      value: 'replace',
                    },
                    path: {
                      type: {
                        blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                      },
                      value: '/chargeAttempts',
                    },
                    val: {
                      $var: {
                        type: {
                          blueId:
                            'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                        blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                      },
                      value: 'replace',
                    },
                    path: {
                      type: {
                        blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                      },
                      value: '/amountReserved',
                    },
                    val: {
                      $var: {
                        type: {
                          blueId:
                            'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                            'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                                  'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                              },
                              value: 'reason',
                            },
                          },
                        },
                        then: {
                          $var: {
                            type: {
                              blueId:
                                'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                            'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                        },
                        value: 'remainingAmountMinor',
                      },
                    },
                    respondedAt: {
                      $var: {
                        type: {
                          blueId:
                            'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                        },
                        value: 'nowIso',
                      },
                    },
                    status: {
                      $var: {
                        type: {
                          blueId:
                            'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                        },
                        value: 'status',
                      },
                    },
                    type: {
                      blueId: 'F1JQhT1Fxn5QMcvtTUn95qvi7tTggAhv3nvQmHExUTuH',
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
            functions: {
              cleanMap: {
                args: {
                  object: {
                    description: 'BEX helper argument.',
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
                                'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                            },
                            value: 'object',
                          },
                        },
                      },
                      item: {
                        type: {
                          blueId:
                            'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                                        'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                    },
                                    value: '/key',
                                  },
                                },
                              },
                            },
                            function: {
                              type: {
                                blueId:
                                  'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
              blueId: '4qGDz5yJxXc9dr8bsBE1B2Tg4AWuR4qHPU9H6T29m3KZ',
            },
          },
        ],
      },
      type: {
        blueId: 'CXotTNTYxqqSgDBzTGJjbLVvsjrxJMgmJZaC1rA826CF',
      },
    },
    granteeChannel: {
      description:
        'Grantee timeline channel (party allowed to use the mandate).',
      type: {
        blueId: 'DwLMXCJcg3AL4GHW1SjraxoNDPpswXH6RHsx4fNDT6rg',
      },
    },
    granterChannel: {
      description: 'Granting party timeline channel.',
      type: {
        blueId: 'DwLMXCJcg3AL4GHW1SjraxoNDPpswXH6RHsx4fNDT6rg',
      },
    },
    guarantorChannel: {
      description:
        'Bank/admin channel executing mandate checks and settlement updates.',
      type: {
        blueId: 'DwLMXCJcg3AL4GHW1SjraxoNDPpswXH6RHsx4fNDT6rg',
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
                    value: '/chargeAttempts',
                  },
                },
              ],
            },
            name: 'Initialize mandate runtime state',
            type: {
              blueId: '6bU2jWm3F6GaCXSLpdxiNjRbf9XcQDzH1NUsroHz4x8U',
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
    settleSpend: {
      channel: {
        type: {
          blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
        },
        value: 'guarantorChannel',
      },
      description:
        'Apply final reserve/capture deltas for a previously authorized charge attempt.',
      request: {
        type: {
          blueId: '7MrYz5SYkcN9b479w4R4M3JzsgWYuuJBhSfMLwSPdetk',
        },
      },
      type: {
        blueId: 'wGksq5vE8TroTr6StteHDnMx9mJKqT7dHoYT9bEddym',
      },
    },
    settleSpendImpl: {
      operation: {
        type: {
          blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                              'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                          },
                          value: 'authorizationId',
                        },
                        {
                          type: {
                            blueId:
                              'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                          },
                          value: 'settlementId',
                        },
                        {
                          type: {
                            blueId:
                              'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                          },
                          value: 'settlementStatus',
                        },
                        {
                          type: {
                            blueId:
                              'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                          },
                          value: 'reservedDeltaMinor',
                        },
                        {
                          type: {
                            blueId:
                              'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                          },
                          value: 'capturedDeltaMinor',
                        },
                        {
                          type: {
                            blueId:
                              'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                          },
                          value: 'holdId',
                        },
                        {
                          type: {
                            blueId:
                              'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                          },
                          value: 'transactionId',
                        },
                        {
                          type: {
                            blueId:
                              'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                          },
                          value: 'requestReason',
                        },
                        {
                          type: {
                            blueId:
                              'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                          },
                          value: 'nowIso',
                        },
                        {
                          type: {
                            blueId:
                              'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                          },
                          value: 'amountLimit',
                        },
                        {
                          type: {
                            blueId:
                              'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                          },
                          value: 'amountReserved',
                        },
                        {
                          type: {
                            blueId:
                              'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                          },
                          value: 'amountCaptured',
                        },
                        {
                          type: {
                            blueId:
                              'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                          },
                          value: 'chargeAttempts',
                        },
                        {
                          type: {
                            blueId:
                              'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                          },
                          value: 'existingAttempt',
                        },
                        {
                          type: {
                            blueId:
                              'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                          },
                          value: 'hasExistingAttempt',
                        },
                        {
                          type: {
                            blueId:
                              'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                          },
                          value: 'alreadySettled',
                        },
                        {
                          type: {
                            blueId:
                              'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                          },
                          value: 'approved',
                        },
                        {
                          type: {
                            blueId:
                              'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                          },
                          value: 'authorizedAmount',
                        },
                        {
                          type: {
                            blueId:
                              'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                          },
                          value: 'status',
                        },
                        {
                          type: {
                            blueId:
                              'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                          },
                          value: 'reason',
                        },
                        {
                          type: {
                            blueId:
                              'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                          },
                          value: 'nextAmountReserved',
                        },
                        {
                          type: {
                            blueId:
                              'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                          },
                          value: 'nextAmountCaptured',
                        },
                        {
                          type: {
                            blueId:
                              'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                          },
                          value: 'nextAttempt',
                        },
                        {
                          type: {
                            blueId:
                              'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                                      'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                  },
                                  value: '/settled',
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
                      amountCaptured: {
                        $document: {
                          type: {
                            blueId:
                              'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                          },
                          value: '/amountCaptured',
                        },
                      },
                      amountLimit: {
                        $document: {
                          type: {
                            blueId:
                              'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                          },
                          value: '/amountLimit',
                        },
                      },
                      amountReserved: {
                        $document: {
                          type: {
                            blueId:
                              'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                                      'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                  },
                                  value: '/authorizationStatus',
                                },
                              },
                            },
                            {
                              type: {
                                blueId:
                                  'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                                    'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                },
                                value: 'text',
                              },
                              val: {
                                $event: {
                                  type: {
                                    blueId:
                                      'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                  },
                                  value: '/message/request/authorizationId',
                                },
                              },
                            },
                          },
                          else: {
                            type: {
                              blueId:
                                'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                            },
                            value: '',
                          },
                          then: {
                            $event: {
                              type: {
                                blueId:
                                  'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                                    'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                },
                                value: 'integer',
                              },
                              val: {
                                $var: {
                                  name: 'existingAttempt',
                                  path: {
                                    type: {
                                      blueId:
                                        'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                                'E2LM6qgzWG9ttagq2xTmiZkgYEAgkYedFCmU9v7NnVEq',
                            },
                            value: 0,
                          },
                          then: {
                            $var: {
                              name: 'existingAttempt',
                              path: {
                                type: {
                                  blueId:
                                    'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                                    'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                },
                                value: 'integer',
                              },
                              val: {
                                $event: {
                                  type: {
                                    blueId:
                                      'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                  },
                                  value: '/message/request/capturedDeltaMinor',
                                },
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
                            $event: {
                              type: {
                                blueId:
                                  'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                                      'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                  },
                                  value: '/chargeAttempts',
                                },
                              },
                            },
                          },
                          function: {
                            type: {
                              blueId:
                                'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                                                'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                            },
                                            value: 'text',
                                          },
                                          val: {
                                            $event: {
                                              type: {
                                                blueId:
                                                  'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                                            'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                        },
                                        value: '',
                                      },
                                      then: {
                                        $event: {
                                          type: {
                                            blueId:
                                              'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                                            'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                                'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                                'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                                            'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                        },
                                        value: 'text',
                                      },
                                      val: {
                                        $event: {
                                          type: {
                                            blueId:
                                              'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                                        'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                    },
                                    value: '',
                                  },
                                  then: {
                                    $event: {
                                      type: {
                                        blueId:
                                          'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                                        'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                                    'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                },
                                value: 'text',
                              },
                              val: {
                                $event: {
                                  type: {
                                    blueId:
                                      'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                  },
                                  value: '/message/request/holdId',
                                },
                              },
                            },
                          },
                          else: {
                            type: {
                              blueId:
                                'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                            },
                            value: '',
                          },
                          then: {
                            $event: {
                              type: {
                                blueId:
                                  'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                              'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                          },
                          value: '/amountCaptured',
                        },
                      },
                      nextAmountReserved: {
                        $document: {
                          type: {
                            blueId:
                              'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                                                'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                            },
                                            value: 'text',
                                          },
                                          val: {
                                            $event: {
                                              type: {
                                                blueId:
                                                  'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                                            'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                        },
                                        value: '',
                                      },
                                      then: {
                                        $event: {
                                          type: {
                                            blueId:
                                              'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                                            'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                                'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                                      'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                  },
                                  value: '/chargeAttempts',
                                },
                              },
                            },
                          },
                          function: {
                            type: {
                              blueId:
                                'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                                    'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                },
                                value: 'text',
                              },
                              val: {
                                $event: {
                                  type: {
                                    blueId:
                                      'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                  },
                                  value: '/message/request/settledAt',
                                },
                              },
                            },
                          },
                          else: {
                            type: {
                              blueId:
                                'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                            },
                            value: '',
                          },
                          then: {
                            $event: {
                              type: {
                                blueId:
                                  'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                              },
                              value: '/message/request/settledAt',
                            },
                          },
                        },
                      },
                      reason: {
                        type: {
                          blueId:
                            'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                                    'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                },
                                value: 'text',
                              },
                              val: {
                                $event: {
                                  type: {
                                    blueId:
                                      'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                  },
                                  value: '/message/request/reason',
                                },
                              },
                            },
                          },
                          else: {
                            type: {
                              blueId:
                                'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                            },
                            value: '',
                          },
                          then: {
                            $event: {
                              type: {
                                blueId:
                                  'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                                    'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                },
                                value: 'integer',
                              },
                              val: {
                                $event: {
                                  type: {
                                    blueId:
                                      'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                  },
                                  value: '/message/request/reservedDeltaMinor',
                                },
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
                            $event: {
                              type: {
                                blueId:
                                  'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                                    'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                },
                                value: 'text',
                              },
                              val: {
                                $event: {
                                  type: {
                                    blueId:
                                      'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                  },
                                  value: '/message/request/settlementId',
                                },
                              },
                            },
                          },
                          else: {
                            type: {
                              blueId:
                                'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                            },
                            value: '',
                          },
                          then: {
                            $event: {
                              type: {
                                blueId:
                                  'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                                    'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                },
                                value: 'text',
                              },
                              val: {
                                $event: {
                                  type: {
                                    blueId:
                                      'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                  },
                                  value: '/message/request/status',
                                },
                              },
                            },
                          },
                          else: {
                            type: {
                              blueId:
                                'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                            },
                            value: '',
                          },
                          then: {
                            $event: {
                              type: {
                                blueId:
                                  'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                              },
                              value: '/message/request/status',
                            },
                          },
                        },
                      },
                      status: {
                        type: {
                          blueId:
                            'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                                    'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                },
                                value: 'text',
                              },
                              val: {
                                $event: {
                                  type: {
                                    blueId:
                                      'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                  },
                                  value: '/message/request/transactionId',
                                },
                              },
                            },
                          },
                          else: {
                            type: {
                              blueId:
                                'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                            },
                            value: '',
                          },
                          then: {
                            $event: {
                              type: {
                                blueId:
                                  'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                                'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                                    'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                                              'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                                                                'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                                            },
                                                            value:
                                                              'settlementStatus',
                                                          },
                                                        },
                                                        {
                                                          type: {
                                                            blueId:
                                                              'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                                                                'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                                            },
                                                            value:
                                                              'settlementStatus',
                                                          },
                                                        },
                                                        {
                                                          type: {
                                                            blueId:
                                                              'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                                                                  'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                                              },
                                                              value:
                                                                'capturedDeltaMinor',
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
                                                                                'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                                                            },
                                                                            value:
                                                                              'settlementStatus',
                                                                          },
                                                                        },
                                                                        {
                                                                          type: {
                                                                            blueId:
                                                                              'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                                                                                'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                                                            },
                                                                            value:
                                                                              'capturedDeltaMinor',
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
                                                                                  'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                                                              },
                                                                              value:
                                                                                'capturedDeltaMinor',
                                                                            },
                                                                          },
                                                                          {
                                                                            $var: {
                                                                              type: {
                                                                                blueId:
                                                                                  'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                                                                                          'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                                                                      },
                                                                                      value:
                                                                                        'candidateAmountReserved',
                                                                                    },
                                                                                    {
                                                                                      type: {
                                                                                        blueId:
                                                                                          'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                                                                      },
                                                                                      value:
                                                                                        'candidateAmountCaptured',
                                                                                    },
                                                                                    {
                                                                                      type: {
                                                                                        blueId:
                                                                                          'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                                                                                                'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                                                                            },
                                                                                            value:
                                                                                              'amountCaptured',
                                                                                          },
                                                                                        },
                                                                                        {
                                                                                          $var: {
                                                                                            type: {
                                                                                              blueId:
                                                                                                'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                                                                                                'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                                                                            },
                                                                                            value:
                                                                                              'amountReserved',
                                                                                          },
                                                                                        },
                                                                                        {
                                                                                          $var: {
                                                                                            type: {
                                                                                              blueId:
                                                                                                'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                                                                                                        'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                                                                                    },
                                                                                                    value:
                                                                                                      'amountReserved',
                                                                                                  },
                                                                                                },
                                                                                                {
                                                                                                  $var: {
                                                                                                    type: {
                                                                                                      blueId:
                                                                                                        'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                                                                                                        'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                                                                                    },
                                                                                                    value:
                                                                                                      'amountCaptured',
                                                                                                  },
                                                                                                },
                                                                                                {
                                                                                                  $var: {
                                                                                                    type: {
                                                                                                      blueId:
                                                                                                        'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                                                                                            'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                                                                        },
                                                                                        value:
                                                                                          'candidateAmountReserved',
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
                                                                                                      'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                                                                                  },
                                                                                                  value:
                                                                                                    'candidateAmountCaptured',
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
                                                                                                                'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                                                                                            },
                                                                                                            value:
                                                                                                              'candidateUsed',
                                                                                                          },
                                                                                                        },
                                                                                                        {
                                                                                                          $var: {
                                                                                                            type: {
                                                                                                              blueId:
                                                                                                                'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                                                                                                                'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                                                                                                                  'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                                                                                                                  'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                                                                                                                            'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                                                                                                                                'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                                                                                                                                'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                                                                                                                                'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                                                                                                            },
                                                                                                                            value:
                                                                                                                              'settlementId',
                                                                                                                          },
                                                                                                                        },
                                                                                                                      lastSettlementProcessingStatus:
                                                                                                                        {
                                                                                                                          type: {
                                                                                                                            blueId:
                                                                                                                              'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                                                                                                          },
                                                                                                                          value:
                                                                                                                            'accepted',
                                                                                                                        },
                                                                                                                      lastSettlementRequestStatus:
                                                                                                                        {
                                                                                                                          $var: {
                                                                                                                            type: {
                                                                                                                              blueId:
                                                                                                                                'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                                                                                                                                'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                                                                                                            },
                                                                                                                            value:
                                                                                                                              'reservedDeltaMinor',
                                                                                                                          },
                                                                                                                        },
                                                                                                                      settled:
                                                                                                                        {
                                                                                                                          type: {
                                                                                                                            blueId:
                                                                                                                              'AwvXD961fmnmqcSQhjMA7r15HpVh39cefb6ZTyUz2Fm2',
                                                                                                                          },
                                                                                                                          value:
                                                                                                                            true,
                                                                                                                        },
                                                                                                                      settlementReason:
                                                                                                                        {
                                                                                                                          $var: {
                                                                                                                            type: {
                                                                                                                              blueId:
                                                                                                                                'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                                                                                                                                'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                                                                                                                                'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                                                                                                                        'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                                                                                                                          'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                                                                                                      },
                                                                                                                      value:
                                                                                                                        'nextChargeAttempts',
                                                                                                                    },
                                                                                                                  },
                                                                                                                val: {
                                                                                                                  $var: {
                                                                                                                    type: {
                                                                                                                      blueId:
                                                                                                                        'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                                                                                                                'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                                                                                                      'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                                                                                            'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                                                                                  'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                                                                          'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                                                                  'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                                                          'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                                                  'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                                          'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                                          'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                                  'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                                  'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                                        'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                    },
                                    value: 'status',
                                  },
                                },
                                {
                                  type: {
                                    blueId:
                                      'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                                          'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                      },
                                      value: 'existingAttempt',
                                    },
                                  },
                                  {
                                    lastSettlementId: {
                                      $var: {
                                        type: {
                                          blueId:
                                            'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                        },
                                        value: 'settlementId',
                                      },
                                    },
                                    lastSettlementProcessingStatus: {
                                      type: {
                                        blueId:
                                          'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                      },
                                      value: 'rejected',
                                    },
                                    lastSettlementRequestStatus: {
                                      $var: {
                                        type: {
                                          blueId:
                                            'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                        },
                                        value: 'settlementStatus',
                                      },
                                    },
                                    settlementReason: {
                                      $var: {
                                        type: {
                                          blueId:
                                            'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                        },
                                        value: 'reason',
                                      },
                                    },
                                    settlementRespondedAt: {
                                      $var: {
                                        type: {
                                          blueId:
                                            'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                                        'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                    },
                                    value: 'authorizationId',
                                  },
                                },
                                object: {
                                  $var: {
                                    type: {
                                      blueId:
                                        'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                    },
                                    value: 'nextChargeAttempts',
                                  },
                                },
                                val: {
                                  $var: {
                                    type: {
                                      blueId:
                                        'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                        blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                      },
                      value: 'replace',
                    },
                    path: {
                      type: {
                        blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                      },
                      value: '/chargeAttempts',
                    },
                    val: {
                      $var: {
                        type: {
                          blueId:
                            'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                        blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                      },
                      value: 'replace',
                    },
                    path: {
                      type: {
                        blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                      },
                      value: '/amountReserved',
                    },
                    val: {
                      $var: {
                        type: {
                          blueId:
                            'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                        blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                      },
                      value: 'replace',
                    },
                    path: {
                      type: {
                        blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                      },
                      value: '/amountCaptured',
                    },
                    val: {
                      $var: {
                        type: {
                          blueId:
                            'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                            'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                        },
                        value: 'nextAmountCaptured',
                      },
                    },
                    amountReserved: {
                      $var: {
                        type: {
                          blueId:
                            'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                        },
                        value: 'nextAmountReserved',
                      },
                    },
                    authorizationId: {
                      $var: {
                        type: {
                          blueId:
                            'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                                  'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                              },
                              value: 'reason',
                            },
                          },
                        },
                        then: {
                          $var: {
                            type: {
                              blueId:
                                'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                            'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                        },
                        value: 'nowIso',
                      },
                    },
                    settlementId: {
                      $var: {
                        type: {
                          blueId:
                            'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                        },
                        value: 'settlementId',
                      },
                    },
                    status: {
                      $var: {
                        type: {
                          blueId:
                            'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                        },
                        value: 'status',
                      },
                    },
                    type: {
                      blueId: 'CNxDfzH62fY9mtj71BTaZZNsyGLpS2RinaB6K34tibbh',
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
            functions: {
              cleanMap: {
                args: {
                  object: {
                    description: 'BEX helper argument.',
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
                                'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                            },
                            value: 'object',
                          },
                        },
                      },
                      item: {
                        type: {
                          blueId:
                            'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
                                        'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                    },
                                    value: '/key',
                                  },
                                },
                              },
                            },
                            function: {
                              type: {
                                blueId:
                                  'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
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
              blueId: '4qGDz5yJxXc9dr8bsBE1B2Tg4AWuR4qHPU9H6T29m3KZ',
            },
          },
        ],
      },
      type: {
        blueId: 'CXotTNTYxqqSgDBzTGJjbLVvsjrxJMgmJZaC1rA826CF',
      },
    },
  },
  currency: {
    description: 'Currency code used for amountLimit validation.',
    type: {
      blueId: 'rdiMJ9tNu3geCKLDwXxCCjVQzKvCyaFXHiZTFAkRsCJ',
    },
  },
  description:
    'Payment mandate authorizing a grantee to execute payment requests on behalf of a granter, under explicit limits, with deterministic spend tracking and optional linked PayNote bootstrap rules.\n',
  expiresAt: {
    description: 'Optional mandate expiry timestamp.',
    type: {
      blueId: '47EN5A1B1ZXXdXMEoURVJquMSjdDuKFNDjMrkvVxoVJk',
    },
  },
  granteeId: {
    description: 'Identifier interpreted according to granteeType.',
    type: {
      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
    },
  },
  granteeType: {
    description:
      'Party allowed to invoke this mandate:\n- documentId\n- merchantId\n- customerId\n',
    type: {
      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
    },
  },
  granterId: {
    description:
      'Identifier of the granting party:\n- merchantId when granterType is merchant\n- customerId (bank user id) when granterType is customer\n',
    type: {
      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
    },
  },
  granterType: {
    description:
      'Party granting authority to use funds:\n- merchant\n- customer\n',
    type: {
      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
    },
  },
  name: 'Payment Mandate',
  revokedAt: {
    description:
      'Optional revocation timestamp. When set, mandate is inactive.',
    type: {
      blueId: '47EN5A1B1ZXXdXMEoURVJquMSjdDuKFNDjMrkvVxoVJk',
    },
  },
  sourceAccount: {
    description:
      'Funds source to use when this mandate executes: - root (uses root account context; for merchant this maps to active credit line) - specific account number\n',
    type: {
      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
    },
  },
};
