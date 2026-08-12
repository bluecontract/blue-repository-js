export const DocumentSectionChangeEntry: Record<string, unknown> = {
  contracts: {
    description:
      'Map of contractKey -> contract node to add or replace for this section.',
    keyType: {
      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
    },
    type: {
      blueId: 'Efkz9D1ARMM7rU43w3rDNVqat1naS6qXKCqP4eHin3yG',
    },
    valueType: {
      blueId: '4ugZ87HaumAJezmgvi2QoqfEdqfwpviQavmak8C8ewF4',
    },
  },
  description:
    'One entry in a structured Document Section Changes request. It supplies the section key to add or modify, the Document\nSection marker to store at that key, and the contracts that belong to the section. Change-management workflows convert\nthis structured entry into deterministic `/contracts` patches.\n\nThe `sectionKey` is the key under `/contracts` for the Document Section marker. The `section` node should be a\nWorkflows/Document Section whose `relatedContracts` corresponds to the keys in `contracts`, unless the workflow\nfills or normalizes that relationship. The `contracts` map contains the actual contract nodes to add or replace for\nthe section.\n\nThis representation is intentionally higher-level than raw JSON patch. It lets policies require that behavioral changes\nbe reviewed as sections rather than as arbitrary pointer edits.\n',
  name: 'Document Section Change Entry',
  section: {
    description:
      'Document Section contract node; must include type Workflows/Document Section and relatedContracts should list keys in contracts.',
    type: {
      blueId: 'CJwAFnduHpubiXYhhgnrS272rM8qELbcfutiaAAWmRsa',
    },
  },
  sectionKey: {
    description:
      'Contracts key under /contracts for the Document Section marker.',
    type: {
      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
    },
  },
};
