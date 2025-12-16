export const AgentActor = {
  "name": "Agent Actor",
  "type": {
    "blueId": "CN5efWVizJbRsMCw8YWRfT2q9vM9XfeGDN9wFvYcvMnQ"
  },
  "onBehalfOf": {
    "type": {
      "blueId": "DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K"
    },
    "description": "The principal's accountId"
  },
  "agentRef": {
    "type": {
      "blueId": "8jCUCDoX7LUd5UaktCD7i4xxEheCWFQDkTbbNTEdYVZ9"
    },
    "description": "Which Worker acted"
  },
  "delegation": {
    "type": {
      "blueId": "8jCUCDoX7LUd5UaktCD7i4xxEheCWFQDkTbbNTEdYVZ9"
    },
    "description": "The grant document/session used"
  }
} as const;
