export const DocumentBootstrap: Record<string, unknown> = {
  contracts: {
    bootstrapProviderChannel: {
      description: 'Participant channel for the bootstrap provider.',
      schema: {
        required: true,
      },
      type: {
        blueId: '8aohWT7jcoaC1j2siQzBxoKM8HhQ4HF13BkZDNnq5UHf',
      },
    },
    completeBootstrap: {
      channel: {
        type: {
          blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
        },
        value: 'bootstrapProviderChannel',
      },
      request: {
        type: {
          blueId: '7hkTA9xEpQixBzjN2M2Uei8K1h2MvmpVLqhau53Cksg5',
        },
      },
      steps: {
        items: [
          {
            do: {
              items: [
                {
                  $appendEvent: {
                    $event: {
                      type: {
                        blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                      },
                      value: '/message/request',
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
                        blueId: '8LNqtg237MFe1zKdG3eWftMXtFTgVtyvrxgZkHcXYkC1',
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
                      value: '/documentSession',
                    },
                    val: {
                      $event: {
                        type: {
                          blueId:
                            'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                        },
                        value: '/message/request/documentSession',
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
            name: 'Record Bootstrap Completed',
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
    declineBootstrap: {
      channel: {
        type: {
          blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
        },
        value: 'bootstrapProviderChannel',
      },
      request: {
        type: {
          blueId: 'HAbdpL4jP3EqXPiHBXddTXcdjiMRnxbkE6YnWkvbCMRa',
        },
      },
      steps: {
        items: [
          {
            do: {
              items: [
                {
                  $appendEvent: {
                    $event: {
                      type: {
                        blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                      },
                      value: '/message/request',
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
                        blueId: '623skurB6ZSt3jpkdNpuu6fwRG3VdrVgj2FKxfrNnBbH',
                      },
                    },
                  },
                },
                {
                  $if: {
                    cond: {
                      $exists: {
                        $event: {
                          type: {
                            blueId:
                              'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                          },
                          value: '/message/request/reason',
                        },
                      },
                    },
                    then: {
                      items: [
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
                              value: '/error',
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
            name: 'Record Bootstrap Declined',
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
    failBootstrap: {
      channel: {
        type: {
          blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
        },
        value: 'bootstrapProviderChannel',
      },
      request: {
        type: {
          blueId: 'gACn7Kx4MP1u1hNiw5YuwHC6TEcCTLzyygc4YYN7Xmp',
        },
      },
      steps: {
        items: [
          {
            do: {
              items: [
                {
                  $appendEvent: {
                    $event: {
                      type: {
                        blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                      },
                      value: '/message/request',
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
                        blueId: '3kguQFJvHMnCfrg4Bmqt81EZg6qeht8Cs6tEjNDxTkyB',
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
                      value: '/error',
                    },
                    val: {
                      $event: {
                        type: {
                          blueId:
                            'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                        },
                        value: '/message/request/error',
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
            name: 'Record Bootstrap Failed',
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
    startBootstrap: {
      channel: {
        type: {
          blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
        },
        value: 'bootstrapProviderChannel',
      },
      request: {
        type: {
          blueId: '3bhU39YjdqxCGhSW6LodoaP3nTfnYTAB8PY8NaHSLkbt',
        },
      },
      steps: {
        items: [
          {
            do: {
              items: [
                {
                  $appendEvent: {
                    $event: {
                      type: {
                        blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                      },
                      value: '/message/request',
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
                        blueId: 'G5KJnJLaUCSvz4BaZAMNJAgxtfxssb64oWWJXsDW3Uoy',
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
            name: 'Record Bootstrap In Progress',
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
  description:
    "Generic coordination document contract for recording a bootstrap provider's response lifecycle. It defines only the provider-facing response operations and the state they materialize. Concrete documents decide how bootstrap is requested and which bootstrap input is supplied.\n",
  documentSession: {
    description:
      'Running document session made available after successful bootstrap.',
    type: {
      blueId: 'CitEEsPhrBya9i5PK18kP3V4snE1g79885geLZM2PidU',
    },
  },
  error: {
    description:
      'Optional explanation recorded when bootstrap is declined or fails.',
    type: {
      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
    },
  },
  name: 'Document Bootstrap',
  status: {
    description: 'Current bootstrap lifecycle status.',
    type: {
      blueId: '6aAJEFVdFAgLVre8azY4YZQnNiv2FkXJpdpGAYSHiNrY',
    },
  },
};
