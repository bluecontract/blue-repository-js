export const BrowserSession = {
  description:
    'Source specialization describing an authenticated interactive browser or UI session. A Browser Session source means the\nevent source observed the action through a user-facing session rather than a background API call. This source is often\nused together with Principal Actor to express that the principal acted through an interactive interface and may have\nsatisfied UI-specific authentication requirements.\n\nThe `uiSessionNonce` is an opaque provider-generated identifier for the session. It is not meant to reveal private UI\ndetails to every observer, but it gives the provider and authorized auditors a stable handle for tracing the login,\nauthentication method, device binding, challenge, or user-interface flow associated with the action. Provider-specific\nsubtypes may add strong-authentication indicators, biometric proof references, device information, or regulatory\nassurance levels.\n\nBrowser Session is passive provenance content. It does not prove by itself that a policy is satisfied; supported\npolicies and operation runtimes interpret it together with the actor type and the operation being requested.\n',
  name: 'Browser Session',
  type: {
    blueId: '52ECLkcYGohcQEaora7hAbd5ve7Uz85DjE2nEARr55Lk',
  },
  uiSessionNonce: {
    description: 'Opaque nonce identifying the UI session.',
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
} as const;
