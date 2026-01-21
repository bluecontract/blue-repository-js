export const DocumentSectionChangeEntry = {
  contracts: {
    description:
      'Map of contractKey -> contract node to add or replace for this section.',
    keyType: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
    type: {
      blueId: 'G7fBT9PSod1RfHLHkpafAGBDVAJMrMhAMY51ERcyXNrj',
    },
    valueType: {
      blueId: 'AERp8BWnuUsjoPciAeNXuUWS9fmqPNMdWbxmKn3tcitx',
    },
  },
  description:
    "Single section change entry used by sectionChanges.add/modify. The section's relatedContracts should align with the keys provided in contracts.\n",
  name: 'Document Section Change Entry',
  section: {
    description:
      'Document Section contract node; must include type Conversation/Document Section and relatedContracts should list keys in contracts.',
    type: {
      blueId: 'JBfupL6eyZsqj7CYbReFaS5ga784SLT8aP8r9W64vbLm',
    },
  },
  sectionKey: {
    description:
      'Contracts key under /contracts for the Document Section marker.',
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
} as const;
