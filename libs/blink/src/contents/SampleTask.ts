export const sampleTask = {
  name: 'Sample Task',
  type: {
    blueId: '6j4rVp2aAm35U7dvbYPQsdi82JUpRPb1kTfkYrhHxvqE',
  },
  properties: {
    result: {
      description: 'result',
    },
    fen: {
      type: {
        blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
      },
    },
  },
  workflows: {
    items: [
      {
        steps: {
          items: [
            {
              name: 'assistantStockfish',
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
                      blueId: '521WpKH2pQs58JJjUvpGH9PNqjnwEjbT48cbZ8EcdHLx',
                    },
                    fen: {
                      type: {
                        blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
                      },
                      value:
                        'rn1q1rk1/pp2b1pp/2p2n2/3p1pB1/3P4/1QP2N2/PP1N1PPP/R4RK1 b - - 1 11',
                    },
                    depth: {
                      type: {
                        blueId: 'DHmxTkFbXePZHCHCYmQr2dSzcNLcryFVjXVHkdQrrZr8',
                      },
                      value: 10,
                    },
                  },
                  response: {
                    type: {
                      blueId: 'HDUvE6rArTzKHvn8e8dsX5YJBQfvMDnsV1hupmU1sWgr',
                    },
                  },
                },
              },
            },
            {
              name: 'stockfish',
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
                  value: '${steps.assistantStockfish.event.task}',
                },
                timeline: {
                  blueId: "${contract('/properties/assistantTimeline')}",
                },
              },
            },
            {
              name: 'assistantLlm',
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
                      blueId: '5SMFXuRXtmkVMQa4jKG7NkZEPFrJTZK8sFPpAZXr5U4N',
                    },
                    prompt: {
                      type: {
                        blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
                      },
                      value:
                        'Prepare a json like:\n{\n  "note": "Put note here",\n  "move": {\n    "from": "e2",\n    "to": "e4"\n  }\n}\nyou\'re recommending this move to someone playing chess\nnote should be max 160 chars and should sound like:\n\'Time to activate our queen now. This move also frees up the d8 square for your rook, improving piece coordination\'\nor\n\'Let\'s throw a haymaker now! Taking on c7 we\'re protecting the c-pawn. You have 61% chances of winning now.\'\nor\n\'It\'s over now! We\'ll force mate in 3 moves. Let\'s start by taking this rook.\'\nthose are just examples, be creative, don\'t use it as a pattern - your comments should be interesting and enjoying\n',
                    },
                    promptParams: {
                      stockfishAnalysis: {
                        type: {
                          blueId:
                            'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
                        },
                        value: '${steps.stockfish}',
                      },
                    },
                  },
                  response: {
                    type: {
                      blueId: 'FBopupDhC6PTB3PYWFDUYkC5K2UQQF2KEw6AoQcrV3B7',
                    },
                  },
                },
              },
            },
            {
              name: 'llm',
              description: 'your task',
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
                  value: '${steps.assistantLlm.event.task}',
                },
                timeline: {
                  blueId: "${contract('/properties/assistantTimeline')}",
                },
              },
            },
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
                      value: 'abc',
                    },
                    op: {
                      type: {
                        blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
                      },
                      value: 'replace',
                    },
                    path: {
                      type: {
                        blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
                      },
                      value: '/properties/result',
                    },
                  },
                ],
              },
            },
            {
              type: {
                blueId: '6sdEGwtrVJhdto5CsDzm81YrJtHTZrdsenZkyCWJLniU',
              },
              event: {
                type: {
                  blueId: '6wtiVAmwtfYXLJJ5tfwVoFKxdgDgpdNjQZQXtiCfGCdm',
                },
                priority: {
                  type: {
                    blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
                  },
                  value: 'HIGH',
                },
                message: {
                  type: {
                    blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
                  },
                  value: '${steps.llm}',
                },
              },
            },
          ],
        },
        trigger: {
          event: {
            type: {
              blueId: '3uzSCGkrdX4hTFGuLbyZES7NQmiuFskCpUy572GxNQuC',
            },
          },
        },
      },
    ],
  },
} as const;
