export const DocumentSectionChanges = {
  add: {
    description:
      'New sections to create with their Document Section and contracts.',
    itemType: {
      blueId: '9xv7YjqsSn7W7P8rnUhSpdWGfSrgL4Jt3cmiACJT5VQs',
    },
    type: {
      blueId: '6aehfNAxHLC1PHHoDr3tYtFH3RWNbiWdFancJ1bypXEY',
    },
  },
  description:
    'Structured /contracts changes grouped by logical sections, used by change workflows.',
  modify: {
    description: 'Existing sections to update with a full contracts map.',
    itemType: {
      blueId: '9xv7YjqsSn7W7P8rnUhSpdWGfSrgL4Jt3cmiACJT5VQs',
    },
    type: {
      blueId: '6aehfNAxHLC1PHHoDr3tYtFH3RWNbiWdFancJ1bypXEY',
    },
  },
  name: 'Document Section Changes',
  remove: {
    description:
      "Section keys to remove (also removes the section's related contracts).",
    itemType: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
    type: {
      blueId: '6aehfNAxHLC1PHHoDr3tYtFH3RWNbiWdFancJ1bypXEY',
    },
  },
} as const;
