export const localSubscriptionContract = {
  name: 'Local Subscription Contract',
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
          value: 22,
        },
      },
    ],
  },
  workflows: {
    items: [
      {
        steps: {
          items: [
            {
              type: {
                blueId: 'FF88BRKtRXQ2cCCBR28cFUB5mHdPsWjj8gVBgz4VmQm7',
              },
              contract: {
                name: 'My Local Contract',
                type: {
                  blueId: '6j4rVp2aAm35U7dvbYPQsdi82JUpRPb1kTfkYrhHxvqE',
                },
                subscriptions: {
                  items: [
                    {
                      type: {
                        blueId: 'CTeVLJrK2kNQ4WhC7nd7JrsDcQtyEU9oBHgE23sEmoTK',
                      },
                      event: {
                        type: {
                          blueId:
                            '2bsu7Nx1vCXquU24RUXcc5b8tHrNgve26MXia4vUBuvN',
                        },
                        changeset: {
                          items: [
                            {
                              path: {
                                type: {
                                  blueId:
                                    'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
                                },
                                value: '/properties/x',
                              },
                            },
                          ],
                        },
                      },
                      contractInstanceId: {
                        type: {
                          blueId:
                            'DHmxTkFbXePZHCHCYmQr2dSzcNLcryFVjXVHkdQrrZr8',
                        },
                        value: 0,
                      },
                    },
                  ],
                },
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
              blueId: '3uzSCGkrdX4hTFGuLbyZES7NQmiuFskCpUy572GxNQuC',
            },
          },
        },
      },
    ],
  },
} as const;
