export const BrowserSession: Record<string, unknown> = {
  description:
    'Source specialization for an authenticated interactive browser, mobile, or user-interface session. Browser Session\nrecords that the event source observed the request through an interactive session rather than a background API\ncredential. It is often combined with Principal Actor when a document wants evidence of direct human involvement.\n\nBrowser Session does not, by itself, guarantee a particular authentication strength. A concrete subtype may define\npassword login, two-factor authentication, biometric verification, hardware key challenge, regulated strong customer\nauthentication, or other assurance details. Documents that require those stronger conditions should check the\nconcrete subtype or additional fields, not merely the base Browser Session type.\n\nA Timeline Provider or event source authenticates the session and records the source. Blue documents later use that\nsource attribution to decide whether a requested operation meets their policy. The provider is infrastructure: it\nvalidates the session and appends the entry; it does not need to understand the business meaning of the message.\n',
  name: 'Browser Session',
  type: {
    blueId: 'Qm35f9xFUH84i745uPMj5jjMX1oCCG79aeSfHViipxG',
  },
  uiSessionNonce: {
    description:
      'Provider-generated identifier for the UI session or interaction context. It may be opaque outside the provider, but\nit should be sufficient for provider-side audit, incident review, revocation, and correlation with authentication\nrecords. It MUST NOT contain secret session credentials.\n',
    type: {
      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
    },
  },
};
