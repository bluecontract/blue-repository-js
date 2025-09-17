export const myOSAdminBase = {
  name: 'MyOS Admin Base',
  description: 'Document base for MyOS Admin participant',
  contracts: {
    myOsAdminChannel: {
      description:
        'MyOS Admin (accountId=0) — posts operational progress/decisions via myOsAdminUpdate',
      type: {
        blueId: 'Bx3dgXf5uFkGf9KxkUTFWQhbEw9QBc9cTgz1KP1Qtgh6',
      },
    },
    myOsAdminUpdateImpl: {
      description: 'Implementation that re-emits the provided events',
      type: {
        blueId: '25oL2pyz4VZKCzA4CeRNjv2ixAL4EpMsDaJj4UyEW2gF',
      },
      operation: {
        type: {
          blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
        },
        value: 'myOsAdminUpdate',
      },
      steps: {
        items: [
          {
            name: 'EmitAdminEvents',
            type: {
              blueId: 'CbkaaimMgTw2L5AP6bVWVKVArHkkrKuJxu6Uo4o6Piwr',
            },
            code: {
              type: {
                blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
              },
              value: 'return { events: event.message.request };\n',
            },
          },
        ],
      },
    },
    myOsAdminUpdate: {
      description:
        'The standard, required operation for MyOS Admin to deliver events.',
      type: {
        blueId: 'APkQmnhBWzQzpZAPHgyHeVm9QK8geARgVFg6418oFH1C',
      },
      channel: {
        type: {
          blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
        },
        value: 'myOsAdminChannel',
      },
      request: {
        type: {
          blueId: 'G8wmfjEqugPEEXByMYWJXiEdbLToPRWNQEekNxrxfQWB',
        },
        itemType: {
          blueId: '3gtD3i9bgfhDat3VB53vrQpchWFn1McYe2ngSc3YLjar',
        },
      },
    },
  },
} as const;
