export const LifecycleEvent = {
  description:
    "Coordination event representing a processor lifecycle transition such as document processing initiation or termination.\nLifecycle Event is distinct from application-level status changes. It is produced or routed by the processor or by\nlifecycle-aware workflow logic to indicate that a processing scope entered a lifecycle phase.\n\nConcrete lifecycle event types should define the specific phase and fields. A lifecycle event may be useful for\ninitialization workflows, audit logs, parent-scope bridging, or user notifications. It should not be confused with the\nBlue Contracts processor's internal marker state, although lifecycle events often correspond to marker writes.\n",
  name: 'Lifecycle Event',
  type: {
    blueId: '7ugyHm8fpgvQx6pbLcW8cRNLBVDBExCp2iSYgd82ak6z',
  },
} as const;
