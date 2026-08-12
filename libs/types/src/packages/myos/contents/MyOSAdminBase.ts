export const MyOSAdminBase: Record<string, unknown> = {
  contracts: {
    myOsAdminChannel: {
      actor: {
        type: {
          blueId: '1ev2FjQCVqxyynB7o27PJmQo8bQmf9ECvvF2z5ekV1L',
        },
      },
      description:
        'MyOS Admin channel for operational progress and decisions delivered through myOsAdminUpdate.',
      timeline: {
        type: {
          blueId: '5VAQp5thYLkzp3FbvYGmVvmdLqqu6pV5vhNgD14XJwpX',
        },
      },
      type: {
        blueId: '8dZK68CdFFjRKFf7dX9QDc55WUESNyeBsUSTF8tq8cki',
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
        blueId: '6rnGvP1BUsBpbtvuvJ1vy6hS7psoUJVBEXXsFeRma82V',
      },
    },
  },
  description: 'Document base for MyOS Admin participant',
  name: 'MyOS Admin Base',
};
