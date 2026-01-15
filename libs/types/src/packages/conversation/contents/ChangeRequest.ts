export const ChangeRequest = {
  changeset: {
    description: 'RFC 6902-compatible patch entries to apply.',
    itemType: {
      blueId: 'Bz49DbfqKC1yJeCfv5RYPZUKTfb7rtZnmreCaz4RsXn5',
    },
    type: {
      blueId: '6aehfNAxHLC1PHHoDr3tYtFH3RWNbiWdFancJ1bypXEY',
    },
  },
  changesetDescription: {
    description: 'Optional human-readable summary of the change.',
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
  description:
    'Request payload for proposing or applying a document changeset.',
  name: 'Change Request',
} as const;
