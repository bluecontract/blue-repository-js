export const chatGPTConnectorAgent = {
  name: 'Chat GPT Connector Agent',
  description: 'Lets the owner prompt installation of a provided MyOS Package.',
  type: {
    blueId: '8s2rAFDtiB6sCwqeURkT4Lq7fcc2FXBkmX9B9p7R4Boc',
  },
  contracts: {
    startWorker: {
      description: 'Prompt the user to install a provided MyOS Package',
      type: {
        blueId: 'APkQmnhBWzQzpZAPHgyHeVm9QK8geARgVFg6418oFH1C',
      },
      channel: {
        type: {
          blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
        },
        value: 'ownerChannel',
      },
      request: {
        package: {
          description: 'MyOS Package',
          type: {
            blueId: '2yuq1Cpoe5cGoWuJAFUNuzdR5aFEqd7e4XxDBcQ8He49',
          },
        },
      },
    },
    ownerChannel: {
      type: {
        blueId: 'Bx3dgXf5uFkGf9KxkUTFWQhbEw9QBc9cTgz1KP1Qtgh6',
      },
    },
    startWorkerImpl: {
      type: {
        blueId: '27JYkbWuBwyPYUZCjP67K6hxXQ7gndzdwgU8yrau2465',
      },
      operation: {
        type: {
          blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
        },
        value: 'startWorker',
      },
      steps: {
        items: [
          {
            name: 'Emit Install Prompt',
            type: {
              blueId: 'BWBJFxM7DtorfwMewvrfn3938VBCa3seKXTkkfpCwrQ1',
            },
            event: {
              type: {
                blueId: 'EgpxBT3LpGnPuyFigEHoNkdu5gLcvLjWTzvZU8Q9VnWk',
              },
              package: {
                type: {
                  blueId: '2yuq1Cpoe5cGoWuJAFUNuzdR5aFEqd7e4XxDBcQ8He49',
                },
                value: '${event.message.request.package}',
              },
              message: {
                type: {
                  blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
                },
                value:
                  'A package has been prepared for you. Review and install.',
              },
              title: {
                type: {
                  blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
                },
                value: 'ChatGPT is requesting permission to launch a new agent',
              },
            },
          },
        ],
      },
    },
  },
} as const;
