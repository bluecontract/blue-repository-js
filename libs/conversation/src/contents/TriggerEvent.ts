export const triggerEvent = {
  description:
    'Conversation workflow step that enqueues an event as part of the workflow.\n- Gas accounting (when & what is charged):\n    - Base step charge (once per run of this step): 30.\n    - Expression/template resolution under "/event" (if present):\n        - For each standalone expression ${…}: 5 + ceil(bytes(expr)/100).\n        - For each template string containing one or more ${…} placeholders:\n          3 × placeholderCount + ceil(bytes(template)/100).\n        - Any document(<pointer>) used inside expressions/templates charges\n          per call: 8 + depth(pointer) + ceil(snapshotBytes/100).\n    - Event emission (enqueue): 20 + ceil(eventBytes/100) for the final event\n      payload after expression resolution.\n',
  event: {
    description: 'The event payload to enqueue (any Blue node).',
  },
  name: 'Trigger Event',
  type: {
    blueId: 'HYsLiqsqk7t98d5fK6YxKEQGeqBaHNVjM4rRNdxK4yUW',
  },
} as const;
