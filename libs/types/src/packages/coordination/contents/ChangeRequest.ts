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
  description:
    "Payload type for direct and proposed document-change operations. A Change Request describes what the caller wants to\nchange, why it is being changed, and—when contract mutation is governed by section policy—how the change maps to\nlogical document sections.\n\n`summary` is the human-readable explanation required when a proposal is stored for later acceptance. `changeset` is the\nlist of patch entries for ordinary selected-document fields. `sectionChanges` is the structured form for modifying the\ndocument's `contracts` map through Document Section markers when Contracts Change Policy is enabled. This split exists\nso participants can review contract changes by section instead of accepting arbitrary low-level `/contracts` patches.\n\nA Change Request is data. It does not mutate by itself. Change Workflow, Propose Change Workflow, Accept Change\nWorkflow, and Reject Change Workflow interpret it and produce processor patches or invalid-proposal events.\n",
  name: 'Change Request',
  sectionChanges: {
    description:
      'Section-based /contracts mutations (required when Contracts Change Policy is enabled).',
    type: {
      blueId: '3WUHev4EbhT1WUTikdZTPaXnapwvgmepVfV3KzYwJDzh',
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
