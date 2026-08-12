export const MyOSSessionSubscriptionFilter: Record<string, unknown> = {
  description:
    'Selects emitted events and processed document snapshots delivered for one source document in a MyOS session subscription.\n',
  events: {
    description:
      'Optional emitted-event filter. When omitted, all emitted events are included. An empty list includes no emitted events. A non-empty list includes only events matching at least one listed type or pattern.\n',
    type: {
      blueId: '8DSFoWG9MqRSUhStqoPLrwVQiYByRh18NWbDEarN8MKF',
    },
  },
  name: 'MyOS Session Subscription Filter',
  snapshots: {
    include: {
      description:
        'Snapshot delivery mode: None, All, or WhenEventsMatched. None includes no ongoing snapshots. All includes every delivered epoch snapshot. WhenEventsMatched includes a snapshot only when at least one event matched in that epoch. When omitted, None.\n',
      type: {
        blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
      },
    },
    initial: {
      description:
        'Whether the subscription start Message includes the initial processed document snapshot. When omitted, false.\n',
      type: {
        blueId: 'AwvXD961fmnmqcSQhjMA7r15HpVh39cefb6ZTyUz2Fm2',
      },
    },
  },
};
