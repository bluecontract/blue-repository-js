export const ChangeRequest = {
  changeDescription: {
    description: 'Required human-readable summary used for review and audit.',
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
  changeset: {
    description:
      'RFC 6902 patch entries outside /contracts (blocked by policy when touching /contracts).',
    itemType: {
      blueId: 'Bz49DbfqKC1yJeCfv5RYPZUKTfb7rtZnmreCaz4RsXn5',
    },
    type: {
      blueId: '6aehfNAxHLC1PHHoDr3tYtFH3RWNbiWdFancJ1bypXEY',
    },
  },
  description:
    'Payload for propose/make change operations (changeset + sectionChanges).',
  name: 'Change Request',
  sectionChanges: {
    description:
      'Section-based /contracts mutations (required when Contracts Change Policy is enabled).',
    type: {
      blueId: 'DEmFwGa1sWm2BKhrN98LREKiB8j8B8kFAo7KBkkaojnN',
    },
  },
} as const;
