export const DocumentSectionChanges = {
  add: {
    description:
      'New sections to create with their Document Section and contracts.',
    itemType: {
      blueId: 'FZcw2teui9fx29nn8eSX9YiePZPxfWPJYCjnyVX1iWc1',
    },
    type: {
      blueId: '6aehfNAxHLC1PHHoDr3tYtFH3RWNbiWdFancJ1bypXEY',
    },
  },
  description:
    "Structured collection of section-based contract mutations. It divides `/contracts` changes into `add`, `modify`, and\n`remove` lists so a workflow can validate and apply them coherently under Contracts Change Policy.\n\n`add` creates new Document Section markers and their related contracts. `modify` replaces an existing section's marker\nand related contracts with a full new section definition. `remove` deletes a section key and the contracts listed as\nrelated to that section. The exact patch sequence is produced by the supporting workflow, but the semantic intent is\nsection-level contract evolution rather than low-level pointer editing.\n\nThis type is useful for human review, AI-agent proposal validation, and audit trails because it preserves why a set of\ncontract changes belong together.\n",
  modify: {
    description: 'Existing sections to update with a full contracts map.',
    itemType: {
      blueId: 'FZcw2teui9fx29nn8eSX9YiePZPxfWPJYCjnyVX1iWc1',
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
