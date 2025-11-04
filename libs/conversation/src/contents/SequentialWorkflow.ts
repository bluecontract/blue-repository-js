export const sequentialWorkflow = {
  description:
    'Conversation handler.\nExecutes a list of workflow steps in order when matching events arrive on the\nbound channel. As a Handler, it may emit events and request document patches.\n',
  name: 'Sequential Workflow',
  steps: {
    description: 'Ordered list of steps to execute (positional semantics).',
    itemType: {
      blueId: 'HYsLiqsqk7t98d5fK6YxKEQGeqBaHNVjM4rRNdxK4yUW',
    },
    type: {
      blueId: '6aehfNAxHLC1PHHoDr3tYtFH3RWNbiWdFancJ1bypXEY',
    },
  },
  type: {
    blueId: '9ZE5pGjtSGJgWJG7iAVz4iPEz5CatceX3yb3qp5MpAKJ',
  },
} as const;
