export const TriggerEvent: Record<string, unknown> = {
  description:
    'Workflow step that requests emission of a Blue event from the current invocation. Trigger Event constructs an event\npayload and returns it as a processor effect. It does not directly deliver to external parties or arbitrary channels;\nthe Blue Contracts processor records, validates, charges, enqueues, bridges, routes, and exposes the emitted event\naccording to its event/FIFO/outbox rules.\n\nTrigger Event is useful for notifying participants, asking another scope to act, producing domain events, or creating\nfollow-up Operation Requests. The event payload must be a valid Blue node. Construction work, such as BEX execution,\nis charged by the compute/runtime layer; successful processor emission and routing are charged by Blue Contracts gas.\n',
  event: {
    description:
      'Event payload to emit. It may be any valid Blue node accepted by the host processor. Undefined or invalid event\nconstruction must fail before successful emission gas is charged.\n',
  },
  name: 'Trigger Event',
  type: {
    blueId: '9oGn8V6FSVcJYhRfuHRShfWjiHBUqzxVi9StGtHZNfev',
  },
};
