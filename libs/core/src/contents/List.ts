export const list = {
  description:
    'Ordered collection (array) of elements.\n- Authoring & wrappers:\n    detail: >\n      Surface array (x: [a, b]) and wrapped form (x: { items: [a, b] }) are\n      equivalent for authoring; canonical hashing uses the wrapped form\n      (§8.2.2). The type itself does NOT declare `items`: `items` is the\n      instance payload container. Declaring it on the type would install a\n      concrete element array on the type object (a fixed invariant, §4.1) and\n      conflate constraints with payload.\n\n- Order, multiplicity, identity:\n    detail: >\n      Order and multiplicity are preserved. List hashing is a domain-separated\n      streaming fold over element BlueIds (§8.4). [A] ≠ A; [[] , A] ≠ [A].\n\n- Control item forms (reserved):\n    detail: >\n      Recognized only at the top level of items when the node’s type is List:\n      $previous (append anchor), $pos (positional overlay), and $empty (content\n      placeholder). $pos is consumed before hashing; $previous is an optimization\n      seed only; $empty is content (§12.2–§12.6).\n\n- Present-empty vs absent & null cleaning:\n    detail: >\n      Present empty list [] is preserved and hashes differently from null or\n      absent. Nulls inside items are removed during cleaning (§8.2.1, §8.2.2).\n\n- Uniqueness:\n    detail: >\n      uniqueItems compares by element BlueId (§5.2), not by textual rendering.\n\n- Merge policy:\n    detail: >\n      If `mergePolicy` is omitted, assume "positional" (§12.3). "append-only"\n      forbids changes to the inherited prefix (no $pos); "positional" allows\n      $pos overlays within the inherited prefix. Refinements must remain type-\n      compatible with inherited elements (§4.2, §12.5).\n\n- Applicable schema:\n    detail: >\n      §5.2 list constraints: minItems, maxItems, uniqueItems.\n',
  itemType: {
    description:
      'OPTIONAL. Type applied to each element. If omitted, elements are not constrained by itemType (still subject to overlays and type chain). Subtype compatibility MUST be preserved across refinements (§4.2, §12.5).\n',
  },
  mergePolicy: {
    description:
      'OPTIONAL. Authoring/merge policy. If omitted, processors MUST assume "positional" (§12.3). Allowed values: "append-only", "positional".\n',
    schema: {
      enum: {
        items: [
          {
            type: {
              blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
            },
            value: 'append-only',
          },
          {
            type: {
              blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
            },
            value: 'positional',
          },
        ],
      },
    },
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
  name: 'List',
} as const;
