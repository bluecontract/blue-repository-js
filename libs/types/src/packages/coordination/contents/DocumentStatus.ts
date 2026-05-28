export const DocumentStatus = {
  description:
    "Base type for document lifecycle/status indicators used by coordination documents. A Document Status communicates the\nhigh-level state of a document to participants, user interfaces, agents, and workflows. It is not the same as the Blue\nContracts processor's internal lifecycle markers; it is application-level state chosen by the document author.\n\nThe `mode` field gives a coarse lifecycle phase. `pending` means the document is waiting for a prerequisite or initial\naction. `active` means the document is currently operating and processing events. `terminated` means the application\nprocess represented by the document has reached a final conclusion. Concrete statuses refine these categories with\ndomain-specific meaning.\n\nStatus nodes are Blue content and can be used in patches, events, and workflow conditions. A document may use custom\nstatus types as long as downstream workflows and participants understand them.\n",
  mode: {
    description:
      "Defines the high-level phase of the document's lifecycle. Must be one of:\n  pending: The document is waiting for a pre-condition before its core logic begins.\n  active: The document is in its main operational phase, actively processing events.\n  terminated: The document has reached a final, conclusive state.\n",
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
  name: 'Document Status',
} as const;
