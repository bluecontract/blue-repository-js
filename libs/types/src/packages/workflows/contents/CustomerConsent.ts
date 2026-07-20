export const CustomerConsent: Record<string, unknown> = {
  consentDetails: {
    description:
      'Generic scope details (merchant id, event categories, requesting contract refs, etc.).',
    keyType: {
      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
    },
    type: {
      blueId: 'Efkz9D1ARMM7rU43w3rDNVqat1naS6qXKCqP4eHin3yG',
    },
    valueType: {
      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
    },
  },
  consentKind: {
    description:
      'Classification of the consent (e.g., cardTransactionMonitoring).',
    type: {
      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
    },
  },
  consentStatus: {
    description: 'Consent state (granted, revoked).',
    type: {
      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
    },
  },
  contracts: {
    granteeChannel: {
      description: 'Grantee (e.g., merchant MyOS timeline).',
      type: {
        blueId: 'BDP5DqtmUNtG2FE1hLe5n2n5h4JMJayXixeGzfM5uzrq',
      },
    },
    granterChannel: {
      description:
        'Granter (customer represented by the bank; customer has no MyOS account).',
      type: {
        blueId: 'BDP5DqtmUNtG2FE1hLe5n2n5h4JMJayXixeGzfM5uzrq',
      },
    },
    guarantorChannel: {
      description: 'Bank/admin channel.',
      type: {
        blueId: 'BDP5DqtmUNtG2FE1hLe5n2n5h4JMJayXixeGzfM5uzrq',
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
                      value: 'replace',
                    },
                    path: {
                      type: {
                        blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                      },
                      value: '/consentStatus',
                    },
                    val: {
                      type: {
                        blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                      },
                      value: 'granted',
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
            name: 'Initialize',
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
    revokeConsent: {
      channel: {
        type: {
          blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
        },
        value: 'granterChannel',
      },
      description: 'Customer revokes the consent.',
      request: {
        reason: {
          type: {
            blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
          },
        },
        revokedAt: {
          type: {
            blueId: '47EN5A1B1ZXXdXMEoURVJquMSjdDuKFNDjMrkvVxoVJk',
          },
        },
      },
      type: {
        blueId: 'Be766kx7kqFYGf96VtAc8Weofb3xkCRUTxSDVd317S2G',
      },
    },
    revokeConsentImpl: {
      operation: {
        type: {
          blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
        },
        value: 'revokeConsent',
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
                          value: 'request',
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
                          value: 'revokedAt',
                        },
                        {
                          type: {
                            blueId:
                              'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                          },
                          value: 'canRevoke',
                        },
                      ],
                    },
                    vars: {
                      canRevoke: {
                        $eq: {
                          items: [
                            {
                              $document: {
                                type: {
                                  blueId:
                                    'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                },
                                value: '/consentStatus',
                              },
                            },
                            {
                              type: {
                                blueId:
                                  'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                              },
                              value: 'granted',
                            },
                          ],
                        },
                      },
                      reason: {
                        $default: {
                          items: [
                            {
                              $event: {
                                type: {
                                  blueId:
                                    'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                },
                                value: '/message/request/reason',
                              },
                            },
                            {
                              type: {
                                blueId:
                                  'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                              },
                              value: '',
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
                      revokedAt: {
                        $default: {
                          items: [
                            {
                              $event: {
                                type: {
                                  blueId:
                                    'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                },
                                value: '/message/request/revokedAt',
                              },
                            },
                            {
                              type: {
                                blueId:
                                  'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                              },
                              value: '',
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
                      $var: {
                        type: {
                          blueId:
                            'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                        },
                        value: 'canRevoke',
                      },
                    },
                    then: {
                      items: [
                        {
                          $appendEvent: {
                            reason: {
                              $var: {
                                type: {
                                  blueId:
                                    'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                },
                                value: 'reason',
                              },
                            },
                            revokedAt: {
                              $var: {
                                type: {
                                  blueId:
                                    'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                },
                                value: 'revokedAt',
                              },
                            },
                            type: {
                              blueId:
                                'BffmfCSM6r3GgrQU9XK3Qaj83gw4H8rfa1N7gXuab1ma',
                            },
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
                      value: '/consentStatus',
                    },
                    val: {
                      type: {
                        blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                      },
                      value: 'revoked',
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
                      value: '/revocationReason',
                    },
                    val: {
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
                      value: '/revokedAt',
                    },
                    val: {
                      $var: {
                        type: {
                          blueId:
                            'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                        },
                        value: 'revokedAt',
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
            name: 'Capture',
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
  description:
    'Generic customer consent granted to a grantee (e.g., merchant).',
  grantedAt: {
    description: 'Timestamp when consent was granted.',
    type: {
      blueId: '47EN5A1B1ZXXdXMEoURVJquMSjdDuKFNDjMrkvVxoVJk',
    },
  },
  name: 'Customer Consent',
  revocationReason: {
    description: 'Reason for revocation.',
    type: {
      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
    },
  },
  revokedAt: {
    description: 'Timestamp when consent was revoked.',
    type: {
      blueId: '47EN5A1B1ZXXdXMEoURVJquMSjdDuKFNDjMrkvVxoVJk',
    },
  },
};
