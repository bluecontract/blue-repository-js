export const CustomerActionRequested = {
  actions: {
    description:
      'List of available user actions for this pending action request.',
    itemType: {
      inputPlaceholder: {
        description:
          'Optional placeholder/help text shown in the action input control.',
        type: {
          blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
        },
      },
      inputRequired: {
        description:
          'Optional flag indicating whether input is required for this action.',
        type: {
          blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
        },
      },
      inputSchema: {
        description:
          'Optional input schema. If present, the selected action may collect user input.',
      },
      inputTitle: {
        description: 'Optional title displayed above the action input control.',
        type: {
          blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
        },
      },
      label: {
        description:
          'User-facing action label shown in the pending action card.',
        type: {
          blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
        },
      },
      variant: {
        description:
          'Optional button style variant. Supported values: primary | secondary | reject.',
        type: {
          blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
        },
      },
    },
    type: {
      blueId: '6aehfNAxHLC1PHHoDr3tYtFH3RWNbiWdFancJ1bypXEY',
    },
  },
  description:
    'A document suggests that the bank should ask the customer to take a specific action in the bank UI.',
  message: {
    description: 'Human-readable message describing what is expected.',
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
  name: 'Customer Action Requested',
  title: {
    description: 'Short title for the pending action.',
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
  type: {
    blueId: '8f9UhHMbRe62sFgzQVheToaJPYi7t7HPNVvpQTbqfL5n',
  },
} as const;
