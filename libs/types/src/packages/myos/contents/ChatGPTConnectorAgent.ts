export const ChatGPTConnectorAgent: Record<string, unknown> = {
  contracts: {
    ownerChannel: {
      type: {
        blueId: 'DwLMXCJcg3AL4GHW1SjraxoNDPpswXH6RHsx4fNDT6rg',
      },
    },
    startWorker: {
      channel: {
        type: {
          blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
        },
        value: 'ownerChannel',
      },
      description: 'Prompt the user to install a provided MyOS Package',
      request: {
        package: {
          description: 'MyOS Package',
          type: {
            blueId: 'FX9yvQWAiZMMwnUF1vY1HMumJNNg7ENP7ETxha1kvWkn',
          },
        },
      },
      type: {
        blueId: '316voisXnp8BqLs7BNjjypfn3UG2FSpgFxS6pFqHbf66',
      },
    },
    startWorkerImpl: {
      operation: {
        type: {
          blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
        },
        value: 'startWorker',
      },
      steps: {
        items: [
          {
            event: {
              message: {
                type: {
                  blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                },
                value:
                  'A package has been prepared for you. Review and install.',
              },
              package: {
                type: {
                  blueId: 'FX9yvQWAiZMMwnUF1vY1HMumJNNg7ENP7ETxha1kvWkn',
                },
                value: '${event.message.request.package}',
              },
              title: {
                type: {
                  blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
                },
                value: 'ChatGPT is requesting permission to launch a new agent',
              },
              type: {
                blueId: 'B7HmEAQxcEvr6CPyXwPZGLVGYcddcaajrDKgt5eEubQa',
              },
            },
            name: 'Emit Install Prompt',
            type: {
              blueId: 'Dg3nc6K9P7AWn4K1dpGCAKG3YXJjsUWRhG3YxfqyLTeK',
            },
          },
        ],
      },
      type: {
        blueId: 'AWnvWVtp3g7B67iM6ZFETo1zri5yVikh8i53Q6PAPkqz',
      },
    },
  },
  description: 'Lets the owner prompt installation of a provided MyOS Package.',
  name: 'Chat GPT Connector Agent',
  type: {
    blueId: '8s2rAFDtiB6sCwqeURkT4Lq7fcc2FXBkmX9B9p7R4Boc',
  },
};
