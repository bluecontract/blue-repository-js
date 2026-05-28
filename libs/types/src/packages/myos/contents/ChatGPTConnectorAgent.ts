export const ChatGPTConnectorAgent = {
  contracts: {
    ownerChannel: {
      type: {
        blueId: '9gQuMoLckgwgvAfx1X8tzdHwMNfRcraG96PfT5TDbXeh',
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
            blueId: '5cg55kgH8ckRVji4oWSBBxthJQFYmB5Lb1Pea7achyNr',
          },
        },
      },
      type: {
        blueId: '9Fu3Rjq8hNKnZS71ZU8RXBBupZEa7Wb8z44GtzfSwjbr',
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
                  blueId: '5cg55kgH8ckRVji4oWSBBxthJQFYmB5Lb1Pea7achyNr',
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
                blueId: 'CrGV4ZYjvPvMqrgNQAfgZCUnFjFW6HDjYNdon2chLKU3',
              },
            },
            name: 'Emit Install Prompt',
            type: {
              blueId: '3Rgcf7G716Y9JhCov4m72m53tqpv3yDpzcBwGrxUaQSJ',
            },
          },
        ],
      },
      type: {
        blueId: 'B5mVH4caQv9Hmzeb5ZmCtzYomooFzTdoCQ4mZVwHY3MS',
      },
    },
  },
  description: 'Lets the owner prompt installation of a provided MyOS Package.',
  name: 'Chat GPT Connector Agent',
  type: {
    blueId: '8s2rAFDtiB6sCwqeURkT4Lq7fcc2FXBkmX9B9p7R4Boc',
  },
} as const;
