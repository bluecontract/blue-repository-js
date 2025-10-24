export const myOSAdminBase = {
  contracts: {
    myOsAdminChannel: {
      description:
        'MyOS Admin (accountId=0) — posts operational progress/decisions via myOsAdminUpdate',
      type: {
        blueId: 'E3CgW5s3sUA1U4Y2Zy7MqYFRqTPmo4UDCKVKB1nTQbhz',
      },
    },
    myOsAdminUpdate: {
      channel: {
        type: {
          blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
        },
        value: 'myOsAdminChannel',
      },
      description:
        'The standard, required operation for MyOS Admin to deliver events.',
      type: {
        blueId: 'H3KTSmqjT48Fjdoj5vY8EE98Sbp2FeNqBHGmUExRmrGk',
      },
    },
    myOsAdminUpdateImpl: {
      description: 'Implementation that re-emits the provided events',
      operation: {
        type: {
          blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
        },
        value: 'myOsAdminUpdate',
      },
      steps: {
        items: [
          {
            code: {
              type: {
                blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
              },
              value: 'return { events: event.message.request };\n',
            },
            name: 'EmitAdminEvents',
            type: {
              blueId: 'Hz1LwvihraqVw1xEhSG6eeKnnFnytPNTXKMZgG8wtWtR',
            },
          },
        ],
      },
      type: {
        blueId: 'JAaLYym23FbqTJkan4NfmNpKxMHbXLHm71oxPqmFB2Sq',
      },
    },
  },
  description: 'Document base for MyOS Admin participant',
  name: 'MyOS Admin Base',
} as const;
