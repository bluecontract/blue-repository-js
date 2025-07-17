export const initialization = {
  name: 'Initialization',
  type: {
    blueId: '6j4rVp2aAm35U7dvbYPQsdi82JUpRPb1kTfkYrhHxvqE',
  },
  properties: {
    ticket: {
      type: {
        type: {
          blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
        },
        value: 'Ticket',
      },
    },
    x: {
      type: {
        blueId: 'DHmxTkFbXePZHCHCYmQr2dSzcNLcryFVjXVHkdQrrZr8',
      },
      value: 0,
    },
  },
  workflows: {
    items: [
      {
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
                      value: '1x',
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
              blueId: '3uzSCGkrdX4hTFGuLbyZES7NQmiuFskCpUy572GxNQuC',
            },
          },
        },
      },
    ],
  },
} as const;
