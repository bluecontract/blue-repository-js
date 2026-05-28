export const TriggerEvent = {
  description:
    "Workflow step that requests emission of a Blue event from the current workflow invocation. Trigger Event constructs or\nresolves an `event` payload and adds it to the handler result so the Blue Contracts processor can record, enqueue,\nroute, bridge, and gas-charge it according to the runtime event rules.\n\nTrigger Event does not directly deliver the event to arbitrary channels. Emitted events enter the current scope's\nTriggered FIFO or root outbox according to processor semantics. Local Triggered delivery occurs at the scope's FIFO\ndrain phase, not immediately at the moment this step is evaluated. Embedded child emissions may be bridged to a parent\nthrough Embedded Node Channels if configured.\n\nThe event payload must be a valid Blue node. Invalid event construction causes runtime failure before successful emit\ngas is charged. If expression/template processing is used to construct the event, that compute work is charged\nseparately from the processor's event emission and routing charges.\n",
  event: {
    description: 'The event payload to enqueue (any Blue node).',
  },
  name: 'Trigger Event',
  type: {
    blueId: '99AomnUQTnL52YVYXwEbGNeKnV6u1cjm73xLFSAt7mwe',
  },
} as const;
