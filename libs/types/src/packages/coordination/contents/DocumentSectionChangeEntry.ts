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
    'One entry in a structured Document Section Changes request. It supplies the section key to add or modify, the Document\nSection marker to store at that key, and the contracts that belong to the section. Change-management workflows convert\nthis structured entry into deterministic `/contracts` patches.\n\nThe `sectionKey` is the key under `/contracts` for the Document Section marker. The `section` node should be a\nCoordination/Document Section whose `relatedContracts` corresponds to the keys in `contracts`, unless the workflow\nfills or normalizes that relationship. The `contracts` map contains the actual contract nodes to add or replace for\nthe section.\n\nThis representation is intentionally higher-level than raw JSON patch. It lets policies require that behavioral changes\nbe reviewed as sections rather than as arbitrary pointer edits.\n',
  name: 'Document Section Change Entry',
  section: {
    description:
      'Document Section contract node; must include type Coordination/Document Section and relatedContracts should list keys in contracts.',
    type: {
      blueId: 'EQipmtzeTjY7JhgBQWWAhsjBAXsTT2SDu2gv1rXeXSpb',
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
