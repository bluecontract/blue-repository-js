export const LifecycleEvent: Record<string, unknown> = {
  description:
    'Base event type for processor lifecycle notifications. Lifecycle events describe processor-state transitions such as\ninitialization, termination, bootstrap completion, or failure. They are distinct from domain events such as chat\nmessages or operation requests.\n\nLifecycle events are emitted by processor or workflow infrastructure to make state transitions observable and\nauditable. A Blue document may listen for them through Lifecycle Event Channels or domain-specific coordination\nworkflows, but the event itself remains passive Blue content.\n',
  name: 'Lifecycle Event',
  type: {
    blueId: 'ENRQ621TbJpLg2cGyYkgTmPRLGKZkPqCzkBgm4yEXKF5',
  },
};
