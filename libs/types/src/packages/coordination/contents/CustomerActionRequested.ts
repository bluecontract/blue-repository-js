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
    "Request event asking a customer-facing provider, such as a bank or wallet UI, to present one or more actions to the\ncustomer and return the selected response. It is used when a document cannot proceed until a person makes a decision,\nsupplies input, or explicitly confirms/rejects an action.\n\n`title` and `message` describe the pending action. `actions` lists the buttons or choices available to the customer,\neach with label, visual variant, optional input schema, required-input flag, input title, and placeholder text. The\nprovider should render these choices faithfully enough that the customer's response can be interpreted as the intended\naction.\n\nThis request is often used with actor attribution. A response to high-risk actions may need to be attributed to a\nPrincipal Actor and a Browser Session source, rather than an Agent Actor or API Call. The document's Actor Policy or\noperation-specific logic should enforce that distinction.\n",
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
    blueId: '3PWiqPYvDfSrPGh1YnuRPGjaXL7YytfBcgfrn9WydqCg',
  },
} as const;
