export const StatusChange = {
  description:
    "Event indicating that a document's application-level status has changed. The `status` field carries the new\nCoordination/Document Status node. Status Change is useful for notifying participants, timelines, embedded parent\nscopes, or external observers when a workflow transitions between pending, active, completed, failed, or custom status\nstates.\n\nThis event is descriptive. It does not itself change status; a workflow must still apply the corresponding Update\nDocument patch if the document state should change. Emitting Status Change alongside a patch creates an auditable event\nthat mirrors the state transition.\n",
  name: 'Status Change',
  status: {
    description: 'The new status node.',
    type: {
      blueId: 'QHoUCCVhepZWQnSo9VfZCJWbSwyA9TuT65tBZMVtnRX',
    },
  },
  type: {
    blueId: '7ugyHm8fpgvQx6pbLcW8cRNLBVDBExCp2iSYgd82ak6z',
  },
} as const;
