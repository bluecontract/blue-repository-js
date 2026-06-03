export const CustomerActionResponded: Record<string, unknown> = {
  actionLabel: {
    description:
      'Label of the selected action from the corresponding Customer Action Requested event.\n',
    type: {
      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
    },
  },
  description:
    "Event recording a customer's response to a previously requested action. It captures which action label was selected,\noptional input supplied by the customer, and the response time when available.\n\nThis event is not proof of authorization by itself. Actor and source attribution should come from the enclosing\nTimeline Entry or event source. Workflows should check Actor Policy when the response authorizes sensitive behavior.\n",
  input: {
    description:
      'Optional structured input supplied by the customer. Shape depends on the requested action.\n',
  },
  name: 'Customer Action Responded',
  respondedAt: {
    description:
      'Optional response timestamp in the provider/application time model.\n',
    type: {
      blueId: '47EN5A1B1ZXXdXMEoURVJquMSjdDuKFNDjMrkvVxoVJk',
    },
  },
  type: {
    blueId: 'AQqdPmtKmB5VNH4rEbeKcRxsVStTTbJhS4fVF8wiTZrk',
  },
};
