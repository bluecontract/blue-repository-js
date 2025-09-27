export const chatGPTConnectorAgent = {
  name: 'Chat GPT Connector Agent',
  description: 'Lets the owner prompt installation of a provided MyOS Package.',
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
          type: {
            type: {
              blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
            },
            value: 'MyOS Package',
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
                blueId: '54RDTowhXawimtVXZ7hSWSwsmVJuPzjLmZVEYRe9Anvi',
              },
              package: {
                type: {
                  blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
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
