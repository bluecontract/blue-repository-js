export const timelineEntry = {
  actor: {
    description: 'Who created this entry',
    type: {
      blueId: '3HHc1g5hMLhddtHvxyHCAFJxtruwGCc951GKEoUiY7W4',
    },
  },
  description: 'Represents a single entry in a timeline.',
  message: {
    description: 'Message',
  },
  name: 'Timeline Entry',
  prevEntry: {
    description: 'Previous entry',
  },
  timeline: {
    description: 'Timeline this entry belongs to',
    type: {
      blueId: 'C7TsyShrDryZ121B2EJMKD9ui1ozmvTfGUkquRKkSvAP',
    },
  },
  timestamp: {
    description: 'Timestamp of the timeline entry',
    type: {
      blueId: 'DHmxTkFbXePZHCHCYmQr2dSzcNLcryFVjXVHkdQrrZr8',
    },
  },
} as const;
