export const makeChessMoveTask = {
  name: 'Make Chess Move Task',
  type: {
    blueId: '6j4rVp2aAm35U7dvbYPQsdi82JUpRPb1kTfkYrhHxvqE',
  },
  properties: {
    from: {
      type: {
        blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
      },
    },
    to: {
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
              type: {
                blueId: '6sdEGwtrVJhdto5CsDzm81YrJtHTZrdsenZkyCWJLniU',
              },
              event: {
                type: {
                  blueId: 'MFGzp8CtRVLb9CF2xAc8kt3jwV99sag7jpdHemZmGz9',
                },
                from: {
                  type: {
                    blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
                  },
                  value: '${contract("/properties/from")}',
                },
                to: {
                  type: {
                    blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
                  },
                  value: '${contract("/properties/to")}',
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
