export const Mandate: Record<string, unknown> = {
  activatedAt: {
    description:
      'Microsecond timestamp from which the mandate entered Mandate/Status Active.\n\nThe value is derived by the inherited activation workflow from the root\ncausal Coordination/Timeline Entry that led to the accepted\nMandate/Mandate Activated Message. It is not supplied by that Message.\nAfter activation succeeds, inherited lifecycle workflows do not replace\nit.\n',
    type: {
      blueId: 'E2LM6qgzWG9ttagq2xTmiZkgYEAgkYedFCmU9v7NnVEq',
    },
  },
  activateOnAuthorityConfirmation: {
    description:
      'Controls whether successful authority confirmation also emits the mandate\nactivation Message.\n\nWhen true, successful confirmation emits Mandate/Mandate Activated, which\nis handled by the inherited activation workflow.\n\nWhen false, successful confirmation leaves the mandate in\nMandate/Status Authority Confirmed. A specialized operation must later emit\nMandate/Mandate Activated.\n\nWhen absent before initialization, the initialization workflow materializes\ntrue. The field is not a fixed inherited value, so a concrete mandate may\nexplicitly set it to false.\n',
    type: {
      blueId: 'AwvXD961fmnmqcSQhjMA7r15HpVh39cefb6ZTyUz2Fm2',
    },
  },
  authorityConfirmedAt: {
    description:
      'Microsecond timestamp of the root causal Coordination/Timeline Entry that\nsuccessfully changed the mandate from Coordination/Status Pending to\nMandate/Status Authority Confirmed.\n\nThe value is derived by the inherited authority-confirmation workflow. It\nis never supplied by the operation request. After authority confirmation\nsucceeds, inherited lifecycle workflows do not replace it.\n',
    type: {
      blueId: 'E2LM6qgzWG9ttagq2xTmiZkgYEAgkYedFCmU9v7NnVEq',
    },
  },
  contracts: {
    applyMandateActivation: {
      channel: {
        type: {
          blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
        },
        value: 'mandateActivatedChannel',
      },
      description:
        'Sole authoritative mandate-activation implementation.\n\nIt accepts Mandate/Mandate Activated emitted by an operation. On\nMandate/Status Authority Confirmed it changes status to Mandate/Status\nActive and records activatedAt from the root causal Timeline Entry. The\nMessage itself does not supply the timestamp and is not emitted again.\n\nOn Coordination/Status Pending, Mandate/Status Active,\nMandate/Status Terminated, or Coordination/Status Failed it performs no\nlifecycle mutation and does not replace activatedAt.\n\nA Message without a root causal Timeline Entry cannot establish an\nactivation timestamp and must not activate the mandate.\n\nConcrete workflow steps and BEX implementation are defined in this base\ntype.\n',
      event: {
        type: {
          blueId: '3HtuEaYgkn8rV9xZf1x5uY2v7S9WXbVkcV3rj3Sy6arJ',
        },
      },
      steps: {
        items: [
          {
            definition: {
              type: {
                blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
              },
              value: 'mandateLifecycleDefinition',
            },
            entry: {
              type: {
                blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
              },
              value: 'applyMandateActivation',
            },
            name: 'Apply Mandate Activation',
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
    applyMandateTermination: {
      channel: {
        type: {
          blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
        },
        value: 'mandateTerminatedChannel',
      },
      description:
        'Sole authoritative mandate-termination implementation.\n\nIt accepts Mandate/Mandate Terminated emitted by an operation. On\nCoordination/Status Pending, Mandate/Status Authority Confirmed, or\nMandate/Status Active it changes status to Mandate/Status Terminated and\nrecords terminatedAt from the root causal Timeline Entry. The Message\nitself carries the required reason and correlation, does not supply the\ntimestamp, and is not emitted again. Its reason is propagated unchanged\nto the graceful processor termination request.\n\nThe Compute result requests graceful termination after its state changes\nand emitted events have been buffered. Coordination validates the complete\nresult before applying effects, then applies changes, emits events, and\nrequests graceful termination in that order.\n\nOn Mandate/Status Terminated or Coordination/Status Failed it performs no\nlifecycle mutation and does not replace terminatedAt. Receipt of the\ntermination Message still requests graceful processing termination, so a\nfailed mandate can be stopped without replacing its failure state.\n\nConcrete workflow steps and BEX implementation are defined in this base\ntype. No dedicated termination workflow-step type is required.\n',
      event: {
        type: {
          blueId: 'EcXZbNZ5BjMCBEwEaPExWjK6KLLrt3Aoxx5TNQiA5R1A',
        },
      },
      steps: {
        items: [
          {
            definition: {
              type: {
                blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
              },
              value: 'mandateLifecycleDefinition',
            },
            entry: {
              type: {
                blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
              },
              value: 'applyMandateTermination',
            },
            name: 'Apply Mandate Termination',
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
    authorityHolderChannel: {
      description:
        'Required participant channel whose actor controls the authority or\nresource delegated by this mandate. The authority holder may invoke the\nstandard termination operation.\n',
      schema: {
        required: true,
      },
      type: {
        blueId: 'BDP5DqtmUNtG2FE1hLe5n2n5h4JMJayXixeGzfM5uzrq',
      },
    },
    authorizedActorChannel: {
      description:
        'Required participant channel whose actor receives the delegated\nauthority. Concrete mandate subtypes define the delegated resource,\naction, target, or request semantics.\n',
      schema: {
        required: true,
      },
      type: {
        blueId: 'BDP5DqtmUNtG2FE1hLe5n2n5h4JMJayXixeGzfM5uzrq',
      },
    },
    confirmMandateAuthority: {
      channel: {
        type: {
          blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
        },
        value: 'mandateGuarantorChannel',
      },
      description:
        'Inherited operation through which the guarantor confirms that the\ndeclared authority relationship is legitimate.\n\nOn Coordination/Status Pending it changes status to\nMandate/Status Authority Confirmed, records authorityConfirmedAt\nfrom the root causal Timeline Entry, emits Mandate/Mandate Authority\nConfirmed, and, when activateOnAuthorityConfirmation is not false, emits\nMandate/Mandate Activated for the inherited activation workflow.\n\nOn Mandate/Status Authority Confirmed, Mandate/Status Active,\nMandate/Status Terminated, or Coordination/Status Failed it performs no\nlifecycle mutation and does not replace authorityConfirmedAt.\n\nA guarantor may choose to use Operation Request.document and\nrequireExactDocumentVersion to pin the reviewed mandate state. This base\noperation does not require or enforce that choice.\n\nConcrete workflow steps and BEX implementation are defined in this base\ntype.\n',
      steps: {
        items: [
          {
            definition: {
              type: {
                blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
              },
              value: 'mandateLifecycleDefinition',
            },
            entry: {
              type: {
                blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
              },
              value: 'confirmMandateAuthority',
            },
            name: 'Confirm Mandate Authority',
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
    initializeMandate: {
      channel: {
        type: {
          blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
        },
        value: 'mandateLifecycleChannel',
      },
      description:
        'Inherited initialization implementation.\n\nNormal Blue type resolution and bootstrap validate required role-channel\nbindings and lifecycle configuration. When validation.function.entry is\npresent, this workflow verifies that validation.function.functions\ndeclares the selected local function.\n\nOn success it materializes activateOnAuthorityConfirmation as true when\nabsent and sets status to Coordination/Status Pending.\n\nOn failure it sets status to Coordination/Status Failed, stores the\nfirst deterministic failure in initializationError.\n\nInitialization does not write, clear, or normalize lifecycle timestamps.\n\nConcrete workflow steps and BEX implementation are defined in this base\ntype.\n',
      event: {
        type: {
          blueId: 'Ht1o66MTLKf7JmnEiR27rRLSwdz8FUTgf2mGPNuLSDUL',
        },
      },
      steps: {
        items: [
          {
            definition: {
              type: {
                blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
              },
              value: 'mandateLifecycleDefinition',
            },
            entry: {
              type: {
                blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
              },
              value: 'initializeMandate',
            },
            name: 'Initialize Mandate Lifecycle',
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
    mandateActivatedChannel: {
      description:
        'Internal triggered-event channel routing Mandate/Mandate Activated\nMessages emitted by confirmation or specialized mandate operations.\nExternal Timeline Entries do not enter this channel directly.\n',
      type: {
        blueId: '5HwxfbwRBCxG8xYpowWkCPC9akqUSKV7So2M4QHEmLsZ',
      },
    },
    mandateGuarantorChannel: {
      description:
        'Required participant channel whose actor is the mandate guarantor.\n\nThe guarantor confirms that the declared authority relationship is\nlegitimate and may invoke the standard termination operation.\n',
      schema: {
        required: true,
      },
      type: {
        blueId: 'BDP5DqtmUNtG2FE1hLe5n2n5h4JMJayXixeGzfM5uzrq',
      },
    },
    mandateLifecycleChannel: {
      description:
        'Processor-managed lifecycle channel used by the inherited initialization\nworkflow.\n',
      type: {
        blueId: '2DXGQUiQBQ6CT89jwAsTAXaEPhLgiSXhKCGh9Q7Hv3MQ',
      },
    },
    mandateLifecycleDefinition: {
      constants: {
        activatedMessageType: {
          type: {
            blueId: '3HtuEaYgkn8rV9xZf1x5uY2v7S9WXbVkcV3rj3Sy6arJ',
          },
        },
        authorityConfirmedMessageType: {
          type: {
            blueId: 'EbNsQWy645JPPuWhkDw3XcrQk1neH2Z8KBsTvUTCrrmk',
          },
        },
        statusActiveType: {
          type: {
            blueId: 'por6Zfmm5x6kxeeeoARgZRVLWrZaDkTU3Dybc2TncPx',
          },
        },
        statusAuthorityConfirmedType: {
          type: {
            blueId: '65Lj5NBD9BaeXbWq1qQYcCyxV3EoH7r3rj877KDzbWCP',
          },
        },
        statusFailedType: {
          type: {
            blueId: '3kguQFJvHMnCfrg4Bmqt81EZg6qeht8Cs6tEjNDxTkyB',
          },
        },
        statusPendingType: {
          type: {
            blueId: 'DUU68ikPqLZ9NwsUGzkCZ92abAUz51ihcZBTJQEty6E1',
          },
        },
        terminatedMessageType: {
          type: {
            blueId: 'EcXZbNZ5BjMCBEwEaPExWjK6KLLrt3Aoxx5TNQiA5R1A',
          },
        },
      },
      description:
        'Canonical reusable BEX implementation of mandate lifecycle transitions.\nIt contains deterministic functions used by initializeMandate,\nconfirmMandateAuthority, applyMandateActivation, and\napplyMandateTermination. Subtypes do not replace these functions.\n',
      functions: {
        activatedMessage: {
          args: {
            inResponseTo: {
              description: 'Exact Message that caused activation.',
            },
          },
          expr: {
            $objectSet: {
              key: {
                type: {
                  blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                },
                value: 'type',
              },
              object: {
                inResponseTo: {
                  $var: {
                    type: {
                      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                    },
                    value: 'inResponseTo',
                  },
                },
              },
              val: {
                $const: {
                  name: 'activatedMessageType',
                  path: {
                    type: {
                      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                    },
                    value: '/type',
                  },
                },
              },
            },
          },
        },
        applyMandateActivation: {
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
                        value: 'timestampUs',
                      },
                    ],
                  },
                  vars: {
                    timestampUs: {
                      $call: {
                        function: {
                          type: {
                            blueId:
                              'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                          },
                          value: 'processingEventTimestamp',
                        },
                      },
                    },
                  },
                },
              },
              {
                $if: {
                  cond: {
                    $and: {
                      items: [
                        {
                          $call: {
                            function: {
                              type: {
                                blueId:
                                  'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                              },
                              value: 'isStatusAuthorityConfirmed',
                            },
                          },
                        },
                        {
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
                                type: {
                                  blueId:
                                    'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                },
                                value: 'timestampUs',
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
                                'por6Zfmm5x6kxeeeoARgZRVLWrZaDkTU3Dybc2TncPx',
                            },
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
                            value: '/activatedAt',
                          },
                          val: {
                            $var: {
                              type: {
                                blueId:
                                  'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                              },
                              value: 'timestampUs',
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
                        blueId: 'AwvXD961fmnmqcSQhjMA7r15HpVh39cefb6ZTyUz2Fm2',
                      },
                      value: true,
                    },
                  },
                  events: {
                    $events: {
                      type: {
                        blueId: 'AwvXD961fmnmqcSQhjMA7r15HpVh39cefb6ZTyUz2Fm2',
                      },
                      value: true,
                    },
                  },
                },
              },
            ],
          },
        },
        applyMandateTermination: {
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
                        value: 'sourceMessage',
                      },
                      {
                        type: {
                          blueId:
                            'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                        },
                        value: 'terminationReason',
                      },
                      {
                        type: {
                          blueId:
                            'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                        },
                        value: 'timestampUs',
                      },
                      {
                        type: {
                          blueId:
                            'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                        },
                        value: 'terminable',
                      },
                    ],
                  },
                  vars: {
                    sourceMessage: {
                      $call: {
                        function: {
                          type: {
                            blueId:
                              'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                          },
                          value: 'sourceMessage',
                        },
                      },
                    },
                    terminable: {
                      $or: {
                        items: [
                          {
                            $call: {
                              function: {
                                type: {
                                  blueId:
                                    'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                },
                                value: 'isStatusPending',
                              },
                            },
                          },
                          {
                            $call: {
                              function: {
                                type: {
                                  blueId:
                                    'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                },
                                value: 'isStatusAuthorityConfirmed',
                              },
                            },
                          },
                          {
                            $call: {
                              function: {
                                type: {
                                  blueId:
                                    'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                },
                                value: 'isStatusActive',
                              },
                            },
                          },
                        ],
                      },
                    },
                    terminationReason: {
                      $var: {
                        name: 'sourceMessage',
                        path: {
                          type: {
                            blueId:
                              'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                          },
                          value: '/reason',
                        },
                      },
                    },
                    timestampUs: {
                      $call: {
                        function: {
                          type: {
                            blueId:
                              'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                          },
                          value: 'processingEventTimestamp',
                        },
                      },
                    },
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
                            value: 'terminable',
                          },
                        },
                        {
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
                                type: {
                                  blueId:
                                    'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                },
                                value: 'timestampUs',
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
                                'CMW7kGBbCw1uDmaV5ydLVnzRSo2iaBNDFTspMX9QdvZ2',
                            },
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
                            value: '/terminatedAt',
                          },
                          val: {
                            $var: {
                              type: {
                                blueId:
                                  'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                              },
                              value: 'timestampUs',
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
                        blueId: 'AwvXD961fmnmqcSQhjMA7r15HpVh39cefb6ZTyUz2Fm2',
                      },
                      value: true,
                    },
                  },
                  events: {
                    $events: {
                      type: {
                        blueId: 'AwvXD961fmnmqcSQhjMA7r15HpVh39cefb6ZTyUz2Fm2',
                      },
                      value: true,
                    },
                  },
                  termination: {
                    reason: {
                      $var: {
                        type: {
                          blueId:
                            'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                        },
                        value: 'terminationReason',
                      },
                    },
                  },
                },
              },
            ],
          },
        },
        authorityConfirmedMessage: {
          args: {
            inResponseTo: {
              description: 'Exact Message answered by this lifecycle Message.',
            },
            timestampUs: {
              description: 'Root Timeline Entry timestamp.',
            },
          },
          expr: {
            $objectSet: {
              key: {
                type: {
                  blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                },
                value: 'type',
              },
              object: {
                inResponseTo: {
                  $var: {
                    type: {
                      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                    },
                    value: 'inResponseTo',
                  },
                },
                timestampUs: {
                  $var: {
                    type: {
                      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                    },
                    value: 'timestampUs',
                  },
                },
              },
              val: {
                $const: {
                  name: 'authorityConfirmedMessageType',
                  path: {
                    type: {
                      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                    },
                    value: '/type',
                  },
                },
              },
            },
          },
        },
        confirmMandateAuthority: {
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
                        value: 'timestampUs',
                      },
                      {
                        type: {
                          blueId:
                            'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                        },
                        value: 'requestMessage',
                      },
                      {
                        type: {
                          blueId:
                            'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                        },
                        value: 'confirmationMessage',
                      },
                    ],
                  },
                  vars: {
                    confirmationMessage: {
                      $call: {
                        args: {
                          inResponseTo: {
                            $var: {
                              type: {
                                blueId:
                                  'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                              },
                              value: 'requestMessage',
                            },
                          },
                          timestampUs: {
                            $var: {
                              type: {
                                blueId:
                                  'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                              },
                              value: 'timestampUs',
                            },
                          },
                        },
                        function: {
                          type: {
                            blueId:
                              'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                          },
                          value: 'authorityConfirmedMessage',
                        },
                      },
                    },
                    requestMessage: {
                      $call: {
                        function: {
                          type: {
                            blueId:
                              'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                          },
                          value: 'sourceMessage',
                        },
                      },
                    },
                    timestampUs: {
                      $call: {
                        function: {
                          type: {
                            blueId:
                              'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                          },
                          value: 'processingEventTimestamp',
                        },
                      },
                    },
                  },
                },
              },
              {
                $if: {
                  cond: {
                    $and: {
                      items: [
                        {
                          $call: {
                            function: {
                              type: {
                                blueId:
                                  'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                              },
                              value: 'isStatusPending',
                            },
                          },
                        },
                        {
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
                                type: {
                                  blueId:
                                    'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                },
                                value: 'timestampUs',
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
                                '65Lj5NBD9BaeXbWq1qQYcCyxV3EoH7r3rj877KDzbWCP',
                            },
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
                            value: '/authorityConfirmedAt',
                          },
                          val: {
                            $var: {
                              type: {
                                blueId:
                                  'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                              },
                              value: 'timestampUs',
                            },
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
                            value: 'confirmationMessage',
                          },
                        },
                      },
                      {
                        $if: {
                          cond: {
                            $ne: {
                              items: [
                                {
                                  $document: {
                                    type: {
                                      blueId:
                                        'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                    },
                                    value: '/activateOnAuthorityConfirmation',
                                  },
                                },
                                {
                                  type: {
                                    blueId:
                                      'AwvXD961fmnmqcSQhjMA7r15HpVh39cefb6ZTyUz2Fm2',
                                  },
                                  value: false,
                                },
                              ],
                            },
                          },
                          then: {
                            items: [
                              {
                                $appendEvent: {
                                  $call: {
                                    args: {
                                      inResponseTo: {
                                        $var: {
                                          type: {
                                            blueId:
                                              'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                          },
                                          value: 'confirmationMessage',
                                        },
                                      },
                                    },
                                    function: {
                                      type: {
                                        blueId:
                                          'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                      },
                                      value: 'activatedMessage',
                                    },
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
                        blueId: 'AwvXD961fmnmqcSQhjMA7r15HpVh39cefb6ZTyUz2Fm2',
                      },
                      value: true,
                    },
                  },
                  events: {
                    $events: {
                      type: {
                        blueId: 'AwvXD961fmnmqcSQhjMA7r15HpVh39cefb6ZTyUz2Fm2',
                      },
                      value: true,
                    },
                  },
                },
              },
            ],
          },
        },
        emitMandateTermination: {
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
                        value: 'sourceMessage',
                      },
                      {
                        type: {
                          blueId:
                            'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                        },
                        value: 'terminationRequest',
                      },
                      {
                        type: {
                          blueId:
                            'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                        },
                        value: 'terminable',
                      },
                    ],
                  },
                  vars: {
                    sourceMessage: {
                      $call: {
                        function: {
                          type: {
                            blueId:
                              'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                          },
                          value: 'sourceMessage',
                        },
                      },
                    },
                    terminable: {
                      $or: {
                        items: [
                          {
                            $call: {
                              function: {
                                type: {
                                  blueId:
                                    'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                },
                                value: 'isStatusPending',
                              },
                            },
                          },
                          {
                            $call: {
                              function: {
                                type: {
                                  blueId:
                                    'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                },
                                value: 'isStatusAuthorityConfirmed',
                              },
                            },
                          },
                          {
                            $call: {
                              function: {
                                type: {
                                  blueId:
                                    'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                },
                                value: 'isStatusActive',
                              },
                            },
                          },
                          {
                            $call: {
                              function: {
                                type: {
                                  blueId:
                                    'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                },
                                value: 'isStatusFailed',
                              },
                            },
                          },
                        ],
                      },
                    },
                    terminationRequest: {
                      $var: {
                        name: 'sourceMessage',
                        path: {
                          type: {
                            blueId:
                              'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                          },
                          value: '/request',
                        },
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
                        blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                      },
                      value: 'terminable',
                    },
                  },
                  then: {
                    items: [
                      {
                        $appendEvent: {
                          $call: {
                            args: {
                              inResponseTo: {
                                $var: {
                                  type: {
                                    blueId:
                                      'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                  },
                                  value: 'sourceMessage',
                                },
                              },
                              request: {
                                $var: {
                                  type: {
                                    blueId:
                                      'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                  },
                                  value: 'terminationRequest',
                                },
                              },
                            },
                            function: {
                              type: {
                                blueId:
                                  'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                              },
                              value: 'terminatedMessage',
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
                        blueId: 'AwvXD961fmnmqcSQhjMA7r15HpVh39cefb6ZTyUz2Fm2',
                      },
                      value: true,
                    },
                  },
                  events: {
                    $events: {
                      type: {
                        blueId: 'AwvXD961fmnmqcSQhjMA7r15HpVh39cefb6ZTyUz2Fm2',
                      },
                      value: true,
                    },
                  },
                },
              },
            ],
          },
        },
        hasDeclaredValidationEntry: {
          expr: {
            $or: {
              items: [
                {
                  $not: {
                    $exists: {
                      $document: {
                        type: {
                          blueId:
                            'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                        },
                        value: '/validation/function/entry',
                      },
                    },
                  },
                },
                {
                  $and: {
                    items: [
                      {
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
                              value: '/validation/function/entry',
                            },
                          },
                        },
                      },
                      {
                        $hasKey: {
                          key: {
                            $document: {
                              type: {
                                blueId:
                                  'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                              },
                              value: '/validation/function/entry',
                            },
                          },
                          object: {
                            $document: {
                              type: {
                                blueId:
                                  'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                              },
                              value: '/validation/function/functions',
                            },
                          },
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        },
        initializeMandate: {
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
                        value: 'validationEntryDeclared',
                      },
                      {
                        type: {
                          blueId:
                            'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                        },
                        value: 'initializationError',
                      },
                    ],
                  },
                  vars: {
                    initializationError: {
                      $choose: {
                        cond: {
                          $not: {
                            $var: {
                              type: {
                                blueId:
                                  'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                              },
                              value: 'validationEntryDeclared',
                            },
                          },
                        },
                        then: {
                          type: {
                            blueId:
                              'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                          },
                          value:
                            'validation.function.functions must declare the entry named by validation.function.entry.',
                        },
                      },
                    },
                    validationEntryDeclared: {
                      $call: {
                        function: {
                          type: {
                            blueId:
                              'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                          },
                          value: 'hasDeclaredValidationEntry',
                        },
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
                        blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                      },
                      value: 'validationEntryDeclared',
                    },
                  },
                  else: {
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
                            value: '/status',
                          },
                          val: {
                            type: {
                              blueId:
                                '3kguQFJvHMnCfrg4Bmqt81EZg6qeht8Cs6tEjNDxTkyB',
                            },
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
                            value: '/initializationError',
                          },
                          val: {
                            $var: {
                              type: {
                                blueId:
                                  'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                              },
                              value: 'initializationError',
                            },
                          },
                        },
                      },
                    ],
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
                            value: '/status',
                          },
                          val: {
                            type: {
                              blueId:
                                'DUU68ikPqLZ9NwsUGzkCZ92abAUz51ihcZBTJQEty6E1',
                            },
                          },
                        },
                      },
                      {
                        $if: {
                          cond: {
                            $not: {
                              $exists: {
                                $document: {
                                  type: {
                                    blueId:
                                      'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                                  },
                                  value: '/activateOnAuthorityConfirmation',
                                },
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
                                    value: '/activateOnAuthorityConfirmation',
                                  },
                                  val: {
                                    type: {
                                      blueId:
                                        'AwvXD961fmnmqcSQhjMA7r15HpVh39cefb6ZTyUz2Fm2',
                                    },
                                    value: true,
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
                        blueId: 'AwvXD961fmnmqcSQhjMA7r15HpVh39cefb6ZTyUz2Fm2',
                      },
                      value: true,
                    },
                  },
                  events: {
                    $events: {
                      type: {
                        blueId: 'AwvXD961fmnmqcSQhjMA7r15HpVh39cefb6ZTyUz2Fm2',
                      },
                      value: true,
                    },
                  },
                },
              },
            ],
          },
        },
        isStatusActive: {
          expr: {
            $eq: {
              items: [
                {
                  $document: {
                    type: {
                      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                    },
                    value: '/status/type/blueId',
                  },
                },
                {
                  $const: {
                    name: 'statusActiveType',
                    path: {
                      type: {
                        blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                      },
                      value: '/type/blueId',
                    },
                  },
                },
              ],
            },
          },
        },
        isStatusAuthorityConfirmed: {
          expr: {
            $eq: {
              items: [
                {
                  $document: {
                    type: {
                      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                    },
                    value: '/status/type/blueId',
                  },
                },
                {
                  $const: {
                    name: 'statusAuthorityConfirmedType',
                    path: {
                      type: {
                        blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                      },
                      value: '/type/blueId',
                    },
                  },
                },
              ],
            },
          },
        },
        isStatusFailed: {
          expr: {
            $eq: {
              items: [
                {
                  $document: {
                    type: {
                      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                    },
                    value: '/status/type/blueId',
                  },
                },
                {
                  $const: {
                    name: 'statusFailedType',
                    path: {
                      type: {
                        blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                      },
                      value: '/type/blueId',
                    },
                  },
                },
              ],
            },
          },
        },
        isStatusPending: {
          expr: {
            $eq: {
              items: [
                {
                  $document: {
                    type: {
                      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                    },
                    value: '/status/type/blueId',
                  },
                },
                {
                  $const: {
                    name: 'statusPendingType',
                    path: {
                      type: {
                        blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                      },
                      value: '/type/blueId',
                    },
                  },
                },
              ],
            },
          },
        },
        processingEventTimestamp: {
          expr: {
            $choose: {
              cond: {
                $isKind: {
                  kind: {
                    type: {
                      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                    },
                    value: 'integer',
                  },
                  val: {
                    $binding: {
                      type: {
                        blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                      },
                      value: 'processingEvent/timestamp',
                    },
                  },
                },
              },
              then: {
                $binding: {
                  type: {
                    blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                  },
                  value: 'processingEvent/timestamp',
                },
              },
            },
          },
        },
        sourceMessage: {
          expr: {
            $choose: {
              cond: {
                $isKind: {
                  kind: {
                    type: {
                      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                    },
                    value: 'object',
                  },
                  val: {
                    $event: {
                      type: {
                        blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                      },
                      value: '/message',
                    },
                  },
                },
              },
              else: {
                $event: {
                  type: {
                    blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                  },
                  value: '/',
                },
              },
              then: {
                $event: {
                  type: {
                    blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                  },
                  value: '/message',
                },
              },
            },
          },
        },
        terminatedMessage: {
          args: {
            inResponseTo: {
              description: 'Exact Message that invoked termination.',
            },
            request: {
              description:
                'Operation request payload containing the required reason.',
            },
          },
          expr: {
            $objectSet: {
              key: {
                type: {
                  blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                },
                value: 'type',
              },
              object: {
                inResponseTo: {
                  $var: {
                    type: {
                      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                    },
                    value: 'inResponseTo',
                  },
                },
                reason: {
                  $var: {
                    name: 'request',
                    path: {
                      type: {
                        blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                      },
                      value: '/reason',
                    },
                  },
                },
              },
              val: {
                $const: {
                  name: 'terminatedMessageType',
                  path: {
                    type: {
                      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                    },
                    value: '/type',
                  },
                },
              },
            },
          },
        },
      },
      type: {
        blueId: 'HifMgFGBgsqstDFZ2kXeQ45LVKXQMP52fV8TqeN6Z1j3',
      },
    },
    mandateTerminatedChannel: {
      description:
        'Internal triggered-event channel routing Mandate/Mandate Terminated\nMessages emitted by the standard termination operation or specialized\nmandate operations.\n',
      type: {
        blueId: '5HwxfbwRBCxG8xYpowWkCPC9akqUSKV7So2M4QHEmLsZ',
      },
    },
    mandateTerminationChannel: {
      channels: {
        items: [
          {
            type: {
              blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
            },
            value: 'mandateGuarantorChannel',
          },
          {
            type: {
              blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
            },
            value: 'authorityHolderChannel',
          },
        ],
      },
      description:
        'Composite channel through which either the guarantor or authority holder\nmay invoke terminateMandate. When one entry is eligible through both\nmembers, the composite produces one logical delivery.\n',
      type: {
        blueId: 'BTGajXc8tHeprxrQXRBDfkZxA5tmxo9BEkFoDGXds6yp',
      },
    },
    terminateMandate: {
      channel: {
        type: {
          blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
        },
        value: 'mandateTerminationChannel',
      },
      description:
        'Standard termination operation available to the guarantor and authority\nholder.\n\nUnless the mandate is already Mandate/Status Terminated, it emits\nMandate/Mandate Terminated with the required request reason and\ncorrelation to the invoking Message. This includes a failed mandate,\nallowing the guarantor or authority holder to stop its processing. The\noperation does not write lifecycle state directly;\napplyMandateTermination remains the sole authoritative termination\nimplementation.\n\nOn Mandate/Status Terminated it emits no lifecycle Message. Specialized\nmandate types may add other operations that emit Mandate/Mandate\nTerminated.\n\nConcrete workflow steps are defined in this base type.\n',
      request: {
        reason: {
          description:
            'Required human-readable or machine-generated termination reason.',
          schema: {
            required: true,
          },
          type: {
            blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
          },
        },
      },
      steps: {
        items: [
          {
            definition: {
              type: {
                blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
              },
              value: 'mandateLifecycleDefinition',
            },
            entry: {
              type: {
                blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
              },
              value: 'emitMandateTermination',
            },
            name: 'Emit Mandate Terminated',
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
    'Base executable document type for guaranteed authority delegation.\n\nThe actor bound to authorityHolderChannel controls the authority or resource\nbeing delegated. The actor bound to authorizedActorChannel receives the\ndelegated authority. The actor bound to mandateGuarantorChannel confirms that\nthe declared authority relationship is legitimate and may terminate the\nmandate.\n\nAuthority confirmation and activation are separate lifecycle facts.\nConfirmation records that the guarantor accepted the authority declaration.\nActivation records the timestamp from which the authorized actor may use the\ndelegated authority.\n\nBy default, successful authority confirmation emits Mandate/Mandate\nActivated for the inherited activation workflow to apply. A mandate may set\nactivateOnAuthorityConfirmation to false and define an additional operation\nthat emits Mandate/Mandate Activated when a later condition is satisfied.\n\nThe base type defines and implements initialization, authority confirmation,\nactivation, termination, lifecycle event emission, lifecycle transition\nguards, and graceful mandate-document termination. Subtypes inherit these\nlifecycle implementations unchanged. They may add specialized fields,\nvalidation, participants, embedded documents, and operations that emit the\nstandard activation or termination Messages.\n',
  initializationError: {
    description:
      'First deterministic initialization error when status is\nCoordination/Status Failed.\n\nInitialization writes this field only when initialization fails and stops\nat the first material error rather than accumulating an error list. A\nsuccessful initialization does not write, clear, or normalize a value\nalready present in an authored document.\n',
    type: {
      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
    },
  },
  name: 'Mandate',
  status: {
    description:
      'Current lifecycle status of the mandate.\n\nInitialization sets exactly one initial status:\n\n- Coordination/Status Pending when deterministic initialization succeeds.\n- Coordination/Status Failed when deterministic initialization fails.\n\nSupported transitions are:\n\n- Coordination/Status Pending -> Mandate/Status Authority Confirmed\n- Mandate/Status Authority Confirmed -> Mandate/Status Active\n- Coordination/Status Pending -> Mandate/Status Terminated\n- Mandate/Status Authority Confirmed -> Mandate/Status Terminated\n- Mandate/Status Active -> Mandate/Status Terminated\n\nCoordination/Status Failed and Mandate/Status Terminated are terminal.\nLifecycle workflows do not replace timestamps or statuses after the\ncorresponding transition succeeds.\n',
    type: {
      blueId: '6aAJEFVdFAgLVre8azY4YZQnNiv2FkXJpdpGAYSHiNrY',
    },
  },
  terminatedAt: {
    description:
      'Microsecond timestamp from which the mandate entered Mandate/Status Terminated.\n\nThe value is derived by the inherited termination workflow from the root\ncausal Coordination/Timeline Entry that led to the accepted\nMandate/Mandate Terminated Message. It is not supplied by that Message.\nAfter termination succeeds, inherited lifecycle workflows do not replace\nit.\n',
    type: {
      blueId: 'E2LM6qgzWG9ttagq2xTmiZkgYEAgkYedFCmU9v7NnVEq',
    },
  },
  validation: {
    description:
      'Optional request-validation convention inherited by mandate subtypes.\n\nA concrete mandate type defines which request or event is matched by\nvalidation.request and which runtime component performs the validation.\nMandate/Operation Mandate matches the Operation Request payload.\nDocument-responder and MyOS mandate types may validate an entire request\nMessage.\n',
    type: {
      blueId: '333eCC8uWcMWgw8Ev2FfvZgJMUK9pw8LGUa1D1cYTSsQ',
    },
  },
};
