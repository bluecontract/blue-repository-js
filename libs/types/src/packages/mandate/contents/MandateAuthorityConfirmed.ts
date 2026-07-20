export const MandateAuthorityConfirmed: Record<string, unknown> = {
  description:
    'Authoritative Message emitted when the inherited mandate workflow\nsuccessfully confirms the declared authority relationship.\n\nConfirmation does not necessarily activate the mandate. When immediate\nactivation is enabled, the same operation also emits Mandate Activated for\nthe inherited activation workflow to apply.\n',
  name: 'Mandate Authority Confirmed',
  timestampUs: {
    description:
      'Authority-confirmation timestamp derived from the root causal Timeline Entry.\n',
    schema: {
      required: true,
    },
    type: {
      blueId: 'E2LM6qgzWG9ttagq2xTmiZkgYEAgkYedFCmU9v7NnVEq',
    },
  },
  type: {
    blueId: '768MxgQEHnLSkedHWHtjj43mAjH361Zf6pKZgVxi5po3',
  },
};
