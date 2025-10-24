export const sequentialWorkflow = {
  channel: {
    description: 'Name of the channel this workflow listens to.\n',
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
  description:
    'A sequential workflow that executes its steps in a linear order.',
  event: {
    description:
      'Optional event-type criteria to filter incoming events from the channel.\n',
  },
  name: 'Sequential Workflow',
  steps: {
    itemType: {
      blueId: 'CvfSAWwJ4ZAMDNfum11cEcs54ECL8oszspkPKrMMY7xt',
    },
    type: {
      blueId: '6aehfNAxHLC1PHHoDr3tYtFH3RWNbiWdFancJ1bypXEY',
    },
  },
} as const;
