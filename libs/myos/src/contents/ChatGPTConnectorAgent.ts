export const chatGPTConnectorAgent = {
  contracts: {
    ownerChannel: {
      type: {
        blueId: '6Q4xykCNJQkiuekMJojj2fxNgu2LwQdf5sAG4F3g49ou',
      },
    },
    startWorker: {
      channel: {
        type: {
          blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
        },
        value: 'ownerChannel',
      },
      description: 'Prompt the user to install a provided MyOS Package',
      request: {
        package: {
          description: 'MyOS Package',
          type: {
            blueId: 'GS5aDM715CBXJv8tChoGYgiLWyEiyS4qRm6yBQPaLN32',
          },
        },
      },
      type: {
        blueId: 'BoAiqVUZv9Fum3wFqaX2JnQMBHJLxJSo2V9U2UBmCfsC',
      },
    },
    startWorkerImpl: {
      operation: {
        type: {
          blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
        },
        value: 'startWorker',
      },
      steps: {
        items: [
          {
            event: {
              message: {
                type: {
                  blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                },
                value:
                  'A package has been prepared for you. Review and install.',
              },
              package: {
                type: {
                  blueId: 'GS5aDM715CBXJv8tChoGYgiLWyEiyS4qRm6yBQPaLN32',
                },
                value: '${event.message.request.package}',
              },
              title: {
                type: {
                  blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                },
                value: 'ChatGPT is requesting permission to launch a new agent',
              },
              type: {
                blueId: 'GxDVADfu61G5PnUDJNyjjyZKoXpvCojxpbKHvBUFDa9s',
              },
            },
            name: 'Emit Install Prompt',
            type: {
              blueId: 'GxUtWr3eH9a6YQeioQkujEnsPjD5s9RU8ZhEfmsV1vuU',
            },
          },
        ],
      },
      type: {
        blueId: 'CGdxkNjPcsdescqLPz6SNLsMyak6demQQr7RoKNHbCyv',
      },
    },
  },
  description: 'Lets the owner prompt installation of a provided MyOS Package.',
  name: 'Chat GPT Connector Agent',
  type: {
    blueId: '8s2rAFDtiB6sCwqeURkT4Lq7fcc2FXBkmX9B9p7R4Boc',
  },
} as const;
