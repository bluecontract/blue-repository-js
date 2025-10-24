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
      blueId: 'HNd6PnN85yyLgR9cwEK3syx37QCqh7n9GeQwFPjj1TnN',
    },
  },
  timestamp: {
    description: 'Timestamp of the timeline entry',
    type: {
      blueId: '5WNMiV9Knz63B4dVY5JtMyh3FB4FSGqv7ceScvuapdE1',
    },
  },
} as const;
