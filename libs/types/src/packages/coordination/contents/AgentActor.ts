export const AgentActor = {
  description:
    'Actor specialization representing a non-human, delegated, automated, or AI-driven actor acting under authority granted\nby another actor. An Agent Actor is not the principal; it is an automation participant operating on behalf of a\nprincipal according to delegation rules maintained by a Timeline Provider, identity provider, platform, or other trust\nanchor. This distinction is critical for safe AI-agent participation: the document can allow routine operations to be\nautomated while still requiring principal authorization for high-risk operations.\n\nThe `onBehalfOf` field identifies the actor whose authority the agent is using. Concrete agent types should add\nidentity-bearing fields describing the agent, the delegation document or grant, the permitted scope of action, the\nprovider that verified the delegation, and any session or execution context useful for audit. A document processor or\nactor policy can then classify the event as delegated automation and decide whether the specific operation is allowed.\n\nAgent Actor does not imply that every action by the agent is valid. The Timeline Provider is expected to reject agent\nentries outside the delegation it recognizes, and Blue documents may independently enforce stricter actor policies. The\nvalue of this type is verifiable attribution: observers can see that an action was automated, trace the principal on\nwhose behalf it was taken, and inspect the delegation chain without pretending the agent was the principal.\n',
  name: 'Agent Actor',
  onBehalfOf: {
    description: 'Actor whose authority this agent is using.',
    type: {
      blueId: 'CFPWz2TX7a1xq6xZYnx93Cu7MqEdMzumr3Zgnx6TrVtd',
    },
  },
  type: {
    blueId: 'CFPWz2TX7a1xq6xZYnx93Cu7MqEdMzumr3Zgnx6TrVtd',
  },
} as const;
