export const delegationTestingContract = {
  name: 'Delegation Testing Contract',
  type: {
    blueId: '6j4rVp2aAm35U7dvbYPQsdi82JUpRPb1kTfkYrhHxvqE',
  },
  workflows: {
    items: [
      {
        name: 'change x',
        steps: {
          items: [
            {
              name: 'must be Alice',
              type: {
                blueId: 'CFKAD5Up8XpNyPHwRBEwiwSUdfFUoGqVVsW29k6te88p',
              },
              code: {
                type: {
                  blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
                },
                value:
                  "let expectedTimeline = contract(\"/messaging/participants/Alice/timeline\");\nlet timeline = event.timeline;\n\nif (timeline.blueId != expectedTimeline.blueId && event.message != 'go') {\n  throw new RejectAndAwaitNextEventException('Not Alice!');\n}\n\nreturn { }\n",
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
                        blueId: 'DHmxTkFbXePZHCHCYmQr2dSzcNLcryFVjXVHkdQrrZr8',
                      },
                      value: 1,
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
                      value: '/properties/x',
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
                blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
              },
            },
          },
        },
      },
      {
        name: 'ask x',
        steps: {
          items: [
            {
              type: {
                blueId: '6sdEGwtrVJhdto5CsDzm81YrJtHTZrdsenZkyCWJLniU',
              },
              event: {
                type: {
                  blueId: '6AxdkLN2PgdzYJhojHRH6rt3oTAoifrJYikYvNHMbw2t',
                },
                event: {
                  type: {
                    blueId: '5BDj3UbH6nUPh6bUQ9vfEchjV2vGLMwhd1FJ5UYaRcos',
                  },
                  message: {
                    type: {
                      blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
                    },
                    value: 'go',
                  },
                },
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
                blueId: 'DHmxTkFbXePZHCHCYmQr2dSzcNLcryFVjXVHkdQrrZr8',
              },
            },
          },
        },
      },
    ],
  },
  properties: {
    x: {
      type: {
        blueId: 'DHmxTkFbXePZHCHCYmQr2dSzcNLcryFVjXVHkdQrrZr8',
      },
      value: 0,
    },
  },
  messaging: {
    participants: {
      Bob: {
        description: "Bob can't change x, but can call another workflow",
      },
      Alice: {
        description: 'Alice has privs to change x',
      },
    },
  },
} as const;
