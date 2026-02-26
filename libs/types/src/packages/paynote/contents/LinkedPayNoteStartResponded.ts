export const LinkedPayNoteStartResponded = {
  description:
    'Decision response for starting a linked PayNote after successful charge.',
  name: 'Linked PayNote Start Responded',
  reason: {
    description: 'Optional rejection reason.',
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
  status: {
    description: 'Decision status ("accepted" | "rejected").',
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
  type: {
    blueId: '36epvrpVHZLjapbeZsNodz2NDnm7XZeNZcnkWHgkP1pp',
  },
} as const;
