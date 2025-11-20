export const chatGPTConnectorAgent = {
  contracts: {
    ownerChannel: {
      type: {
        blueId: 'E3CgW5s3sUA1U4Y2Zy7MqYFRqTPmo4UDCKVKB1nTQbhz',
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
            blueId: '4JZkLj81pErAeTvHxtp9oAYraKhisybdPuzbTv2mkd5v',
          },
        },
      },
      type: {
        blueId: 'H3KTSmqjT48Fjdoj5vY8EE98Sbp2FeNqBHGmUExRmrGk',
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
                  blueId: '4JZkLj81pErAeTvHxtp9oAYraKhisybdPuzbTv2mkd5v',
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
                blueId: 'ApcT6QWEHZEHu5chaRZk6VcQrXN5fmA2Lu4Em2t3zztr',
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
        blueId: 'JAaLYym23FbqTJkan4NfmNpKxMHbXLHm71oxPqmFB2Sq',
      },
    },
  },
  description: 'Lets the owner prompt installation of a provided MyOS Package.',
  name: 'Chat GPT Connector Agent',
  type: {
    blueId: '8s2rAFDtiB6sCwqeURkT4Lq7fcc2FXBkmX9B9p7R4Boc',
  },
} as const;
