export const CustomerConsentRevoked = {
  description:
    'Event indicating that a Customer Consent document has been revoked. It carries the revocation reason and timestamp\nsupplied by the revocation workflow. Observers should treat this as the domain-level signal that the grantee should no\nlonger rely on the consent, subject to whatever propagation and processing guarantees are provided by the surrounding\ntimelines and channels.\n\nThe event does not itself modify the consent document. The revoke workflow emits the event and applies the document\npatches that set consent status, revocation reason, and revocation time. This separation preserves auditability and\ndeterministic processor behavior.\n',
  name: 'Customer Consent Revoked',
  reason: {
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
  revokedAt: {
    type: {
      blueId: 'GQaGqFxHDz64L1c9QkCbz52ths6bMVtpHnw4QDngzQYs',
    },
  },
  type: {
    blueId: '7ugyHm8fpgvQx6pbLcW8cRNLBVDBExCp2iSYgd82ak6z',
  },
} as const;
