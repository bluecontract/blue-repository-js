export const CardTransactionDetails: Record<string, unknown> = {
  authorizationCode: {
    description:
      'ISO 8583 DE38 Authorization Identification Response (authorization code).',
    type: {
      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
    },
  },
  description:
    'Card network identifiers used by processor and issuer to match the same transaction (ISO 8583).',
  name: 'Card Transaction Details',
  retrievalReferenceNumber: {
    description:
      'ISO 8583 DE37 Retrieval Reference Number (RRN) for cross-network traceability.',
    type: {
      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
    },
  },
  systemTraceAuditNumber: {
    description: 'ISO 8583 DE11 System Trace Audit Number (STAN).',
    type: {
      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
    },
  },
  transmissionDateTime: {
    description: 'ISO 8583 DE7 Transmission Date and Time (MMDDhhmmss).',
    type: {
      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
    },
  },
};
