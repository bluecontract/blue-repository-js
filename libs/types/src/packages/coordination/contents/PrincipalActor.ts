export const PrincipalActor: Record<string, unknown> = {
  description:
    "Actor specialization for an action attributed directly to a principal: a person, organization, account owner, or\nother primary authority recognized by the event source. A Principal Actor means the provider is asserting that the\naction was performed under the principal's own authority, not by a delegated agent acting independently on the\nprincipal's behalf.\n\nThis type does not specify how the provider authenticated the principal. A concrete subtype can describe a browser\nsession, biometric challenge, API credential treated as direct principal control, hardware key, bank login, or\ngovernment identity proof. The important invariant is semantic attribution: when a Blue document asks whether an\noperation was performed by a principal, a Principal Actor or compatible subtype is the category it is checking.\n\nPrincipal Actor also does not automatically authorize every operation. A document may still require a particular\nsource, stronger authentication, a specific account, a particular organization role, or additional domain-specific\nconditions. This type supplies the actor category used by those policies.\n",
  name: 'Principal Actor',
  type: {
    blueId: 'GnMntk3hLvHEsZTBE8Gk7ytPBexj6jhBJHdaxnJYhEQ7',
  },
};
