export const MyOSAdminBase: Record<string, unknown> = {
  contracts: {
    myOsAdminChannel: {
      description:
        'MyOS Admin (accountId=0) — posts operational progress/decisions via myOsAdminUpdate',
      type: {
        blueId: 'DwLMXCJcg3AL4GHW1SjraxoNDPpswXH6RHsx4fNDT6rg',
      },
    },
    myOsAdminUpdate: {
      channel: {
        type: {
          blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
        },
        value: 'myOsAdminChannel',
      },
      description:
        'The standard, required operation for MyOS Admin to deliver events.',
      type: {
        blueId: '316voisXnp8BqLs7BNjjypfn3UG2FSpgFxS6pFqHbf66',
      },
    },
    myOsAdminUpdateImpl: {
      description: 'Implementation that re-emits the provided events',
      operation: {
        type: {
          blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
        },
        value: 'myOsAdminUpdate',
      },
      steps: {
        items: [
          {
            do: {
              items: [
                {
                  $return: {
                    events: {
                      $event: {
                        type: {
                          blueId:
                            'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                        },
                        value: '/message/request',
                      },
                    },
                  },
                },
              ],
            },
            name: 'EmitAdminEvents',
            type: {
              blueId: '4qGDz5yJxXc9dr8bsBE1B2Tg4AWuR4qHPU9H6T29m3KZ',
            },
          },
        ],
      },
      type: {
        blueId: 'AWnvWVtp3g7B67iM6ZFETo1zri5yVikh8i53Q6PAPkqz',
      },
    },
  },
  description: 'Document base for MyOS Admin participant',
  name: 'MyOS Admin Base',
};
