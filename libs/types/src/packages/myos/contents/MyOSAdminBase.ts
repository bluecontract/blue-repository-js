export const MyOSAdminBase: Record<string, unknown> = {
  contracts: {
    myOsAdminChannel: {
      actor: {
        type: {
          blueId: '4eDC5moi1FwZaHkkdXLF9he1SGz2gWWNJArNKGYreksm',
        },
      },
      description:
        'MyOS Admin channel for operational progress and decisions delivered through myOsAdminUpdate.',
      timeline: {
        type: {
          blueId: '2kJTAf7L1FMGBqa7tez6qXw3kPfghbjwmiWzKWVCMYw3',
        },
      },
      type: {
        blueId: 'FS7n5P3nfsuB2TiKFaYRHPukiHGw1vxTPRwMfPZoNgvH',
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
      request: {
        itemType: {
          blueId: 'ENRQ621TbJpLg2cGyYkgTmPRLGKZkPqCzkBgm4yEXKF5',
        },
        type: {
          blueId: '8DSFoWG9MqRSUhStqoPLrwVQiYByRh18NWbDEarN8MKF',
        },
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
        blueId: 'B5eQ8GaYwECKEtduoWEv8Ri1FvWznuvb3ZXGKqeYUuy',
      },
    },
  },
  description: 'Document base for MyOS Admin participant',
  name: 'MyOS Admin Base',
};
