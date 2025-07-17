export const task = {
  name: 'Task',
  type: {
    blueId: '6j4rVp2aAm35U7dvbYPQsdi82JUpRPb1kTfkYrhHxvqE',
  },
  subscriptions: {
    items: [
      {
        type: {
          blueId: 'CTeVLJrK2kNQ4WhC7nd7JrsDcQtyEU9oBHgE23sEmoTK',
        },
        contractInstanceId: {
          type: {
            blueId: 'DHmxTkFbXePZHCHCYmQr2dSzcNLcryFVjXVHkdQrrZr8',
          },
          value: 100000,
        },
      },
    ],
  },
  workflows: {
    items: [
      {
        name: 'Chat',
        steps: {
          items: [
            {
              type: {
                blueId: 'DpdjTNXQdgWGxDyB1LLUNFvxSNNM9L9qGMoKZxzYMDoB',
              },
              changeset: {
                items: [
                  {
                    val: {
                      type: {
                        blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
                      },
                      value: '${steps.IncomingEntry}',
                    },
                    op: {
                      type: {
                        blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
                      },
                      value: 'add',
                    },
                    path: {
                      type: {
                        blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
                      },
                      value: '/properties/lastConversationEntry',
                    },
                  },
                ],
              },
            },
            {
              type: {
                blueId: 'DpdjTNXQdgWGxDyB1LLUNFvxSNNM9L9qGMoKZxzYMDoB',
              },
              changeset: {
                items: [
                  {
                    val: {
                      type: {
                        blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
                      },
                      value:
                        "${contract('/properties/lastConversationEntry/blueId')}",
                    },
                    op: {
                      type: {
                        blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
                      },
                      value: 'add',
                    },
                    path: {
                      type: {
                        blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
                      },
                      value:
                        '/properties/lastConversationEntry/message/entryId',
                    },
                  },
                ],
              },
            },
            {
              name: 'AddUserMessageToConversation',
              type: {
                blueId: 'DpdjTNXQdgWGxDyB1LLUNFvxSNNM9L9qGMoKZxzYMDoB',
              },
              changeset: {
                items: [
                  {
                    val: {
                      type: {
                        blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
                      },
                      value:
                        "${contract('/properties/lastConversationEntry/message')}",
                    },
                    op: {
                      type: {
                        blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
                      },
                      value: 'add',
                    },
                    path: {
                      type: {
                        blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
                      },
                      value: '/properties/conversation/-',
                    },
                  },
                ],
              },
            },
            {
              name: 'TriggerAssistantRequest',
              type: {
                blueId: '6sdEGwtrVJhdto5CsDzm81YrJtHTZrdsenZkyCWJLniU',
              },
              event: {
                type: {
                  blueId: 'CUKPAHgXTYtEUwyT172ejy694PR41rsy5VG1n5Wfsu2p',
                },
                task: {
                  type: {
                    blueId: '8ChHz6j1f3G1hnq11UPgM6Gm61viW2uJWkBPueWXP4dc',
                  },
                  request: {
                    type: {
                      blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
                    },
                    value: '${steps.IncomingEntry.message}',
                  },
                  response: {
                    type: {
                      blueId: '6vXs1bm6wdzhFhmcs1yGtwrcC2xXFRmVyPTgBzu9Vyhy',
                    },
                  },
                },
              },
              condition: {
                type: {
                  blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
                },
                value: '${steps.IncomingEntry.message.generateResponse}',
              },
            },
            {
              name: 'ExpectAssistantResponse',
              type: {
                blueId: '3UXhfjDZ8EMopVJrDxS8Gf2USfLZvzFGpzyzconyzAkm',
              },
              event: {
                type: {
                  blueId: '5BDj3UbH6nUPh6bUQ9vfEchjV2vGLMwhd1FJ5UYaRcos',
                },
                message: {
                  type: {
                    blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
                  },
                  value: '${steps.TriggerAssistantRequest.event.task}',
                },
                timeline: {
                  blueId:
                    "${contract('/messaging/participants/Assistant/timeline/blueId')}",
                },
              },
              condition: {
                type: {
                  blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
                },
                value: '${steps.IncomingEntry.message.generateResponse}',
              },
            },
            {
              type: {
                blueId: 'DpdjTNXQdgWGxDyB1LLUNFvxSNNM9L9qGMoKZxzYMDoB',
              },
              condition: {
                type: {
                  blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
                },
                value: '${steps.IncomingEntry.message.generateResponse}',
              },
              changeset: {
                items: [
                  {
                    val: {
                      type: {
                        blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
                      },
                      value: '${steps.ExpectAssistantResponse}',
                    },
                    op: {
                      type: {
                        blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
                      },
                      value: 'add',
                    },
                    path: {
                      type: {
                        blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
                      },
                      value: '/properties/lastConversationEntry',
                    },
                  },
                ],
              },
            },
            {
              type: {
                blueId: 'DpdjTNXQdgWGxDyB1LLUNFvxSNNM9L9qGMoKZxzYMDoB',
              },
              condition: {
                type: {
                  blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
                },
                value: '${steps.IncomingEntry.message.generateResponse}',
              },
              changeset: {
                items: [
                  {
                    val: {
                      type: {
                        blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
                      },
                      value:
                        "${contract('/properties/lastConversationEntry/blueId')}",
                    },
                    op: {
                      type: {
                        blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
                      },
                      value: 'add',
                    },
                    path: {
                      type: {
                        blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
                      },
                      value:
                        '/properties/lastConversationEntry/message/response/entryId',
                    },
                  },
                ],
              },
            },
            {
              name: 'AddAssistantMessageToConversation',
              type: {
                blueId: 'DpdjTNXQdgWGxDyB1LLUNFvxSNNM9L9qGMoKZxzYMDoB',
              },
              condition: {
                type: {
                  blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
                },
                value: '${steps.IncomingEntry.message.generateResponse}',
              },
              changeset: {
                items: [
                  {
                    val: {
                      type: {
                        blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
                      },
                      value:
                        "${contract('/properties/lastConversationEntry/message/response')}",
                    },
                    op: {
                      type: {
                        blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
                      },
                      value: 'add',
                    },
                    path: {
                      type: {
                        blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
                      },
                      value: '/properties/conversation/-',
                    },
                  },
                ],
              },
            },
          ],
        },
        trigger: {
          name: 'IncomingEntry',
          event: {
            type: {
              blueId: '5BDj3UbH6nUPh6bUQ9vfEchjV2vGLMwhd1FJ5UYaRcos',
            },
            message: {
              type: {
                blueId: 'H75oAUyeH4kyp8sidp1afKGMsesxANoN3v82eh4e4gPP',
              },
            },
            timeline: {
              blueId:
                "${contract('/messaging/participants/User/timeline/blueId')}",
            },
          },
        },
      },
      {
        name: 'Messages from actualTask',
        steps: {
          items: [
            {
              name: 'Apply Changes',
              type: {
                blueId: 'DpdjTNXQdgWGxDyB1LLUNFvxSNNM9L9qGMoKZxzYMDoB',
              },
              changeset: {
                items: [
                  {
                    val: {
                      type: {
                        blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
                      },
                      value: '${steps.incomingConversationEntry}',
                    },
                    op: {
                      type: {
                        blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
                      },
                      value: 'add',
                    },
                    path: {
                      type: {
                        blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
                      },
                      value: '/properties/conversation/-',
                    },
                  },
                ],
              },
            },
          ],
        },
        trigger: {
          name: 'incomingConversationEntry',
          event: {
            type: {
              blueId: '6vXs1bm6wdzhFhmcs1yGtwrcC2xXFRmVyPTgBzu9Vyhy',
            },
          },
          contract: {
            type: {
              blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
            },
            value: "${contract('/properties/actualTask')}",
          },
        },
      },
      {
        name: 'contractDef',
        steps: {
          items: [
            {
              name: 'init',
              type: {
                blueId: 'FF88BRKtRXQ2cCCBR28cFUB5mHdPsWjj8gVBgz4VmQm7',
              },
              contract: {
                type: {
                  blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
                },
                value: '${event.message}',
              },
            },
            {
              type: {
                blueId: 'DpdjTNXQdgWGxDyB1LLUNFvxSNNM9L9qGMoKZxzYMDoB',
              },
              changeset: {
                items: [
                  {
                    val: {
                      type: {
                        blueId: 'CTeVLJrK2kNQ4WhC7nd7JrsDcQtyEU9oBHgE23sEmoTK',
                      },
                      contractInstanceId: {
                        type: {
                          blueId:
                            'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
                        },
                        value: '${steps.init.localContract.id}',
                      },
                    },
                    op: {
                      type: {
                        blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
                      },
                      value: 'add',
                    },
                    path: {
                      type: {
                        blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
                      },
                      value: '/subscriptions/-',
                    },
                  },
                ],
              },
            },
          ],
        },
        trigger: {
          event: {
            type: {
              blueId: '5BDj3UbH6nUPh6bUQ9vfEchjV2vGLMwhd1FJ5UYaRcos',
            },
            message: {
              type: {
                blueId: '6j4rVp2aAm35U7dvbYPQsdi82JUpRPb1kTfkYrhHxvqE',
              },
            },
            timeline: {
              blueId:
                "${contract('/messaging/participants/User/timeline/blueId')}",
            },
          },
        },
      },
      {
        name: 'AssistantResponse',
        steps: {
          items: [
            {
              type: {
                blueId: 'DpdjTNXQdgWGxDyB1LLUNFvxSNNM9L9qGMoKZxzYMDoB',
              },
              changeset: {
                items: [
                  {
                    val: {
                      type: {
                        blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
                      },
                      value: '${steps.IncomingEntry}',
                    },
                    op: {
                      type: {
                        blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
                      },
                      value: 'add',
                    },
                    path: {
                      type: {
                        blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
                      },
                      value: '/properties/lastConversationEntry',
                    },
                  },
                ],
              },
            },
            {
              type: {
                blueId: 'DpdjTNXQdgWGxDyB1LLUNFvxSNNM9L9qGMoKZxzYMDoB',
              },
              changeset: {
                items: [
                  {
                    val: {
                      type: {
                        blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
                      },
                      value:
                        "${contract('/properties/lastConversationEntry/blueId')}",
                    },
                    op: {
                      type: {
                        blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
                      },
                      value: 'add',
                    },
                    path: {
                      type: {
                        blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
                      },
                      value:
                        '/properties/lastConversationEntry/message/entryId',
                    },
                  },
                ],
              },
            },
            {
              name: 'AddUserMessageToConversation',
              type: {
                blueId: 'DpdjTNXQdgWGxDyB1LLUNFvxSNNM9L9qGMoKZxzYMDoB',
              },
              changeset: {
                items: [
                  {
                    val: {
                      type: {
                        blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
                      },
                      value:
                        "${contract('/properties/lastConversationEntry/message')}",
                    },
                    op: {
                      type: {
                        blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
                      },
                      value: 'add',
                    },
                    path: {
                      type: {
                        blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
                      },
                      value: '/properties/conversation/-',
                    },
                  },
                ],
              },
            },
          ],
        },
        trigger: {
          name: 'IncomingEntry',
          event: {
            type: {
              blueId: '5BDj3UbH6nUPh6bUQ9vfEchjV2vGLMwhd1FJ5UYaRcos',
            },
            message: {
              type: {
                blueId: '6vXs1bm6wdzhFhmcs1yGtwrcC2xXFRmVyPTgBzu9Vyhy',
              },
            },
            timeline: {
              blueId:
                "${contract('/messaging/participants/Assistant/timeline/blueId')}",
            },
          },
        },
      },
    ],
  },
  properties: {
    actualTask: {
      type: {
        blueId: 'Cwqs1QterdmwBAARMViJsepJAdYLGdhLHHg1u7awytAN',
      },
    },
    conversation: {
      type: {
        blueId: 'G8wmfjEqugPEEXByMYWJXiEdbLToPRWNQEekNxrxfQWB',
      },
    },
  },
  messaging: {
    participants: {
      Assistant: {
        description: 'Someone processing a task',
      },
      User: {
        description: 'Someone providing a task',
      },
    },
  },
} as const;
