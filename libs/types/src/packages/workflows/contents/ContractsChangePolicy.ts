export const ContractsChangePolicy: Record<string, unknown> = {
  description:
    "Marker contract that controls how the document's `contracts` map may be changed by coordination workflows. When\n`requireSectionChanges` is present and not false, workflows such as Change Workflow and Accept Change Workflow must\nreject raw changeset entries that directly target `/contracts`; callers must instead use structured `sectionChanges`.\n\nThe purpose is reviewability and safety. Contract entries define runtime behavior, channels, handlers, policies,\nsections, and operations. Arbitrary low-level patches to `/contracts` are hard for humans and agents to audit. By\nrequiring Document Section Changes, this marker forces contract edits to be grouped by section with explicit related\ncontracts and section metadata.\n\nThis marker is interpreted by the coordination change workflows, not by the Blue Language. A processor or workflow that\ndoes not support this policy should treat it according to its must-understand and contract capability rules.\n",
  name: 'Contracts Change Policy',
  requireSectionChanges: {
    description:
      'Policy flag; when present and not false, /contracts changes must use sectionChanges. Set false to allow direct changeset edits.',
    type: {
      blueId: 'AwvXD961fmnmqcSQhjMA7r15HpVh39cefb6ZTyUz2Fm2',
    },
  },
  type: {
    blueId: '8nWeksYEXxp5TBnRcYF5u3VsFHvMfxo4zjAFT6MLW8ZD',
  },
};
