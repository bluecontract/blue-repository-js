export const TriggerEvent = {
  description:
    'Conversation workflow step that enqueues an event as part of the workflow.\n- Gas accounting (when and what is charged):\n    - Base step charge (once per run of this step): 30.\n    - Expression/template resolution under "/event" (if present):\n        - Expressions run in the deterministic QuickJS VM (same sandbox and\n          bindings as the JavaScript Code step).\n        - VM gas is converted to host gas as:\n          hostGas = ceil(wasmFuel / 1700)\n          (calibration factor currently 1700 fuel per host gas unit).\n        - Any document(<pointer>) used inside expressions/templates charges\n          per call: 8 + depth(pointer) + ceil(snapshotBytes/100).\n    - Event emission (enqueue): 20 + ceil(eventBytes/100) for the final event\n      payload after expression resolution.\n',
  event: {
    description: 'The event payload to enqueue (any Blue node).',
  },
  name: 'Trigger Event',
  type: {
    blueId: 'HYsLiqsqk7t98d5fK6YxKEQGeqBaHNVjM4rRNdxK4yUW',
  },
} as const;
