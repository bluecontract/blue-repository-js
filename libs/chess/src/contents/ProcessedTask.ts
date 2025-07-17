export const processedTask = {
  name: 'Processed Task',
  description:
    'Provides funny comments about every move in a chess game between Alice and Bob.',
  type: {
    blueId: '6j4rVp2aAm35U7dvbYPQsdi82JUpRPb1kTfkYrhHxvqE',
  },
  subscriptions: {
    items: [
      {
        type: {
          blueId: 'JCUV8S58BvgAr8LzsHxPRtm72PsxPvgzZGLiqgwRM6xS',
        },
        initiateContractEntry: {
          blueId: 'Cko9ix6TXfxF8kESravWT46yVEe9sHBj76GJXayZsRSV',
        },
      },
    ],
  },
  workflows: {
    items: [
      {
        name: 'Generate Funny Comment',
        steps: {
          items: [
            {
              name: 'GenerateComment',
              type: {
                blueId: '3UXhfjDZ8EMopVJrDxS8Gf2USfLZvzFGpzyzconyzAkm',
              },
              event: {
                type: {
                  blueId: '5BDj3UbH6nUPh6bUQ9vfEchjV2vGLMwhd1FJ5UYaRcos',
                },
                message: {
                  type: {
                    blueId: '8ChHz6j1f3G1hnq11UPgM6Gm61viW2uJWkBPueWXP4dc',
                  },
                  request: {
                    type: {
                      type: {
                        blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
                      },
                      value: 'LLM Request',
                    },
                    prompt: {
                      type: {
                        blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
                      },
                      value:
                        'Generate a short, funny comment (max 160 characters) about this chess move. Be creative and humorous!',
                    },
                    promptParams: {
                      playerMakingMove: {
                        type: {
                          blueId:
                            'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
                        },
                        value: '${event.playerMakingMove}',
                      },
                      from: {
                        type: {
                          blueId:
                            'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
                        },
                        value: '${event.from}',
                      },
                      to: {
                        type: {
                          blueId:
                            'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
                        },
                        value: '${event.to}',
                      },
                    },
                  },
                  response: {
                    type: {
                      type: {
                        blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
                      },
                      value: 'LLM Response',
                    },
                  },
                },
                timeline: {
                  blueId:
                    "${contract('/messaging/participants/Assistant/timeline/blueId')}",
                },
              },
            },
            {
              name: 'StoreComment',
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
                      value: '${steps.GenerateComment.content}',
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
                      value: '/properties/comments/-',
                    },
                  },
                ],
              },
            },
            {
              name: 'SendComment',
              type: {
                blueId: '6sdEGwtrVJhdto5CsDzm81YrJtHTZrdsenZkyCWJLniU',
              },
              event: {
                type: {
                  type: {
                    blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
                  },
                  value: 'Assistant Message',
                },
                message: {
                  type: {
                    blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
                  },
                  value: '${steps.GenerateComment.content}',
                },
              },
            },
          ],
        },
        trigger: {
          event: {
            type: {
              blueId: 'EkEtUob9ZEKzd61Fk8u1KFDZVZAhCLmzxcvTLvYgp3iw',
            },
          },
          contract: {
            type: {
              blueId: 'A5wPMJi6naaUtbmo5iPqUVG5Q8Wg5r68WERCarJctSoK',
            },
            initiateContractEntry: {
              blueId: 'Cko9ix6TXfxF8kESravWT46yVEe9sHBj76GJXayZsRSV',
            },
          },
        },
      },
    ],
  },
  properties: {
    comments: {
      description: 'List of funny comments for each move',
      type: {
        blueId: 'G8wmfjEqugPEEXByMYWJXiEdbLToPRWNQEekNxrxfQWB',
      },
      itemType: {
        blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
      },
    },
  },
  messaging: {
    participants: {
      Assistant: {
        timeline: {
          blueId: 'HN2QVkuyZEJ3hf4SPTiup62ZmsGvu9suJNTMbfyrLdJR',
        },
      },
      User: {
        timeline: {
          blueId: '9oNWmXTSy1x9XDNvyHt6j9CkcqJiEsCD9PHV4G1qy66y',
        },
      },
    },
  },
} as const;
