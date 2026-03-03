export const CustomerActionRequested = {
  description:
    'A document suggests that the bank should ask the customer to take a specific action in the bank UI.',
  inputSchema: {
    description: 'Optional input schema to render for mode=input.',
  },
  message: {
    description: 'Human-readable message describing what is expected.',
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
  mode: {
    description: 'Pending action mode. Supported values: options | input.',
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
  name: 'Customer Action Requested',
  options: {
    description: 'Optional list of labels to render for mode=options.',
    itemType: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
    type: {
      blueId: '6aehfNAxHLC1PHHoDr3tYtFH3RWNbiWdFancJ1bypXEY',
    },
  },
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
