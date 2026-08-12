export const DocumentSectionChanges: Record<string, unknown> = {
  add: {
    description:
      'New sections to create with their Document Section and contracts.',
    itemType: {
      blueId: 'DN9VhzcZvGNtMz2K3qVBQrVeYssBUqbewt2Cxi6CXS3R',
    },
    type: {
      blueId: '8DSFoWG9MqRSUhStqoPLrwVQiYByRh18NWbDEarN8MKF',
    },
  },
  description:
    "Structured collection of section-based contract mutations. It divides `/contracts` changes into `add`, `modify`, and\n`remove` lists so a workflow can validate and apply them coherently under Contracts Change Policy.\n\n`add` creates new Document Section markers and their related contracts. `modify` replaces an existing section's marker\nand related contracts with a full new section definition. `remove` deletes a section key and the contracts listed as\nrelated to that section. The exact patch sequence is produced by the supporting workflow, but the semantic intent is\nsection-level contract evolution rather than low-level pointer editing.\n\nThis type is useful for human review, AI-agent proposal validation, and audit trails because it preserves why a set of\ncontract changes belong together.\n",
  modify: {
    description: 'Existing sections to update with a full contracts map.',
    itemType: {
      blueId: 'DN9VhzcZvGNtMz2K3qVBQrVeYssBUqbewt2Cxi6CXS3R',
    },
    type: {
      blueId: '8DSFoWG9MqRSUhStqoPLrwVQiYByRh18NWbDEarN8MKF',
    },
  },
  name: 'Document Section Changes',
  remove: {
    description:
      "Section keys to remove (also removes the section's related contracts).",
    itemType: {
      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
    },
    type: {
      blueId: '8DSFoWG9MqRSUhStqoPLrwVQiYByRh18NWbDEarN8MKF',
    },
  },
};
