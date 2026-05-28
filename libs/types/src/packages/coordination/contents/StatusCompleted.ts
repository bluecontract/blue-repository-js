export const StatusCompleted = {
  description:
    "Document Status specialization for successful completion. Status Completed means the document's application-level goal\nhas been achieved and the process represented by the document has finished as expected.\n\nThis is an application status, not necessarily a Blue Contracts termination marker. A document may be completed while\nthe processor still permits further events, or a workflow may also choose to terminate the scope. The exact runtime\nconsequence is defined by the document's contracts.\n",
  mode: {
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
    value: 'terminated',
  },
  name: 'Status Completed',
  type: {
    blueId: 'QHoUCCVhepZWQnSo9VfZCJWbSwyA9TuT65tBZMVtnRX',
  },
} as const;
