export const tempSample = {
  name: 'Temp Sample',
  type: {
    blueId: '6j4rVp2aAm35U7dvbYPQsdi82JUpRPb1kTfkYrhHxvqE',
  },
  workflows: {
    items: [
      {
        name: 'Chat',
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
                        blueId: 'DHmxTkFbXePZHCHCYmQr2dSzcNLcryFVjXVHkdQrrZr8',
                      },
                      value: 1,
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
              blueId: 'H54JG6fmQ3XzYzDCqmGaAdxipfT6uQqzqjVj214WipPq',
            },
            timeline: {
              blueId:
                "${contract('/messaging/participants/Bob/timeline/blueId')}",
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
        description: 'Someone processing a task',
      },
      Alice: {
        description: 'Someone providing a task',
      },
    },
  },
} as const;
