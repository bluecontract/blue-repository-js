export const CardTransactionDetails = {
  authorizationCode: {
    description:
      'ISO 8583 DE38 Authorization Identification Response (authorization code).',
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
  description:
    'Card network identifiers used by processor and issuer to match the same transaction (ISO 8583).',
  name: 'Card Transaction Details',
  retrievalReferenceNumber: {
    description:
      'ISO 8583 DE37 Retrieval Reference Number (RRN) for cross-network traceability.',
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
  systemTraceAuditNumber: {
    description: 'ISO 8583 DE11 System Trace Audit Number (STAN).',
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
  transmissionDateTime: {
    description: 'ISO 8583 DE7 Transmission Date and Time (MMDDhhmmss).',
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
} as const;
