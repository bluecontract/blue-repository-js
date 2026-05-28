export const DocumentSection = {
  description:
    "Marker contract that identifies a logical section of a document and links that section to the fields and contracts\nresponsible for it. A section gives humans, agents, and change-management workflows a coherent unit of meaning such as\npayment setup, shipping details, consent terms, participant configuration, or embedded-order handling.\n\n`title` and `summary` describe the section in user-facing terms. `relatedFields` lists absolute document pointers for\nstate fields covered by the section. `relatedContracts` lists same-scope contract keys that implement, enforce, or\naffect the section. Section-aware workflows use this information to group proposed contract changes, validate that\ncontract edits belong to the right section, and present changes for review.\n\nDocument Section is metadata with runtime relevance only for workflows that understand it. It is also identity-bearing\ndocument content. Changing a section's title, summary, fields, or related contracts changes what the document says\nabout its own structure and review surface.\n",
  name: 'Document Section',
  relatedContracts: {
    description:
      'Contract keys in the same scope that implement or affect the section.',
    itemType: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
    type: {
      blueId: '6aehfNAxHLC1PHHoDr3tYtFH3RWNbiWdFancJ1bypXEY',
    },
  },
  relatedFields: {
    description:
      'Absolute JSON Pointer paths of fields covered by this section.',
    itemType: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
    type: {
      blueId: '6aehfNAxHLC1PHHoDr3tYtFH3RWNbiWdFancJ1bypXEY',
    },
  },
  summary: {
    description:
      "Brief functional summary of the section's purpose and behavior.",
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
  title: {
    description: 'Short, human-readable title shown in UI summaries.',
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
  type: {
    blueId: '7QACj919YMRvFCTELCf6jfQTp41RVhtHdE6bPazLUZQ6',
  },
} as const;
