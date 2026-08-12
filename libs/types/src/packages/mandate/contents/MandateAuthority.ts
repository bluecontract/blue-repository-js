export const MandateAuthority: Record<string, unknown> = {
  actor: {
    description: 'Actor on whose behalf the containing actor claims to act.',
    schema: {
      required: true,
    },
    type: {
      blueId: 'GnMntk3hLvHEsZTBE8Gk7ytPBexj6jhBJHdaxnJYhEQ7',
    },
  },
  description:
    'Authority evidence backed by an initial Mandate/Mandate document. On a Timeline Entry, the containing actor claims to act on behalf of actor under that mandate. The initialMandateDocument value may be materialized inline or represented as an equivalent pure { blueId: ... } reference.\n',
  initialMandateDocument: {
    description:
      'Initial mandate document authorizing the represented authority relationship. A feeder or provider resolves the exact processed mandate state required for the relevant action timestamp.\n',
    schema: {
      required: true,
    },
  },
  name: 'Mandate Authority',
  type: {
    blueId: '5BrNKcZDq6q4UY1jQpjyeFjbTV6rxVKM9qNL5xzGMZRW',
  },
};
