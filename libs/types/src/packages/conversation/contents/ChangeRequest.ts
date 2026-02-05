export const ChangeRequest = {
  changeset: {
    description:
      'RFC 6902 patch entries outside /contracts (blocked by policy if it touches /contracts).',
    itemType: {
      blueId: 'Bz49DbfqKC1yJeCfv5RYPZUKTfb7rtZnmreCaz4RsXn5',
    },
    type: {
      blueId: '6aehfNAxHLC1PHHoDr3tYtFH3RWNbiWdFancJ1bypXEY',
    },
  },
  description: 'Payload for propose/make change operations.',
  name: 'Change Request',
  sectionChanges: {
    description:
      'Section-based /contracts mutations (required when Contracts Change Policy is enabled).',
    type: {
      blueId: 'DEmFwGa1sWm2BKhrN98LREKiB8j8B8kFAo7KBkkaojnN',
    },
  },
  summary: {
    description:
      'Human-readable summary of the requested change. Required when proposal is created.',
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
} as const;
