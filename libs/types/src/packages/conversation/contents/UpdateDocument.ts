export const UpdateDocument = {
  changeset: {
    itemType: {
      blueId: 'Bz49DbfqKC1yJeCfv5RYPZUKTfb7rtZnmreCaz4RsXn5',
    },
    type: {
      blueId: '6aehfNAxHLC1PHHoDr3tYtFH3RWNbiWdFancJ1bypXEY',
    },
  },
  description:
    'Updates the document with the provided changeset.\n- Gas accounting (when & what is charged):\n    - Base step charge (once per run of this step): 40 + 5 × changesetLength.\n    - Expression/template resolution under "/changeset/**" (if present):\n        - For each standalone expression ${…}: 5 + ceil(bytes(expr)/100).\n        - For each template string containing one or more ${…} placeholders:\n          3 × placeholderCount + ceil(bytes(template)/100).\n        - Any document(<pointer>) used inside expressions/templates charges\n          per call: 8 + depth(pointer) + ceil(snapshotBytes/100).\n    - Per change (applied in order after boundary validation):\n        - Boundary check: 2.\n        - Operation charge:\n            - add or replace: 20 + ceil(valueBytes/100) (valueBytes is the\n              canonical JSON size of val).\n            - remove: 10.\n        - Cascade routing (Document Update delivery):\n          10 × N, where N is the number of scopes that receive the resulting\n          Document Update (origin scope and each participating ancestor up to root).\n',
  name: 'Update Document',
  type: {
    blueId: 'HYsLiqsqk7t98d5fK6YxKEQGeqBaHNVjM4rRNdxK4yUW',
  },
} as const;
