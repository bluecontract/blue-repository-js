export const APICall = {
  apiKeyId: {
    description: 'Identifier of the API credential used for the request.',
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
  description:
    'Source specialization describing a programmatic API request. An API Call source means the Timeline Provider or event\nsource received the action through an API credential or programmatic integration rather than an interactive browser\nsession. This distinction is important because many policies allow programmatic requests for low-risk or automated\ntasks but require an interactive principal actor for high-risk operations.\n\nThe `apiKeyId` identifies the credential, integration, or client registration used for the request. It may be opaque to\nthird parties, but it should be meaningful to the provider and account owner for audit, revocation, and incident\ninvestigation. A provider-specific API Call subtype may include additional fields such as client application,\nauthentication strength, IP/session metadata, signing key reference, or delegation scope.\n\nAPI Call describes the transport/source of the request, not the actor category. A programmatic request may still be\nattributed to a Principal Actor if the credential is treated as direct principal control, or to an Agent Actor if the\nprovider recognizes the caller as delegated automation. Actor Policy may combine both dimensions.\n',
  name: 'API Call',
  type: {
    blueId: '52ECLkcYGohcQEaora7hAbd5ve7Uz85DjE2nEARr55Lk',
  },
} as const;
