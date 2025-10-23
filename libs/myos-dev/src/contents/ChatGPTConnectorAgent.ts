export const chatGPTConnectorAgent = {
  contracts: {
    ownerChannel: {
      type: {
        blueId: 'Bx3dgXf5uFkGf9KxkUTFWQhbEw9QBc9cTgz1KP1Qtgh6',
      },
    },
    startWorker: {
      channel: {
        type: {
          blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
        },
        value: 'ownerChannel',
      },
      description: 'Prompt the user to install a provided MyOS Package',
      request: {
        package: {
          description: 'MyOS Package',
          type: {
            blueId: '2yuq1Cpoe5cGoWuJAFUNuzdR5aFEqd7e4XxDBcQ8He49',
          },
        },
      },
      type: {
        blueId: 'APkQmnhBWzQzpZAPHgyHeVm9QK8geARgVFg6418oFH1C',
      },
    },
    startWorkerImpl: {
      operation: {
        type: {
          blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
        },
        value: 'startWorker',
      },
      steps: {
        items: [
          {
            event: {
              message: {
                type: {
                  blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
                },
                value:
                  'A package has been prepared for you. Review and install.',
              },
              package: {
                type: {
                  blueId: '2yuq1Cpoe5cGoWuJAFUNuzdR5aFEqd7e4XxDBcQ8He49',
                },
                value: '${event.message.request.package}',
              },
              title: {
                type: {
                  blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
                },
                value: 'ChatGPT is requesting permission to launch a new agent',
              },
              type: {
                blueId: 'EgpxBT3LpGnPuyFigEHoNkdu5gLcvLjWTzvZU8Q9VnWk',
              },
            },
            name: 'Emit Install Prompt',
            type: {
              blueId: 'BWBJFxM7DtorfwMewvrfn3938VBCa3seKXTkkfpCwrQ1',
            },
          },
        ],
      },
      type: {
        blueId: '27JYkbWuBwyPYUZCjP67K6hxXQ7gndzdwgU8yrau2465',
      },
    },
  },
  description: 'Lets the owner prompt installation of a provided MyOS Package.',
  name: 'Chat GPT Connector Agent',
  type: {
    blueId: '8s2rAFDtiB6sCwqeURkT4Lq7fcc2FXBkmX9B9p7R4Boc',
  },
} as const;
