export const AgentActor = {
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
    blueId: 'CFPWz2TX7a1xq6xZYnx93Cu7MqEdMzumr3Zgnx6TrVtd',
  },
} as const;
