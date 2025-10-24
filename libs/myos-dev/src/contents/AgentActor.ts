export const agentActor = {
  agentRef: {
    description: 'Which Worker acted',
    type: {
      blueId: '8jCUCDoX7LUd5UaktCD7i4xxEheCWFQDkTbbNTEdYVZ9',
    },
  },
  delegation: {
    description: 'The grant document/session used',
    type: {
      blueId: '8jCUCDoX7LUd5UaktCD7i4xxEheCWFQDkTbbNTEdYVZ9',
    },
  },
  name: 'Agent Actor',
  onBehalfOf: {
    description: "The principal's accountId",
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
  type: {
    blueId: '3HHc1g5hMLhddtHvxyHCAFJxtruwGCc951GKEoUiY7W4',
  },
} as const;
