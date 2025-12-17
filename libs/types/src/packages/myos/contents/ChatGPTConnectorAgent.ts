export const ChatGPTConnectorAgent = {
  contracts: {
    ownerChannel: {
      type: {
        blueId: 'HCF8mXnX3dFjQ8osjxb4Wzm2Nm1DoXnTYuA5sPnV7NTs',
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
            blueId: 'GmeLRydVPtUsPZaPpgiaaPWPBBNXnRJZsgi3fvQ4qe33',
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
                  blueId: 'GmeLRydVPtUsPZaPpgiaaPWPBBNXnRJZsgi3fvQ4qe33',
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
                blueId: '3wH1r5RQVidCMcu4cJ4ZweVHZwt1mMu78RA3uXayTqeq',
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
    blueId: 'AjfPDYhjp31oYmraTy7PYFrSUGQKxtfQnHdBr8o7mt3g',
  },
} as const;
