export const AgentActor: Record<string, unknown> = {
  description:
    "Actor specialization for a non-human, automated, delegated, or AI-assisted actor. An Agent Actor means the event\nsource attributes the action to automation operating on behalf of another actor rather than to the principal acting\ndirectly. This distinction is fundamental for safe automation: routine operations may be delegated to agents, while\nsensitive operations may require direct principal action.\n\nA Timeline Provider or event source is not expected to understand every Blue document that may later consume the\nentry, and it is not responsible for deciding whether the message is valid for a particular document. Its role is to\nauthenticate and authorize the party that appends to the timeline under the provider's own rules, record the actor\nattribution it can verify, preserve the entry, assign ordering information, and provide completeness/finality\nguarantees. A provider may verify that an agent has permission to append to a timeline or act for an account under a\ndelegated credential, but Blue documents independently enforce their own Actor Policy and operation rules.\n\nThe `onBehalfOf` field identifies the principal or actor whose authority is being used. Concrete agent types should\nadd fields that make the delegation auditable: agent identity, session reference, delegation document, allowed scope,\nissuing provider, revocation context, or model/runtime details where appropriate. The goal is not to pretend that the\nagent is a human; the goal is to make automation explicit, attributable, auditable, and policy-checkable.\n",
  name: 'Agent Actor',
  onBehalfOf: {
    description:
      'Actor on whose behalf this agent is acting. This should normally be a Principal Actor or provider-specific principal\nreference. It is an attribution field, not a standalone authorization grant. A document should still check its own\npolicies before accepting the requested operation.\n',
    type: {
      blueId: 'GnMntk3hLvHEsZTBE8Gk7ytPBexj6jhBJHdaxnJYhEQ7',
    },
  },
  type: {
    blueId: 'GnMntk3hLvHEsZTBE8Gk7ytPBexj6jhBJHdaxnJYhEQ7',
  },
};
