export const agentActor = {
  agentRef: {
    description: 'Which Worker acted',
    type: {
      blueId: 'AEACcwsUfmNSemtyrbauz4P42wkYvb6xVjxLjxt83c7q',
    },
  },
  delegation: {
    description: 'The grant document/session used',
    type: {
      blueId: 'AEACcwsUfmNSemtyrbauz4P42wkYvb6xVjxLjxt83c7q',
    },
  },
  name: 'Agent Actor',
  onBehalfOf: {
    description: "The principal's accountId",
    type: {
      blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
    },
  },
  type: {
    blueId: '3HHc1g5hMLhddtHvxyHCAFJxtruwGCc951GKEoUiY7W4',
  },
} as const;
