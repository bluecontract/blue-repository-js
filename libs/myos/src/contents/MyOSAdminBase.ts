export const myOSAdminBase = {
  contracts: {
    myOsAdminChannel: {
      description:
        'MyOS Admin (accountId=0) — posts operational progress/decisions via myOsAdminUpdate',
      type: {
        blueId: '6Q4xykCNJQkiuekMJojj2fxNgu2LwQdf5sAG4F3g49ou',
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
        blueId: 'BoAiqVUZv9Fum3wFqaX2JnQMBHJLxJSo2V9U2UBmCfsC',
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
              blueId: 'DMrw2BSxyuQZai4UvitEY4YUp13ebP4prXyY8ZrZbM4Q',
            },
          },
        ],
      },
      type: {
        blueId: 'CGdxkNjPcsdescqLPz6SNLsMyak6demQQr7RoKNHbCyv',
      },
    },
  },
  description: 'Document base for MyOS Admin participant',
  name: 'MyOS Admin Base',
} as const;
