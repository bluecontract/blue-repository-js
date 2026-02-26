export const PaymentMandateChargeAttemptState = {
  amountMinor: {
    description: 'Requested amount in minor currency units.',
    type: {
      blueId: '5WNMiV9Knz63B4dVY5JtMyh3FB4FSGqv7ceScvuapdE1',
    },
  },
  authorizationReason: {
    description: 'Optional authorization rejection reason.',
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
  authorizationRespondedAt: {
    description: 'Timestamp of authorization decision response.',
    type: {
      blueId: 'GQaGqFxHDz64L1c9QkCbz52ths6bMVtpHnw4QDngzQYs',
    },
  },
  authorizationStatus: {
    description: 'Authorization decision status ("approved" | "rejected").',
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
  authorizedAmountMinor: {
    description:
      'Authorized amount reserved against mandate capacity for this attempt.',
    type: {
      blueId: '5WNMiV9Knz63B4dVY5JtMyh3FB4FSGqv7ceScvuapdE1',
    },
  },
  capturedDeltaMinor: {
    description: 'Captured delta applied for accepted settlement.',
    type: {
      blueId: '5WNMiV9Knz63B4dVY5JtMyh3FB4FSGqv7ceScvuapdE1',
    },
  },
  chargeMode: {
    description:
      'Requested charge mode ("authorize_only" | "authorize_and_capture").',
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
  counterpartyId: {
    description:
      'Counterparty identifier interpreted according to counterpartyType.',
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
  counterpartyType: {
    description:
      'Counterparty identifier type ("merchantId" | "customerId" | "accountNumber").',
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
  currency: {
    description: 'Requested currency.',
    type: {
      blueId: 'CBnZ7aaNetj9KEqXpUWj5jvjKbmviLivP98T2EiyxiYc',
    },
  },
  description:
    'Stateful record for a single charge attempt tracked by Payment Mandate.',
  holdId: {
    description: 'Optional hold id associated with settlement.',
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
  lastSettlementProcessingStatus: {
    description:
      'Mandate processing status for last settlement ("accepted" | "rejected").',
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
  lastSettlementRequestStatus: {
    description:
      'Last settlement request status received from bank ("succeeded" | "failed").',
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
  name: 'Payment Mandate Charge Attempt State',
  reservedDeltaMinor: {
    description: 'Reserved delta applied for accepted settlement.',
    type: {
      blueId: '5WNMiV9Knz63B4dVY5JtMyh3FB4FSGqv7ceScvuapdE1',
    },
  },
  settled: {
    description: 'Whether mandate accepted settlement for this attempt.',
    type: {
      blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
    },
  },
  settlementReason: {
    description: 'Optional settlement rejection/info reason.',
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
  settlementRespondedAt: {
    description: 'Timestamp of last settlement processing response.',
    type: {
      blueId: 'GQaGqFxHDz64L1c9QkCbz52ths6bMVtpHnw4QDngzQYs',
    },
  },
  transactionId: {
    description: 'Optional transaction id associated with settlement.',
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
} as const;
